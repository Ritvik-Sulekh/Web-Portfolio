function renderSkills() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';

  const skills = [

    /* AI Tools */
    { id: 1,  name: 'Perplexity',                        category: 'AI Tools',      level: 100, levelLabel: 'Expert', cert: null },
    { id: 2,  name: 'Grok',                               category: 'AI Tools',      level: 100, levelLabel: 'Expert', cert: null },
    { id: 3,  name: 'Claude (Cowork, Code, API)',         category: 'AI Tools',      level: 100, levelLabel: 'Expert', cert: null },
    { id: 4,  name: 'ChatGPT (CustomGPT)',                category: 'AI Tools',      level: 100, levelLabel: 'Expert', cert: null },
    { id: 5,  name: 'Gemini',                             category: 'AI Tools',      level: 100, levelLabel: 'Expert', cert: null },

    /* Soft Skills */
    { id: 6,  name: 'Team Leadership',                    category: 'Soft Skills',   level: 100, levelLabel: 'Expert', cert: null },
    { id: 7,  name: 'Data Analysis',                      category: 'Soft Skills',   level: 100, levelLabel: 'Expert', cert: null },
    { id: 8,  name: 'Strategic Consulting',               category: 'Soft Skills',   level: 100, levelLabel: 'Expert', cert: null },
    { id: 9,  name: 'Critical Thinking',                  category: 'Soft Skills',   level: 100, levelLabel: 'Expert', cert: null },
    { id: 10, name: 'Communication & Negotiation',        category: 'Soft Skills',   level: 100, levelLabel: 'Expert', cert: null },

    /* Analytics & BI */
    { id: 11, name: 'MS Excel',                           category: 'Analytics & BI', level: 100, levelLabel: 'Expert', cert: 'pages/certifications.html' },
    { id: 12, name: 'Tableau',                            category: 'Analytics & BI', level: 100, levelLabel: 'Expert', cert: 'pages/certifications.html' },
    { id: 13, name: 'Power BI',                           category: 'Analytics & BI', level: 100, levelLabel: 'Expert', cert: null },
    { id: 14, name: 'Google Looker Studio',               category: 'Analytics & BI', level: 100, levelLabel: 'Expert', cert: null },
    { id: 15, name: 'SPSS',                               category: 'Analytics & BI', level: 100, levelLabel: 'Expert', cert: null },
    { id: 16, name: 'JMP Pro',                            category: 'Analytics & BI', level: 100, levelLabel: 'Expert', cert: null },

    /* Marketing Tools */
    { id: 17, name: 'Google Analytics',                   category: 'Marketing Tools', level: 100, levelLabel: 'Expert', cert: 'pages/certifications.html' },
    { id: 18, name: 'HubSpot',                            category: 'Marketing Tools', level: 100, levelLabel: 'Expert', cert: 'pages/certifications.html' },
    { id: 19, name: 'Omnisend',                           category: 'Marketing Tools', level: 100, levelLabel: 'Expert', cert: null },
    { id: 20, name: 'WebEngage',                          category: 'Marketing Tools', level: 100, levelLabel: 'Expert', cert: null },
    { id: 21, name: 'Zoho CRM',                           category: 'Marketing Tools', level: 100, levelLabel: 'Expert', cert: null },

    /* ERP */
    { id: 22, name: 'PetPooja ERP',                       category: 'ERP',           level: 100, levelLabel: 'Expert', cert: null },
    { id: 23, name: 'Posist ERP',                         category: 'ERP',           level: 100, levelLabel: 'Expert', cert: null },

    /* Dev Tools */
    { id: 24, name: 'Linux',                              category: 'Dev Tools',     level: 100, levelLabel: 'Expert', cert: null },
    { id: 25, name: 'GitHub',                             category: 'Dev Tools',     level: 100, levelLabel: 'Expert', cert: null },

    /* Programming */
    { id: 26, name: 'Python',                             category: 'Programming',   level: 100, levelLabel: 'Expert', cert: null },
    { id: 27, name: 'SQL',                                category: 'Programming',   level: 100, levelLabel: 'Expert', cert: 'pages/certifications.html' },
    { id: 28, name: 'HTML',                               category: 'Programming',   level: 100, levelLabel: 'Expert', cert: null },
    { id: 29, name: 'CSS',                                category: 'Programming',   level: 100, levelLabel: 'Expert', cert: null },
    { id: 30, name: 'JavaScript',                         category: 'Programming',   level: 100, levelLabel: 'Expert', cert: null },

    /* Design */
    { id: 31, name: 'CorelDraw',                          category: 'Design',        level: 100, levelLabel: 'Expert', cert: null },
    { id: 32, name: 'Photoshop',                          category: 'Design',        level: 100, levelLabel: 'Expert', cert: null },
    { id: 33, name: 'Illustrator',                        category: 'Design',        level: 100, levelLabel: 'Expert', cert: null },
    { id: 34, name: 'Figma',                              category: 'Design',        level: 100, levelLabel: 'Expert', cert: null },
    { id: 35, name: 'Canva',                              category: 'Design',        level: 100, levelLabel: 'Expert', cert: null },

  ];

  const categories = [
    'All',
    'AI Tools',
    'Soft Skills',
    'Analytics & BI',
    'Marketing Tools',
    'ERP',
    'Dev Tools',
    'Programming',
    'Design',
  ];

  const skillCards = skills.map(function(s) {
    const certBadge = s.cert
      ? `<a href="${b}${s.cert}" class="skill__cert-badge" title="View Certificate">📜 Certified</a>`
      : '';
    return `
      <div class="skill__card" data-category="${s.category}" data-level="${s.level}">
        <div class="skill__card-top">
          <div class="skill__name">${s.name}</div>
          <div class="skill__right">
            ${certBadge}
            <span class="skill__level-badge" style="background:#16a34a20;color:#16a34a;border-color:#16a34a40">Expert</span>
          </div>
        </div>
        <div class="skill__bar-wrap">
          <div class="skill__bar" data-width="100" style="background:#16a34a"></div>
        </div>
        <div class="skill__pct">100%</div>
      </div>
    `;
  }).join('');

  const filterBtns = categories.map(function(cat, i) {
    return `<button class="skills__filter-btn ${i === 0 ? 'active' : ''}" data-cat="${cat}">${cat}</button>`;
  }).join('');

  return `
    <link rel="stylesheet" href="${b}components/skills/skills.css">

    <section class="skills">

      <div class="skills__header">
        <div class="skills__rule"></div>
        <div class="skills__top">
          <div>
            <h1 class="skills__title">Skills</h1>
            <p class="skills__sub">Tools, technologies and competencies I use professionally. Click 📜 to view proof.</p>
          </div>
          <div class="skills__badge">
            <span class="skills__badge-val" id="skillsTotal">${skills.length}</span>
            <span class="skills__badge-label">Total Skills</span>
          </div>
        </div>
      </div>

      <div class="skills__filters" id="skillsFilters">
        ${filterBtns}
      </div>

      <div class="skills__search-wrap">
        <input
          type="text"
          id="skillSearch"
          class="skills__search"
          placeholder="🔍  Search skills..."
          autocomplete="off">
        <span class="skills__search-count" id="skillSearchCount">${skills.length} skills</span>
      </div>

      <div class="skills__grid" id="skillsGrid">
        ${skillCards}
      </div>

      <div class="skills__empty" id="skillsEmpty" style="display:none;">
        <div class="skills__empty-icon">🔍</div>
        <p class="skills__empty-text">No skills found</p>
      </div>

    </section>
  `;
}
