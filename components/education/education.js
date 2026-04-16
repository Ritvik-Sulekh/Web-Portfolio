/* components/education/education.js */

document.addEventListener('DOMContentLoaded', function () {

  const items = document.querySelectorAll('.edu__item');

  localStorage.setItem('count_education', items.length);
  const badge = document.getElementById('eduTotal');
  if (badge) badge.textContent = items.length;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  items.forEach(function(el) { observer.observe(el); });

});