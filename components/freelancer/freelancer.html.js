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
            2023 — 2024
            <span class="freelancer__duration">1 yr</span>
          </div>
          <div class="freelancer__line"></div>
          <div class="freelancer__content">
            <div class="freelancer__role">Growth Strategy Consultant</div>
            <div class="freelancer__company">Startup A — EdTech</div>
            <div class="freelancer__desc">Advised on go-to-market strategy for a B2C edtech product. Built fundraising deck that helped secure seed funding.</div>
          </div>
        </div>

        <div class="freelancer__item">
          <div class="freelancer__date">
            2022 — 2023
            <span class="freelancer__duration">6 mo</span>
          </div>
          <div class="freelancer__line"></div>
          <div class="freelancer__content">
            <div class="freelancer__role">Brand & Marketing Consultant</div>
            <div class="freelancer__company">Startup B — D2C Brand</div>
            <div class="freelancer__desc">Developed brand identity and digital marketing strategy. Grew Instagram following from 0 to 8K in 3 months.</div>
          </div>
        </div>

        <div class="freelancer__item">
          <div class="freelancer__date">
            2022
            <span class="freelancer__duration">3 mo</span>
          </div>
          <div class="freelancer__line"></div>
          <div class="freelancer__content">
            <div class="freelancer__role">Business Development Advisor</div>
            <div class="freelancer__company">Startup C — FinTech</div>
            <div class="freelancer__desc">Identified partnership opportunities and built outreach strategy. Closed 2 pilot partnerships within the engagement period.</div>
          </div>
        </div>

      </div>

    </section>
  `;
}