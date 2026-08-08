
(function () {

  const cards = document.querySelectorAll('.testi__card');

  /* ── Show count at top of page ── */
  const countEl = document.getElementById('testiCount');
  if (countEl) countEl.textContent = cards.length;

  /* ── Scroll reveal ── */
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (!entry.isIntersecting) return;
      setTimeout(function() {
        entry.target.classList.add('visible');
        entry.target.style.transition = 'opacity 0.45s ease, transform 0.45s ease, border-color 0.2s ease, box-shadow 0.2s ease';
      }, i * 80);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  cards.forEach(function(card) { observer.observe(card); });

  /* ── Update window.COUNTS if available ── */
  if (typeof window.COUNTS !== 'undefined') {
    window.COUNTS.testimonials = cards.length;
  }

  /* ── Save count to localStorage for summary ── */
  localStorage.setItem('count_testimonials', cards.length);
  
})();