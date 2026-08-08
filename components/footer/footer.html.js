/* components/footer/footer.html.js */

function renderFooter() {
  const b    = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  const year = new Date().getFullYear();
  const stat = typeof getStat === 'function' ? getStat : function () { return ''; };

  return `
    <link rel="stylesheet" href="${b}components/footer/footer.css">
    <footer class="footer">
      <div class="footer__wrap">
        <div class="footer__groups">

          <div class="footer__group">
            <h4>TRACK RECORD</h4>
            <a href="${b}pages/blog-files/guinness.html" class="footer__item"><span>Guinness World Record</span><span>→</span></a>
            <a href="${b}pages/blog-files/iim-graduation.html" class="footer__item"><span>Graduated, IIM Udaipur</span><span>→</span></a>
            <a href="${b}pages/top-02.html" class="footer__item"><span>CAT Top 0.2%</span><span>→</span></a>
            <a href="${b}pages/work-portfolio.html" class="footer__item"><span>Portfolio Slides</span><span>→</span></a>
          </div>

          <div class="footer__group">
            <h4>EXPERIENCE</h4>
            <a href="${b}pages/work-experience.html" class="footer__item"><span>Work experience</span><span>${stat('work_experience')}</span></a>
            <a href="${b}pages/internships.html" class="footer__item"><span>Internships</span><span>${stat('internships')}</span></a>
            <a href="${b}pages/freelancer.html" class="footer__item"><span>Freelancer</span><span>${stat('freelance')}</span></a>
            <a href="${b}pages/pors.html" class="footer__item"><span>PORs</span><span>${stat('pors')}</span></a>
          </div>

          <div class="footer__group">
            <h4>MY PROFILE</h4>
            <div class="footer__profile-subgrid">
              <div>
                <a href="${b}pages/education.html" class="footer__item"><span>Education</span><span>${stat('education')}</span></a>
                <a href="${b}pages/ats-resume.html" class="footer__item"><span>ATS resume</span><span>${stat('ats_resumes')}</span></a>
                <a href="${b}pages/certifications.html" class="footer__item"><span>Certifications</span><span>${stat('certificates')}</span></a>
              </div>
              <div>
                <a href="${b}pages/case-competitions.html" class="footer__item"><span>Case competitions</span><span>${stat('case_studies')}</span></a>
                <a href="${b}pages/projects.html" class="footer__item"><span>Projects</span><span>${stat('projects')}</span></a>
                <a href="${b}pages/publications.html" class="footer__item"><span>Publications</span><span>${stat('publications')}</span></a>
              </div>
              <div>
                <a href="${b}pages/testimonials.html" class="footer__item"><span>Testimonials</span><span>${stat('testimonials')}</span></a>
                <a href="${b}pages/blogs.html" class="footer__item"><span>Blogs</span><span>${stat('blogs')}</span></a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="footer__meta">
        <span>© ${year} ORitvik. All rights reserved.</span>
      </div>
    </footer>
  `;
}