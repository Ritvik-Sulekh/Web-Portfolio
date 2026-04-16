/* components/skills/skills.js */

document.addEventListener('DOMContentLoaded', function () {

  const grid       = document.getElementById('skillsGrid');
  const filters    = document.getElementById('skillsFilters');
  const search     = document.getElementById('skillSearch');
  const countEl    = document.getElementById('skillSearchCount');
  const emptyEl    = document.getElementById('skillsEmpty');

  if (!grid) return;

  const allCards   = Array.from(grid.querySelectorAll('.skill__card'));

  /* ── Save count to localStorage ── */
  localStorage.setItem('count_skills', allCards.length);

  /* ── Animate bars on scroll ── */
  const barObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      const bar = entry.target.querySelector('.skill__bar');
      if (bar) bar.style.width = bar.dataset.width + '%';
      entry.target.classList.add('visible');
      entry.target.style.transition =
        'opacity 0.4s ease, transform 0.4s ease, border-color 0.2s, box-shadow 0.2s';
      barObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  allCards.forEach(function(card) { barObserver.observe(card); });

  /* ── Current state ── */
  let activeCategory = 'All';
  let searchTerm     = '';

  /* ── Apply filter + search ── */
  function applyFilters() {
    let visible = 0;

    allCards.forEach(function(card) {
      const cat     = card.dataset.category || '';
      const name    = card.querySelector('.skill__name').textContent.toLowerCase();
      const catMatch  = activeCategory === 'All' || cat === activeCategory;
      const termMatch = name.includes(searchTerm);
      const show      = catMatch && termMatch;

      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    countEl.textContent = visible + ' skill' + (visible !== 1 ? 's' : '');

    if (visible === 0) {
      emptyEl.style.display = 'flex';
      grid.style.display    = 'none';
    } else {
      emptyEl.style.display = 'none';
      grid.style.display    = 'grid';
    }
  }

  /* ── Filter button clicks ── */
  filters.querySelectorAll('.skills__filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      filters.querySelectorAll('.skills__filter-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      applyFilters();
    });
  });

  /* ── Search ── */
  search.addEventListener('input', function() {
    searchTerm = search.value.toLowerCase().trim();
    applyFilters();
  });

});