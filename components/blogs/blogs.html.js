function renderBlogs() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/blogs/blogs.css">

    <section class="blogs">

      <div class="blogs__header">
        <div class="blogs__rule"></div>
        <div class="blogs__header-row">
          <div>
            <h1 class="blogs__title">Blogs</h1>
            <p class="blogs__sub">Thoughts, stories and proof from my journey.</p>
          </div>
          <div class="blogs__badge">
            <span class="blogs__badge-val" id="blogsTotal">—</span>
            <span class="blogs__badge-label">Total Blogs</span>
          </div>
        </div>
      </div>

      <div class="blogs__grid">

        <a href="${b}pages/blog/guinness.html" class="blog-card">
          <div class="blog-card__banner" style="background: linear-gradient(135deg, #d1fae5, #a7f3d0);">
            <span class="blog-card__banner-icon">🏆</span>
          </div>
          <div class="blog-card__body">
            <div class="blog-card__meta">
              <span class="blog-card__tag">Achievement</span>
              <span class="blog-card__time">5 min read</span>
            </div>
            <h2 class="blog-card__title">How I Was Part of a Guinness World Record</h2>
            <p class="blog-card__excerpt">The story behind the record attempt, what it took to get there, and what I learned from being part of something historic.</p>
          </div>
          <div class="blog-card__footer">
            <span class="blog-card__read">Read more →</span>
          </div>
        </a>

        <a href="${b}pages/blog/por-manager.html" class="blog-card">
          <div class="blog-card__banner" style="background: linear-gradient(135deg, #fce7f3, #fbcfe8);">
            <span class="blog-card__banner-icon">🏅</span>
          </div>
          <div class="blog-card__body">
            <div class="blog-card__meta">
              <span class="blog-card__tag">POR</span>
              <span class="blog-card__time">4 min read</span>
            </div>
            <h2 class="blog-card__title">What It Means to Be a Program Manager on Campus</h2>
            <p class="blog-card__excerpt">Leading teams, managing chaos and delivering results — here's what no one tells you about holding a position of responsibility at a top B-school.</p>
          </div>
          <div class="blog-card__footer">
            <span class="blog-card__read">Read more →</span>
          </div>
        </a>

        <a href="${b}pages/blog/cat-journey.html" class="blog-card">
          <div class="blog-card__banner" style="background: linear-gradient(135deg, #e0e7ff, #c7d2fe);">
            <span class="blog-card__banner-icon">📚</span>
          </div>
          <div class="blog-card__body">
            <div class="blog-card__meta">
              <span class="blog-card__tag">Education</span>
              <span class="blog-card__time">6 min read</span>
            </div>
            <h2 class="blog-card__title">From CAT to IIM — My 0.2% Journey</h2>
            <p class="blog-card__excerpt">229,969 students registered. Only I made it here. This is the honest, unfiltered story of preparation, failure and finally getting in.</p>
          </div>
          <div class="blog-card__footer">
            <span class="blog-card__read">Read more →</span>
          </div>
        </a>

        <a href="${b}pages/blog/case-comp.html" class="blog-card">
          <div class="blog-card__banner" style="background: linear-gradient(135deg, #fef9c3, #fde68a);">
            <span class="blog-card__banner-icon">📊</span>
          </div>
          <div class="blog-card__body">
            <div class="blog-card__meta">
              <span class="blog-card__tag">Case Competition</span>
              <span class="blog-card__time">4 min read</span>
            </div>
            <h2 class="blog-card__title">Winning a National Case Competition — The Inside Story</h2>
            <p class="blog-card__excerpt">340 teams. One winner. Here's how we built our GTM strategy for an EV startup in 48 hours and why we stood out from the crowd.</p>
          </div>
          <div class="blog-card__footer">
            <span class="blog-card__read">Read more →</span>
          </div>
        </a>

        <a href="${b}pages/blog/freelance.html" class="blog-card">
          <div class="blog-card__banner" style="background: linear-gradient(135deg, #ffedd5, #fed7aa);">
            <span class="blog-card__banner-icon">🧑‍💻</span>
          </div>
          <div class="blog-card__body">
            <div class="blog-card__meta">
              <span class="blog-card__tag">Freelance</span>
              <span class="blog-card__time">3 min read</span>
            </div>
            <h2 class="blog-card__title">What I Learned Advising 3 Startups as a Freelancer</h2>
            <p class="blog-card__excerpt">No salary. No safety net. Just strategy decks and honest conversations. Here's what freelancing taught me about business and myself.</p>
          </div>
          <div class="blog-card__footer">
            <span class="blog-card__read">Read more →</span>
          </div>
        </a>

      </div>

    </section>
  `;
}