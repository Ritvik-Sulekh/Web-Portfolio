/* components/blogs/blogs.js */

document.addEventListener('DOMContentLoaded', function () {

  const cards = document.querySelectorAll('.blog-card');

  /* ── Save count to localStorage ── */
  localStorage.setItem('count_blogs', cards.length);

  /* ── Show badge on page ── */
  const badge = document.getElementById('blogsTotal');
  if (badge) badge.textContent = cards.length;

  /* ── Scroll reveal ── */
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (!entry.isIntersecting) return;
      setTimeout(function() {
        entry.target.classList.add('visible');
      }, i * 100);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  cards.forEach(function(card) { observer.observe(card); });

});