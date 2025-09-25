document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('.skills-row');

  function setupRows() {
    rows.forEach((row, rowIndex) => {
      const parentWidth = row.parentElement.offsetWidth;

      // Reset paddings: start and end off-screen
      row.style.paddingLeft = '100%';
      row.style.paddingRight = '100%';

      const bubbles = Array.from(row.querySelectorAll('.skill-bubble'));
      if (!bubbles.length) return;

      const gap = parseFloat(getComputedStyle(row).gap) || 0;

      // Measure total content width
      const totalBubblesWidth = bubbles.reduce((acc, bubble) => acc + bubble.offsetWidth, 0);
      const totalGapWidth = gap * (bubbles.length - 1);
      const totalDistance = totalBubblesWidth + totalGapWidth + parentWidth * 2; // include paddings

      row.style.setProperty('--marquee-distance', `${totalDistance}px`);

      // Set animation duration based on pixels/sec
      const pxPerSec = 40; // adjust speed
      const duration = Math.max(20, Math.round(totalDistance / pxPerSec));
      row.style.setProperty('--row-speed', `${duration}s`);

      // Floating offsets to avoid synchronized bounce
      bubbles.forEach((b, i) => {
        const delay = ((i % 3) * 0.4) + (rowIndex * 0.3);
        b.style.animationDelay = `${delay}s`;
      });

      // Pause all rows on hover
      rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
          rows.forEach(r => r.style.animationPlayState = 'paused');
        });
        row.addEventListener('mouseleave', () => {
          rows.forEach(r => r.style.animationPlayState = 'running');
        });
      });

      // Stagger vertical positioning for row 2 (optional)
      row.style.top = `${rowIndex * 90}px`;
    });
  }

  // Run setup on load and resize
  window.addEventListener('load', setupRows);
  window.addEventListener('resize', () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(setupRows, 200);
  });
});
