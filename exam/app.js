// IAPQB 응시 화면(접수 · 내 응시) — 2026-11-20 · 2026-11-21 시험별 상태·환불 기준 확인. 2026-11-27 자격증 칸·링크드인 추가·자격 확인 창구. 서버가 모든 것을 판정한다. 이 파일은 보여 주기만 한다.
(function () {
  'use strict';
  var API = 'https://exam.iapqb.workers.dev';
  var EN = document.documentElement.lang === 'en';
  var T = EN ? {
    sending: 'Sending…', sent: 'We sent a confirmation email. Open the link in it within 24 hours to finish registering. If it does not arrive in a few minutes, check your spam folder.',
    relinkSent: 'If that address has a registration, we have sent a new exam link to it.',
    err: { look: 'Please check the registration number and access code.', not_open: 'Registration is not open yet. It opens on 18 December 2026 at 10:00 Korea time for the notification list and on 19 December for everyone.', under14: 'Candidates under 14 cannot register online. Please email contact@iapqb.org.', consent: 'Please tick the required agreements.', birth: 'Please check your date of birth.', bad_request: 'Please check the fields.', rate: 'Too many requests. Please try again in a minute.', rate_email: 'This email address has been used for several registrations today. Check your inbox and spam folder, or try again tomorrow.', busy: 'Registration is busy right now. Please try again in a few hours. If it keeps happening, write to contact@iapqb.org.', mail: 'We could not send the email. Please check the address and try again.', auth: 'This link is not valid any more. Ask for a new link below.', state: 'This step is not available now.', pay_unavailable: 'Payment is not open yet.', checkout: 'The payment page could not be opened. Please try again.', link: 'The link has expired or has already been used. Register again, or ask for a new exam link.', agree: 'Please tick the box to confirm the refund rule.', prio_only: 'On 18 December, registration is open only through the priority link in the notification email. Open that link, or register from 19 December at 10:00 Korea time.', started: 'The exam has already started, so it can no longer be cancelled.', not_ready: 'We are still preparing the exam papers for this grade and language, so payment is not open yet. You have not been charged. Once they are ready, you can pay on this page.' },
    st: { email: 'Waiting for email confirmation', elig: 'Waiting for the eligibility check (send your documents to contact@iapqb.org with your registration number)', ready: 'Ready to pay', paid: 'Paid — you can start the exam', started: 'Exam in progress', done: 'Finished', expired: 'Deadline passed', refunded: 'Refunded', void: 'Cancelled', cancel_req: 'Cancellation requested — refund in progress' },
    cBtnReady: 'Cancel registration', cBtnPaid: 'Cancel and get a full refund', cAskReady: 'Cancel this registration? This cannot be undone.',
    cAskPaid: 'Cancel this registration? We will refund the full fee to your payment method within 3 working days. This cannot be undone.', cYes: 'Cancel registration', cNo: 'Go back', cDone: 'Your cancellation has been received.',
    pay: 'Pay', paying: 'Opening the payment page…', ext: 'Extend once by 90 days', checking: 'Checking your payment…', none: 'No registration is saved on this device. Open the link from your email, or enter your registration number and access code below.', forget: 'Remove from this device', deadline: 'Start by', krw: ' KRW',
    part: { W: 'Written exam', R: 'Practical exam' }, qs: ' questions', tks: ' tasks', mins: ' min',
    pStart: 'Start the exam', pResume: 'Continue the exam', pLeft: function (m) { return 'About ' + m + ' min left'; },
    pOpenAt: 'You can start from 19 December 2026, 10:00 Korea time.', pNotReady: 'The practical exam screen is being prepared. It opens before exams begin on 19 December.',
    pVoid: 'Your previous paper was cancelled because the time you were disconnected passed 20% of the exam time. You can take the exam again at no extra cost.',
    pScore: function (s, m) { return 'Automatic score ' + s + ' / 100 (pass mark ' + m + ', and at least 40% in each subject)'; },
    pOfficial: function (s, p) { return 'Official result: ' + s + ' / 100 — ' + (p ? 'Pass' : 'Fail'); }, pPending: 'The official result will be posted here within 5 working days of the exam.',
    pExpired: 'The deadline to start has passed.'
  } : {
    sending: '보내는 중…', sent: '확인 메일을 보냈습니다. 24시간 안에 메일의 링크를 눌러야 접수가 끝납니다. 몇 분 안에 오지 않으면 스팸함을 확인해 주세요.',
    relinkSent: '그 주소로 접수한 기록이 있으면 새 「내 응시」 링크를 보냈습니다.',
    err: { look: '접수 번호와 접속 코드를 확인해 주세요.', not_open: '아직 접수 전입니다. 2026년 12월 18일 10:00(알림 신청자), 19일 10:00(누구나)에 엽니다.', under14: '만 14세 미만은 온라인으로 접수할 수 없습니다. contact@iapqb.org로 문의해 주세요.', consent: '필수 동의 항목에 표시해 주세요.', birth: '생년월일을 확인해 주세요.', bad_request: '입력한 내용을 확인해 주세요.', rate: '요청이 많습니다. 1분 뒤 다시 해 주세요.', rate_email: '이 주소로 오늘 여러 번 접수했습니다. 받은편지함과 스팸함을 확인하시거나 내일 다시 해 주세요.', busy: '지금 접수가 몰려 있습니다. 몇 시간 뒤 다시 해 주세요. 계속 안 되면 contact@iapqb.org로 알려 주세요.', mail: '메일을 보내지 못했습니다. 주소를 확인하고 다시 해 주세요.', auth: '이 링크는 더 쓸 수 없습니다. 아래에서 새 링크를 받으세요.', state: '지금은 할 수 없는 단계입니다.', pay_unavailable: '아직 결제를 열지 않았습니다.', checkout: '결제 화면을 열지 못했습니다. 다시 해 주세요.', link: '링크가 만료되었거나 이미 쓰였습니다. 다시 접수하거나 새 「내 응시」 링크를 받으세요.', agree: '환불 기준을 확인했다는 칸에 표시해 주세요.', prio_only: '12월 18일에는 알림 메일에 있는 우선 접수 링크로만 접수할 수 있습니다. 그 링크로 들어오시거나 19일 10:00(한국 시각)부터 접수해 주세요.', started: '이미 시험을 시작해 취소할 수 없습니다.', not_ready: '이 등급·언어의 시험지를 아직 준비하고 있어 결제를 열지 않았습니다. 결제 전이라 비용은 들지 않았습니다. 준비가 끝나면 이 화면에서 결제할 수 있습니다.' },
    st: { email: '전자우편 확인 대기', elig: '응시자격 서류 확인 대기(접수 번호를 적어 contact@iapqb.org로 서류를 보내 주세요)', ready: '결제 대기', paid: '결제 완료 — 응시할 수 있습니다', started: '응시 중', done: '응시 끝', expired: '응시 기한 지남', refunded: '환불됨', void: '취소됨', cancel_req: '취소 요청 — 환불 처리 중' },
    cBtnReady: '접수 취소', cBtnPaid: '응시 취소(전액 환불)', cAskReady: '접수를 취소할까요? 취소하면 되돌릴 수 없습니다.',
    cAskPaid: '응시를 취소할까요? 낸 응시료 전액을 3영업일 안에 결제한 수단으로 돌려드립니다. 취소하면 되돌릴 수 없습니다.', cYes: '취소하기', cNo: '돌아가기', cDone: '취소 요청을 받았습니다.',
    pay: '결제하기', paying: '결제 화면을 여는 중…', ext: '한 번 90일 연장', checking: '결제를 확인하는 중…', none: '이 기기에 저장된 접수가 없습니다. 메일의 링크를 열거나, 아래에 접수 번호와 접속 코드를 넣어 주세요.', forget: '이 기기에서 지우기', deadline: '응시 기한', krw: '원',
    part: { W: '필기', R: '실기' }, qs: '문항', tks: '과제', mins: '분',
    pStart: '시험 시작', pResume: '이어서 풀기', pLeft: function (m) { return '남은 시간 약 ' + m + '분'; },
    pOpenAt: '2026년 12월 19일 10:00(한국 시각)부터 시작할 수 있습니다.', pNotReady: '실기 시험 화면은 준비 중입니다. 12월 19일 응시 개시 전에 엽니다.',
    pVoid: '끊긴 시간이 시험 시간의 20%를 넘어 앞 시험지는 무효가 되었습니다. 추가 비용 없이 다시 볼 수 있습니다.',
    pScore: function (s, m) { return '자동 채점 ' + s + '점 / 100점 (합격 기준 ' + m + '점 이상, 과목마다 40% 이상)'; },
    pOfficial: function (s, p) { return '공식 성적 ' + s + '점 — ' + (p ? '합격' : '불합격'); }, pPending: '공식 성적은 응시일부터 5영업일 안에 이 화면에 게시합니다.',
    pExpired: '응시 기한이 지났습니다.'
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
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  var q = new URLSearchParams(location.search);
  // ── 자격증(2026-11-27): 「내 응시」 자격증 칸 · 링크드인 추가 · 자격 확인 창구가 같이 쓴다 ──
  var SITE = 'https://iapqb.org';
  var V = EN ? {
    st: { valid: 'Valid', expired: 'Expired', revoked: 'Revoked' },
    why: { fraud: 'misconduct', 'false': 'obtained by false or improper means', 'void': 'the exam it was based on was invalidated', other: 'other reasons' },
    test: 'This is a test record made to check the system. It is not a real qualification.', checking: 'Checking…',
    found: 'Verified — IAPQB issued this certificate and it is valid.', expired: 'IAPQB issued this certificate, but it has expired.', revoked: 'This certificate has been revoked.',
    none: 'Not verified. Check that you entered the certificate number and the issue date exactly as printed. If it still does not match, email contact@iapqb.org.',
    bad: 'Please enter the certificate number (for example CF2612-ABCDEF) and the issue date.', rate: 'Too many requests. Please try again in a minute.', err: 'We could not check this right now. Please try again.',
    rows: { status: 'Status', qual: 'Qualification', name: 'Name', id: 'Certificate No.', issued: 'Issued', expires: 'Valid until', lang: 'Exam language', revoked: 'Revoked on', why: 'Reason' },
    langs: { ko: 'Korean', en: 'English' }, until: '', copied: 'Copied', org: 'International AI Practice Qualification Board (IAPQB)',
    line: function (c, u) { return 'IAPQBCertifiedAppliedAI ' + c.grade_name + ' — IAPQB (registered private qualification, Republic of Korea, No. 2026-008253) · Certificate No. ' + c.id + ' · issued ' + c.issued + ' · verify: ' + u; }
  } : {
    st: { valid: '유효', expired: '만료', revoked: '취소됨' },
    why: { fraud: '부정행위', 'false': '거짓 또는 부정한 방법으로 취득', 'void': '근거가 된 시험의 무효', other: '그 밖의 사유' },
    test: '시스템 점검용으로 만든 기록이며 실제 자격이 아닙니다.', checking: '확인하는 중…',
    found: '확인되었습니다 — 본원이 발급한 자격증이며 지금 유효합니다.', expired: '본원이 발급한 자격증이지만 유효기간이 지났습니다.', revoked: '취소된 자격증입니다.',
    none: '확인되지 않았습니다. 자격증에 적힌 번호와 발급일을 그대로 넣었는지 확인해 주세요. 그래도 맞지 않으면 contact@iapqb.org로 문의해 주세요.',
    bad: '자격번호(예: CF2612-ABCDEF)와 발급일을 넣어 주세요.', rate: '요청이 많습니다. 1분 뒤 다시 해 주세요.', err: '지금 확인하지 못했습니다. 다시 해 주세요.',
    rows: { status: '상태', qual: '자격', name: '성명', id: '자격번호', issued: '발급일', expires: '유효기간', lang: '시험 언어', revoked: '취소일', why: '취소 사유' },
    langs: { ko: '한국어', en: '영어' }, until: '까지', copied: '복사했습니다', org: '국제AI실무자격검정원(IAPQB)',
    line: function (c, u) { return 'IAPQBCertifiedAppliedAI ' + c.grade_name + ' (등록민간자격 2026-008253, 국제AI실무자격검정원) · 자격번호 ' + c.id + ' · ' + c.issued + ' 발급 · 확인 ' + u; }
  };
  function verifyUrl(c) { return SITE + (EN ? '/en/verify/' : '/verify/') + '?id=' + encodeURIComponent(c.id) + '&d=' + encodeURIComponent(c.issued); }
  function liUrl(c, u) {  // 링크드인 Add to Profile(자격증): 회사 페이지가 없으므로 organizationName
    var p = [['startTask', 'CERTIFICATION_NAME'], ['name', 'IAPQBCertifiedAppliedAI ' + c.grade_name], ['organizationName', V.org],
      ['issueYear', c.issued.slice(0, 4)], ['issueMonth', String(Number(c.issued.slice(5, 7)))], ['expirationYear', c.expires.slice(0, 4)], ['expirationMonth', String(Number(c.expires.slice(5, 7)))],
      ['certUrl', u], ['certId', c.id]];
    return 'https://www.linkedin.com/profile/add?' + p.map(function (x) { return x[0] + '=' + encodeURIComponent(x[1]); }).join('&');
  }
  function copyText(text, btn) {
    var o = btn.textContent, done = function () { btn.textContent = V.copied; setTimeout(function () { btn.textContent = o; }, 1500); };
    var old = function () { var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'absolute'; ta.style.left = '-9999px'; document.body.appendChild(ta); ta.select(); try { if (document.execCommand('copy')) done(); } catch (e) { /* 직접 복사 */ } document.body.removeChild(ta); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, old); else old();
  }

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
    var m = $('myMsg'), agree = $('payAgree');
    var lf = $('lookForm'), showLook = function (on) { if (lf) lf.hidden = !on; };
    var renderParts = function (r) {
      var wrap = $('parts'); wrap.textContent = '';
      if (!r.parts || !(r.status === 'paid' || r.status === 'started' || r.status === 'done' || r.status === 'expired')) { wrap.hidden = true; return; }
      r.parts.forEach(function (p) {
        var c = el('div', 'part'); c.id = 'part' + p.k;
        c.appendChild(el('h3', null, T.part[p.k] + (p.n ? ' · ' + p.n + T.qs : '') + (p.tasks ? ' · ' + p.tasks + T.tks : '') + ' · ' + p.min + T.mins));
        if (p.voids && p.state === 'todo') c.appendChild(el('p', 'muted', T.pVoid));
        if (p.state === 'todo') {
          if (p.can_start) { var a = el('a', 'btn', T.pStart); a.href = 'sit.html?p=' + p.k; a.id = 'start' + p.k; c.appendChild(a); }
          else if (!p.ready) c.appendChild(el('p', 'muted', T.pNotReady));
          else if (r.status === 'expired' || (r.deadline && Date.now() > r.deadline)) c.appendChild(el('p', 'muted', T.pExpired));
          else if (r.exam_open && Date.now() < r.exam_open) c.appendChild(el('p', 'muted', T.pOpenAt));
        } else if (p.state === 'live') {
          var b = el('a', 'btn', T.pResume); b.href = 'sit.html?p=' + p.k; b.id = 'start' + p.k; c.appendChild(b);
          if (p.ends) c.appendChild(el('p', 'muted', T.pLeft(Math.max(0, Math.round((p.ends - Date.now()) / 60000)))));
        } else if (p.state === 'done' && p.result) {
          c.appendChild(el('p', 'v', p.result.official ? T.pOfficial(p.result.score, p.result.pass) : T.pScore(p.result.score, p.result.mark)));
          if (!p.result.official) c.appendChild(el('p', 'muted', T.pPending));
        }
        wrap.appendChild(c);
      });
      wrap.hidden = false;
    };
    var renderCert = function (c) {  // 공식 성적이 확정된 합격자에게만 서버가 cert를 준다
      var cb = $('certBox'); if (!cb) return;
      if (!c) { cb.hidden = true; return; }
      $('certId').textContent = c.id; $('certName').textContent = c.name || '—'; $('certIssued').textContent = c.issued || '—';
      $('certExpires').textContent = c.expires ? c.expires + V.until : '—';
      $('certStatus').textContent = (V.st[c.status] || c.status) + (c.status === 'revoked' && c.revoked ? ' (' + c.revoked + ')' : '');
      $('certTest').hidden = !c.test; $('certTest').textContent = c.test ? V.test : '';
      var live = c.status === 'valid'; $('certShare').hidden = !live;
      if (live) { var u = verifyUrl(c); $('certLi').href = liUrl(c, u); $('certUrl').href = u; $('certUrl').textContent = u; $('certLine').textContent = V.line(c, u); }
      cb.hidden = false;
    };
    var render = function (r) {
      $('myId').textContent = r.id; $('myGrade').textContent = ({ F: 'Foundation', A: 'Associate', P: 'Professional' })[r.grade] || r.grade;
      $('myStatus').textContent = T.st[r.status] || r.status;
      $('myPrice').textContent = r.price.toLocaleString('ko-KR') + T.krw;
      $('myDeadline').textContent = r.deadline_kst ? r.deadline_kst + (r.extended ? (EN ? ' (extended)' : ' (연장함)') : '') : '—';
      $('payBox').hidden = !r.can_pay; $('payBtn').disabled = !agree.checked;
      $('prepNote').hidden = !r.not_ready; $('prepNote').textContent = r.not_ready ? T.err.not_ready : '';
      $('extBtn').hidden = !r.can_extend; $('startNote').hidden = !(r.status === 'paid' || r.status === 'started');
      renderParts(r);
      renderCert(r.cert);
      $('cancelBox').hidden = !r.can_cancel; $('cancelConfirm').hidden = true;
      $('cancelBtn').textContent = r.status === 'paid' ? T.cBtnPaid : T.cBtnReady; $('cancelText').textContent = r.status === 'paid' ? T.cAskPaid : T.cAskReady;
      box.hidden = false;
    };
    agree.addEventListener('change', function () { $('payBtn').disabled = !agree.checked; });
    var refresh = function (tries) {
      if (!sess) { msg(m, T.none, true); showLook(true); return; }
      call('/api/me', {}, sess).then(function (j) {
        if (!j.ok) { msg(m, errText(j), true); if (j.error === 'auth') { store('iapqb_exam', null); showLook(true); } return; }
        render(j.reg); showLook(false);
        if (q.get('paid') === '1' && j.reg.status === 'ready' && tries > 0) { msg(m, T.checking); setTimeout(function () { refresh(tries - 1); }, 3000); } else if (m.textContent === T.checking) m.hidden = true;
      });
    };
    refresh(10);
    $('payBtn').addEventListener('click', function () {
      var b = this; if (!agree.checked) { msg(m, T.err.agree, true); return; }
      b.disabled = true; msg(m, T.paying);
      call('/api/checkout', { agree: true }, sess).then(function (j) { b.disabled = false; if (j.ok && /^https:\/\//.test(j.checkout_url)) location.href = j.checkout_url; else msg(m, errText(j), true); });
    });
    $('extBtn').addEventListener('click', function () {
      call('/api/extend', {}, sess).then(function (j) { if (j.ok) render(j.reg); else msg(m, errText(j), true); });
    });
    $('forgetBtn').addEventListener('click', function () { store('iapqb_exam', null); sess = null; box.hidden = true; msg(m, T.none); showLook(true); });
    if (lf) lf.addEventListener('submit', function (e) {  // 접수 번호 + 접속 코드(메일 링크의 마지막 부분)로 열기 = 비회원 조회
      e.preventDefault();
      var id = ($('lookId').value || '').replace(/\s+/g, '').toUpperCase(), code = ($('lookCode').value || '').replace(/\s+/g, '');
      if (code.indexOf('#') >= 0) code = code.slice(code.indexOf('#') + 1);
      if (/^IA[A-Z2-9]{10}\./.test(code)) code = code.slice(13);
      var v = id + '.' + code;
      if (!/^IA[A-Z2-9]{10}\.[A-Za-z0-9_-]{20,64}$/.test(v)) { msg(m, T.err.look, true); return; }
      call('/api/me', {}, v).then(function (j) {
        if (!j.ok) { msg(m, j.error === 'auth' ? T.err.look : errText(j), true); return; }
        store('iapqb_exam', v); sess = v; m.hidden = true; render(j.reg); showLook(false);
      });
    });
    $('certUrlCopy').addEventListener('click', function () { copyText($('certUrl').textContent, this); });
    $('certLineCopy').addEventListener('click', function () { copyText($('certLine').textContent, this); });
    $('cancelYes').textContent = T.cYes; $('cancelNo').textContent = T.cNo;
    $('cancelBtn').addEventListener('click', function () { $('cancelConfirm').hidden = false; });
    $('cancelNo').addEventListener('click', function () { $('cancelConfirm').hidden = true; });
    $('cancelYes').addEventListener('click', function () {
      var b = this; b.disabled = true;
      call('/api/cancel', { agree: true }, sess).then(function (j) { b.disabled = false; if (j.ok) { render(j.reg); msg(m, T.cDone); } else msg(m, errText(j), true); });
    });
  }

  // ── 자격 확인 창구(GOV-002 제21조②): 번호 + 발급일이 둘 다 맞아야 답한다(D-143) ──
  var vf = $('verifyForm');
  if (vf) {
    var vId = $('vId'), vDate = $('vDate'), vMsg = $('vMsg'), vOut = $('vOut'), vT = $('vTable');
    var row = function (k, v) { var tr = el('tr'); tr.appendChild(el('th', null, V.rows[k])); tr.appendChild(el('td', 'v', v)); vT.appendChild(tr); };
    var check = function () {
      var id = (vId.value || '').replace(/\s+/g, '').toUpperCase(), d = vDate.value || '';
      vOut.hidden = true; vT.textContent = '';
      if (!/^C[FAP]\d{4}-[A-Z2-9]{6}$/.test(id) || !/^\d{4}-\d{2}-\d{2}$/.test(d)) { msg(vMsg, V.bad, true); return; }
      vId.value = id;
      try { history.replaceState(null, '', location.pathname + '?id=' + encodeURIComponent(id) + '&d=' + encodeURIComponent(d)); } catch (e) { /* 주소만 못 바꿈 */ }
      msg(vMsg, V.checking);
      fetch(API + '/api/cert?id=' + encodeURIComponent(id) + '&d=' + encodeURIComponent(d)).then(function (r) { return r.json(); }).then(function (j) {
        if (!j.ok) { msg(vMsg, j.error === 'rate' ? V.rate : V.bad, true); return; }
        if (!j.found) { msg(vMsg, V.none, true); return; }
        var c = j.cert, qual = 'IAPQBCertifiedAppliedAI ' + c.grade_name;
        if (c.status === 'revoked') {
          msg(vMsg, (c.test ? V.test + ' ' : '') + V.revoked, true);
          row('status', V.st.revoked); row('qual', qual); row('id', c.id); if (c.revoked) row('revoked', c.revoked); row('why', V.why[c.why] || V.why.other);
        } else {
          msg(vMsg, (c.test ? V.test + ' ' : '') + (c.status === 'valid' ? V.found : V.expired), c.status !== 'valid' || !!c.test);
          row('status', V.st[c.status] || c.status); row('qual', qual); row('name', c.name || '—'); row('id', c.id);
          row('issued', c.issued); row('expires', c.expires + V.until); row('lang', V.langs[c.lang] || c.lang);
        }
        vOut.hidden = false;
      }).catch(function () { msg(vMsg, V.err, true); });
    };
    vf.addEventListener('submit', function (e) { e.preventDefault(); check(); });
    var qi = q.get('id'), qd = q.get('d');
    if (qi) vId.value = qi;
    if (qd) vDate.value = qd;
    if (qi && qd) check();
  }
})();
