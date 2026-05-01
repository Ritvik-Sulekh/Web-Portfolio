/* components/education/education.js */

document.addEventListener('DOMContentLoaded', function () {

  const items   = document.querySelectorAll('.edu__item');
  const degrees = document.querySelectorAll('.edu__item:not(.edu__item--gap)');

  /* Count unique degree+school combinations */
  const seen = new Set();
  let uniqueCount = 0;

  degrees.forEach(function(item) {
    const degree = (item.querySelector('.edu__degree') || {}).textContent || '';
    const school = (item.querySelector('.edu__school') || {}).textContent || '';
    const key    = degree.trim() + '|' + school.trim();

    if (!seen.has(key)) {
      seen.add(key);
      uniqueCount++;
    }
  });

  localStorage.setItem('count_education', uniqueCount);
  const badge = document.getElementById('eduTotal');
  if (badge) badge.textContent = uniqueCount;
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  items.forEach(function(el) { observer.observe(el); });

});
