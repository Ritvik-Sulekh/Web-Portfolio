function renderProjects() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';

  const projects = [
    { id: 1, name: 'Sales Dashboard 1', tech: 'App Script', year: '2024', drive: 'https://script.google.com/macros/s/AKfycbz28UWh-uLQb-X9mrjQGIVRFuYC7jUvu6Lo7g86E7aygoSLdoNhAR6yhYEskM_6R3Qh/exec' },
    { id: 2, name: 'Sales Dashboard 2', tech: 'Looker Studio', year: '2024', drive: 'https://datastudio.google.com/embed/reporting/4bf98d62-b0ea-421f-a226-606bb0ea4e7e/page/nPhPF' },
    { id: 3, name: 'Sales Dashboard 3', tech: 'Google Sheets', year: '2024', drive: 'https://docs.google.com/spreadsheets/d/1TDzzckIw7orOFj9_5vDGvDq6Q3QaRHZMqFGY3RLbfLw/preview' },
    { id: 4, name: 'Sales & Marketing Leadership Program', tech: 'Skilled Sapiens', year: '2023', drive: 'https://drive.google.com/file/d/1NuTEdyIKJccLS_NhGw2xnPVxn41tkWSN/preview' },
    { id: 5, name: 'Technical Analysis & Research on Nifty 200 companies', tech: 'Forevision', year: '2022', drive: 'https://drive.google.com/file/d/1iEXf1RyJFxMY6PzDsPGTQY04u-CuVbAi/preview' },
    { id: 6, name: 'Self-created Case Study', tech: 'Google Slides', year: '2024', drive: 'https://docs.google.com/presentation/d/1Dp857oSzx5-yuOx3OFHIZff_RvLFZxBt/embed' },
    
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
            <div class="frame__cover"></div>
            <iframe
              id="projFrame"
              class="projects__frame"
              src=""
              frameborder="0"
              allow="autoplay"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              style="display:none;">
            </iframe>
          </div>
        </div>

      </div>

    </section>
  `;
}