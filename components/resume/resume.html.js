function renderResume() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/resume/resume.css">

    <section class="resume">

      <div class="resume__header">
        <div class="resume__rule"></div>
        <h1 class="resume__title">ATS Resume</h1>
        <p class="resume__sub">Click any resume to preview it. Download directly from the preview.</p>
      </div>

      <div class="resume__layout">

        <!-- Left: Resume cards -->
        <div class="resume__list">

          <div class="resume__card active" data-src="https://drive.google.com/file/d/1jFnZCkPkuZpTJhHZ7Izq2Yogzx6qjCfJ/preview">
            <div class="resume__card-top">
              <div class="resume__card-icon">📄</div>
              <div class="resume__card-badge">Modern</div>
            </div>
            <h3 class="resume__card-name">Modern Two Columns Style</h3>
            <p class="resume__card-desc">Optimized for MBA applications, featuring well-organized sections, achievement-driven content, and embedded hyperlinks to validate credentials and experiences.</p>
            <div class="resume__card-tags">
              <span class="resume__tag">Management</span>
              <span class="resume__tag">Structured</span>
              <span class="resume__tag">Impactful</span>
            </div>
            <div class="resume__card-footer">
              <span class="resume__card-hint">Click to preview →</span>
              <a href="https://drive.google.com/file/d/1jFnZCkPkuZpTJhHZ7Izq2Yogzx6qjCfJ/view" target="_blank" class="resume__card-dl" onclick="event.stopPropagation()">⬇ Download</a>
            </div>
          </div>

          <div class="resume__card" data-src="https://drive.google.com/file/d/1yqY3-tFMl5SVZxhvRJa19hu531N-DxLE/preview">
            <div class="resume__card-top">
              <div class="resume__card-icon">📄</div>
              <div class="resume__card-badge">General</div>
            </div>
            <h3 class="resume__card-name">Concise Box Style</h3>
            <p class="resume__card-desc">Designed for referral-driven applications and direct hiring channels, highlighting strong narrative flow, and easy-to-navigate sections for human review.</p>
            <div class="resume__card-tags">
              <span class="resume__tag">IIM</span>
              <span class="resume__tag">Formal</span>
              <span class="resume__tag">Concise</span>
            </div>
            <div class="resume__card-footer">
              <span class="resume__card-hint">Click to preview →</span>
              <a href="https://drive.google.com/file/d/1yqY3-tFMl5SVZxhvRJa19hu531N-DxLE/view" target="_blank" class="resume__card-dl" onclick="event.stopPropagation()">⬇ Download</a>
            </div>
          </div>

          <div class="resume__card" data-src="https://drive.google.com/file/d/19ew-anMwVv_8Y4O-mB6I5qOZvxRqrSA2/preview">
            <div class="resume__card-top">
              <div class="resume__card-icon">📄</div>
              <div class="resume__card-badge">Simplest</div>
            </div>
            <h3 class="resume__card-name">Single Column Style</h3>
            <p class="resume__card-desc">Optimized single-column format for strategy and business analyst roles, ensuring clarity, structured flow, and strong ATS compatibility.</p>
            <div class="resume__card-tags">
              <span class="resume__tag">ATS Friendly</span>
              <span class="resume__tag">Clean</span>
              <span class="resume__tag">Focused</span>
            </div>
            <div class="resume__card-footer">
              <span class="resume__card-hint">Click to preview →</span>
              <a href="https://drive.google.com/file/d/19ew-anMwVv_8Y4O-mB6I5qOZvxRqrSA2/view" target="_blank" class="resume__card-dl" onclick="event.stopPropagation()">⬇ Download</a>
            </div>
          </div>

        </div>

        <!-- Right: Preview panel -->
        <div class="resume__preview">
          <div class="resume__preview-bar">
            <span class="resume__preview-label" id="previewLabel">General</span>
            <a href="https://drive.google.com/file/d/1jFnZCkPkuZpTJhHZ7Izq2Yogzx6qjCfJ/view" target="_blank" class="resume__preview-open" id="previewOpen">Open in Drive ↗</a>
          </div>
          <iframe
            class="resume__frame"
            id="resumeFrame"
            src="https://drive.google.com/file/d/1jFnZCkPkuZpTJhHZ7Izq2Yogzx6qjCfJ/preview"
            allow="autoplay">
          </iframe>
        </div>

      </div>

    </section>
  `;
}
