/* components/top02/top02.js */

(function () {

  const items = document.querySelectorAll('.top02__step, .top02__me');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (!entry.isIntersecting) return;
      setTimeout(function() {
        entry.target.classList.add('visible');
      }, i * 100);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  items.forEach(function(item) { observer.observe(item); });

})();