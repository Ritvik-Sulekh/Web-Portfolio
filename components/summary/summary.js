/* components/summary/summary.js */

(function () {

  /* ── Wait until PROFILE is available ── */
  if (typeof PROFILE === 'undefined') {
    console.warn('summary.js: PROFILE not found. Make sure data/profile.js is loaded first.');
    return;
  }

  /* ── Helper: calculate duration from start to today or end date ── */
  function calcDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end   = endDate ? new Date(endDate) : new Date();
    let years   = end.getFullYear() - start.getFullYear();
    let months  = end.getMonth()    - start.getMonth();
    if (months < 0) { years--; months += 12; }
    return { years, months };
  }

  /* ── Helper: format as "1 yr 4 mo" ── */
  function formatDuration(years, months) {
    if (years === 0 && months === 0) return '<span class="summary__unit">—</span>';
    let parts = [];
    if (years  > 0) parts.push(years  + ' <span class="summary__unit">yr' + (years  > 1 ? 's' : '') + '</span>');
    if (months > 0) parts.push(months + ' <span class="summary__unit">mo</span>');
    return parts.join(' ');
  }

  /* ── Helper: total all internship durations ── */
  function totalInternships(list) {
    let total = 0;
    list.forEach(function (i) {
      const d = calcDuration(i.startDate, i.endDate);
      total  += d.years * 12 + d.months;
    });
    return { years: Math.floor(total / 12), months: total % 12 };
  }

  /* ── Fill profile text ── */
  document.getElementById('s-name').textContent    = PROFILE.name;
  document.getElementById('s-degree').textContent  = PROFILE.degree;
  document.getElementById('s-tagline').textContent = PROFILE.tagline;

  /* ── Fill experience ── */
  const exp = calcDuration(PROFILE.experience.startDate);
  document.getElementById('s-experience').innerHTML = formatDuration(exp.years, exp.months);

  /* ── Fill internships ── */
  const intern = totalInternships(PROFILE.internships);
  document.getElementById('s-internships').innerHTML = formatDuration(intern.years, intern.months);

  /* ── Fill counts ── */
  document.getElementById('s-pors').textContent         = PROFILE.pors;
  document.getElementById('s-projects').textContent     = PROFILE.projects;
  document.getElementById('s-certificates').textContent = PROFILE.certificates;
  document.getElementById('s-casestudies').textContent  = PROFILE.caseStudies;
  document.getElementById('s-publications').textContent = PROFILE.publications;

  /* ── Animate number cards on scroll into view ── */
  const cards = document.querySelectorAll('.summary__card');
  cards.forEach(function (card, i) {
    card.style.opacity    = '0';
    card.style.transform  = 'translateY(16px)';
    card.style.transition = 'opacity 0.4s ease ' + (i * 0.07) + 's, transform 0.4s ease ' + (i * 0.07) + 's';
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  cards.forEach(function (card) { observer.observe(card); });

})();