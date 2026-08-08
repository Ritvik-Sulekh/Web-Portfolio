/* components/navbar/navbar.html.js */

function renderNavbar() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/navbar/navbar.css">
    <nav class="navbar" id="mainNav">
      <a href="${b}index.html" class="navbar__logo">ORitvik</a>
      <div class="navbar__search" id="navSearch">
        <button class="navbar__search-toggle" id="navSearchToggle" aria-label="Search">🔍</button>
        <input class="navbar__search-input" id="navSearchInput" type="text" placeholder="Search the site…" autocomplete="off">
        <div class="navbar__search-results" id="navSearchResults"></div>
      </div>
      <a href="${b}pages/business-card.html" class="navbar__cta">Let's connect</a>
    </nav>
  `;
}