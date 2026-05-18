/* components/summary/summary.js */

document.addEventListener('DOMContentLoaded', function () {

  if (typeof PROFILE === 'undefined') {
    console.warn('summary.js: PROFILE not found.');
    return;
  }

  function el(id) { return document.getElementById(id); }

  /* ── Fill profile text only ── */
  if (el('s-name'))    el('s-name').textContent    = PROFILE.name;
  if (el('s-degree'))  {
    el('s-degree').textContent = PROFILE.degree;
    el('s-degree').style.cursor = 'pointer';
    el('s-degree').addEventListener('click', function() {
      const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
      window.location.href = b + 'pages/education.html';
    });
  }
  if (el('s-tagline')) el('s-tagline').textContent = PROFILE.tagline;

  /* ── Animate cards ── */
  const cards = document.querySelectorAll('.summary__card');
  cards.forEach(function(card, i) {
    card.style.opacity    = '0';
    card.style.transform  = 'translateY(16px)';
    card.style.transition = 'opacity 0.4s ease ' + (i * 0.07) + 's, transform 0.4s ease ' + (i * 0.07) + 's';
  });

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  cards.forEach(function(card) { observer.observe(card); });

});