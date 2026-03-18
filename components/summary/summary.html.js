function renderSummary() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/summary/summary.css">

    <section class="summary">

      <div class="summary__profile">
        <div class="summary__avatar">
          <img src="${b}assets/profile.png" alt="Profile Photo">
        </div>
        <div class="summary__text">
          <h1 class="summary__name">Ritvik Singh Sulekh</h1>
          <p class="summary__degree">MBA (IIM Udaipur)</p>
          <p class="summary__tagline">“Resilience turns setbacks into Bounce-backs.”</p>
        </div>
      </div>

      <div class="summary__grid">
        <a href="${b}pages/work-experience.html" class="summary__card">
          <span class="summary__value" id="s-experience"></span>
          <span class="summary__label">Experience</span>
        </a>
        <a href="${b}pages/internships.html" class="summary__card">
          <span class="summary__value" id="s-internships"></span>
          <span class="summary__label">Internships</span>
        </a>
        <a href="${b}pages/pors.html" class="summary__card">
          <span class="summary__value" id="s-pors"></span>
          <span class="summary__label">PORs</span>
        </a>
        <a href="${b}pages/projects.html" class="summary__card">
          <span class="summary__value" id="s-projects"></span>
          <span class="summary__label">Projects</span>
        </a>
        <a href="${b}pages/certifications.html" class="summary__card">
          <span class="summary__value" id="s-certificates"></span>
          <span class="summary__label">Certificates</span>
        </a>
        <a href="${b}pages/case-competitions.html" class="summary__card">
          <span class="summary__value" id="s-casestudies"></span>
          <span class="summary__label">Case Studies</span>
        </a>
        <a href="${b}pages/publications.html" class="summary__card">
          <span class="summary__value" id="s-publications"></span>
          <span class="summary__label">Publications</span>
        </a>
      </div>

    </section>
  `;
}