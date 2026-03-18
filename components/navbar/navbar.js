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
  navLinks.querySelectorAll('.navbar__item[data-menu]').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      if (!isMobile()) openPanel(item);
    });
  });

  nav.addEventListener('mouseleave', function() {
    if (!isMobile()) {
      setTimeout(function() {
        if (!mega.matches(':hover')) closePanel();
      }, 80);
    }
  });

  mega.addEventListener('mouseleave', function() {
    if (!isMobile()) closePanel();
  });

  backdrop.addEventListener('click', closePanel);

  /* ── Mobile burger toggle ── */
  burger.addEventListener('click', function() {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      closeAllMobilePanels();
      document.body.style.overflow = '';
    }
  });

  /* ── Mobile: close all panels ── */
  function closeAllMobilePanels() {
    navLinks.querySelectorAll('.navbar__item').forEach(function(item) {
      item.classList.remove('active');
      const sub = item.querySelector('.navbar__submenu');
      if (sub) sub.style.display = 'none';
    });
  }

  /* ── Mobile: build submenu inside each item ── */
  function buildMobileMenus() {
    navLinks.querySelectorAll('.navbar__item[data-menu]').forEach(function(item) {
      if (item.querySelector('.navbar__submenu')) return; /* already built */

      const key   = item.dataset.menu;
      const panel = mega.querySelector(`[data-panel="${key}"]`);
      if (!panel) return;

      /* Clone the panel links into a submenu div */
      const sub = document.createElement('div');
      sub.className = 'navbar__submenu';
      sub.style.display = 'none';

      /* Copy all mega items */
      const items = panel.querySelectorAll('.mega__item');
      items.forEach(function(mi) {
        const link = document.createElement('a');
        link.href      = mi.getAttribute('href');
        link.className = 'navbar__subitem';
        const icon = mi.querySelector('.mega__icon');
        const name = mi.querySelector('.mega__name');
        const desc = mi.querySelector('.mega__desc');
        link.innerHTML = `
          <span class="navbar__subicon">${icon ? icon.textContent : ''}</span>
          <span>
            <span class="navbar__subname">${name ? name.textContent : ''}</span>
            <span class="navbar__subdesc">${desc ? desc.textContent : ''}</span>
          </span>
        `;
        sub.appendChild(link);
      });

      item.appendChild(sub);

      /* Tap to toggle */
      item.querySelector('.navbar__link').addEventListener('click', function(e) {
        if (!isMobile()) return;
        e.preventDefault();

        const isOpen = sub.style.display === 'block';

        /* close all */
        closeAllMobilePanels();

        if (!isOpen) {
          sub.style.display = 'block';
          item.classList.add('active');
        }
      });
    });
  }

  /* ── Resize ── */
  window.addEventListener('resize', function() {
    if (!isMobile()) {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
      closePanel();
    }
  });

  /* ── Init ── */
  buildMobileMenus();

  /* ── Active page highlight ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.mega__item').forEach(function(a) {
    const href = a.getAttribute('href') || '';
    if (href.endsWith(page)) a.style.background = '#f0fdf4';
  });

})();
