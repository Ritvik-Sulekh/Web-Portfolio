window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  const frame  = document.getElementById('portfolioFrame');

  if (frame) {
    /* Wait for iframe to finish loading before hiding turtle */
    frame.addEventListener('load', function() {
      setTimeout(function() {
        if (loader) loader.classList.add('hidden');
      }, 500);
    });

    /* Safety fallback — hide after 15 seconds max even if iframe fails */
    setTimeout(function() {
      if (loader) loader.classList.add('hidden');
    }, 15000);

  } else {
    /* Non-portfolio pages — hide normally */
    setTimeout(function() {
      if (loader) loader.classList.add('hidden');
    }, 300);
  }
});