function renderGuinness() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/blog-pages/guinness/guinness.css">

    <!-- NAV -->
    <nav class="blog-nav">
      <a class="nav__back" href="${b}pages/blogs.html">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 2.5L4 7l4.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        All Posts
      </a>
      <span class="nav__tag">Achievement</span>
    </nav>

    <!-- HERO -->
    <header class="hero fade-up">
      <div class="hero__eyebrow">
        <span class="hero__pill">🏆 Guinness World Record</span>
        <span class="hero__date">Dec 2024 · Harley's Fine Baking</span>
      </div>
      <h1 class="hero__title">
        How I Was Part of a<br/>
        <em>Guinness World Record</em>
      </h1>
      <p class="hero__sub">
        The story behind the record attempt, what it took to get there,
        and what I learned from being part of something historic.
      </p>
    </header>

    <!-- PHOTO -->
    <div class="photo-block fade-up" style="transition-delay:0.1s;">
      <div class="photo-wrap">
        <iframe
          src="https://drive.google.com/file/d/11EDI_8sEm-vgwEHLJwdkKESasUO1OqTI/preview"
          allow="autoplay"
          allowfullscreen
        ></iframe>
      </div>
      <p class="photo-caption">Guinness World Record Day · 06 December 2024 · Harley's Fine Baking</p>
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
        On 06 December 2024, I was part of a team that made history —
        we achieved a Guinness World Record with Harley's Fine Baking.
        As Program Manager, I led the coordination, logistics, and execution
        that made this incredible feat possible.
      </p>

      <div class="section-label fade-up">
        <div class="section-label__bar"></div>
        <span class="section-label__text">My Role</span>
      </div>

      <div class="gratitude-grid">

        <div class="gratitude-card fade-up">
          <span class="gratitude-card__icon">🎯</span>
          <div class="gratitude-card__label">Program Manager</div>
          <div class="gratitude-card__names">
            Nov 2024 — Dec 2024 · Led end-to-end program coordination and on-ground execution for the record attempt.
          </div>
        </div>

        <div class="gratitude-card fade-up" style="transition-delay:0.05s;">
          <span class="gratitude-card__icon">📋</span>
          <div class="gratitude-card__label">Project Manager</div>
          <div class="gratitude-card__names">
            Oct 2024 — Oct 2024 · Managed a budget of ₹1 Cr+ and built the operational framework from scratch.
          </div>
        </div>

        <div class="gratitude-card fade-up" style="transition-delay:0.1s;">
          <span class="gratitude-card__icon">🏅</span>
          <div class="gratitude-card__label">The Record</div>
          <div class="gratitude-card__names">
            Guinness World Record officially achieved on 06 Dec 2024 of producing 2,254kg Honey Cake at Harley's Fine Baking — a moment etched in history.
          </div>
        </div>

        <div class="gratitude-card fade-up" style="transition-delay:0.15s;">
          <span class="gratitude-card__icon">💰</span>
          <div class="gratitude-card__label">Budget Managed</div>
          <div class="gratitude-card__names">
            Handled a budget of ₹1 Crore+ — overseeing vendor management, logistics, and resource allocation.
          </div>
        </div>

      </div>

      <p class="fade-up">
        Being a Program Manager on a Guinness World Record attempt is unlike
        anything else. Every detail matters — from the timing and logistics
        to team coordination and compliance with official Guinness adjudicator
        requirements. The pressure is real, but so is the reward.
      </p>

      <div class="pull-quote fade-up">
        <p>
          "It wasn't just about breaking a record — it was about leading
          a team under pressure and delivering something the world would
          remember."
        </p>
      </div>

      <p class="fade-up">
        Managing a ₹1 Crore+ budget while simultaneously coordinating hundreds
        of moving parts taught me more about program management in three months
        than I could have learned in a classroom. The experience sharpened my
        ability to think on my feet, manage stakeholders, and drive execution
        at scale.
      </p>

      <div class="section-label fade-up">
        <div class="section-label__bar"></div>
        <span class="section-label__text">What I Learned</span>
      </div>

      <p class="fade-up">
        Records are broken by teams, not individuals. Every volunteer, every
        vendor, every stakeholder played a role in making 06 December 2024
        a historic day. I am deeply grateful to Harley's Fine Baking for
        trusting me with this responsibility and to every person who showed
        up and gave their best.
      </p>

      <p class="fade-up">
        This achievement is a testament to what is possible when you combine
        ambition, meticulous planning, and a team that refuses to give up.
        I carry this experience as one of the proudest milestones of my career.
      </p>

      <!-- POR REFERENCE -->
      <div class="por-ref fade-up">
        <div class="por-ref__left">
          <span class="por-ref__icon">📌</span>
          <div>
            <div class="por-ref__label">Position of Responsibility</div>
            <div class="por-ref__text">Guinness World Record @ Harley's Fine Baking</div>
          </div>
        </div>
        <a class="por-ref__btn" href="${b}pages/pors.html">
          View POR →
        </a>
      </div>

      <!-- ARTICLE FOOTER -->
      <footer class="article-footer fade-up">
        <div class="article-footer__author">
          <div class="author-avatar">RS</div>
          <div>
            <div class="author-name">Ritvik Sulekh</div>
            <div class="author-role">Program Manager · Guinness World Record</div>
          </div>
        </div>
        <div class="article-footer__tags">
          <span class="tag">Guinness World Record</span>
          <span class="tag">Program Manager</span>
          <span class="tag">Achievement</span>
        </div>
      </footer>

    </article>
  `;
}
