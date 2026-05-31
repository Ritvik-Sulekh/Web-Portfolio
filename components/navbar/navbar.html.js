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
        <li class="navbar__item" data-menu="profile">
          <a href="#" class="navbar__link">Profile <span class="navbar__arrow">›</span></a>
        </li>
        <li class="navbar__item" data-menu="socialproof">
          <a href="#" class="navbar__link">Social Proof <span class="navbar__arrow">›</span></a>
        </li>

        <!-- CTA inside dropdown — mobile only -->
        <li class="mega__mobile-cta">
          <a href="${b}pages/business-card.html" class="navbar__cta">Let's Connect</a>
        </li>

      </ul>

      <!-- CTA + dark mode — desktop only -->
      <div class="navbar__right">
        <button class="navbar__darkmode" id="darkModeBtn" title="Toggle dark mode" aria-label="Toggle dark mode">🌙</button>
        <a href="${b}pages/business-card.html" class="navbar__cta">Let's Connect</a>
      </div>

      <div class="navbar__burger-wrap">
        <button class="navbar__darkmode" id="darkModeBtnMobile" title="Toggle dark mode">🌙</button>
        <button class="navbar__burger" id="navBurger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
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

      <div class="mega__panel" data-panel="profile">
        <div class="mega__label">Profile</div>
        <div class="mega__grid">
          <a href="${b}pages/ats-resume.html" class="mega__item">
            <span class="mega__icon">📄</span>
            <div><div class="mega__name">ATS Resume</div><div class="mega__desc">View my resume PDF</div></div>
          </a>
          <a href="${b}pages/certifications.html" class="mega__item">
            <span class="mega__icon">📜</span>
            <div><div class="mega__name">Certifications</div><div class="mega__desc">Courses & credentials</div></div>
          </a>
          <a href="${b}pages/case-competitions.html" class="mega__item">
            <span class="mega__icon">🏆</span>
            <div><div class="mega__name">Case Competitions</div><div class="mega__desc">Strategy & business cases</div></div>
          </a>
          <a href="${b}pages/projects.html" class="mega__item">
            <span class="mega__icon">🚀</span>
            <div><div class="mega__name">Projects</div><div class="mega__desc">Personal & academic builds</div></div>
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
        </div>
      </div>

      <div class="mega__backdrop" id="megaBackdrop"></div>
    </div>
  `;
}