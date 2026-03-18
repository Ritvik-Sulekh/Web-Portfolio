function renderDeckcards() {
  return `
    <link rel="stylesheet" href="components/deckcards/deckcards.css">

    <section class="deckcards">

      <div class="deckcards__header">
        <h2 class="deckcards__title">Achievements</h2>
        <p class="deckcards__sub">A snapshot of my journey — click any card to explore more.</p>
      </div>

      <div class="deckcards__grid">

        <a href="pages/work-experience.html" class="dc">
          <div class="dc__img" style="background:#d1fae5;"><span class="dc__emoji">💼</span></div>
          <div class="dc__body">
            <span class="dc__tag">Experience</span>
            <h3 class="dc__name">Product Manager at XYZ Corp</h3>
            <p class="dc__desc">Led a cross-functional team of 8 to ship 3 major product features in Q1.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="pages/internships.html" class="dc">
          <div class="dc__img" style="background:#fce7f3;"><span class="dc__emoji">🎓</span></div>
          <div class="dc__body">
            <span class="dc__tag">Internship</span>
            <h3 class="dc__name">Strategy Intern at ABC Consulting</h3>
            <p class="dc__desc">Worked on market entry strategy for a $50M FMCG client across 3 regions.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="pages/pors.html" class="dc">
          <div class="dc__img" style="background:#fef9c3;"><span class="dc__emoji">🏅</span></div>
          <div class="dc__body">
            <span class="dc__tag">POR</span>
            <h3 class="dc__name">President — Marketing Club</h3>
            <p class="dc__desc">Led a 200-member club, organised 12 events with 2000+ total attendance.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="pages/projects.html" class="dc">
          <div class="dc__img" style="background:#e0e7ff;"><span class="dc__emoji">🚀</span></div>
          <div class="dc__body">
            <span class="dc__tag">Project</span>
            <h3 class="dc__name">AI-Powered Resume Screener</h3>
            <p class="dc__desc">Built an NLP model that screens resumes with 91% accuracy using Python & BERT.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="pages/certifications.html" class="dc">
          <div class="dc__img" style="background:#ffedd5;"><span class="dc__emoji">📜</span></div>
          <div class="dc__body">
            <span class="dc__tag">Certificate</span>
            <h3 class="dc__name">Google Data Analytics</h3>
            <p class="dc__desc">Completed 6-course professional certificate covering SQL, R, and Tableau.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="pages/case-competitions.html" class="dc">
          <div class="dc__img" style="background:#f0fdf4;"><span class="dc__emoji">🏆</span></div>
          <div class="dc__body">
            <span class="dc__tag">Case Study</span>
            <h3 class="dc__name">Winner — IIM National Case Comp</h3>
            <p class="dc__desc">1st place out of 340 teams. Built a GTM strategy for an EV startup.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="pages/education.html" class="dc">
          <div class="dc__img" style="background:#ede9fe;"><span class="dc__emoji">📚</span></div>
          <div class="dc__body">
            <span class="dc__tag">Education</span>
            <h3 class="dc__name">MBA — Top Business School</h3>
            <p class="dc__desc">Specialisation in Strategy & Marketing. Dean's List, top 5% of batch.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="pages/work-portfolio.html" class="dc">
          <div class="dc__img" style="background:#fef2f2;"><span class="dc__emoji">🎨</span></div>
          <div class="dc__body">
            <span class="dc__tag">Portfolio</span>
            <h3 class="dc__name">Brand Design for 5 Startups</h3>
            <p class="dc__desc">Designed logos, decks, and brand guidelines as a freelance designer.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="pages/freelancer.html" class="dc">
          <div class="dc__img" style="background:#ecfdf5;"><span class="dc__emoji">🧑‍💻</span></div>
          <div class="dc__body">
            <span class="dc__tag">Freelance</span>
            <h3 class="dc__name">Independent Consultant</h3>
            <p class="dc__desc">Advised 3 early-stage startups on growth strategy and fundraising decks.</p>
          </div>
          <div class="dc__footer"><span class="dc__link">View more →</span></div>
        </a>

        <a href="pages/top-02.html" class="dc">
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