/* components/darkmode/darkmode.js */

(function () {

  const body  = document.body;
  const btns  = [
    document.getElementById('darkModeBtn'),
    document.getElementById('darkModeBtnMobile'),
  ].filter(Boolean);

  /* ── Apply saved preference ── */
  const saved = localStorage.getItem('darkmode');
  if (saved === 'on') {
    body.classList.add('dark');
    btns.forEach(function(btn) { btn.textContent = '☀️'; });
  }

  /* ── Toggle ── */
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const isDark = body.classList.toggle('dark');
      btns.forEach(function(b) { b.textContent = isDark ? '☀️' : '🌙'; });
      localStorage.setItem('darkmode', isDark ? 'on' : 'off');
    });
  });

})();