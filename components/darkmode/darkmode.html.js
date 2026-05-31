function renderDarkMode() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/darkmode/darkmode.css">
  `;
}