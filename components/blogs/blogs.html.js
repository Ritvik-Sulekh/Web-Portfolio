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

        <a href="${b}pages/blog-files/guinness.html" class="blog-card">
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

        <a href="${b}pages/blog-files/iim-graduation.html" class="blog-card">
          <div class="blog-card__banner" style="background: linear-gradient(135deg, #fce7f3, #fbcfe8);">
            <span class="blog-card__banner-icon">🎓</span>
          </div>
          <div class="blog-card__body">
            <div class="blog-card__meta">
              <span class="blog-card__tag">Milestone</span>
              <span class="blog-card__time">4 min read</span>
            </div>
            <h2 class="blog-card__title">MBA Graduation from IIM Udaipur</h2>
            <p class="blog-card__excerpt">Reflecting on two transformative years of learning, friendship, and gratitude at one of India's premier institutions.</p>
          </div>
          <div class="blog-card__footer">
            <span class="blog-card__read">Read more →</span>
          </div>
        </a>

      </div>

    </section>
  `;
}