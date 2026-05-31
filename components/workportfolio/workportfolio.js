/* components/workportfolio/workportfolio.js */

(function () {

  const frame    = document.getElementById('portfolioFrame');
  const btnSlide = document.getElementById('btnSlide');
  const btnFull  = document.getElementById('btnFullscreen');
  const wrap     = document.getElementById('frameWrap'); // ← was missing, caused fullscreen crash

  const URLS = {
    // Default view: no rm=minimal so Google Slides shows its native toolbar + page numbers
    normal: `https://docs.google.com/presentation/d/1-rjLnaFlQklU_Vj32Wknu7pHZcRh-1ktigm9IvwpiR0/embed?start=false&loop=false&delayms=3000`,
    // Slideshow: same URL but could start=true if you want auto-play
    slide:  `https://docs.google.com/presentation/d/1-rjLnaFlQklU_Vj32Wknu7pHZcRh-1ktigm9IvwpiR0/embed?start=true&loop=false&delayms=3000`,
  };

  /* ── Load normal view by default (shows page numbers) ── */
  frame.src = URLS.normal;

  /* ── Slideshow view ── */
  btnSlide.addEventListener('click', function () {
    frame.src = URLS.slide;
    btnSlide.classList.add('portfolio__btn--active');
  });

  /* ── Fullscreen — desktop uses native fullscreen on the wrapper, mobile opens new tab ── */
  btnFull.addEventListener('click', function () {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      window.open(
        `https://docs.google.com/presentation/d/1-rjLnaFlQklU_Vj32Wknu7pHZcRh-1ktigm9IvwpiR0/present`,
        '_blank'
      );
    } else {
      // Request fullscreen on the wrapper div (contains the iframe)
      if (wrap.requestFullscreen)            wrap.requestFullscreen();
      else if (wrap.webkitRequestFullscreen) wrap.webkitRequestFullscreen();
      else if (wrap.mozRequestFullScreen)    wrap.mozRequestFullScreen();
    }
  });

  /* ── Keep iframe filling the wrapper when in native fullscreen ── */
  document.addEventListener('fullscreenchange', handleFsChange);
  document.addEventListener('webkitfullscreenchange', handleFsChange);
  document.addEventListener('mozfullscreenchange', handleFsChange);

  function handleFsChange() {
    const isFs = !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
    );
    // When entering fullscreen, remove the padding-bottom trick and use 100vh/vw
    if (isFs) {
      wrap.style.position = 'fixed';
      wrap.style.top      = '0';
      wrap.style.left     = '0';
      wrap.style.width    = '100vw';
      wrap.style.height   = '100vh';
      wrap.style.paddingBottom = '0';
      wrap.style.zIndex   = '9999';
    } else {
      wrap.style.position = '';
      wrap.style.top      = '';
      wrap.style.left     = '';
      wrap.style.width    = '';
      wrap.style.height   = '';
      wrap.style.paddingBottom = '';
      wrap.style.zIndex   = '';
    }
  }

})();