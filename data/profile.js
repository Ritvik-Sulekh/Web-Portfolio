/* components/summary/summary.js */
/* Animates the number values on page load */

(function () {

  const cards = document.querySelectorAll('.summary__card');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      const valueEl = entry.target.querySelector('.summary__value');
      if (!valueEl) return;

      /* Only animate pure number cards, skip "4 mo", "1 yr 4 mo" */
      const text = valueEl.textContent.trim();
      const num  = parseInt(text);
      if (isNaN(num) || text.includes('yr') || text.includes('mo')) return;

      let start     = 0;
      const end     = num;
      const dur     = 900;
      const t0      = performance.now();

      /* Keep any unit spans inside */
      const unitHTML = valueEl.innerHTML.replace(/\d+/, '').trim();

      function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        const v = Math.round(p * p * end); /* ease in */
        valueEl.innerHTML = v + (unitHTML ? ' ' + unitHTML : '');
        if (p < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  cards.forEach(function (card) { observer.observe(card); });

})();