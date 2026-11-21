// IAPQB 시험 화면 — 2026-11-21. 시간·정답·점수는 서버만 안다. 이 파일은 문항을 보여 주고 고른 답을 보낸다.
// 답은 고를 때마다 서버에 저장하고(번호 q가 커지는 순서만 받음), 보내기 전 답은 이 기기에도 잠깐 둔다(새로 고침·끊김 대비).
(function () {
  'use strict';
  var API = 'https://exam.iapqb.workers.dev';
  var EN = document.documentElement.lang === 'en';
  var root = document.getElementById('sitRoot'); if (!root) return;
  var T = EN ? {
    part: { W: 'Written exam', R: 'Practical exam' }, grade: { F: 'Foundation', A: 'Associate', P: 'Professional' },
    none: 'No registration is saved on this device. Open the exam link from your email first.', auth: 'This link is not valid any more. Get a new exam link on the registration page.',
    notOpen: 'You can start from 19 December 2026, 10:00 Korea time.', notReady: 'This exam screen is being prepared.', expired: 'The deadline to start has passed.', cant: 'This exam cannot be started now.',
    what: function (g, p, n, m) { return g + ' ' + p + ' · ' + n + ' questions · ' + m + ' minutes'; },
    rules: ['The server keeps the time. Once you start, the clock does not stop, even if you close this page.', 'Your answer is saved each time you choose one. If you are disconnected, come back to this page (the same link) within the time and carry on.',
      function (g) { return 'If the time you are disconnected adds up to more than 20% of the exam time (' + g + ' min), that paper is cancelled and you can take the exam again at no extra cost.'; },
      'You may use generative AI, dictionaries and translators. Sending or posting questions or answers to anyone, or photographing or recording them, is misconduct.', 'Your automatic score appears as soon as you finish. The official result is posted on your exam page within 5 working days.'],
    agree: 'I have read the refund rule: the exam counts as started when I press “Start” and the first question appears, and after that there is no refund even if I stop part way (Notice No. 2026-1, section 6).',
    start: 'Start', starting: 'Preparing your paper…', voided: 'Your previous paper was cancelled because the time you were disconnected passed 20% of the exam time. You can start again at no extra cost.',
    left: 'Time left ', answered: function (a, n) { return 'Answered ' + a + '/' + n; }, saved: 'Saved', saving: 'Saving…', waiting: 'Not saved yet — checking the connection', startedAt: function (s) { return 'Started (server time): ' + s + ' Korea time'; },
    sec: function (i, name, n, pt) { return 'Subject ' + i + ' · ' + name + ' — ' + n + ' questions · ' + pt + ' points each'; }, lbl: ['A', 'B', 'C', 'D'],
    submit: 'Submit answers', confirm: function (u) { return (u ? u + ' question(s) are unanswered. ' : '') + 'Submit your answers now? You cannot change them afterwards.'; }, yes: 'Submit', no: 'Keep working',
    submitting: 'Submitting…', timeUp: 'Time is up. Your saved answers are being scored.',
    resTitle: function (s) { return 'Automatic score: ' + s + ' / 100'; }, resPass: function (m) { return 'Provisional: above the pass mark (' + m + ' or more, and at least 40% in each subject).'; },
    resFail: function (m) { return 'Provisional: below the pass mark (' + m + ' or more, and at least 40% in each subject).'; },
    resOfficial: function (p) { return 'Official result: ' + (p ? 'Pass' : 'Fail'); }, resNote: 'The official result will be posted on your exam page and emailed to you within 5 working days of the exam.',
    thS: 'Subject', thP: 'Points', thR: 'Correct', back: 'Back to my exam',
    insH: 'Principles to take from each subject', insWeak: ' (look here first)',
    ins: { D1: 'Sounding certain and being right are separate things. For work that must not be wrong, such as current facts, legal judgements and exact counts, treat the AI answer as a starting point and close it with an independent original source.',
      D2: 'A good prompt shrinks the blanks the model would fill by guessing. Fix the audience, length, permitted values and output format and results become repeatable; keep the material separate from the instructions and hidden instructions inside documents lose their hold.',
      D3: 'AI summaries and conversions go wrong where they look tidy. First check that totals, duplicates, date formats and states such as “not decided yet” match the original.',
      D6: 'Decide as if pasting means the data has left the company. Put only material that is already public or made up into outside tools, and send everything else through approved tools and approval steps.',
      '업무 자동화': 'Automation turns a repeated judgement into a rule. Write the rule down first and set the point where a person sees the exceptions, and it stays under control as it scales.',
      '산출물 검증': 'Verification means comparison more than re-reading. Match numbers to the source data, claims to the supporting documents and format to the requirements, one by one, and treat any sentence with nothing to match as unsupported.',
      '업무 자동화 설계': 'Design around the flow more than the tool. Decide where inputs come from, where a person checks and where a failure goes back to, and the results hold even when you swap the AI.',
      '산출물 검증 체계 운영': 'A system that leaves the same check every time beats one careful check. Fix the check items and criteria, and feed every missed error back into the items.',
      '인공지능 위험 관리': 'Split risks by likelihood and by size of harm. Handle frequent small mistakes with checks, and rare large incidents with prior approval and blocking.',
      '성과 측정과 개선': 'Improvement starts from a measurable baseline. Record before-and-after comparisons in the same unit, including the time spent checking, and you can decide whether to continue, fix or stop.' },
    whatR: function (g, p, n, m) { return g + ' ' + p + ' · ' + n + ' tasks · ' + m + ' minutes'; },
    ruleR: 'At the end of the paper, fill in the AI use record: the tools you used, your main prompts, and for each sub-question whether you used AI (Examination Terms Article 14(2)). It is not used for marking.',
    task: function (i, n, title) { return 'Task ' + i + ' of ' + n + (title ? ' — ' + title : ''); },
    one: 'Choose one', pickN: function (k) { return 'Choose exactly ' + k; }, spotsN: function (k) { return k ? 'There are ' + k + ' error spots' : 'Choose every error spot'; }, nth: function (i) { return 'Step ' + i; }, num: 'Number', blank: '—',
    flag: 'AI use for this question', flags: { none: 'I did not use AI', asis: 'I used the AI answer as it was', edit: 'I changed the AI answer' },
    logH: 'AI use record (Examination Terms Article 14(2))', logP: 'Write down what you used. This record is kept encrypted and is not used for marking. It is used to look into misconduct and, for registrations from 21 December 2026, also to improve questions and for statistics and research that identify no one (Examination Terms Articles 14 and 16). Do not include anyone’s personal data or your employer’s confidential information.',
    tools: 'Tools used', toolNames: { chatgpt: 'ChatGPT', gemini: 'Gemini', claude: 'Claude', copilot: 'Microsoft Copilot', perplexity: 'Perplexity', clova: 'CLOVA X', other: 'Other' }, otherPh: 'Other tool name', noAi: 'I did not use any AI tool',
    ver: 'Model or version (e.g. GPT-5, Gemini 2.5 Pro)', prompts: 'Main prompts (up to 6,000 characters)',
    confirmR: function (u, l) { return (u ? u + ' sub-question(s) are unanswered. ' : '') + (l ? '' : 'Your AI use record is empty — leaving it out can be treated as misconduct (Notice, section 10). ') + 'Submit your answers now? You cannot change them afterwards.'; }, voidNow: 'This paper was cancelled because the time you were disconnected passed 20% of the exam time. You can take the exam again at no extra cost from your exam page.'
  } : {
    part: { W: '필기', R: '실기' }, grade: { F: 'Foundation', A: 'Associate', P: 'Professional' },
    none: '이 기기에 저장된 접수가 없습니다. 먼저 메일의 「내 응시」 링크를 여세요.', auth: '이 링크는 더 쓸 수 없습니다. 접수 화면에서 새 「내 응시」 링크를 받으세요.',
    notOpen: '2026년 12월 19일 10:00(한국 시각)부터 시작할 수 있습니다.', notReady: '이 시험 화면은 준비 중입니다.', expired: '응시 기한이 지났습니다.', cant: '지금은 이 시험을 시작할 수 없습니다.',
    what: function (g, p, n, m) { return g + ' ' + p + ' · ' + n + '문항 · ' + m + '분'; },
    rules: ['시간은 서버가 잽니다. 시작하면 시계는 멈추지 않고, 이 화면을 닫아도 시간은 흐릅니다.', '답은 고를 때마다 저장됩니다. 끊기면 남은 시간 안에 이 화면(같은 링크)으로 다시 들어와 이어서 풀면 됩니다.',
      function (g) { return '끊긴 시간이 모두 합쳐 시험 시간의 20%(' + g + '분)를 넘으면 그 시험지는 무효가 되고, 추가 비용 없이 다시 볼 수 있습니다.'; },
      '생성형 인공지능·사전·번역기를 써도 됩니다. 문항이나 답을 사람에게 보내거나 게시하는 것, 촬영·녹화하는 것은 부정행위입니다.', '끝나면 자동 채점 점수가 바로 보이고, 공식 성적은 5영업일 안에 「내 응시」 화면에 게시합니다.'],
    agree: '환불 기준을 확인했습니다 — 「시험 시작」을 눌러 첫 문항이 화면에 뜨면 응시가 시작된 것으로 보며, 그 뒤에는 중간에 그만두어도 환불하지 않습니다(시행 공고 제2026-1호 6.).',
    start: '시험 시작', starting: '시험지를 만드는 중…', voided: '끊긴 시간이 시험 시간의 20%를 넘어 앞 시험지는 무효가 되었습니다. 추가 비용 없이 다시 시작할 수 있습니다.',
    left: '남은 시간 ', answered: function (a, n) { return '답한 문항 ' + a + '/' + n; }, saved: '저장됨', saving: '저장 중…', waiting: '아직 저장 안 됨 — 연결을 확인하는 중', startedAt: function (s) { return '응시 시작(서버 기록): ' + s + ' (한국 시각)'; },
    sec: function (i, name, n, pt) { return '과목 ' + i + ' · ' + name + ' — ' + n + '문항 · 문항당 ' + pt + '점'; }, lbl: ['①', '②', '③', '④'],
    submit: '답안 제출', confirm: function (u) { return (u ? '답하지 않은 문항이 ' + u + '개 있습니다. ' : '') + '지금 제출할까요? 제출하면 답을 바꿀 수 없습니다.'; }, yes: '제출', no: '계속 풀기',
    submitting: '제출하는 중…', timeUp: '시간이 끝났습니다. 저장된 답으로 채점합니다.',
    resTitle: function (s) { return '자동 채점 점수: ' + s + '점 / 100점'; }, resPass: function (m) { return '잠정 판정: 합격 기준(' + m + '점 이상, 과목마다 40% 이상)을 넘었습니다.'; },
    resFail: function (m) { return '잠정 판정: 합격 기준(' + m + '점 이상, 과목마다 40% 이상)에 못 미쳤습니다.'; },
    resOfficial: function (p) { return '공식 성적: ' + (p ? '합격' : '불합격'); }, resNote: '공식 성적은 응시일부터 5영업일 안에 「내 응시」 화면에 게시하고 메일로도 알려 드립니다.',
    thS: '과목', thP: '득점', thR: '맞힌 문항', back: '「내 응시」로',
    insH: '과목별로 가져갈 원리', insWeak: ' (먼저 볼 곳)',
    ins: { D1: 'AI가 확신 있게 말하는 것과 맞는 것은 별개입니다. 최신 사실·법적 판단·정확한 셈처럼 틀리면 안 되는 일은 AI의 답을 출발점으로만 쓰고, 독립된 원출처로 닫습니다.',
      D2: '좋은 지시문은 모델이 짐작으로 채울 빈칸을 줄입니다. 대상·분량·써도 되는 값·출력 형식을 정해 두면 결과가 재현되고, 처리할 자료와 지시를 나눠 두면 문서 속 숨은 지시에 휘둘리지 않습니다.',
      D3: 'AI가 만든 요약과 변환은 깔끔해 보이는 곳에서 틀립니다. 합계 행·중복·날짜 형식, 그리고 「아직 미정」 같은 상태가 원문과 같은지부터 맞춰 봅니다.',
      D6: '붙여 넣는 순간 회사 밖으로 나간다고 보고 판단합니다. 이미 공개됐거나 처음부터 가짜인 자료만 외부 도구에 넣고, 나머지는 승인된 도구와 승인 절차를 거칩니다.',
      '업무 자동화': '자동화는 반복되는 판단을 규칙으로 바꾸는 일입니다. 규칙을 먼저 글로 적고, 예외를 사람이 받아 보는 지점을 정해 두어야 규모가 커져도 통제됩니다.',
      '산출물 검증': '검증은 다시 읽기보다 대조에 가깝습니다. 숫자는 원자료로, 주장은 근거 문서로, 형식은 요구 조건으로 하나씩 맞춰 보고, 맞춰 볼 짝이 없는 문장은 근거 없음으로 처리합니다.',
      '업무 자동화 설계': '설계의 단위는 도구보다 흐름입니다. 입력이 어디서 오고, 어디서 사람이 확인하고, 실패하면 어디로 돌아가는지 정한 흐름이어야 AI를 바꿔 끼워도 결과가 유지됩니다.',
      '산출물 검증 체계 운영': '한 번의 꼼꼼한 확인보다 매번 같은 확인이 남는 체계가 강합니다. 확인 항목과 기준을 고정하고, 놓친 오류는 항목으로 되돌려 체계를 고칩니다.',
      '인공지능 위험 관리': '위험은 일어날 가능성과 피해의 크기로 나눠 봅니다. 자주 일어나는 작은 실수는 점검으로, 드물지만 큰 사고는 사전 승인과 차단으로 다룹니다.',
      '성과 측정과 개선': '개선은 측정할 수 있는 기준선에서 시작합니다. 확인 시간까지 넣은 전후 비교를 같은 단위로 적어 두어야 계속할지, 고칠지, 멈출지를 판단할 수 있습니다.' },
    whatR: function (g, p, n, m) { return g + ' ' + p + ' · ' + n + '과제 · ' + m + '분'; },
    ruleR: '시험지 끝의 사용 기록 칸에 쓴 도구, 주요 프롬프트, 소문항마다 AI를 썼는지를 적어 냅니다(응시 약관 제14조 제2항). 채점에는 반영하지 않습니다.',
    task: function (i, n, title) { return '과제 ' + i + '/' + n + (title ? ' — ' + title : ''); },
    one: '하나를 고르시오', pickN: function (k) { return '정확히 ' + k + '개를 고르시오'; }, spotsN: function (k) { return k ? '오류 지점은 ' + k + '개입니다' : '오류 지점을 모두 고르시오'; }, nth: function (i) { return i + '번째'; }, num: '숫자', blank: '—',
    flag: '이 소문항의 AI 사용', flags: { none: 'AI 안 씀', asis: 'AI 답을 그대로 씀', edit: 'AI 답을 고쳐 씀' },
    logH: '사용 기록(응시 약관 제14조 제2항)', logP: '쓴 것을 그대로 적어 주세요. 이 기록은 암호화해 보관하며 채점에는 반영하지 않습니다. 부정행위 조사에 쓰고, 2026년 12월 21일부터 접수한 분의 기록은 문항 개선과 개인을 알아볼 수 없게 처리한 통계·연구에도 씁니다(응시 약관 제14조·제16조). 다른 사람의 개인정보나 회사 기밀은 넣지 마세요.',
    tools: '쓴 도구', toolNames: { chatgpt: 'ChatGPT', gemini: 'Gemini', claude: 'Claude', copilot: 'Microsoft Copilot', perplexity: 'Perplexity', clova: 'CLOVA X', other: '기타' }, otherPh: '기타 도구 이름', noAi: 'AI 도구를 쓰지 않았습니다',
    ver: '모델·버전(예: GPT-5, Gemini 2.5 Pro)', prompts: '주요 프롬프트(6,000자까지)',
    confirmR: function (u, l) { return (u ? '답하지 않은 소문항이 ' + u + '개 있습니다. ' : '') + (l ? '' : '사용 기록이 비어 있습니다 — 내지 않으면 부정행위로 볼 수 있습니다(공고 10.). ') + '지금 제출할까요? 제출하면 답을 바꿀 수 없습니다.'; }, voidNow: '끊긴 시간이 시험 시간의 20%를 넘어 이 시험지는 무효가 되었습니다. 「내 응시」 화면에서 추가 비용 없이 다시 볼 수 있습니다.'
  };
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function show(id, on) { $(id).hidden = !on; }
  function msg(text, bad) { var m = $('sitMsg'); m.textContent = text; m.className = 'msg' + (bad ? ' bad' : ''); m.hidden = !text; }
  function store(k, v) { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { /* 저장 못 하면 서버만 */ } }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function call(path, data) {
    return fetch(API + path, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + sess }, body: JSON.stringify(data || {}) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { j.status = r.status; return j; }); });
  }
  function kst(ms) { return new Date(ms + 9 * 3600000).toISOString().replace('T', ' ').slice(0, 19); }
  var sess = load('iapqb_exam'), qp = new URLSearchParams(location.search), part = (qp.get('p') || 'W').toUpperCase();
  if (part !== 'W' && part !== 'R') part = 'W';
  var st = { sit: null, ans: {}, log: null, seq: 0, off: 0, dirty: false, saving: false, last: 0, done: false, tick: null, ping: null, retry: null };
  var R = part === 'R';
  function blankLog() { return { tools: [], none: false, other: '', ver: '', prompts: '', flags: {} }; }
  function lkey() { return 'iapqb_sit_' + (sess || '').slice(0, 12) + '_' + part + '_' + (st.sit ? st.sit.n : 0); }

  function init() {
    if (!sess) { msg(T.none, true); return; }
    call('/api/me').then(function (j) {
      if (!j.ok) { msg(j.error === 'auth' ? T.auth : T.cant, true); return; }
      var r = j.reg, p = (r.parts || []).filter(function (x) { return x.k === part; })[0];
      if (!p) { msg(T.cant, true); return; }
      $('sitTitle').textContent = (T.grade[r.grade] || r.grade) + ' ' + T.part[part];
      if (p.state === 'live' || p.state === 'done') { resume(); return; }
      if (!p.can_start) { msg(!p.ready ? T.notReady : (r.status === 'expired' || (r.deadline && Date.now() > r.deadline)) ? T.expired : (r.exam_open && Date.now() < r.exam_open) ? T.notOpen : T.cant, true); return; }
      pre(r, p);
    }).catch(function () { msg(T.waiting, true); setTimeout(init, 5000); });
  }
  function pre(r, p) {
    $('preWhat').textContent = R ? T.whatR(T.grade[r.grade] || r.grade, T.part[part], p.tasks, p.min) : T.what(T.grade[r.grade] || r.grade, T.part[part], p.n, p.min);
    var ul = $('preRules'); ul.textContent = '';
    T.rules.forEach(function (x) { ul.appendChild(el('li', null, typeof x === 'function' ? x(Math.round(p.min * 0.2)) : x)); });
    if (R) ul.appendChild(el('li', null, T.ruleR));
    if (p.voids) msg(T.voided);
    $('startAgreeTxt').textContent = T.agree;
    var ag = $('startAgree'), b = $('startBtn'); b.textContent = T.start;
    ag.addEventListener('change', function () { b.disabled = !ag.checked; });
    b.addEventListener('click', function () {
      if (!ag.checked) return; b.disabled = true; msg(T.starting);
      call('/api/sit/start', { part: part, agree: true }).then(function (j) {
        if (j.ok && j.sit) { msg(''); show('pre', false); begin(j.sit); }
        else if (j.error === 'started') resume();
        else { b.disabled = false; msg(j.error === 'not_open' ? T.notOpen : j.error === 'expired' ? T.expired : j.error === 'not_ready' ? T.notReady : T.cant, true); }
      }).catch(function () { b.disabled = false; msg(T.waiting, true); });
    });
    show('pre', true);
  }
  function resume() {
    call('/api/sit/state', { part: part }).then(function (j) {
      if (!j.ok || !j.sit) { msg(j.error === 'auth' ? T.auth : T.cant, true); return; }
      if (j.sit.state === 'live') begin(j.sit); else if (j.sit.state === 'done') result(j.sit); else msg(T.voidNow, true);
    }).catch(function () { msg(T.waiting, true); setTimeout(resume, 5000); });
  }
  function begin(sit) {
    st.sit = sit; st.off = sit.now - Date.now();
    var loc = null; try { loc = JSON.parse(load(lkey()) || 'null'); } catch (e) { loc = null; }
    if (loc && loc.seq > (sit.seq || 0)) { st.ans = loc.ans || {}; st.log = loc.log || null; st.seq = loc.seq; st.dirty = true; } else { st.ans = sit.answers || {}; st.log = sit.ulog || null; st.seq = sit.seq || 0; }
    if (R) { st.log = st.log || blankLog(); st.log.flags = st.log.flags || {}; }
    $('startedAt').textContent = T.startedAt(kst(sit.started));
    draw(); show('exam', true); tick(); $('saveState').textContent = st.dirty ? T.saving : T.saved;
    st.tick = setInterval(tick, 1000); st.ping = setInterval(function () { save(true); }, 20000);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) save(true); });
    if (st.dirty) save(false);
  }
  function draw() {
    if (R) return drawR();
    var sit = st.sit, qs = $('qs'), nav = $('nav'), bp = sit.bp || [], pts = {}, cnt = {}; qs.textContent = ''; nav.textContent = '';
    bp.forEach(function (x) { pts[x[0]] = x[2]; cnt[x[0]] = x[1]; });
    var lastS = null, secN = 0;
    sit.items.forEach(function (it) {
      if (it.s !== lastS) { secN++; lastS = it.s; qs.appendChild(el('h2', 'sec', T.sec(secN, (sit.names || {})[it.s] || it.s, cnt[it.s] || '', pts[it.s] || ''))); }
      var box = el('section', 'q'); box.id = 'q' + it.i;
      var h = el('h3', null, (it.i + 1) + '.'); box.appendChild(h);
      box.appendChild(el('p', 'stem', it.stem));
      it.opts.forEach(function (o, k) {
        var lab = el('label', 'opt'), r = document.createElement('input'); r.type = 'radio'; r.name = 'a' + it.i; r.value = String(k + 1);
        if (Number(st.ans[it.i]) === k + 1) r.checked = true;
        r.addEventListener('change', function () { pick(it.i, k + 1); });
        lab.appendChild(r); lab.appendChild(el('span', null, T.lbl[k] + ' ' + o)); box.appendChild(lab);
      });
      qs.appendChild(box);
      var nb = el('button', 'nb', String(it.i + 1)); nb.type = 'button'; nb.id = 'nb' + it.i; nb.setAttribute('aria-label', String(it.i + 1));
      nb.addEventListener('click', function () { var t = $('q' + it.i); if (t) t.scrollIntoView({ block: 'start' }); });
      nav.appendChild(nb);
    });
    marks();
  }
  // ── 실기: 과제지(본원 문제은행에서 만든 HTML) + 소문항 형식별 입력 + 소문항별 AI 사용 + 사용 기록 ──
  function opt(v, text) { var o = document.createElement('option'); o.value = v; o.textContent = text; return o; }
  function sel(list, cur, first) { var s = document.createElement('select'); s.appendChild(opt('', first || T.blank)); list.forEach(function (x) { var o = opt(x, x); if (x === cur) o.selected = true; s.appendChild(o); }); return s; }
  function checks(list, cur, onc) {
    var w = el('div', 'chk'); list.forEach(function (x) {
      var lab = el('label', 'opt in'), c = document.createElement('input'); c.type = 'checkbox'; c.value = x; c.checked = (cur || []).indexOf(x) >= 0;
      c.addEventListener('change', function () { var v = []; w.querySelectorAll('input:checked').forEach(function (y) { v.push(y.value); }); onc(v); });
      lab.appendChild(c); lab.appendChild(el('span', null, x)); w.appendChild(lab);
    }); return w;
  }
  function widget(sp) {
    var w = el('div', 'wid'), cur = st.ans[sp.id], set = function (v) { pick(sp.id, v); };
    if (sp.format === '선택형') {
      w.appendChild(el('p', 'muted', T.one));
      for (var k = 1; k <= (sp.n || 4); k++) (function (k) {
        var lab = el('label', 'opt in'), r = document.createElement('input'); r.type = 'radio'; r.name = 'r_' + sp.id; r.value = String(k); r.checked = Number(cur) === k;
        r.addEventListener('change', function () { set(k); }); lab.appendChild(r); lab.appendChild(el('span', null, String(k))); w.appendChild(lab);
      })(k);
    } else if (sp.format === '복수선택형') { w.appendChild(el('p', 'muted', T.pickN(sp.k))); w.appendChild(checks(sp.options || [], cur, set)); }
    else if (sp.format === '오류식별형') { w.appendChild(el('p', 'muted', T.spotsN(sp.k))); w.appendChild(checks(sp.spots || [], cur, set)); }
    else if (sp.format === '순서배열형') {
      var arr = Array.isArray(cur) ? cur.slice() : [], row = el('div', 'ord');
      (sp.elements || []).forEach(function (_, i) {
        var lab = el('label', 'ordi'); lab.appendChild(el('span', null, T.nth(i + 1)));
        var s = sel(sp.elements, arr[i]); s.addEventListener('change', function () { arr[i] = s.value; var v = (sp.elements || []).map(function (_, j) { return arr[j] || ''; }); set(v); });
        lab.appendChild(s); row.appendChild(lab);
      }); w.appendChild(row);
    } else if (sp.format === '수치입력형') {
      var lab = el('label', 'numi'), inp = document.createElement('input'); inp.type = 'text'; inp.inputMode = 'decimal'; inp.maxLength = 40; inp.value = cur != null ? String(cur) : ''; inp.setAttribute('aria-label', T.num);
      inp.addEventListener('input', function () { set(inp.value.trim()); }); lab.appendChild(inp); if (sp.unit) lab.appendChild(el('span', null, ' ' + sp.unit)); w.appendChild(lab);
    } else if (sp.format === '매칭형') {
      var o = cur && typeof cur === 'object' ? Object.assign({}, cur) : {}, g = el('div', 'pairs');
      (sp.pairs || []).forEach(function (k) {
        var lab = el('label', 'pair'); lab.appendChild(el('span', null, k + ' '));
        var s = sel(sp.choices || [], o[k]); s.addEventListener('change', function () { if (s.value) o[k] = s.value; else delete o[k]; set(Object.assign({}, o)); });
        lab.appendChild(s); g.appendChild(lab);
      }); w.appendChild(g);
    }
    return w;
  }
  function flagSel(sp) {
    var lab = el('label', 'flag'); lab.appendChild(el('span', null, T.flag + ' '));
    var s = document.createElement('select'); s.appendChild(opt('', T.blank)); ['none', 'asis', 'edit'].forEach(function (k) { var o = opt(k, T.flags[k]); if (st.log.flags[sp.id] === k) o.selected = true; s.appendChild(o); });
    s.addEventListener('change', function () { if (s.value) st.log.flags[sp.id] = s.value; else delete st.log.flags[sp.id]; logChanged(); });
    lab.appendChild(s); return lab;
  }
  function logBox() {
    var L = st.log, f = el('fieldset', 'logbox'); f.id = 'logBox'; f.appendChild(el('legend', null, T.logH)); f.appendChild(el('p', 'muted', T.logP));
    f.appendChild(el('p', 'lh', T.tools));
    var tw = el('div', 'chk'); ['chatgpt', 'gemini', 'claude', 'copilot', 'perplexity', 'clova', 'other'].forEach(function (k) {
      var lab = el('label', 'opt in'), c = document.createElement('input'); c.type = 'checkbox'; c.value = k; c.checked = L.tools.indexOf(k) >= 0;
      c.addEventListener('change', function () { L.tools = []; tw.querySelectorAll('input:checked').forEach(function (y) { L.tools.push(y.value); }); if (L.tools.length) { L.none = false; no.checked = false; } logChanged(); });
      lab.appendChild(c); lab.appendChild(el('span', null, T.toolNames[k])); tw.appendChild(lab);
    }); f.appendChild(tw);
    var other = document.createElement('input'); other.type = 'text'; other.maxLength = 80; other.placeholder = T.otherPh; other.value = L.other || ''; other.addEventListener('input', function () { L.other = other.value; logChanged(1500); }); f.appendChild(other);
    var nl = el('label', 'opt'), no = document.createElement('input'); no.type = 'checkbox'; no.checked = !!L.none;
    no.addEventListener('change', function () { L.none = no.checked; if (no.checked) { L.tools = []; tw.querySelectorAll('input').forEach(function (y) { y.checked = false; }); } logChanged(); });
    nl.appendChild(no); nl.appendChild(el('span', null, T.noAi)); f.appendChild(nl);
    f.appendChild(el('label', null, T.ver)); var ver = document.createElement('input'); ver.type = 'text'; ver.maxLength = 160; ver.value = L.ver || ''; ver.addEventListener('input', function () { L.ver = ver.value; logChanged(1500); }); f.appendChild(ver);
    f.appendChild(el('label', null, T.prompts)); var ta = document.createElement('textarea'); ta.maxLength = 6000; ta.value = L.prompts || ''; ta.addEventListener('input', function () { L.prompts = ta.value; logChanged(1500); }); f.appendChild(ta);
    return f;
  }
  function drawR() {
    var sit = st.sit, qs = $('qs'), nav = $('nav'); qs.textContent = ''; nav.textContent = '';
    sit.tasks.forEach(function (t, ti) {
      var sec = el('section', 'task'); sec.id = 't' + ti;
      sec.appendChild(el('h2', 'sec', T.task(ti + 1, sit.tasks.length, t.title)));
      var body = el('div', 'tbody'); body.innerHTML = t.html;  // 본원 문제은행 과제지(가져올 때 태그를 걸러 저장). 응시자가 낸 글은 여기에 넣지 않는다.
      body.querySelectorAll('table').forEach(function (tb) { var w = el('div', 'tw'); tb.parentNode.insertBefore(w, tb); w.appendChild(tb); });
      sec.appendChild(body); qs.appendChild(sec);
      t.spec.forEach(function (sp, k) {
        var slot = null; body.querySelectorAll('.ans').forEach(function (x) { if (x.getAttribute('data-item') === sp.id) slot = x; });
        if (!slot) { slot = el('div', 'ans'); body.appendChild(slot); }
        slot.id = 'q_' + sp.id; slot.appendChild(widget(sp)); slot.appendChild(flagSel(sp));
        var nb = el('button', 'nb', (ti + 1) + '-' + (k + 1)); nb.type = 'button'; nb.id = 'nb_' + sp.id; nb.setAttribute('aria-label', sp.id);
        nb.addEventListener('click', function () { var x = $('q_' + sp.id); if (x) x.scrollIntoView({ block: 'center' }); }); nav.appendChild(nb);
      });
    });
    qs.appendChild(logBox());
    marks();
  }
  function filled(v) { if (v == null || v === '') return false; if (Array.isArray(v)) return v.some(function (x) { return x; }); if (typeof v === 'object') return Object.keys(v).length > 0; return true; }
  function logFilled() { var L = st.log || {}; return !!(L.none || (L.tools || []).length); }
  function logChanged(wait) {
    if (st.done) return; st.seq++; st.dirty = true;
    store(lkey(), JSON.stringify({ seq: st.seq, ans: st.ans, log: st.log })); $('saveState').textContent = T.saving;
    clearTimeout(st.retry); st.retry = setTimeout(function () { save(false); }, wait || 600);
  }
  function marks() {
    if (R) {
      var all = [], a = 0; st.sit.tasks.forEach(function (t) { t.spec.forEach(function (sp) { all.push(sp.id); }); });
      all.forEach(function (id) { var on = filled(st.ans[id]); if (on) a++; var nb = $('nb_' + id); if (nb) nb.className = 'nb' + (on ? ' on' : ''); });
      $('progress').textContent = T.answered(a, all.length); return all.length - a;
    }
    var n = st.sit.items.length, a = 0;
    st.sit.items.forEach(function (it) { var on = !!st.ans[it.i]; if (on) a++; var nb = $('nb' + it.i); if (nb) nb.className = 'nb' + (on ? ' on' : ''); });
    $('progress').textContent = T.answered(a, n);
    return n - a;
  }
  function pick(i, a) {
    if (st.done) return;
    if (R && !filled(a)) delete st.ans[i]; else st.ans[i] = a;
    st.seq++; st.dirty = true;
    store(lkey(), JSON.stringify({ seq: st.seq, ans: st.ans, log: st.log })); marks(); $('saveState').textContent = T.saving;
    clearTimeout(st.retry); st.retry = setTimeout(function () { save(false); }, 600);
  }
  function save(isPing) {
    if (st.done || st.saving) return;
    if (isPing && !st.dirty && Date.now() - st.last < 15000) return;
    st.saving = true; var seq = st.seq, body = { part: part };
    if (st.dirty) { body.q = seq; body.answers = st.ans; if (R) body.ulog = st.log; }
    call('/api/sit/save', body).then(function (j) {
      st.saving = false; st.last = Date.now();
      if (j.ok) {
        st.off = j.now - Date.now();
        if (body.answers && seq === st.seq) { st.dirty = false; store(lkey(), null); }
        $('saveState').textContent = st.dirty ? T.saving : T.saved; if (st.dirty) { clearTimeout(st.retry); st.retry = setTimeout(function () { save(false); }, 600); }
        return;
      }
      if (j.error === 'void_gap') { stop(); store(lkey(), null); show('exam', false); msg(T.voidNow, true); $('backLink').hidden = false; return; }
      if (j.error === 'time' && j.sit) { stop(); store(lkey(), null); result(j.sit); return; }
      if (j.error === 'auth') { stop(); msg(T.auth, true); return; }
      $('saveState').textContent = T.waiting; clearTimeout(st.retry); st.retry = setTimeout(function () { save(false); }, 5000);
    }).catch(function () { st.saving = false; $('saveState').textContent = T.waiting; clearTimeout(st.retry); st.retry = setTimeout(function () { save(false); }, 5000); });
  }
  function tick() {
    var left = st.sit.ends - (Date.now() + st.off), s = Math.max(0, Math.ceil(left / 1000));
    $('timer').textContent = T.left + Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
    $('bar').className = 'bar' + (s <= 300 ? ' warn' : '');
    if (left <= 0 && !st.done) { msg(T.timeUp); finish(); }
  }
  function stop() { st.done = true; clearInterval(st.tick); clearInterval(st.ping); clearTimeout(st.retry); }
  function finish() {
    if (st.sending) return; st.sending = true; stop(); $('submitBtn').disabled = true; show('confirmBox', false);
    if (!$('sitMsg').textContent) msg(T.submitting);
    var go = function () {
      var fb = { part: part, q: st.seq + 1, answers: st.ans }; if (R) fb.ulog = st.log;
      call('/api/sit/finish', fb).then(function (j) {
        if (j.ok && j.sit && j.sit.state === 'done') { store(lkey(), null); result(j.sit); }
        else if (j.sit && j.sit.state === 'void') { show('exam', false); msg(T.voidNow, true); $('backLink').hidden = false; }
        else setTimeout(go, 5000);
      }).catch(function () { msg(T.waiting, true); setTimeout(go, 5000); });
    };
    go();
  }
  function result(sit) {
    var r = sit.result; show('exam', false); show('pre', false); msg('');
    $('resTitle').textContent = T.resTitle(r.score);
    $('resJudge').textContent = r.official ? T.resOfficial(r.pass) : (r.pass ? T.resPass(r.mark) : T.resFail(r.mark));
    var tb = $('resTable'); tb.textContent = '';
    var hr = el('tr'); (R ? [T.thS, T.thP] : [T.thS, T.thP, T.thR]).forEach(function (x) { hr.appendChild(el('th', null, x)); }); tb.appendChild(hr);
    (r.subs || []).forEach(function (x) { var tr = el('tr'); tr.appendChild(el('td', null, (sit.names || {})[x.s] || x.s)); tr.appendChild(el('td', 'v', x.got + ' / ' + x.max)); if (!R) tr.appendChild(el('td', null, x.right + ' / ' + x.n)); tb.appendChild(tr); });
    var box = $('resIns'); if (!box) { box = el('div'); box.id = 'resIns'; tb.parentNode.insertBefore(box, tb.nextSibling); } box.textContent = '';
    var insl = (r.subs || []).filter(function (x) { return T.ins[x.s]; });  // 과목마다 일에 옮길 원리 한 줄(문항 내용은 담지 않음), 60% 아래 과목은 먼저 볼 곳으로 표시
    if (insl.length) { box.appendChild(el('h3', null, T.insH)); insl.forEach(function (x) { var weak = x.max && x.got / x.max < 0.6, p = el('p', weak ? 'ins weak' : 'ins'); p.appendChild(el('b', null, ((sit.names || {})[x.s] || x.s) + (weak ? T.insWeak : '') + ': ')); p.appendChild(document.createTextNode(T.ins[x.s])); box.appendChild(p); }); }
    $('resNote').textContent = r.official ? '' : T.resNote; $('backLink').hidden = false;
    show('result', true);
  }
  $('submitBtn').textContent = T.submit; $('confirmYes').textContent = T.yes; $('confirmNo').textContent = T.no; $('backLink').textContent = T.back;
  $('submitBtn').addEventListener('click', function () { $('confirmText').textContent = R ? T.confirmR(marks(), logFilled()) : T.confirm(marks()); show('confirmBox', true); $('confirmBox').scrollIntoView({ block: 'center' }); });
  $('confirmNo').addEventListener('click', function () { show('confirmBox', false); });
  $('confirmYes').addEventListener('click', function () { finish(); });
  init();
})();
