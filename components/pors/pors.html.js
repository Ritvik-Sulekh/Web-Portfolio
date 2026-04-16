function renderPors() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/pors/pors.css">

    <section class="pors">

      <div class="pors__header">
        <div class="pors__rule"></div>
        <div class="pors__top">
          <div>
            <h1 class="pors__title">Positions of Responsibility</h1>
            <p class="pors__sub">Leadership roles & responsibilities held on campus and beyond</p>
          </div>
          <div class="pors__badge">
            <span class="pors__badge-val" id="porsTotal">—</span>
            <span class="pors__badge-label">Total PORs</span>
          </div>
        </div>
      </div>

      <div class="pors__list">

        <div class="pors__item">
          <div class="pors__date">
            2023 — 2024
            <span class="pors__duration">1 yr</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">President</div>
            <div class="pors__org">Marketing Club, IIM Udaipur</div>
            <div class="pors__desc">Led a 200-member club. Organised 12 events with 2000+ total attendance. Managed sponsorships and cross-college collaborations.</div>
          </div>
        </div>

        <div class="pors__item">
          <div class="pors__date">
            2023 — 2024
            <span class="pors__duration">1 yr</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Vice President</div>
            <div class="pors__org">Finance Club, IIM Udaipur</div>
            <div class="pors__desc">Coordinated finance workshops and guest speaker sessions. Managed a team of 15 members.</div>
          </div>
        </div>

        <div class="pors__item">
          <div class="pors__date">
            2022 — 2023
            <span class="pors__duration">1 yr</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Head</div>
            <div class="pors__org">Cultural Committee</div>
            <div class="pors__desc">Planned and executed the annual cultural fest with 500+ participants across 3 campuses.</div>
          </div>
        </div>

      </div>

    </section>
  `;
}