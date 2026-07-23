# IAPQB AI 동향 자동 수집 — GitHub Actions에서 하루 3회 실행
# 원칙: 제목 + 짧은 발췌 + 출처·원문 링크만 게재 (저작권 안전 포스처). LLM·API 키 불필요 = 유지비 0.
import json, re, html, hashlib
from pathlib import Path
import feedparser

FEEDS = [
    ("Google News · AI",      "https://news.google.com/rss/search?q=%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5&hl=ko&gl=KR&ceid=KR:ko"),
    ("Google News · AI 규제", "https://news.google.com/rss/search?q=AI+%EA%B7%9C%EC%A0%9C+OR+AI+%EC%A0%80%EC%9E%91%EA%B6%8C&hl=ko&gl=KR&ceid=KR:ko"),
    ("Google News · AI 업무", "https://news.google.com/rss/search?q=%EC%83%9D%EC%84%B1%ED%98%95AI+%EC%97%85%EB%AC%B4+%ED%99%9C%EC%9A%A9&hl=ko&gl=KR&ceid=KR:ko"),
]
OUT = Path(__file__).resolve().parent.parent / "news.json"
MAX_KEEP = 60
PER_FEED = 8

def clean(s: str) -> str:
    s = html.unescape(re.sub(r"<[^>]+>", "", s or ""))
    return re.sub(r"\s+", " ", s).strip()

def norm_key(title: str) -> str:
    return hashlib.md5(re.sub(r"\W+", "", title.lower()).encode()).hexdigest()

def main():
    old = []
    if OUT.exists():
        try: old = json.loads(OUT.read_text(encoding="utf-8"))
        except Exception: old = []
    seen = {norm_key(x.get("title", "")) for x in old}
    fresh = []
    for source, url in FEEDS:
        try:
            fp = feedparser.parse(url)
            for e in fp.entries[:PER_FEED]:
                title = clean(getattr(e, "title", ""))
                if not title or norm_key(title) in seen:
                    continue
                seen.add(norm_key(title))
                # 구글뉴스 제목 꼬리 " - 매체명" → 매체명을 출처로 승격
                src = source
                m = re.search(r"\s-\s([^-]+)$", title)
                if m:
                    src, title = m.group(1).strip(), title[: m.start()].strip()
                summary = clean(getattr(e, "summary", ""))[:220]
                date = ""
                if getattr(e, "published_parsed", None):
                    t = e.published_parsed
                    date = f"{t.tm_year:04d}-{t.tm_mon:02d}-{t.tm_mday:02d}"
                fresh.append({"date": date, "title": title[:120], "source": src[:40],
                              "link": getattr(e, "link", ""), "summary": summary})
        except Exception as ex:
            print(f"[warn] {source}: {ex}")
    merged = (fresh + old)[:MAX_KEEP]
    OUT.write_text(json.dumps(merged, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"added {len(fresh)}, total {len(merged)}")

if __name__ == "__main__":
    main()
