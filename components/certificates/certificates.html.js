function renderCertificates() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';

  const certificates = [
    { id: 1,  name: 'Google Data Analytics',               issuer: 'Google',                year: '2024', drive: 'SAMPLE_ID_1' },
    { id: 2,  name: 'AWS Cloud Practitioner',              issuer: 'Amazon',                year: '2023', drive: 'SAMPLE_ID_2' },
    { id: 3,  name: 'Meta Marketing Analytics',            issuer: 'Meta',                  year: '2023', drive: 'SAMPLE_ID_3' },
    { id: 4,  name: 'SQL for Data Science',                issuer: 'Coursera',              year: '2023', drive: 'SAMPLE_ID_4' },
    { id: 5,  name: 'Business Strategy',                   issuer: 'Yale University',       year: '2023', drive: 'SAMPLE_ID_5' },
    { id: 6,  name: 'Financial Markets',                   issuer: 'Yale University',       year: '2022', drive: 'SAMPLE_ID_6' },
    { id: 7,  name: 'Design Thinking',                     issuer: 'IDEO',                  year: '2022', drive: 'SAMPLE_ID_7' },
    { id: 8,  name: 'Project Management',                  issuer: 'Google',                year: '2022', drive: 'SAMPLE_ID_8' },
    { id: 9,  name: 'Digital Marketing',                   issuer: 'HubSpot',               year: '2022', drive: 'SAMPLE_ID_9' },
    { id: 10, name: 'Python for Everybody',                issuer: 'University of Michigan', year: '2021', drive: 'SAMPLE_ID_10' },
    { id: 11, name: 'Excel Skills for Business',           issuer: 'Macquarie University',  year: '2021', drive: 'SAMPLE_ID_11' },
    { id: 12, name: 'Leadership & Emotional Intelligence', issuer: 'ISB',                   year: '2021', drive: 'SAMPLE_ID_12' },
    { id: 13, name: 'Supply Chain Management',             issuer: 'Rutgers University',    year: '2021', drive: 'SAMPLE_ID_13' },
    { id: 14, name: 'Negotiation Fundamentals',            issuer: 'ESSEC Business School', year: '2021', drive: 'SAMPLE_ID_14' },
  ];

  const listItems = certificates.map(function(c) {
    return `
      <div class="cert-list__item cert__item"
           data-id="${c.id}"
           data-name="${c.name.toLowerCase()}"
           data-drive="${c.drive}"
           data-issuer="${c.issuer}"
           data-year="${c.year}">
        <div class="cert-list__item-info">
          <div class="cert-list__item-name">${c.name}</div>
          <div class="cert-list__item-meta">${c.issuer} · ${c.year}</div>
        </div>
        <span class="cert-list__item-arrow">›</span>
      </div>
    `;
  }).join('');

  return `
    <link rel="stylesheet" href="${b}components/certificates/certificates.css">

    <section class="certs">

      <div class="certs__header">
        <div class="certs__rule"></div>
        <div class="certs__header-row">
          <div>
            <h1 class="certs__title">Certifications</h1>
            <p class="certs__sub">Click any certificate to preview it. Not available for download.</p>
          </div>
          <div class="certs__total-badge">
            <span class="certs__total-val" id="certTotalVal">${certificates.length}</span>
            <span class="certs__total-label">Total Certificates</span>
          </div>
        </div>
      </div>

      <div class="certs__layout">

        <!-- Left: search + paginated list -->
        <div class="certs__left">

          <div class="certs__search-wrap">
            <input
              type="text"
              id="certSearch"
              class="certs__search"
              placeholder="🔍  Search certificates..."
              autocomplete="off">
            <div class="certs__count" id="certCount">${certificates.length} certificates</div>
          </div>

          <div class="cert-list" id="certList">
            ${listItems}
          </div>

          <div class="certs__empty" id="certEmpty" style="display:none;">
            <p>No results for "<span id="certEmptyTerm"></span>"</p>
          </div>

          <!-- Pagination -->
          <div class="certs__pagination" id="certPagination">
            <button class="certs__page-btn" id="certPrev">‹</button>
            <div class="certs__page-nums" id="certPageNums"></div>
            <button class="certs__page-btn" id="certNext">›</button>
          </div>

        </div>

        <!-- Right: preview -->
        <div class="certs__right">
          <div class="certs__preview-bar">
            <span class="certs__preview-name"   id="previewName">Select a certificate</span>
            <span class="certs__preview-issuer" id="previewIssuer"></span>
          </div>
          <div class="certs__frame-wrap">
            <div class="certs__placeholder" id="certPlaceholder">
              <div class="certs__placeholder-icon">📜</div>
              <p class="certs__placeholder-text">Select a certificate from the list to preview it</p>
            </div>
            <iframe
              id="certFrame"
              class="certs__frame"
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