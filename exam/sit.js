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
    thS: 'Subject', thP: 'Points', thR: 'Correct', back: 'Back to my exam', voidNow: 'This paper was cancelled because the time you were disconnected passed 20% of the exam time. You can take the exam again at no extra cost from your exam page.'
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
    thS: '과목', thP: '득점', thR: '맞힌 문항', back: '「내 응시」로', voidNow: '끊긴 시간이 시험 시간의 20%를 넘어 이 시험지는 무효가 되었습니다. 「내 응시」 화면에서 추가 비용 없이 다시 볼 수 있습니다.'
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
  var st = { sit: null, ans: {}, seq: 0, off: 0, dirty: false, saving: false, last: 0, done: false, tick: null, ping: null, retry: null };
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
    $('preWhat').textContent = T.what(T.grade[r.grade] || r.grade, T.part[part], p.n, p.min);
    var ul = $('preRules'); ul.textContent = '';
    T.rules.forEach(function (x) { ul.appendChild(el('li', null, typeof x === 'function' ? x(Math.round(p.min * 0.2)) : x)); });
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
    if (loc && loc.seq > (sit.seq || 0)) { st.ans = loc.ans || {}; st.seq = loc.seq; st.dirty = true; } else { st.ans = sit.answers || {}; st.seq = sit.seq || 0; }
    $('startedAt').textContent = T.startedAt(kst(sit.started));
    draw(); show('exam', true); tick(); $('saveState').textContent = st.dirty ? T.saving : T.saved;
    st.tick = setInterval(tick, 1000); st.ping = setInterval(function () { save(true); }, 20000);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) save(true); });
    if (st.dirty) save(false);
  }
  function draw() {
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
  function marks() {
    var n = st.sit.items.length, a = 0;
    st.sit.items.forEach(function (it) { var on = !!st.ans[it.i]; if (on) a++; var nb = $('nb' + it.i); if (nb) nb.className = 'nb' + (on ? ' on' : ''); });
    $('progress').textContent = T.answered(a, n);
    return n - a;
  }
  function pick(i, a) {
    if (st.done) return;
    st.ans[i] = a; st.seq++; st.dirty = true;
    store(lkey(), JSON.stringify({ seq: st.seq, ans: st.ans })); marks(); $('saveState').textContent = T.saving;
    clearTimeout(st.retry); st.retry = setTimeout(function () { save(false); }, 600);
  }
  function save(isPing) {
    if (st.done || st.saving) return;
    if (isPing && !st.dirty && Date.now() - st.last < 15000) return;
    st.saving = true; var seq = st.seq, body = { part: part };
    if (st.dirty) { body.q = seq; body.answers = st.ans; }
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
      call('/api/sit/finish', { part: part, q: st.seq + 1, answers: st.ans }).then(function (j) {
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
    var hr = el('tr'); [T.thS, T.thP, T.thR].forEach(function (x) { hr.appendChild(el('th', null, x)); }); tb.appendChild(hr);
    (r.subs || []).forEach(function (x) { var tr = el('tr'); tr.appendChild(el('td', null, (sit.names || {})[x.s] || x.s)); tr.appendChild(el('td', 'v', x.got + ' / ' + x.max)); tr.appendChild(el('td', null, x.right + ' / ' + x.n)); tb.appendChild(tr); });
    $('resNote').textContent = r.official ? '' : T.resNote; $('backLink').hidden = false;
    show('result', true);
  }
  $('submitBtn').textContent = T.submit; $('confirmYes').textContent = T.yes; $('confirmNo').textContent = T.no; $('backLink').textContent = T.back;
  $('submitBtn').addEventListener('click', function () { $('confirmText').textContent = T.confirm(marks()); show('confirmBox', true); $('confirmBox').scrollIntoView({ block: 'center' }); });
  $('confirmNo').addEventListener('click', function () { show('confirmBox', false); });
  $('confirmYes').addEventListener('click', function () { finish(); });
  init();
})();
