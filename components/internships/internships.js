/* components/internships/internships.js */

(function () {

  function calcDuration(startStr, endStr) {
    const start = new Date(startStr);
    const end   = endStr ? new Date(endStr) : new Date();
    let years   = end.getFullYear() - start.getFullYear();
    let months  = end.getMonth()    - start.getMonth();
    if (months < 0) { years--; months += 12; }
    return { years, months };
  }

  function formatDuration(years, months) {
    const parts = [];
    if (years  > 0) parts.push(years  + ' yr' + (years  > 1 ? 's' : ''));
    if (months > 0) parts.push(months + ' mo');
    return parts.join(' ') || '< 1 mo';
  }

  /* ── Calculate each item duration ── */
  const items = document.querySelectorAll('.intern__item[data-start]');
  let totalMonths = 0;

  items.forEach(function(item) {
    const start = item.dataset.start;
    const end   = item.dataset.end || '';
    const dur   = calcDuration(start, end);
    totalMonths += dur.years * 12 + dur.months;

    const durEl = item.querySelector('.intern__duration');
    if (durEl) durEl.textContent = formatDuration(dur.years, dur.months);
  });

  /* ── Update total badge ── */
  const totalYears   = Math.floor(totalMonths / 12);
  const totalMonths2 = totalMonths % 12;
  const badge = document.getElementById('internTotal');
  if (badge) badge.innerHTML = formatDuration(totalYears, totalMonths2);

  /* ── Scroll reveal ── */
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.intern__item').forEach(function(el) {
    observer.observe(el);
  });

  /* ── Save duration to localStorage for summary ── */
  localStorage.setItem('count_internships', formatDuration(totalYears, totalMonths2));
  
})();