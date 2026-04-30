function renderPors() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/pors/pors.css">

    <section class="pors">

      <div class="pors__header">
        <div class="pors__rule"></div>
        <div class="pors__top">
          <div>
            <h1 class="pors__title">Positions of Responsibility</h1>
            <p class="pors__sub">Leadership roles & responsibilities held on campus and beyond</p>
          </div>
          <div class="pors__badge">
            <span class="pors__badge-val" id="porsTotal">—</span>
            <span class="pors__badge-label">Total PORs</span>
          </div>
        </div>
      </div>

      <div class="pors__list">

        <div class="pors__item">
          <div class="pors__date">
            Nov 2024 — Dec 2024
            <span class="pors__duration">2 months</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Program Manager</div>
            <div class="pors__org">Guinness World Record @ Harley's</div>
            <div class="pors__desc">Won Guinness World Record on 06 Dec 2024</div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            Oct 2024 — Oct 2024
            <span class="pors__duration">1 month</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Project Manager</div>
            <div class="pors__org">Guinness World Record @ Harley's</div>
            <div class="pors__desc">Handled a budget of 1 Cr+</div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            2023 — 2024
            <span class="pors__duration">4 month</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Subject Representative (Senior)</div>
            <div class="pors__org">Business Relationships & Networks @ IIM Udaipur</div>
            <div class="pors__desc"></div>
          </div>
        </div>
      
      <div class="pors__item">
          <div class="pors__date">
            2023 — 2024
            <span class="pors__duration">1 year</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Design Vertical Head</div>
            <div class="pors__org">Utkrisht Sports Fest. @ IIM Udaipur</div>
            <div class="pors__desc"></div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            2023 — 2024
            <span class="pors__duration">1 year</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Senior Student Representative</div>
            <div class="pors__org">Library Committee @ IIM Udaipur</div>
            <div class="pors__desc"></div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            2022 — 2023
            <span class="pors__duration">1 year</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Junior Student Representative</div>
            <div class="pors__org">Library Committee @ IIM Udaipur</div>
            <div class="pors__desc"></div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            2021 — 2023
            <span class="pors__duration">1 year</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Junior Team Member - Design Vertical</div>
            <div class="pors__org">Utkrisht Sports Fest. @ IIM Udaipur</div>
            <div class="pors__desc"></div>
          </div>
        </div>
  
      <div class="pors__item">
          <div class="pors__date">
            2020
            <span class="pors__duration">1 year</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Coordinator</div>
            <div class="pors__org">Convocation @ SRMUH</div>
            <div class="pors__desc"></div>
          </div>
        </div>

        <div class="pors__item">
          <div class="pors__date">
            2019
            <span class="pors__duration">1 year</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Organizer</div>
            <div class="pors__org">Times Conference @ SRMUH</div>
            <div class="pors__desc"></div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            2018
            <span class="pors__duration">1 year</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Industrial Visit Coordinator</div>
            <div class="pors__org">Doordarshan Kendra Kasauli @ SRMUH</div>
            <div class="pors__desc"></div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            2018
            <span class="pors__duration">1 year</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Volunteer</div>
            <div class="pors__org">AAGAAZ College Fest. @ SRMUH</div>
            <div class="pors__desc"></div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            2017
            <span class="pors__duration">1 year</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Volunteer</div>
            <div class="pors__org">Club 101 College Fest. @ SRMUH</div>
            <div class="pors__desc"></div>
          </div>
        </div>
      
      <div class="pors__item">
          <div class="pors__date">
            2017 - 2020
            <span class="pors__duration">3 year</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Class Representative</div>
            <div class="pors__org">Computer Science & Engineering (CSE) Department @ SRMUH</div>
            <div class="pors__desc"></div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            2015
            <span class="pors__duration">4 months</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Volunteer</div>
            <div class="pors__org">Social Service Camp (Daman & Diu) @ Ryan International School, Mumbai</div>
            <div class="pors__desc"></div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            2014
            <span class="pors__duration">3 months</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">School Representative (Global Level)</div>
            <div class="pors__org">Worlds Scholar Cup @ Ryan International School, Mumbai</div>
            <div class="pors__desc"></div>
          </div>
        </div>

      <div class="pors__item">
          <div class="pors__date">
            2013
            <span class="pors__duration">4 months</span>
          </div>
          <div class="pors__line"></div>
          <div class="pors__content">
            <div class="pors__role">Volunteer</div>
            <div class="pors__org">Social Service Camp (Aurangabad) @ Ryan International School, Mumbai</div>
            <div class="pors__desc"></div>
          </div>
        </div>

        </div>

    </section>
  `;
}
