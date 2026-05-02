/* components/workportfolio/workportfolio.js */

(function () {

  const frame      = document.getElementById('portfolioFrame');
  const btnNormal  = document.getElementById('btnNormal');
  const btnSlide   = document.getElementById('btnSlide');
  const btnFull    = document.getElementById('btnFullscreen');

  /* Base Google Slides URL — replace SAMPLE_ID with your actual ID */
  const SLIDE_ID = 'SAMPLE_ID';

  const URLS = {
    normal: `https://docs.google.com/presentation/d/1-rjLnaFlQklU_Vj32Wknu7pHZcRh-1ktigm9IvwpiR0/embed?start=false&loop=false&delayms=3000&rm=minimal`,
    slide:  `https://docs.google.com/presentation/d/1-rjLnaFlQklU_Vj32Wknu7pHZcRh-1ktigm9IvwpiR0/embed?start=false&loop=false&delayms=3000`,
  };

  /* ── Normal view — shows all slides at once ── */
  btnNormal.addEventListener('click', function() {
    frame.src = URLS.normal;
    btnNormal.classList.add('portfolio__btn--active');
    btnSlide.classList.remove('portfolio__btn--active');
  });

  /* ── Slideshow view ── */
  btnSlide.addEventListener('click', function() {
    frame.src = URLS.slide;
    btnSlide.classList.add('portfolio__btn--active');
    btnNormal.classList.remove('portfolio__btn--active');
  });

  /* ── Fullscreen ── */
  btnFull.addEventListener('click', function() {
    const wrap = document.getElementById('frameWrap');
    if (wrap.requestFullscreen)            wrap.requestFullscreen();
    else if (wrap.webkitRequestFullscreen) wrap.webkitRequestFullscreen();
    else if (wrap.mozRequestFullScreen)    wrap.mozRequestFullScreen();
  });

})();
