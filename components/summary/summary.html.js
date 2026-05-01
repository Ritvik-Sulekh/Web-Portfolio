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
          <a href="${b}pages/education.html" class="summary__degree" id="s-degree">MBA (IIM Udaipur)</a>
          <p class="summary__tagline"> 1. Better Late than Never <br> 2. Resilience turns setbacks into Bounce-backs</p>
        </div>
      </div>

      <!-- Metrics table -->
      <div class="summary__table">

        <!-- Column 1: Experience -->
        <div class="summary__col">
          <div class="summary__col-title">Experience</div>

          <a href="${b}pages/work-experience.html" class="summary__card">
            <span class="summary__value" id="s-experience"></span>
            <span class="summary__label">Work Experience</span>
          </a>

          <a href="${b}pages/internships.html" class="summary__card">
            <span class="summary__value" id="s-internships"></span>
            <span class="summary__label">Internships</span>
          </a>

          <a href="${b}pages/freelancer.html" class="summary__card">
            <span class="summary__value" id="s-freelance"></span>
            <span class="summary__label">Freelance</span>
          </a>

          <a href="${b}pages/pors.html" class="summary__card">
            <span class="summary__value" id="s-pors"></span>
            <span class="summary__label">PORs</span>
          </a>

        </div>

        <!-- Column 2: Highlights -->
        <div class="summary__col">
          <div class="summary__col-title">Highlights</div>

          <a href="${b}pages/achievements.html" class="summary__card">
            <span class="summary__value" id="s-achievements"></span>
            <span class="summary__label">Achievements</span>
          </a>

          <a href="${b}pages/testimonials.html" class="summary__card">
            <span class="summary__value" id="s-testimonials"></span>
            <span class="summary__label">Testimonials</span>
          </a>

          <a href="${b}pages/blogs.html" class="summary__card">
            <span class="summary__value" id="s-blogs"></span>
            <span class="summary__label">Blogs</span>
          </a>

          <a href="${b}pages/publications.html" class="summary__card">
            <span class="summary__value" id="s-publications"></span>
            <span class="summary__label">Publications</span>
          </a>
          
        </div>

        <!-- Column 3: Credentials -->
        <div class="summary__col">
          <div class="summary__col-title">Credentials</div>

          <a href="${b}pages/certifications.html" class="summary__card">
            <span class="summary__value" id="s-certificates"></span>
            <span class="summary__label">Certificates</span>
          </a>

          <a href="${b}pages/case-competitions.html" class="summary__card">
            <span class="summary__value" id="s-casestudies"></span>
            <span class="summary__label">Case Studies</span>
          </a>

          <a href="${b}pages/projects.html" class="summary__card">
            <span class="summary__value" id="s-projects"></span>
            <span class="summary__label">Projects</span>
          </a>

          <a href="${b}pages/ats-resume.html" class="summary__card">
          <span class="summary__value" id="s-resumes"></span>
          <span class="summary__label">Resumes</span>
          </a>

        </div>

      </div>

    </section>
  `;
}
