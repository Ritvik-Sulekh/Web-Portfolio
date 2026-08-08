/* components/data/site-stats.js */
/* Single source of truth for summary slider + footer counts.
   - type:'duration' → auto-computed from a start date, never needs manual updates
   - type:'text'      → free text you control fully (e.g. "9 mo", "Ongoing")
   - type:'count'     → a plain number
*/

const SITE_STATS = {
  work_experience: { type: 'text', value: '9 mo' },
  internships:     { type: 'text', value: '1.2 yr' },

  education:      { type: 'count', value: 4 },
  freelance:      { type: 'count', value: 1 },
  pors:           { type: 'count', value: 13 },
  skills:         { type: 'count', value: 35 },
  testimonials:   { type: 'count', value: 23 },
  blogs:          { type: 'count', value: 2 },
  publications:   { type: 'count', value: 0 },
  ats_resumes:    { type: 'count', value: 3 },
  projects:       { type: 'count', value: 4 },
  case_studies:   { type: 'count', value: 8 },
  certificates:   { type: 'count', value: 20 },
};

function formatDuration(startStr, endStr) {
  const start = new Date(startStr);
  const end = endStr ? new Date(endStr) : new Date();
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  months = Math.max(months, 0);
  const yrs = Math.floor(months / 12);
  const mo = months % 12;
  if (yrs === 0) return mo + ' mo';
  if (mo === 0) return yrs + ' yr';
  return yrs + ' yr ' + mo + ' mo';
}

function getStat(key) {
  const s = SITE_STATS[key];
  if (!s) return '';
  if (s.type === 'duration') return formatDuration(s.start, s.end);
  return String(s.value);
}