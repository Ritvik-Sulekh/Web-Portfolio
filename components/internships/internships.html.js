function renderInternships() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/internships/internships.css">

    <section class="intern">

      <div class="intern__header">
        <div class="intern__rule"></div>
        <div class="intern__top">
          <div>
            <h1 class="intern__title">Internships</h1>
            <p class="intern__sub">Internship stints & learnings</p>
          </div>
          <div class="intern__badge">
            <span class="intern__badge-val" id="internTotal">—</span>
            <span class="intern__badge-label">Total Internships</span>
          </div>
        </div>
      </div>

      <div class="intern__list">

        <div class="intern__item" data-start="2023-04-01" data-end="2023-06-01">
          <div class="intern__date">
            Apr 2023 — Jun 2023
            <span class="intern__duration"></span>
          </div>
          <div class="intern__line"></div>
          <div class="intern__content">
            <div class="intern__role">Project Intern</div>
            <div class="intern__company">Splenora Textures</div>
            <div class="intern__location">📍 Morbi/Rajkot, Gujarat, India</div>
            <div class="intern__desc">Worked on Google Analytics & Excel to increase automation.</div>
          </div>
        </div>

        <div class="intern__item" data-start="2022-04-01" data-end="2022-06-01">
          <div class="intern__date">
            Apr 2022 — Jun 2022
            <span class="intern__duration"></span>
          </div>
          <div class="intern__line"></div>
          <div class="intern__content">
            <div class="intern__role">Customer Retention Intern, "IIM Summers"</div>
            <div class="intern__company">Brillare</div>
            <div class="intern__location">📍 Ahmedabad, Gujarat, India</div>
            <div class="intern__desc">Improved retention by increasing customers using various Retention related Analysis.</div>
          </div>
        </div>

        <div class="intern__item" data-start="2020-06-01" data-end="2020-08-01">
          <div class="intern__date">
            Jun 2020 — Jul 2020
            <span class="intern__duration"></span>
          </div>
          <div class="intern__line"></div>
          <div class="intern__content">
            <div class="intern__role">Project Intern</div>
            <div class="intern__company">DASOFF Petroleum</div>
            <div class="intern__location">📍 UAE</div>
            <div class="intern__desc">Ensured operational efficiency of Crude Oil.</div>
          </div>
        </div>

        <div class="intern__item" data-start="2019-06-01" data-end="2019-08-01">
          <div class="intern__date">
            Jun 2019 — Jul 2019
            <span class="intern__duration"></span>
          </div>
          <div class="intern__line"></div>
          <div class="intern__content">
            <div class="intern__role">Project Intern</div>
            <div class="intern__company">Webteks Labs</div>
            <div class="intern__location">📍 Rajouri Garden, New Delhi, India</div>
            <div class="intern__desc">Learnt ML Engineering with Scikit, NumPy, Pandas & etc.</div>
          </div>
        </div>

        <div class="intern__item" data-start="2018-12-01" data-end="2019-02-01">
          <div class="intern__date">
            Dec 2018 — Jan 2019
            <span class="intern__duration"></span>
          </div>
          <div class="intern__line"></div>
          <div class="intern__content">
            <div class="intern__role">Project Intern</div>
            <div class="intern__company">Qutone Ceramics</div>
            <div class="intern__location">📍 Morbi/Rajkot, Gujarat, India</div>
            <div class="intern__desc">Assisted in Blueprint Reading, Pattern Design, Material Inspection & Handling.</div>
          </div>
        </div>

        <div class="intern__item" data-start="2018-12-01" data-end="2019-02-01">
          <div class="intern__date">
            Dec 2018 — Jan 2019
            <span class="intern__duration"></span>
          </div>
          <div class="intern__line"></div>
          <div class="intern__content">
            <div class="intern__role">Project Intern</div>
            <div class="intern__company">Maruti Spintex</div>
            <div class="intern__location">📍 Morbi/Rajkot, Gujarat, India</div>
            <div class="intern__desc">Understood Cotton Yarn Processing, Quality Checks, Fabric Testing & Defect Analysis.</div>
          </div>
        </div>

        <div class="intern__item" data-start="2018-06-01" data-end="2018-08-01">
          <div class="intern__date">
            Jun 2018 — Jul 2018
            <span class="intern__duration"></span>
          </div>
          <div class="intern__line"></div>
          <div class="intern__content">
            <div class="intern__role">Project Intern</div>
            <div class="intern__company">ShaktimanAgro</div>
            <div class="intern__location">📍 Gondal/Rajkot, Gujarat, India</div>
            <div class="intern__desc">Implemented World-class & Complete Farming Solutions to boost farming efficiency.</div>
          </div>
        </div>

      </div>

    </section>
  `;
}