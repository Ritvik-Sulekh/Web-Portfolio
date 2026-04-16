/* components/publications/publications.js */

document.addEventListener('DOMContentLoaded', function () {

  const items = document.querySelectorAll('.pubs__item');
  const count = items.length;

  localStorage.setItem('count_publications', count);
  const badge = document.getElementById('pubsTotal');
  if (badge) badge.textContent = count;

  /* Show list, hide empty state if items exist */
  const emptyEl = document.querySelector('.pubs__empty');
  const listEl  = document.querySelector('.pubs__list');
  if (count > 0) {
    if (emptyEl) emptyEl.style.display = 'none';
    if (listEl)  listEl.style.display  = 'flex';
  } else {
    if (listEl) listEl.style.display = 'none';
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  items.forEach(function(el) { observer.observe(el); });

});