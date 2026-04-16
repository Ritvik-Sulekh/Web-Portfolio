function renderExperience() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/experience/experience.css">

    <section class="exp">

      <div class="exp__header">
        <div class="exp__rule"></div>
        <div class="exp__top">
          <div>
            <h1 class="exp__title">Work Experience</h1>
            <p class="exp__sub">My professional journey so far</p>
          </div>
          <div class="exp__badge" id="expBadge">
            <span class="exp__badge-val" id="expTotal">—</span>
            <span class="exp__badge-label">Total Experience</span>
          </div>
        </div>
      </div>

      <div class="exp__list">

        <div class="exp__item" data-start="2026-03-01" data-end="">
          <div class="exp__date">
            Feb 2026 — Present
            <span class="exp__duration" id="dur-0"></span>
          </div>
          <div class="exp__line"></div>
          <div class="exp__content">
            <div class="exp__role">Marketing Associate</div>
            <div class="exp__company">7Span</div>
            <div class="exp__location">📍 Ahmedabad, Gujarat, India</div>
            <div class="exp__desc">Working to optimize IT Sales</div>
          </div>
        </div>

        <div class="exp__item exp__item--gap">
          <div class="exp__date">2025</div>
          <div class="exp__line"></div>
          <div class="exp__content">
            <span class="exp__gap-badge">Career Gap</span>
            <div class="exp__gap-title">Job/AI Preparation & Travel</div>
            <div class="exp__gap-desc">Took a planned break to prepare for various jobs, exams, AI and travelled across India.</div>
          </div>
        </div>

        <div class="exp__item" data-start="2024-08-01" data-end="2024-12-31">
          <div class="exp__date">
            Aug 2024 — Jan 2025
            <span class="exp__duration" id="dur-1"></span>
          </div>
          <div class="exp__line"></div>
          <div class="exp__content">
            <div class="exp__role">Marketing Manager</div>
            <div class="exp__company">Harley's Fine Baking</div>
            <div class="exp__location">📍 Hyderabad, Telangana, India</div>
            <div class="exp__desc">Won Guinness World Record on Dec 06, 2024 for Harley's.</div>
          </div>
        </div>

      </div>

    </section>
  `;
}