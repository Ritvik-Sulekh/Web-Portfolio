document.addEventListener('DOMContentLoaded', () => {
  const bubbles = Array.from(document.querySelectorAll('.skill-bubble'));

  // Stagger float delays so bubbles don't bounce in perfect sync
  bubbles.forEach((b, i) => {
    b.style.animationDelay = `${(i % 6) * 0.35}s`;
  });

  // Helper function to set animation play state for all bubbles
  function setPlayState(state) {
    bubbles.forEach(b => {
      b.style.animationPlayState = state;
    });
  }

  // Start bubbles running by default
  setPlayState('running');
});
