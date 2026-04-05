/* data/counter.js
   Shows real numbers from first visit using hardcoded fallbacks.
   Updates automatically when pages are visited. */

(function () {

  function el(id) { return document.getElementById(id); }

  function fill(id, key, fallback) {
    const stored = localStorage.getItem(key);
    const val    = stored !== null ? stored : fallback;
    const elem   = el(id);
    if (elem) elem.innerHTML = val;
  }

  /* ── Update fallbacks whenever you add new items ── */
  fill('s-experience',   'count_experience',   '5 <span style="font-size:0.82rem;font-weight:500;color:#16a34a">mo</span>');
  fill('s-internships',  'count_internships',  '1 <span style="font-size:0.82rem;font-weight:500;color:#16a34a">yr</span> 2 <span style="font-size:0.82rem;font-weight:500;color:#16a34a">mo</span>');
  fill('s-pors',         'count_pors',         '16');
  fill('s-projects',     'count_projects',     '4');
  fill('s-certificates', 'count_certificates', '14');
  fill('s-casestudies',  'count_casestudies',  '5');
  fill('s-publications', 'count_publications', '0');
  fill('s-testimonials', 'count_testimonials', '23');
  fill('s-achievements', 'count_achievements', '5');
  fill('s-freelance',    'count_freelance',     '1');
  fill('s-resumes',      'count_resumes',       '3');
  fill('s-blogs',        'count_blogs',         '5');

})();
