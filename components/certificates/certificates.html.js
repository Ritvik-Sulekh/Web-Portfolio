function renderCertificates() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';

  const certificates = [
  { id: 1,  name: 'Claude 101', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1L-ocjTBjKC32g4sHULgd6ihzviy_tyQQ/preview' },
  { id: 2,  name: 'Claude with the Anthropic API', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1D_Oe4l-sR3-RlPFNZs3N58OCmna5EIXE/preview' },
  { id: 3,  name: 'Claude Code 101', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/18abyTyxtOfoGGJ77p58zSIyx_lmEf-1d/preview' },
  { id: 4,  name: 'Claude Code in Action', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1pfYDD7R13el4t8g4QLwr4rBgTxamMA7l/preview' },
  { id: 5,  name: 'Introduction to Agent Skills', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1p0l8U6aDns6NXoP4kgGoEjcFjje2VIH6/preview' },
  { id: 6,  name: 'Introduction to Subagents', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1obmqmh7c9_g7p8xutg7t2NviNsuu4iNz/preview' },
  { id: 7,  name: 'Introduction to Model Context Protocol', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/10Eu27RXkBpTgAOxj-MgyQquM_F-Snbgk/preview' },
  { id: 8,  name: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1F_4Q7xU-P1TDbWqdu355jeVzQ8aQ8IVj/preview' },
  { id: 9,  name: 'Claude with Amazon Bedrock', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1BNUvZD5eV29uCkg7Kmz2UUxmgSpLef4y/preview' },
  { id: 10, name: 'Claude with Google Vertex AI', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1kt7Y0cc58y71Ic2upyhRcOwqkaFSex9x/preview' },
  { id: 11, name: 'Introduction to Claude Cowork', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1SBlYntv8BJyfNLJb8XTb3bnClbGPyboH/preview' },
  { id: 12, name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1z-nnAsMBzrEaQBXd5NaK2p7Sa0XImpxm/preview' },
  { id: 13, name: 'Teaching the AI Fluency Framework', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/12yGdz1HlkykdGK3nnn6eQMyBx9dXMonQ/preview' },
  { id: 14, name: 'AI Fluency: AI Capabilities & Limitations', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1q7jcAr6ceTaVI56YNKac1-qfX5poY1Mr/preview' },
  { id: 15, name: 'AI Fluency for Small Business', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1PaT9U8JtZoNJq0qi4YhoZzr0V0Jeqar8/preview' },
  { id: 16, name: 'AI Fluency for Nonprofits', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/10dtanltMUyF11JSLcjoa2yHjUo-F_krE/preview' },
  { id: 17, name: 'AI Fluency for Educators', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1qzaHb5r1BZSHaRTGgY3VzoCeXUEtFk09/preview' },
  { id: 18, name: 'AI Fluency for Students', issuer: 'Anthropic', year: '2026', drive: 'https://drive.google.com/file/d/1OmQ-Tzq_o-kOOEgya-SR_BEGN_edTytR/preview' },
  { id: 19, name: 'Introduction to Programming with Python', issuer: 'Harvard CS50', year: '2024', drive: 'https://drive.google.com/file/d/10mk3r9tZtWXuyyFgaXwxCdOZkXTI7IFD/preview' },
  { id: 20, name: '', issuer: '', year: '2026', drive: '' },
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
          <div class="certs__total-badge" style="margin-bottom:1.5rem;">
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
            <div class="frame__cover"></div>
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