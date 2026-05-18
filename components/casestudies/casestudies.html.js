function renderCaseStudies() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';

  const cases = [
    { id: 1,  name: 'National Strategy Challenge',     organiser: 'IIM Ahmedabad',    year: '2024', result: '🥇 Winner',     drive: 'SAMPLE_ID_1' },
    { id: 2,  name: 'Marketing Maverick Cup',          organiser: 'IIM Bangalore',    year: '2024', result: '🥈 Runner Up',  drive: 'SAMPLE_ID_2' },
    { id: 3,  name: 'EV GTM Case Competition',         organiser: 'IIM Calcutta',     year: '2023', result: '🥇 Winner',     drive: 'SAMPLE_ID_3' },
    { id: 4,  name: 'FinTech Innovation Challenge',    organiser: 'ISB Hyderabad',    year: '2023', result: '🏅 Top 5',      drive: 'SAMPLE_ID_4' },
    { id: 5,  name: 'Supply Chain Summit Case',        organiser: 'IIM Kozhikode',    year: '2022', result: '🥉 3rd Place',  drive: 'SAMPLE_ID_5' },
  ];

  const listItems = cases.map(function(c) {
    return `
      <div class="case-list__item"
           data-id="${c.id}"
           data-name="${c.name.toLowerCase()}"
           data-drive="${c.drive}"
           data-organiser="${c.organiser}"
           data-year="${c.year}">
        <div class="case-list__item-info">
          <div class="case-list__item-name">${c.name}</div>
          <div class="case-list__item-meta">${c.organiser} · ${c.year}</div>
        </div>
        <span class="case-list__item-result">${c.result}</span>
        <span class="case-list__item-arrow">›</span>
      </div>
    `;
  }).join('');

  return `
    <link rel="stylesheet" href="${b}components/casestudies/casestudies.css">

    <section class="cases">

      <div class="cases__header">
        <div class="cases__rule"></div>
        <div class="cases__header-row">
          <div>
            <h1 class="cases__title">Case Competitions</h1>
            <p class="cases__sub">Click any case to preview my submission. Not available for download.</p>
          </div>
          <div class="cases__total-badge">
            <span class="cases__total-val" id="casesTotalVal">${cases.length}</span>
            <span class="cases__total-label">Total</span>
          </div>
        </div>
      </div>

      <div class="cases__layout">

        <div class="cases__left">
          <div class="cases__search-wrap">
            <input
              type="text"
              id="caseSearch"
              class="cases__search"
              placeholder="🔍  Search case competitions..."
              autocomplete="off">
            <div class="cases__count" id="caseCount">${cases.length} cases</div>
          </div>

          <div class="case-list" id="caseList">
            ${listItems}
          </div>

          <div class="cases__empty" id="caseEmpty" style="display:none;">
            <p>No results for "<span id="caseEmptyTerm"></span>"</p>
          </div>

          <div class="cases__pagination" id="casePagination">
            <button class="cases__page-btn" id="casePrev">‹</button>
            <div class="cases__page-nums" id="casePageNums"></div>
            <button class="cases__page-btn" id="caseNext">›</button>
          </div>
        </div>

        <div class="cases__right">
          <div class="cases__preview-bar">
            <span class="cases__preview-name"   id="casePreviewName">Select a case</span>
            <span class="cases__preview-result" id="casePreviewResult"></span>
          </div>
          <div class="cases__frame-wrap">
            <div class="cases__placeholder" id="casePlaceholder">
              <div class="cases__placeholder-icon">🏆</div>
              <p class="cases__placeholder-text">Select a case competition to preview the submission</p>
            </div>
            <iframe
              id="caseFrame"
              class="cases__frame"
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