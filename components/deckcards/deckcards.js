/* components/deckcards/deckcards.js */
/* Staggered fade-in as cards scroll into view */

(function () {

  const cards = document.querySelectorAll('.dc');

  cards.forEach(function (card, i) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.4s ease ' + (i * 0.07) + 's, transform 0.4s ease ' + (i * 0.07) + 's';
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  cards.forEach(function (card) { observer.observe(card); });

})();