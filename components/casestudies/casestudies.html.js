function renderCaseStudies() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';

  const cases = [
    { id: 1,  name: 'CATALYSIS',     organiser: 'Swaniti Initiative',    year: '2023', result: 'Participant',  drive: 'https://drive.google.com/file/d/1pJKDN9PvE6F1RTsVtYYJyvbNZrmC-66h/preview' },
    { id: 2,  name: 'Tata Steel-a-thon',        organiser: 'Unstop',    year: '2022', result: 'Participant',  drive: 'https://drive.google.com/file/d/138L3MMtQ4OlSOFGqUP9VVIBUltlN0Np0/preview' },
    { id: 3,  name: 'Accenture School Challenge Season 5',          organiser: 'Unstop',    year: '2021', result: 'Participant',  drive: 'https://drive.google.com/file/d/11FjnIa8vzKlGCtGeDFWv3hravuJlxd6Q/preview' },
    { id: 4,  name: 'Amazon Customer Excellence (ACE) Challenge',         organiser: 'Unstop',     year: '2021', result: 'Participant',  drive: 'https://drive.google.com/file/d/15Lt19QQCCBKtlVm8fzU-M-9Z9XXlcUvg/preview' },
    { id: 5,  name: 'boAt Wavemakers Challenge Season 1',    organiser: 'Unstop',    year: '2021', result: 'Participant',  drive: 'https://drive.google.com/file/d/1B6qJt6CqVk56RbfkKhQYxzCEro4nVuiS/preview' },
    { id: 6,  name: 'Unstop IGNITE Season 4: Learn What to Learn and How to Learn in your MBA life!',        organiser: 'Unstop',    year: '2021', result: 'Participant',  drive: 'https://drive.google.com/file/d/19x4zHX90RMD_D4JNRbN8XtJEYmF3gX6v/preview' },
    { id: 7,  name: 'Bond with Pidilite',        organiser: 'Unstop',    year: '2021', result: 'Participant',  drive: 'https://drive.google.com/file/d/1MJ76-Eo1kYbb9ktTzR8rrVVxik-Zz4bg/preview' },
    { id: 8,  name: 'Swiss Re ReImagine Challenge',        organiser: 'Unstop',    year: '2021', result: 'Participant',  drive: 'https://drive.google.com/file/d/1yw95iI-4JucD3ASLU-bIaQciJb6vvhvx/preview' },
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
            <div class="frame__cover"></div>
            <iframe
              id="caseFrame"
              class="cases__frame"
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