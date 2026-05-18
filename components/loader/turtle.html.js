
function renderLoader() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/loader/turtle.css">
    <div id="loader">
      <div class="loader__turtle">
        <img class="loader__turtle-light" src="${b}assets/turtle 1.png"  alt="Loading...">
        <img class="loader__turtle-dark"  src="${b}assets/turtle 2.png" alt="Loading...">
      </div>
      <p class="loader__text">Loading Portfolio...</p>
      <p class="loader__subtext">This may take a moment ⏳</p>
    </div>
  `;
}