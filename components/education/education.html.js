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
            2021 — 2024
            <span class="edu__duration">3 yrs</span>
          </div>
          <div class="edu__line"></div>
          <div class="edu__content">
            <div class="edu__degree">MBA</div>
            <div class="edu__school">IIM Udaipur</div>
            <div class="edu__location">📍 Udaipur, Rajasthan</div>
            <div class="edu__desc">Specialisation in Marketing & Consulting</div>
          </div>
        </div>

        <div class="edu__item">
          <div class="edu__date">
            2016 — 2020
            <span class="edu__duration">4 yrs</span>
          </div>
          <div class="edu__line"></div>
          <div class="edu__content">
            <div class="edu__degree">B.Tech</div>
            <div class="edu__school">SRM University</div>
            <div class="edu__location">📍 Sonipat, Haryana</div>
            <div class="edu__desc">Specialisation in Computer Science & Engineering (CSE). Graduated with distinction. Active member of the coding and entrepreneurship clubs. Final year project on Cyber-Security & Systems. With my major in (DSA + AI) & minor in Network Security, I build each project with my passion</div>
          </div>
        </div>

        <div class="edu__item">
          <div class="edu__date">
            2016
            <span class="edu__duration">1 yr</span>
          </div>
          <div class="edu__line"></div>
          <div class="edu__content">
            <div class="edu__degree">XII Standard (PCM)</div>
            <div class="edu__school">Ryan International School</div>
            <div class="edu__location">📍 Kandivali (E), Mumbai</div>
            <div class="edu__desc">I participated in World Scholar Cup & Social Service Camp. In classical group dance, we secured 3rd position in the inter-school competitions.</div>
          </div>
        </div>

        <div class="edu__item">
          <div class="edu__date">
            2014
            <span class="edu__duration">1 yr</span>
          </div>
          <div class="edu__line"></div>
          <div class="edu__content">
            <div class="edu__degree">X Standard</div>
            <div class="edu__school">Ryan International School</div>
            <div class="edu__location">📍 Kandivali (E), Mumbai</div>
            <div class="edu__desc">Led the Green House Team on Inter-School Sports Day, in absence of actual Green House Captain.</div>
          </div>
        </div>

      </div>

    </section>
  `;
}
