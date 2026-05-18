function renderFooter() {
  const b    = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  const year = new Date().getFullYear();
  return `
    <link rel="stylesheet" href="${b}components/footer/footer.css">
    <footer class="footer">
      <p class="footer__copy">© ${year} Oritvik. All rights reserved.</p>
    </footer>
  `;
}