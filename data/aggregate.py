# -*- coding: utf-8 -*-
"""
IAPQB Scorecard 01 — reproduction script
Aggregates 2024 examination records for AI-related private qualifications in South Korea.

Input : 한국직업능력연구원_민간자격취득현황_20250908.csv
        (Korea Research Institute for Vocational Education and Training,
         "Private Qualification Acquisition Status", released 2025-09-08,
         downloaded from data.go.kr on 2026-08-12; 183,147 rows)
Output: ai_qualifications_2024.csv  (one row per qualification)
        summary.txt                 (counts reported in the scorecard)

Run:  python3 aggregate.py <input.csv> 2024
"""
import csv, collections, re, sys, io

KEYWORDS = r'인공지능|AI|A\.I|생성형|챗지피티|챗GPT|ChatGPT|프롬프트|머신러닝|딥러닝'
KW = re.compile(KEYWORDS, re.I)

def n(x):
    x = (x or '').strip().replace(',', '')
    return int(x) if x.lstrip('-').isdigit() else 0

def main(path, year):
    rows = list(csv.DictReader(io.open(path, encoding='utf-8-sig', newline='')))
    reg_all = {r['등록번호'] for r in rows}
    ai = {r['등록번호'] for r in rows if KW.search(r['자격명'])}

    agg = collections.defaultdict(lambda: [0, 0, '', ''])
    for r in rows:
        if r['등록번호'] in ai and r['검정연도'] == year:
            a = agg[r['등록번호']]
            a[0] += n(r['총응시자수']); a[1] += n(r['총취득자수'])
            a[2] = r['자격명']; a[3] = r['자격발급기관']

    live = {k: v for k, v in agg.items() if v[0] > 0}
    zero = {k: v for k, v in agg.items() if v[0] == 0}
    silent = ai - set(agg)

    # per-qualification output, sorted by candidates
    out = io.open('ai_qualifications_2024.csv', 'w', encoding='utf-8-sig', newline='')
    w = csv.writer(out)
    w.writerow(['registration_no','qualification_name','issuing_body',
                'candidates_2024','passers_2024','pass_rate_pct','status'])
    for k, v in sorted(agg.items(), key=lambda x: -x[1][0]):
        rate = round(v[1] / v[0] * 100, 1) if v[0] else ''
        w.writerow([k, v[2], v[3], v[0], v[1], rate,
                    'examined' if v[0] > 0 else 'reported_zero'])
    for k in sorted(silent):
        name = next(r['자격명'] for r in rows if r['등록번호'] == k)
        body = next(r['자격발급기관'] for r in rows if r['등록번호'] == k)
        w.writerow([k, name, body, '', '', '', 'no_record_for_year'])
    out.close()

    tot_c = sum(v[0] for v in live.values())
    tot_p = sum(v[1] for v in live.values())
    band = collections.Counter()
    for v in live.values():
        r = v[1] / v[0] * 100
        band['100%' if r >= 100 else '90-99%' if r >= 90 else '70-90%' if r >= 70 else '<70%'] += 1

    s = []
    s.append('rows_total\t%d' % len(rows))
    s.append('registration_numbers_total\t%d' % len(reg_all))
    s.append('ai_matched_qualifications\t%d' % len(ai))
    s.append('with_%s_row_examined\t%d' % (year, len(live)))
    s.append('with_%s_row_reported_zero\t%d' % (year, len(zero)))
    s.append('no_%s_row\t%d' % (year, len(silent)))
    s.append('candidates_total\t%d' % tot_c)
    s.append('passers_total\t%d' % tot_p)
    s.append('overall_pass_rate_pct\t%.1f' % (tot_p / tot_c * 100))
    s.append('under_100_candidates\t%d' % sum(1 for v in live.values() if v[0] < 100))
    for b in ['100%','90-99%','70-90%','<70%']:
        s.append('band_%s\t%d' % (b, band[b]))
    io.open('summary.txt','w',encoding='utf-8').write('\n'.join(s) + '\n')
    print('\n'.join(s))

if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else '한국직업능력연구원_민간자격취득현황_20250908.csv',
         sys.argv[2] if len(sys.argv) > 2 else '2024')
