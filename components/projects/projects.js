/* components/projects/projects.js */

document.addEventListener('DOMContentLoaded', function () {

  const list        = document.getElementById('projList');
  const search      = document.getElementById('projSearch');
  const frame       = document.getElementById('projFrame');
  const placeholder = document.getElementById('projPlaceholder');
  const previewName = document.getElementById('projPreviewName');
  const previewTech = document.getElementById('projPreviewTech');
  const countEl     = document.getElementById('projCount');
  const emptyEl     = document.getElementById('projEmpty');
  const emptyTerm   = document.getElementById('projEmptyTerm');
  const prevBtn     = document.getElementById('projPrev');
  const nextBtn     = document.getElementById('projNext');
  const pageNums    = document.getElementById('projPageNums');

  if (!list) return;

  const PER_PAGE    = 5;
  let   currentPage = 1;
  let   filtered    = [];

  const allItems = Array.from(list.querySelectorAll('.proj-list__item'));

  /* ── Save count ── */
  localStorage.setItem('count_projects', allItems.length);

  function loadProject(item) {
    allItems.forEach(function(i) { i.classList.remove('active'); });
    item.classList.add('active');

    const driveId = item.dataset.drive;
    const name    = item.querySelector('.proj-list__item-name').textContent;
    const tech    = item.querySelector('.proj-list__item-meta').textContent;

    previewName.textContent = name;
    previewTech.textContent = tech;

    placeholder.style.display = 'none';
    frame.style.display       = 'block';
    frame.src = `https://drive.google.com/file/d/${driveId}/preview`;

    if (window.innerWidth <= 768) {
      document.querySelector('.projects__right').scrollIntoView({ behavior: 'smooth' });
    }
  }

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
      btn.className   = 'projects__page-num' + (p === page ? ' active' : '');
      btn.textContent = p;
      btn.addEventListener('click', function() { renderPage(p); });
      pageNums.appendChild(btn);
    }

    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages || totalPages === 0;
  }

  function applyFilter(term) {
    filtered = allItems.filter(function(item) {
      const name = item.dataset.name || '';
      const tech = (item.dataset.tech || '').toLowerCase();
      const year = (item.dataset.year || '').toLowerCase();
      return name.includes(term) || tech.includes(term) || year.includes(term);
    });

    allItems.forEach(function(item) { item.style.display = 'none'; });

    if (filtered.length === 0 && term.length > 0) {
      emptyEl.style.display  = 'block';
      emptyTerm.textContent  = search.value;
      list.style.display     = 'none';
      pageNums.innerHTML     = '';
      prevBtn.disabled       = true;
      nextBtn.disabled       = true;
      countEl.textContent    = '0 projects';
    } else {
      emptyEl.style.display  = 'none';
      list.style.display     = '';
      countEl.textContent    = filtered.length + ' project' + (filtered.length !== 1 ? 's' : '');
      renderPage(1);
    }
  }

  allItems.forEach(function(item) {
    item.addEventListener('click', function() { loadProject(item); });
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

  filtered = allItems.slice();
  renderPage(1);
  if (allItems.length > 0) loadProject(allItems[0]);

});