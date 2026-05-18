/* components/certificates/certificates.js */

(function () {

  const list          = document.getElementById('certList');
  const search        = document.getElementById('certSearch');
  const frame         = document.getElementById('certFrame');
  const placeholder   = document.getElementById('certPlaceholder');
  const previewName   = document.getElementById('previewName');
  const previewIssuer = document.getElementById('previewIssuer');
  const countEl       = document.getElementById('certCount');
  const emptyEl       = document.getElementById('certEmpty');
  const emptyTerm     = document.getElementById('certEmptyTerm');
  const prevBtn       = document.getElementById('certPrev');
  const nextBtn       = document.getElementById('certNext');
  const pageNums      = document.getElementById('certPageNums');

  if (!list) return;

  const PER_PAGE   = 5;
  let   currentPage = 1;
  let   filteredItems = [];

  const allItems = Array.from(list.querySelectorAll('.cert-list__item'));

  /* ── Update window.COUNTS for summary ── */
  if (typeof window.COUNTS !== 'undefined') {
    window.COUNTS.certificates = allItems.length;
  }

  /* ── Load certificate into preview ── */
  function loadCert(item) {
    allItems.forEach(function(i) { i.classList.remove('active'); });
    item.classList.add('active');

    const driveId = item.dataset.drive;
    const name    = item.querySelector('.cert-list__item-name').textContent;
    const issuer  = item.querySelector('.cert-list__item-meta').textContent;

    previewName.textContent   = name;
    previewIssuer.textContent = issuer;

    placeholder.style.display = 'none';
    frame.style.display       = 'block';
    frame.src = `https://drive.google.com/file/d/${driveId}/preview`;

    if (window.innerWidth <= 768) {
      document.querySelector('.certs__right').scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ── Render a page ── */
  function renderPage(page) {
    currentPage = page;
    const start = (page - 1) * PER_PAGE;
    const end   = start + PER_PAGE;

    /* Show/hide items */
    filteredItems.forEach(function(item, i) {
      item.style.display = (i >= start && i < end) ? '' : 'none';
    });

    /* Render page number buttons */
    const totalPages = Math.ceil(filteredItems.length / PER_PAGE);
    pageNums.innerHTML = '';

    for (let p = 1; p <= totalPages; p++) {
      const btn = document.createElement('button');
      btn.className   = 'certs__page-num' + (p === page ? ' active' : '');
      btn.textContent = p;
      btn.addEventListener('click', function() { renderPage(p); });
      pageNums.appendChild(btn);
    }

    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages || totalPages === 0;
  }

  /* ── Apply filter and reset to page 1 ── */
  function applyFilter(term) {
    filteredItems = allItems.filter(function(item) {
      const name   = item.dataset.name   || '';
      const issuer = (item.dataset.issuer || '').toLowerCase();
      const year   = (item.dataset.year  || '').toLowerCase();
      return name.includes(term) || issuer.includes(term) || year.includes(term);
    });

    /* Hide all first */
    allItems.forEach(function(item) { item.style.display = 'none'; });

    if (filteredItems.length === 0 && term.length > 0) {
      emptyEl.style.display   = 'block';
      emptyTerm.textContent   = search.value;
      list.style.display      = 'none';
      pageNums.innerHTML      = '';
      prevBtn.disabled        = true;
      nextBtn.disabled        = true;
      countEl.textContent     = '0 certificates';
    } else {
      emptyEl.style.display   = 'none';
      list.style.display      = '';
      countEl.textContent     = filteredItems.length + ' certificate' + (filteredItems.length !== 1 ? 's' : '');
      renderPage(1);
    }
  }

  /* ── Click handler ── */
  allItems.forEach(function(item) {
    item.addEventListener('click', function() { loadCert(item); });
  });

  /* ── Prev / Next ── */
  prevBtn.addEventListener('click', function() {
    if (currentPage > 1) renderPage(currentPage - 1);
  });

  nextBtn.addEventListener('click', function() {
    const totalPages = Math.ceil(filteredItems.length / PER_PAGE);
    if (currentPage < totalPages) renderPage(currentPage + 1);
  });

  /* ── Search ── */
  search.addEventListener('input', function() {
    applyFilter(search.value.toLowerCase().trim());
  });

  /* ── Init ── */
  filteredItems = allItems.slice();
  renderPage(1);
  loadCert(allItems[0]);

  /* ── Save count to localStorage for summary ── */
  localStorage.setItem('count_certificates', allItems.length);

})();