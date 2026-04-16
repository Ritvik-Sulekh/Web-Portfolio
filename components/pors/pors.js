/* components/pors/pors.js */

document.addEventListener('DOMContentLoaded', function () {

  const items = document.querySelectorAll('.pors__item');

  /* ── Count & save ── */
  localStorage.setItem('count_pors', items.length);
  const badge = document.getElementById('porsTotal');
  if (badge) badge.textContent = items.length;

  /* ── Scroll reveal ── */
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  items.forEach(function(el) { observer.observe(el); });

});