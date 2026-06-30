function renderIIMGraduation() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/blog-pages/iim-graduation/iim-graduation.css">

    <!-- NAV -->
    <nav class="blog-nav">
      <a class="nav__back" href="${b}pages/blogs.html">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 2.5L4 7l4.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        All Posts
      </a>
      <span class="nav__tag">Milestones</span>
    </nav>

    <!-- HERO -->
    <header class="hero fade-up">
      <div class="hero__eyebrow">
        <span class="hero__pill">🎓 Graduation</span>
        <span class="hero__date">2024 · IIM Udaipur</span>
      </div>
      <h1 class="hero__title">
        A Chapter Complete —<br/>
        <em>MBA from IIM Udaipur</em>
      </h1>
      <p class="hero__sub">
        Reflecting on two transformative years of learning, friendship,
        and growth at one of India's premier institutions.
      </p>
    </header>

    <!-- PHOTO -->
    <div class="photo-block fade-up" style="transition-delay:0.1s;">
      <div class="photo-wrap">
        <iframe
          src="https://drive.google.com/file/d/1pmlpmPZ8H6aky6XWFnJCoQXzZi2SNHmn/preview"
          allow="autoplay"
          allowfullscreen
        ></iframe>
      </div>
      <p class="photo-caption">Graduation Day · Indian Institute of Management Udaipur</p>
    </div>

    <!-- DIVIDER -->
    <div class="divider">
      <div class="divider__line"></div>
      <span class="divider__ornament">✦</span>
      <div class="divider__line"></div>
    </div>

    <!-- ARTICLE -->
    <article class="article">

      <p class="article__lead fade-up">
        Dear All, I am jubilant to share that I have successfully completed
        my post-graduation in MBA from IIM Udaipur. This odyssey has been
        remarkably nourishing and I am profoundly gratified for the support
        and encouragement I have received along the way.
      </p>

      <div class="section-label fade-up">
        <div class="section-label__bar"></div>
        <span class="section-label__text">Gratitude</span>
      </div>

      <div class="gratitude-grid">

        <div class="gratitude-card fade-up">
          <span class="gratitude-card__icon">📚</span>
          <div class="gratitude-card__label">Professors</div>
          <div class="gratitude-card__names">
            Prof. Mahesh · Prof. Debanjan · Prof. Nageshwar ·
            Prof. Bhavya · Prof. Prarthan · Prof. Jijo · Prof. Rajesh
          </div>
        </div>

        <div class="gratitude-card fade-up" style="transition-delay:0.05s;">
          <span class="gratitude-card__icon">🏛️</span>
          <div class="gratitude-card__label">PGP Officers & Staff</div>
          <div class="gratitude-card__names">
            Pramod Sir · Shrinath Sir · Teaching Assistants · Research Assistants · All Staff Members
          </div>
        </div>

        <div class="gratitude-card fade-up" style="transition-delay:0.1s;">
          <span class="gratitude-card__icon">🤝</span>
          <div class="gratitude-card__label">Friends & PhD Scholars</div>
          <div class="gratitude-card__names">
            Brothers in arms who made every moment — the laughter, the learning, the growth — truly inexpressible.
          </div>
        </div>

        <div class="gratitude-card fade-up" style="transition-delay:0.15s;">
          <span class="gratitude-card__icon">📖</span>
          <div class="gratitude-card__label">Library & Mentors</div>
          <div class="gratitude-card__names">
            Abhishek Sir (Librarian) · Library Committee · Industry Mentors & Professionals
          </div>
        </div>

      </div>

      <p class="fade-up">
        My professors' fidelity towards our excellence has been pivotal in
        sculpting both academic and professional growth. Their dedication goes far
        beyond the classroom — it shaped how I think, how I lead, and how I
        approach challenges.
      </p>

      <div class="pull-quote fade-up">
        <p>
          "We guffawed, ascertained, flourished — and I carry the
          contentment of these perpetual experiences wherever I go next."
        </p>
      </div>

      <p class="fade-up">
        I extend my deepest esteem to Abhishek Sir and the Library Committee
        for their zeal in cultivating an oasis of exploration and knowledge
        that embellishes the entire IIMU community. And to my industry mentors —
        your expertise and guidance have exhilarated us to pursue our careers
        with purpose and confidence.
      </p>

      <div class="section-label fade-up">
        <div class="section-label__bar"></div>
        <span class="section-label__text">Family & Looking Ahead</span>
      </div>

      <p class="fade-up">
        I am beholden to my family for their indefatigable support and love.
        Their conviction in me has been my greatest motivation. As I commence
        on the new challenges of my career, I am eager to apply everything
        I have learned to make a meaningful, positive impact on the world.
      </p>

      <p class="fade-up">
        I am veritably blessed to have such a spectacular network of professors,
        peers, mentors, and loved ones. Here's to the journey ahead — with
        gratitude for everything that brought me here, and excitement for
        all that lies ahead.
      </p>

      <!-- LINKEDIN CTA -->
      <div class="cta-block fade-up">
        <div class="cta-block__left">
          <div class="cta-block__label">Original Post</div>
          <div class="cta-block__text">Read on LinkedIn</div>
        </div>
        <a
          class="cta-block__btn"
          href="https://www.linkedin.com/posts/ritviksinghsulekh_dear-all-i-am-jubilant-to-share-that-i-share-7189212897967853568-WNmX/"
          target="_blank"
          rel="noopener"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          View Post
        </a>
      </div>

      <!-- ARTICLE FOOTER -->
      <footer class="article-footer fade-up">
        <div class="article-footer__author">
          <div class="author-avatar">RS</div>
          <div>
            <div class="author-name">Ritvik Sulekh</div>
            <div class="author-role">MBA · IIM Udaipur</div>
          </div>
        </div>
        <div class="article-footer__tags">
          <span class="tag">MBA</span>
          <span class="tag">IIM Udaipur</span>
          <span class="tag">Graduation</span>
          <span class="tag">Milestone</span>
        </div>
      </footer>

    </article>
  `;
}
