function renderLoader() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/loader/loader.css">
    <div id="loader">
      <div class="loader__hourglass">
        <div class="loader__cap-top"></div>
        <div class="loader__cap-bottom"></div>
        <div class="loader__bar-left"></div>
        <div class="loader__bar-right"></div>
        <div class="loader__shape-top"></div>
        <div class="loader__shape-bottom"></div>
        <div class="loader__sand-top"></div>
        <div class="loader__sand-bottom"></div>
      </div>
      <p class="loader__text">Loading...</p>
    </div>
  `;
}