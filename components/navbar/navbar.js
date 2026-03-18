/* components/navbar/navbar.js */

(function () {
  const nav      = document.getElementById('mainNav');
  const burger   = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  const mega     = document.getElementById('megaMenu');
  const backdrop = document.getElementById('megaBackdrop');

  const isMobile = () => window.innerWidth <= 768;

  let activeItem = null;

  /* ── Desktop: open panel on hover ── */
  function openPanel(item) {
    if (activeItem === item) return;
    closePanel();
    const key   = item.dataset.menu;
    const panel = mega.querySelector(`[data-panel="${key}"]`);
    if (!panel) return;
    activeItem = item;
    item.classList.add('active');
    panel.classList.add('visible');
    backdrop.classList.add('visible');
    mega.style.pointerEvents = 'all';
  }

  function closePanel() {
    if (!activeItem) return;
    activeItem.classList.remove('active');
    mega.querySelectorAll('.mega__panel').forEach(p => p.classList.remove('visible'));
    backdrop.classList.remove('visible');
    mega.style.pointerEvents = 'none';
    activeItem = null;
  }

  /* ── Desktop hover ── */
  navLinks.querySelectorAll('.navbar__item[data-menu]').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      if (!isMobile()) openPanel(item);
    });
  });

  nav.addEventListener('mouseleave', function () {
    if (!isMobile()) {
      setTimeout(function () {
        if (!mega.matches(':hover')) closePanel();
      }, 80);
    }
  });

  mega.addEventListener('mouseleave', function () {
    if (!isMobile()) closePanel();
  });

  backdrop.addEventListener('click', closePanel);

  /* ── Mobile: burger toggle ── */
  burger.addEventListener('click', function () {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);

    /* close all panels when closing menu */
    if (!open) {
      mega.querySelectorAll('.mega__panel').forEach(p => p.classList.remove('visible'));
      navLinks.querySelectorAll('.navbar__item').forEach(i => i.classList.remove('active'));
    }
  });

  /* ── Mobile: tap item to expand its panel inline ── */
  navLinks.querySelectorAll('.navbar__item[data-menu]').forEach(function (item) {
    item.querySelector('.navbar__link').addEventListener('click', function (e) {
      if (!isMobile()) return;
      e.preventDefault();

      const key     = item.dataset.menu;
      const panel   = mega.querySelector(`[data-panel="${key}"]`);
      if (!panel) return;

      const isOpen  = panel.classList.contains('visible');

      /* close all first */
      mega.querySelectorAll('.mega__panel').forEach(p => p.classList.remove('visible'));
      navLinks.querySelectorAll('.navbar__item').forEach(i => i.classList.remove('active'));

      /* then open this one if it was closed */
      if (!isOpen) {
        panel.classList.add('visible');
        item.classList.add('active');

        /* move panel inside this item so it appears inline */
        item.appendChild(panel);
      }
    });
  });

  /* ── Auto highlight active page ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  mega.querySelectorAll('.mega__item').forEach(function (a) {
    if (a.getAttribute('href') === '/' + page || a.getAttribute('href') === page) {
      a.style.background = '#f0fdf4';
    }
  });

})();