function renderNavbar() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/navbar/navbar.css">

    <nav class="navbar" id="mainNav">
      <a href="${b}index.html" class="navbar__logo">ORitvik</a>

      <ul class="navbar__links" id="navLinks">

        <li class="navbar__item" data-menu="experience">
          <a href="#" class="navbar__link">Experience <span class="navbar__arrow">›</span></a>
        </li>
        <li class="navbar__item" data-menu="portfolio">
          <a href="#" class="navbar__link">Portfolio <span class="navbar__arrow">›</span></a>
        </li>
        <li class="navbar__item" data-menu="profile">
          <a href="#" class="navbar__link">Profile <span class="navbar__arrow">›</span></a>
        </li>
        <li class="navbar__item" data-menu="socialproof">
          <a href="#" class="navbar__link">Social Proof <span class="navbar__arrow">›</span></a>
        </li>
        <li class="navbar__item" data-menu="tools">
          <a href="#" class="navbar__link">Quick Access <span class="navbar__arrow">›</span></a>
        </li>

        <!-- CTA inside dropdown — mobile only -->
        <li class="mega__mobile-cta">
          <a href="${b}pages/business-card.html">Let's Connect</a>
        </li>

      </ul>

      <!-- CTA in navbar bar — desktop only -->
      <a href="${b}pages/business-card.html" class="navbar__cta">Let's Connect</a>

      <button class="navbar__burger" id="navBurger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mega" id="megaMenu">

      <div class="mega__panel" data-panel="experience">
        <div class="mega__label">Experience</div>
        <div class="mega__grid">
          <a href="${b}pages/work-experience.html" class="mega__item">
            <span class="mega__icon">💼</span>
            <div><div class="mega__name">Work Experience</div><div class="mega__desc">Full-time roles & companies</div></div>
          </a>
          <a href="${b}pages/internships.html" class="mega__item">
            <span class="mega__icon">🎓</span>
            <div><div class="mega__name">Internships</div><div class="mega__desc">Internship stints & learnings</div></div>
          </a>
          <a href="${b}pages/freelancer.html" class="mega__item">
            <span class="mega__icon">🧑‍💻</span>
            <div><div class="mega__name">Freelancer</div><div class="mega__desc">Independent client projects</div></div>
          </a>
          <a href="${b}pages/pors.html" class="mega__item">
            <span class="mega__icon">🏅</span>
            <div><div class="mega__name">PORs</div><div class="mega__desc">Positions of responsibility</div></div>
          </a>
        </div>
      </div>

      <div class="mega__panel" data-panel="portfolio">
        <div class="mega__label">Portfolio</div>
        <div class="mega__grid">
          <a href="${b}pages/work-portfolio.html" class="mega__item">
            <span class="mega__icon">🎨</span>
            <div><div class="mega__name">Work Portfolio</div><div class="mega__desc">Professional design & dev work</div></div>
          </a>
          <a href="${b}pages/achievements.html" class="mega__item">
            <span class="mega__icon">🏆</span>
            <div><div class="mega__name">Achievements</div><div class="mega__desc">Awards, wins & recognitions</div></div>
          </a>
          <a href="${b}pages/projects.html" class="mega__item">
            <span class="mega__icon">🚀</span>
            <div><div class="mega__name">Projects</div><div class="mega__desc">Personal & academic builds</div></div>
          </a>
          <a href="${b}pages/case-competitions.html" class="mega__item">
            <span class="mega__icon">🏆</span>
            <div><div class="mega__name">Case Competitions</div><div class="mega__desc">Strategy & business cases</div></div>
          </a>
        </div>
      </div>

      <div class="mega__panel" data-panel="profile">
        <div class="mega__label">Profile</div>
        <div class="mega__grid">
          <a href="${b}pages/skills.html" class="mega__item">
            <span class="mega__icon">⚡</span>
            <div><div class="mega__name">Skills</div><div class="mega__desc">Technical & soft skills</div></div>
          </a>
          <a href="${b}pages/education.html" class="mega__item">
            <span class="mega__icon">📚</span>
            <div><div class="mega__name">Education</div><div class="mega__desc">Degrees & academic history</div></div>
          </a>
          <a href="${b}pages/certifications.html" class="mega__item">
            <span class="mega__icon">📜</span>
            <div><div class="mega__name">Certifications</div><div class="mega__desc">Courses & credentials</div></div>
          </a>
          <a href="${b}pages/publications.html" class="mega__item">
            <span class="mega__icon">📝</span>
            <div><div class="mega__name">Publications</div><div class="mega__desc">Research & written work</div></div>
          </a>
        </div>
      </div>

      <div class="mega__panel" data-panel="socialproof">
        <div class="mega__label">Social Proof</div>
        <div class="mega__grid">
          <a href="${b}pages/testimonials.html" class="mega__item">
            <span class="mega__icon">💬</span>
            <div><div class="mega__name">Testimonials</div><div class="mega__desc">What people say about me</div></div>
          </a>
          <a href="${b}pages/blogs.html" class="mega__item">
            <span class="mega__icon">✍️</span>
            <div><div class="mega__name">Blogs</div><div class="mega__desc">Articles & thought pieces</div></div>
          </a>
          <a href="${b}pages/top-02.html" class="mega__item">
            <span class="mega__icon">🌟</span>
            <div><div class="mega__name">Top 0.2%</div><div class="mega__desc">Rankings & recognitions</div></div>
          </a>
        </div>
      </div>

      <div class="mega__panel" data-panel="tools">
        <div class="mega__label">Quick Access</div>
        <div class="mega__grid">
          <a href="${b}pages/ats-resume.html" class="mega__item">
            <span class="mega__icon">📄</span>
            <div><div class="mega__name">ATS Resume</div><div class="mega__desc">View my resume PDF</div></div>
          </a>
          <a href="${b}pages/business-card.html" class="mega__item">
            <span class="mega__icon">🪪</span>
            <div><div class="mega__name">Business Card</div><div class="mega__desc">Digital card & contact info</div></div>
          </a>
        </div>
      </div>

      <div class="mega__backdrop" id="megaBackdrop"></div>
    </div>
  `;
}