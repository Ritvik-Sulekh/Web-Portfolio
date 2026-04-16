function renderWorkPortfolio() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/workportfolio/workportfolio.css">

    <section class="portfolio">

      <div class="portfolio__header">
        <div class="portfolio__rule"></div>
        <h1 class="portfolio__title">Work Portfolio</h1>
        <p class="portfolio__sub">Browse through my work — use the controls to view normally or as a slideshow.</p>
      </div>

      <div class="portfolio__viewer">

        <!-- Controls bar -->
        <div class="portfolio__bar">
          <div class="portfolio__bar-left">
            <span class="portfolio__name" id="portfolioName">Portfolio 2</span>
          </div>
          <div class="portfolio__bar-right">
            <button class="portfolio__btn" id="btnNormal" title="Normal view">
              ⊞ Normal
            </button>
            <button class="portfolio__btn portfolio__btn--active" id="btnSlide" title="Slideshow view">
              ▶ Slideshow
            </button>
            <button class="portfolio__btn portfolio__btn--fullscreen" id="btnFullscreen" title="Fullscreen">
              ⛶ Fullscreen
            </button>
          </div>
        </div>

        <!-- Slide embed -->
        <div class="portfolio__frame-wrap" id="frameWrap">
          <iframe
            id="portfolioFrame"
            class="portfolio__frame"
            src="https://docs.google.com/presentation/d/1-rjLnaFlQklU_Vj32Wknu7pHZcRh-1ktigm9IvwpiR0/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true">
          </iframe>
        </div>

      </div>

    </section>
  `;
}