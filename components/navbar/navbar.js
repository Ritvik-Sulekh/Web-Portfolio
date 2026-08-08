/* components/navbar/navbar.js */

document.addEventListener('DOMContentLoaded', function () {

  const wrap    = document.getElementById('navSearch');
  const toggle  = document.getElementById('navSearchToggle');
  const input   = document.getElementById('navSearchInput');
  const results = document.getElementById('navSearchResults');
  if (!wrap || !toggle || !input || !results) return;

  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';

  function openSearch() {
    wrap.classList.add('open');
    input.focus();
  }
  function closeSearch() {
    wrap.classList.remove('open');
    input.value = '';
    results.classList.remove('visible');
    results.innerHTML = '';
  }

  toggle.addEventListener('click', function () {
    wrap.classList.contains('open') ? closeSearch() : openSearch();
  });

  document.addEventListener('click', function (e) {
    if (!wrap.contains(e.target)) closeSearch();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSearch();
  });

  function renderResults(matches) {
    if (!matches.length) {
      results.innerHTML = '<div class="navbar__search-empty">No matches</div>';
      results.classList.add('visible');
      return;
    }
    results.innerHTML = matches.map(function (m) {
      return '<a class="navbar__search-result" href="' + b + m.href + '">' + m.title + '</a>';
    }).join('');
    results.classList.add('visible');
  }

  input.addEventListener('input', function () {
    const q = input.value;
    if (!q.trim()) { results.classList.remove('visible'); return; }
    const matches = typeof searchSite === 'function' ? searchSite(q) : [];
    renderResults(matches);
    logSearch(q); // see part 2 below
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const first = results.querySelector('.navbar__search-result');
      if (first) window.location.href = first.getAttribute('href');
    }
  });

});