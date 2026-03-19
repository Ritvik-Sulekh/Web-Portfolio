/* components/navbar/navbar.js */

document.addEventListener('DOMContentLoaded', function () {

  const nav      = document.getElementById('mainNav');
  const burger   = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  const mega     = document.getElementById('megaMenu');
  const backdrop = document.getElementById('megaBackdrop');

  if (!nav || !burger || !navLinks || !mega) return;

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

  /* ── Move panels into nav items for mobile ── */
  function movePanelsToItems() {
    navLinks.querySelectorAll('.navbar__item[data-menu]').forEach(function(item) {
      const key   = item.dataset.menu;
      const panel = mega.querySelector(`[data-panel="${key}"]`);
      if (panel && !item.contains(panel)) {
        item.appendChild(panel);
      }
    });
  }

  /* ── Move panels back to mega for desktop ── */
  function movePanelsToMega() {
    navLinks.querySelectorAll('.navbar__item[data-menu]').forEach(function(item) {
      const panel = item.querySelector('.mega__panel');
      if (panel) {
        mega.insertBefore(panel, mega.querySelector('.mega__backdrop'));
      }
    });
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

  /* ── Mobile burger ── */
  burger.addEventListener('click', function() {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);

    if (open) {
      movePanelsToItems();
      document.body.style.overflow = 'hidden';
    } else {
      closeAllPanels();
      document.body.style.overflow = '';
    }
  });

  function closeAllPanels() {
    document.querySelectorAll('.mega__panel').forEach(p => p.classList.remove('visible'));
    navLinks.querySelectorAll('.navbar__item').forEach(i => i.classList.remove('active'));
  }

  /* ── Mobile: tap bucket to expand panel ── */
  navLinks.querySelectorAll('.navbar__item[data-menu]').forEach(function(item) {
    item.querySelector('.navbar__link').addEventListener('click', function(e) {
      if (!isMobile()) return;
      e.preventDefault();

      const panel  = item.querySelector('.mega__panel');
      if (!panel) return;

      const isOpen = panel.classList.contains('visible');

      closeAllPanels();

      if (!isOpen) {
        panel.classList.add('visible');
        item.classList.add('active');
      }
    });
  });

  /* ── Resize ── */
  window.addEventListener('resize', function() {
    if (!isMobile()) {
      movePanelsToMega();
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
      closePanel();
    } else {
      movePanelsToItems();
    }
  });

  /* ── Init ── */
  if (isMobile()) movePanelsToItems();

  /* ── Active page highlight ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.mega__item').forEach(function(a) {
    const href = a.getAttribute('href') || '';
    if (href.endsWith(page)) a.style.background = '#f0fdf4';
  });

});
