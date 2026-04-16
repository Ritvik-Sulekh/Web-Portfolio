function renderEducation() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/education/education.css">

    <section class="edu">

      <div class="edu__header">
        <div class="edu__rule"></div>
        <div class="edu__top">
          <div>
            <h1 class="edu__title">Education</h1>
            <p class="edu__sub">Academic background & qualifications</p>
          </div>
          <div class="edu__badge">
            <span class="edu__badge-val" id="eduTotal">—</span>
            <span class="edu__badge-label">Total certificates</span>
          </div>
        </div>
      </div>

      <div class="edu__list">

        <div class="edu__item">
          <div class="edu__date">
            2023 — 2025
            <span class="edu__duration">2 yrs</span>
          </div>
          <div class="edu__line"></div>
          <div class="edu__content">
            <div class="edu__degree">MBA</div>
            <div class="edu__school">IIM Udaipur</div>
            <div class="edu__location">📍 Udaipur, Rajasthan</div>
            <div class="edu__desc">Specialisation in Strategy & Marketing. Top 0.2% nationally in CAT entrance examination. Dean's List, top 5% of batch.</div>
          </div>
        </div>

        <div class="edu__item">
          <div class="edu__date">
            2018 — 2022
            <span class="edu__duration">4 yrs</span>
          </div>
          <div class="edu__line"></div>
          <div class="edu__content">
            <div class="edu__degree">B.Tech — Computer Science</div>
            <div class="edu__school">Sample University</div>
            <div class="edu__location">📍 City, State</div>
            <div class="edu__desc">Graduated with distinction. Active member of the coding and entrepreneurship clubs. Final year project on NLP-based resume screening.</div>
          </div>
        </div>

      </div>

    </section>
  `;
}