// IAPQB 응시 화면(접수 · 내 응시) — 2026-11-20. 서버가 모든 것을 판정한다. 이 파일은 보여 주기만 한다.
(function () {
  'use strict';
  var API = 'https://exam.iapqb.workers.dev';
  var EN = document.documentElement.lang === 'en';
  var T = EN ? {
    sending: 'Sending…', sent: 'We sent a confirmation email. Open the link in it within 24 hours to finish registering. If it does not arrive in a few minutes, check your spam folder.',
    relinkSent: 'If that address has a registration, we have sent a new exam link to it.',
    err: { not_open: 'Registration is not open yet. It opens on 18 December 2026 at 10:00 Korea time for the notification list and on 19 December for everyone.', under14: 'Candidates under 14 cannot register online. Please email contact@iapqb.org.', consent: 'Please tick the required agreements.', birth: 'Please check your date of birth.', bad_request: 'Please check the fields.', rate: 'Too many requests. Please try again in a minute.', mail: 'We could not send the email. Please check the address and try again.', auth: 'This link is not valid any more. Ask for a new link below.', state: 'This step is not available now.', pay_unavailable: 'Payment is not open yet.', checkout: 'The payment page could not be opened. Please try again.', link: 'The link has expired or has already been used. Register again, or ask for a new exam link.' },
    st: { email: 'Waiting for email confirmation', elig: 'Waiting for the eligibility check (send your documents to contact@iapqb.org with your registration number)', ready: 'Ready to pay', paid: 'Paid — you can start the exam', started: 'Exam in progress', done: 'Finished', expired: 'Deadline passed', refunded: 'Refunded', void: 'Cancelled' },
    pay: 'Pay', paying: 'Opening the payment page…', ext: 'Extend once by 90 days', start: 'The exam screen opens on 19 December 2026.', checking: 'Checking your payment…', none: 'No registration is saved on this device. Open the link from your email, or ask for a new one below.', forget: 'Remove from this device', deadline: 'Start by', krw: ' KRW'
  } : {
    sending: '보내는 중…', sent: '확인 메일을 보냈습니다. 24시간 안에 메일의 링크를 눌러야 접수가 끝납니다. 몇 분 안에 오지 않으면 스팸함을 확인해 주세요.',
    relinkSent: '그 주소로 접수한 기록이 있으면 새 「내 응시」 링크를 보냈습니다.',
    err: { not_open: '아직 접수 전입니다. 2026년 12월 18일 10:00(알림 신청자), 19일 10:00(누구나)에 엽니다.', under14: '만 14세 미만은 온라인으로 접수할 수 없습니다. contact@iapqb.org로 문의해 주세요.', consent: '필수 동의 항목에 표시해 주세요.', birth: '생년월일을 확인해 주세요.', bad_request: '입력한 내용을 확인해 주세요.', rate: '요청이 많습니다. 1분 뒤 다시 해 주세요.', mail: '메일을 보내지 못했습니다. 주소를 확인하고 다시 해 주세요.', auth: '이 링크는 더 쓸 수 없습니다. 아래에서 새 링크를 받으세요.', state: '지금은 할 수 없는 단계입니다.', pay_unavailable: '아직 결제를 열지 않았습니다.', checkout: '결제 화면을 열지 못했습니다. 다시 해 주세요.', link: '링크가 만료되었거나 이미 쓰였습니다. 다시 접수하거나 새 「내 응시」 링크를 받으세요.' },
    st: { email: '전자우편 확인 대기', elig: '응시자격 서류 확인 대기(접수 번호를 적어 contact@iapqb.org로 서류를 보내 주세요)', ready: '결제 대기', paid: '결제 완료 — 응시할 수 있습니다', started: '응시 중', done: '응시 끝', expired: '응시 기한 지남', refunded: '환불됨', void: '취소됨' },
    pay: '결제하기', paying: '결제 화면을 여는 중…', ext: '한 번 90일 연장', start: '시험 화면은 2026년 12월 19일에 엽니다.', checking: '결제를 확인하는 중…', none: '이 기기에 저장된 접수가 없습니다. 메일의 링크를 열거나 아래에서 새 링크를 받으세요.', forget: '이 기기에서 지우기', deadline: '응시 기한', krw: '원'
  };
  function $(id) { return document.getElementById(id); }
  function msg(el, text, bad) { el.textContent = text; el.className = 'msg' + (bad ? ' bad' : ''); el.hidden = false; }
  function errText(j) { return (j && j.error && T.err[j.error]) || T.err.bad_request; }
  function call(path, data, sess) {
    var h = { 'Content-Type': 'application/json' }; if (sess) h.Authorization = 'Bearer ' + sess;
    return fetch(API + path, { method: 'POST', headers: h, body: JSON.stringify(data || {}) }).then(function (r) { return r.json().catch(function () { return { ok: false }; }); });
  }
  function store(k, v) { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { /* 저장 안 되면 링크로만 */ } }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  var q = new URLSearchParams(location.search);

  // ── 접수 화면 ──
  var form = $('regForm');
  if (form) {
    if (q.get('e') === 'link') msg($('regMsg'), T.err.link, true);
    var birth = $('birth'), guard = $('guardRow');
    var minorCheck = function () {
      var v = birth.value; if (!v) { guard.hidden = true; return; }
      var b = new Date(v + 'T00:00:00'), n = new Date(), a = n.getFullYear() - b.getFullYear();
      if (n.getMonth() < b.getMonth() || (n.getMonth() === b.getMonth() && n.getDate() < b.getDate())) a--;
      guard.hidden = !(a >= 14 && a < 19);
    };
    birth.addEventListener('change', minorCheck);
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var m = $('regMsg'), btn = $('regBtn'); btn.disabled = true; msg(m, T.sending);
      var g = form.querySelector('input[name=grade]:checked'), l = form.querySelector('input[name=lang]:checked');
      call('/api/reg', { name: $('name').value, birth: birth.value, phone: $('phone').value, email: $('email').value, grade: g ? g.value : '', lang: l ? l.value : (EN ? 'en' : 'ko'), k: q.get('k') || '',
        consent: { terms: $('cTerms').checked, privacy: $('cPriv').checked, guardian: $('cGuard').checked } })
        .then(function (j) { btn.disabled = false; if (j.ok) { form.reset(); guard.hidden = true; msg(m, T.sent); } else msg(m, errText(j), true); })
        .catch(function () { btn.disabled = false; msg(m, T.err.bad_request, true); });
    });
  }
  var rl = $('relinkForm');
  if (rl) rl.addEventListener('submit', function (ev) {
    ev.preventDefault(); var m = $('relinkMsg'); msg(m, T.sending);
    call('/api/relink', { email: $('relinkEmail').value }).then(function (j) { msg(m, j.ok ? T.relinkSent : errText(j), !j.ok); });
  });

  // ── 내 응시 화면 ──
  var box = $('myBox');
  if (box) {
    var h = location.hash.slice(1);
    if (/^IA[A-Z2-9]{10}\.[A-Za-z0-9_-]{20,64}$/.test(h)) { store('iapqb_exam', h); history.replaceState(null, '', location.pathname + location.search); }
    var sess = load('iapqb_exam') || (/^IA/.test(h) ? h : null);
    var m = $('myMsg');
    var render = function (r) {
      $('myId').textContent = r.id; $('myGrade').textContent = ({ F: 'Foundation', A: 'Associate', P: 'Professional' })[r.grade] || r.grade;
      $('myStatus').textContent = T.st[r.status] || r.status;
      $('myPrice').textContent = r.price.toLocaleString('ko-KR') + T.krw;
      $('myDeadline').textContent = r.deadline_kst ? r.deadline_kst + (r.extended ? (EN ? ' (extended)' : ' (연장함)') : '') : '—';
      $('payBtn').hidden = !r.can_pay; $('extBtn').hidden = !r.can_extend; $('startNote').hidden = r.status !== 'paid';
      box.hidden = false;
    };
    var refresh = function (tries) {
      if (!sess) { msg(m, T.none, true); return; }
      call('/api/me', {}, sess).then(function (j) {
        if (!j.ok) { msg(m, errText(j), true); if (j.error === 'auth') store('iapqb_exam', null); return; }
        render(j.reg);
        if (q.get('paid') === '1' && j.reg.status === 'ready' && tries > 0) { msg(m, T.checking); setTimeout(function () { refresh(tries - 1); }, 3000); } else if (m.textContent === T.checking) m.hidden = true;
      });
    };
    refresh(10);
    $('payBtn').addEventListener('click', function () {
      var b = this; b.disabled = true; msg(m, T.paying);
      call('/api/checkout', {}, sess).then(function (j) { b.disabled = false; if (j.ok && /^https:\/\//.test(j.checkout_url)) location.href = j.checkout_url; else msg(m, errText(j), true); });
    });
    $('extBtn').addEventListener('click', function () {
      call('/api/extend', {}, sess).then(function (j) { if (j.ok) render(j.reg); else msg(m, errText(j), true); });
    });
    $('forgetBtn').addEventListener('click', function () { store('iapqb_exam', null); sess = null; box.hidden = true; msg(m, T.none); });
  }
})();
