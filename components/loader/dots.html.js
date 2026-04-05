function renderLoader() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/loader/dots.css">
    <div id="loader">
      <div class="loader__dots">
        <div class="loader__dot"></div>
        <div class="loader__dot"></div>
        <div class="loader__dot"></div>
      </div>
      <p class="loader__text">Loading...</p>
    </div>
  `;
}