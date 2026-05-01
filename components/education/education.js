/* components/education/education.js */

document.addEventListener('DOMContentLoaded', function () {

  const items    = document.querySelectorAll('.edu__item');
  const degrees  = document.querySelectorAll('.edu__item:not(.edu__item--gap)');

  /* Count only real degrees, not gap years */
  localStorage.setItem('count_education', degrees.length);
  const badge = document.getElementById('eduTotal');
  if (badge) badge.textContent = degrees.length;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  items.forEach(function(el) { observer.observe(el); });

});
