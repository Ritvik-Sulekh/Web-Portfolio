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

  function fillInternships(key, fallback) {
    const stored = localStorage.getItem(key);
    const val    = stored !== null ? stored : fallback;

    // expected format: "1 yr 2 mo"
    const parts  = val.replace(/<[^>]*>/g, '').trim().split(' ');
    // parts = ['1', 'yr', '2', 'mo']

    const line1 = el('s-internships');
    const line2 = el('s-internships-2');

    if (line1) line1.innerHTML = parts[0] + ' <span style="font-size:0.82rem;font-weight:500;color:#16a34a">' + parts[1] + '</span>';
    if (line2) line2.innerHTML = parts[2] + ' <span style="font-size:0.82rem;font-weight:500;color:#16a34a">' + parts[3] + '</span>';
  }

/* ── Update fallbacks whenever you add new items ── */
  fill('s-experience',   'count_experience',   '7 <span style="font-size:0.82rem;font-weight:500;color:#16a34a">mo</span>');
  fill('s-internships', 'count_internships', '1.2 yr');
  fill('s-pors',         'count_pors',         '13');
  fill('s-projects',     'count_projects',     '4');
  fill('s-certificates', 'count_certificates', '20');
  fill('s-casestudies',  'count_casestudies',  '8');
  fill('s-publications', 'count_publications', '0');
  fill('s-testimonials', 'count_testimonials', '23');
  fill('s-skills',       'count_skills',       '35');
  fill('s-freelance',    'count_freelance',     '1');
  fill('s-resumes',      'count_resumes',       '3');
  fill('s-blogs',        'count_blogs',         '2');

})();
