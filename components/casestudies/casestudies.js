/* components/casestudies/casestudies.js */

document.addEventListener('DOMContentLoaded', function () {

  const list          = document.getElementById('caseList');
  const search        = document.getElementById('caseSearch');
  const frame         = document.getElementById('caseFrame');
  const placeholder   = document.getElementById('casePlaceholder');
  const previewName   = document.getElementById('casePreviewName');
  const previewResult = document.getElementById('casePreviewResult');
  const countEl       = document.getElementById('caseCount');
  const emptyEl       = document.getElementById('caseEmpty');
  const emptyTerm     = document.getElementById('caseEmptyTerm');
  const prevBtn       = document.getElementById('casePrev');
  const nextBtn       = document.getElementById('caseNext');
  const pageNums      = document.getElementById('casePageNums');

  if (!list) return;

  const PER_PAGE    = 5;
  let   currentPage = 1;
  let   filtered    = [];

  const allItems = Array.from(list.querySelectorAll('.case-list__item'));

  /* ── Save count ── */
  localStorage.setItem('count_casestudies', allItems.length);

  /* ── Load case into preview ── */
  function loadCase(item) {
    allItems.forEach(function(i) { i.classList.remove('active'); });
    item.classList.add('active');

    const driveId = item.dataset.drive;
    const name    = item.querySelector('.case-list__item-name').textContent;
    const result  = item.querySelector('.case-list__item-result').textContent;

    previewName.textContent   = name;
    previewResult.textContent = result;

    placeholder.style.display = 'none';
    frame.style.display       = 'block';
    frame.src = `https://drive.google.com/file/d/${driveId}/preview`;

    if (window.innerWidth <= 768) {
      document.querySelector('.cases__right').scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ── Render page ── */
  function renderPage(page) {
    currentPage = page;
    const start = (page - 1) * PER_PAGE;
    const end   = start + PER_PAGE;

    filtered.forEach(function(item, i) {
      item.style.display = (i >= start && i < end) ? '' : 'none';
    });

    const totalPages = Math.ceil(filtered.length / PER_PAGE);
    pageNums.innerHTML = '';

    for (let p = 1; p <= totalPages; p++) {
      const btn = document.createElement('button');
      btn.className   = 'cases__page-num' + (p === page ? ' active' : '');
      btn.textContent = p;
      btn.addEventListener('click', function() { renderPage(p); });
      pageNums.appendChild(btn);
    }

    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages || totalPages === 0;
  }

  /* ── Filter ── */
  function applyFilter(term) {
    filtered = allItems.filter(function(item) {
      const name      = item.dataset.name      || '';
      const organiser = (item.dataset.organiser || '').toLowerCase();
      const year      = (item.dataset.year      || '').toLowerCase();
      return name.includes(term) || organiser.includes(term) || year.includes(term);
    });

    allItems.forEach(function(item) { item.style.display = 'none'; });

    if (filtered.length === 0 && term.length > 0) {
      emptyEl.style.display  = 'block';
      emptyTerm.textContent  = search.value;
      list.style.display     = 'none';
      pageNums.innerHTML     = '';
      prevBtn.disabled       = true;
      nextBtn.disabled       = true;
      countEl.textContent    = '0 cases';
    } else {
      emptyEl.style.display  = 'none';
      list.style.display     = '';
      countEl.textContent    = filtered.length + ' case' + (filtered.length !== 1 ? 's' : '');
      renderPage(1);
    }
  }

  /* ── Clicks ── */
  allItems.forEach(function(item) {
    item.addEventListener('click', function() { loadCase(item); });
  });

  prevBtn.addEventListener('click', function() {
    if (currentPage > 1) renderPage(currentPage - 1);
  });

  nextBtn.addEventListener('click', function() {
    const total = Math.ceil(filtered.length / PER_PAGE);
    if (currentPage < total) renderPage(currentPage + 1);
  });

  search.addEventListener('input', function() {
    applyFilter(search.value.toLowerCase().trim());
  });

  /* ── Init ── */
  filtered = allItems.slice();
  renderPage(1);
  if (allItems.length > 0) loadCase(allItems[0]);

});