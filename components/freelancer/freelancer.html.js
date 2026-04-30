function renderFreelancer() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/freelancer/freelancer.css">

    <section class="freelancer">

      <div class="freelancer__header">
        <div class="freelancer__rule"></div>
        <div class="freelancer__top">
          <div>
            <h1 class="freelancer__title">Freelance Work</h1>
            <p class="freelancer__sub">Independent consulting & client projects</p>
          </div>
          <div class="freelancer__badge">
            <span class="freelancer__badge-val" id="freelancerTotal">—</span>
            <span class="freelancer__badge-label">Total Projects</span>
          </div>
        </div>
      </div>

      <div class="freelancer__list">

        <div class="freelancer__item">
          <div class="freelancer__date">
            Mar 2025 — Apr 2025
            <span class="freelancer__duration">2 months</span>
          </div>
          <div class="freelancer__line"></div>
          <div class="freelancer__content">
            <div class="freelancer__role">Design & Branding</div>
            <div class="freelancer__company">FISC Capital</div>
            <div class="freelancer__desc">Crafting visual identities that speak—logos, brand decks, and design systems that turn ideas into memorable brands.</div>
          </div>
        </div>

      </div>

    </section>
  `;
}
