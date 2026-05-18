function renderPublications() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/publications/publications.css">

    <section class="pubs">

      <div class="pubs__header">
        <div class="pubs__rule"></div>
        <div class="pubs__top">
          <div>
            <h1 class="pubs__title">Publications</h1>
            <p class="pubs__sub">Research papers, articles & written work</p>
          </div>
          <div class="pubs__badge">
            <span class="pubs__badge-val" id="pubsTotal">0</span>
            <span class="pubs__badge-label">Total Publications</span>
          </div>
        </div>
      </div>

      <div class="pubs__empty">
        <div class="pubs__empty-icon">📝</div>
        <p class="pubs__empty-text">No publications yet — working on it!</p>
        <p class="pubs__empty-sub">Check back soon for research papers and articles.</p>
      </div>

    </section>
  `;
}