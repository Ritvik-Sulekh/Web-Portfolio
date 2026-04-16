function renderProjects() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';

  const projects = [
    { id: 1, name: 'AI-Powered Resume Screener',     tech: 'Python · BERT · NLP',   year: '2024', desc: 'NLP model that screens resumes with 91% accuracy.',     drive: 'SAMPLE_ID_1' },
    { id: 2, name: 'Market Entry Strategy — EV',     tech: 'Strategy · Research',   year: '2023', desc: 'GTM strategy for an EV startup across 3 Indian cities.',  drive: 'SAMPLE_ID_2' },
    { id: 3, name: 'Supply Chain Dashboard',         tech: 'Tableau · SQL',         year: '2023', desc: 'Dashboard that reduced stockout reporting time by 40%.',  drive: 'SAMPLE_ID_3' },
    { id: 4, name: 'Brand Identity — D2C Startup',   tech: 'Figma · Branding',      year: '2022', desc: 'Full brand identity for a direct-to-consumer startup.',  drive: 'SAMPLE_ID_4' },
  ];

  const listItems = projects.map(function(p) {
    return `
      <div class="proj-list__item"
           data-id="${p.id}"
           data-name="${p.name.toLowerCase()}"
           data-drive="${p.drive}"
           data-tech="${p.tech}"
           data-year="${p.year}">
        <div class="proj-list__item-info">
          <div class="proj-list__item-name">${p.name}</div>
          <div class="proj-list__item-meta">${p.tech} · ${p.year}</div>
        </div>
        <span class="proj-list__item-arrow">›</span>
      </div>
    `;
  }).join('');

  return `
    <link rel="stylesheet" href="${b}components/projects/projects.css">

    <section class="projects">

      <div class="projects__header">
        <div class="projects__rule"></div>
        <div class="projects__header-row">
          <div>
            <h1 class="projects__title">Projects</h1>
            <p class="projects__sub">Click any project to preview. Not available for download.</p>
          </div>
          <div class="projects__total-badge">
            <span class="projects__total-val" id="projectsTotalVal">${projects.length}</span>
            <span class="projects__total-label">Total</span>
          </div>
        </div>
      </div>

      <div class="projects__layout">

        <div class="projects__left">
          <div class="projects__search-wrap">
            <input
              type="text"
              id="projSearch"
              class="projects__search"
              placeholder="🔍  Search projects..."
              autocomplete="off">
            <div class="projects__count" id="projCount">${projects.length} projects</div>
          </div>

          <div class="proj-list" id="projList">
            ${listItems}
          </div>

          <div class="projects__empty" id="projEmpty" style="display:none;">
            <p>No results for "<span id="projEmptyTerm"></span>"</p>
          </div>

          <div class="projects__pagination" id="projPagination">
            <button class="projects__page-btn" id="projPrev">‹</button>
            <div class="projects__page-nums" id="projPageNums"></div>
            <button class="projects__page-btn" id="projNext">›</button>
          </div>
        </div>

        <div class="projects__right">
          <div class="projects__preview-bar">
            <span class="projects__preview-name" id="projPreviewName">Select a project</span>
            <span class="projects__preview-tech" id="projPreviewTech"></span>
          </div>
          <div class="projects__frame-wrap">
            <div class="projects__placeholder" id="projPlaceholder">
              <div class="projects__placeholder-icon">🚀</div>
              <p class="projects__placeholder-text">Select a project to preview it</p>
            </div>
            <iframe
              id="projFrame"
              class="projects__frame"
              src=""
              frameborder="0"
              style="display:none;">
            </iframe>
          </div>
        </div>

      </div>

    </section>
  `;
}