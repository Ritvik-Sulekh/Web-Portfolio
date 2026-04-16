function renderSkills() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';

  const skills = [
    /* Technical */
    { id: 1,  name: 'Python',                  category: 'Technical',   level: 85, levelLabel: 'Advanced',     cert: null },
    { id: 2,  name: 'SQL',                      category: 'Technical',   level: 80, levelLabel: 'Advanced',     cert: 'pages/certifications.html' },
    { id: 3,  name: 'Data Analysis',            category: 'Technical',   level: 90, levelLabel: 'Expert',       cert: 'pages/certifications.html' },
    { id: 4,  name: 'Tableau',                  category: 'Technical',   level: 75, levelLabel: 'Proficient',   cert: 'pages/certifications.html' },
    { id: 5,  name: 'Excel & Spreadsheets',     category: 'Technical',   level: 90, levelLabel: 'Expert',       cert: 'pages/certifications.html' },

    /* Management */
    { id: 6,  name: 'Strategic Thinking',       category: 'Management',  level: 90, levelLabel: 'Expert',       cert: null },
    { id: 7,  name: 'Project Management',       category: 'Management',  level: 85, levelLabel: 'Advanced',     cert: 'pages/certifications.html' },
    { id: 8,  name: 'Team Leadership',          category: 'Management',  level: 88, levelLabel: 'Advanced',     cert: null },
    { id: 9,  name: 'Business Development',     category: 'Management',  level: 82, levelLabel: 'Advanced',     cert: null },
    { id: 10, name: 'GTM Strategy',             category: 'Management',  level: 85, levelLabel: 'Advanced',     cert: 'pages/case-competitions.html' },

    /* Tools */
    { id: 11, name: 'Figma',                    category: 'Tools',       level: 70, levelLabel: 'Proficient',   cert: null },
    { id: 12, name: 'Google Analytics',         category: 'Tools',       level: 80, levelLabel: 'Advanced',     cert: 'pages/certifications.html' },
    { id: 13, name: 'HubSpot',                  category: 'Tools',       level: 75, levelLabel: 'Proficient',   cert: 'pages/certifications.html' },
    { id: 14, name: 'AWS',                      category: 'Tools',       level: 65, levelLabel: 'Intermediate', cert: 'pages/certifications.html' },
    { id: 15, name: 'MS Office Suite',          category: 'Tools',       level: 92, levelLabel: 'Expert',       cert: null },

    /* Soft Skills */
    { id: 16, name: 'Communication',            category: 'Soft Skills', level: 92, levelLabel: 'Expert',       cert: null },
    { id: 17, name: 'Problem Solving',          category: 'Soft Skills', level: 90, levelLabel: 'Expert',       cert: null },
    { id: 18, name: 'Negotiation',              category: 'Soft Skills', level: 80, levelLabel: 'Advanced',     cert: 'pages/certifications.html' },
    { id: 19, name: 'Public Speaking',          category: 'Soft Skills', level: 78, levelLabel: 'Advanced',     cert: null },
    { id: 20, name: 'Critical Thinking',        category: 'Soft Skills', level: 88, levelLabel: 'Advanced',     cert: null },

    /* Domain */
    { id: 21, name: 'Marketing & Branding',     category: 'Domain',      level: 88, levelLabel: 'Advanced',     cert: 'pages/certifications.html' },
    { id: 22, name: 'Financial Analysis',       category: 'Domain',      level: 82, levelLabel: 'Advanced',     cert: 'pages/certifications.html' },
    { id: 23, name: 'Supply Chain',             category: 'Domain',      level: 78, levelLabel: 'Advanced',     cert: 'pages/certifications.html' },
    { id: 24, name: 'Digital Marketing',        category: 'Domain',      level: 85, levelLabel: 'Advanced',     cert: 'pages/certifications.html' },
    { id: 25, name: 'Design Thinking',          category: 'Domain',      level: 80, levelLabel: 'Advanced',     cert: 'pages/certifications.html' },
  ];

  const categories = ['All', 'Technical', 'Management', 'Tools', 'Soft Skills', 'Domain'];

  const levelColors = {
    'Expert':       '#16a34a',
    'Advanced':     '#22c55e',
    'Proficient':   '#FFB6C1',
    'Intermediate': '#f59e0b',
    'Beginner':     '#94a3b8',
  };

  const skillCards = skills.map(function(s) {
    const color = levelColors[s.levelLabel] || '#16a34a';
    const certBadge = s.cert
      ? `<a href="${b}${s.cert}" class="skill__cert-badge" title="View Certificate">📜 Certified</a>`
      : '';
    return `
      <div class="skill__card" data-category="${s.category}" data-level="${s.level}">
        <div class="skill__card-top">
          <div class="skill__name">${s.name}</div>
          <div class="skill__right">
            ${certBadge}
            <span class="skill__level-badge" style="background:${color}20;color:${color};border-color:${color}40">${s.levelLabel}</span>
          </div>
        </div>
        <div class="skill__bar-wrap">
          <div class="skill__bar" data-width="${s.level}" style="background:${color}"></div>
        </div>
        <div class="skill__pct">${s.level}%</div>
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
            <p class="skills__sub">Proficiency levels backed by certifications where applicable. Click 📜 to view proof.</p>
          </div>
          <div class="skills__badge">
            <span class="skills__badge-val" id="skillsTotal">${skills.length}</span>
            <span class="skills__badge-label">Total Skills</span>
          </div>
        </div>
      </div>

      <!-- Filter bar -->
      <div class="skills__filters" id="skillsFilters">
        ${filterBtns}
      </div>

      <!-- Search -->
      <div class="skills__search-wrap">
        <input
          type="text"
          id="skillSearch"
          class="skills__search"
          placeholder="🔍  Search skills..."
          autocomplete="off">
        <span class="skills__search-count" id="skillSearchCount">${skills.length} skills</span>
      </div>

      <!-- Skills grid -->
      <div class="skills__grid" id="skillsGrid">
        ${skillCards}
      </div>

      <!-- No results -->
      <div class="skills__empty" id="skillsEmpty" style="display:none;">
        <div class="skills__empty-icon">🔍</div>
        <p class="skills__empty-text">No skills found</p>
      </div>

    </section>
  `;
}