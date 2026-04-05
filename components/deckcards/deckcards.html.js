function renderDeckcards() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/deckcards/deckcards.css">

    <section class="deckcards">

      <div class="deckcards__header">
        <div class="deckcards__rule"></div>
        <div class="deckcards__header-row">
          <div>
            <h2 class="deckcards__title">Achievements</h2>
            <p class="deckcards__sub">A snapshot of my journey — click any card to explore more.</p>
          </div>
          <div class="deckcards__badge">
            <span class="deckcards__badge-val" id="achieveTotal">—</span>
            <span class="deckcards__badge-label">Total Achievements</span>
          </div>
        </div>
      </div>

      <div class="deckcards__grid">

        <a href="${b}pages/work-experience.html" class="dc">
          <div class="dc__img" style="background:#d1fae5;"><span class="dc__emoji">💼</span></div>
          <div class="dc__body">
            <span class="dc__tag">Experience</span>
            <h3 class="dc__name">Product Manager at XYZ Corp</h3>
            <p class="dc__desc">Led a cross-functional team of 8 to ship 3 major product features in Q1.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="${b}pages/pors.html" class="dc">
          <div class="dc__img" style="background:#fef9c3;"><span class="dc__emoji">🏅</span></div>
          <div class="dc__body">
            <span class="dc__tag">POR</span>
            <h3 class="dc__name">President — Marketing Club</h3>
            <p class="dc__desc">Led a 200-member club, organised 12 events with 2000+ total attendance.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="${b}pages/projects.html" class="dc">
          <div class="dc__img" style="background:#e0e7ff;"><span class="dc__emoji">🚀</span></div>
          <div class="dc__body">
            <span class="dc__tag">Project</span>
            <h3 class="dc__name">AI-Powered Resume Screener</h3>
            <p class="dc__desc">Built an NLP model that screens resumes with 91% accuracy using Python & BERT.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="${b}pages/case-competitions.html" class="dc">
          <div class="dc__img" style="background:#f0fdf4;"><span class="dc__emoji">🏆</span></div>
          <div class="dc__body">
            <span class="dc__tag">Case Study</span>
            <h3 class="dc__name">Winner — IIM National Case Comp</h3>
            <p class="dc__desc">1st place out of 340 teams. Built a GTM strategy for an EV startup.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="${b}pages/top-02.html" class="dc">
          <div class="dc__img" style="background:#fff7ed;"><span class="dc__emoji">🌟</span></div>
          <div class="dc__body">
            <span class="dc__tag">Recognition</span>
            <h3 class="dc__name">Top 0.2% Nationally</h3>
            <p class="dc__desc">Ranked in the top 0.2% among 800,000+ candidates in national entrance exam.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

      </div>

    </section>
  `;
}