function renderTop02() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/top02/top02.css">

    <section class="top02">

      <div class="top02__header">
        <div class="top02__rule"></div>
        <h1 class="top02__title">Top 0.2%</h1>
        <p class="top02__sub">My journey from CAT Examination to IIM Udaipur — step by step.</p>
      </div>

      <div class="top02__funnel">

        <div class="top02__step top02__step--1">
          <div class="top02__step-inner">
            <div class="top02__left">
              <div class="top02__num">229,969</div>
              <div class="top02__label">Registered for CAT Examination</div>
            </div>
            <div class="top02__right">
              <div class="top02__pct">100%</div>
            </div>
          </div>
          <div class="top02__bar">
            <div class="top02__fill" style="width:100%"></div>
          </div>
        </div>

        <div class="top02__arrow">↓</div>

        <div class="top02__step top02__step--2">
          <div class="top02__step-inner">
            <div class="top02__left">
              <div class="top02__num">191,660</div>
              <div class="top02__label">Appeared for CAT Examination</div>
            </div>
            <div class="top02__right">
              <div class="top02__pct">83%</div>
            </div>
          </div>
          <div class="top02__bar">
            <div class="top02__fill" style="width:83%"></div>
          </div>
        </div>

        <div class="top02__arrow">↓</div>

        <div class="top02__step top02__step--3">
          <div class="top02__step-inner">
            <div class="top02__left">
              <div class="top02__num">30,000 – 40,000</div>
              <div class="top02__label">Received Interview Calls</div>
            </div>
            <div class="top02__right">
              <div class="top02__pct">15% – 21%</div>
            </div>
          </div>
          <div class="top02__bar">
            <div class="top02__fill" style="width:21%"></div>
          </div>
        </div>

        <div class="top02__arrow">↓</div>

        <div class="top02__step top02__step--4">
          <div class="top02__step-inner">
            <div class="top02__left">
              <div class="top02__num">~5,000 – 5,500</div>
              <div class="top02__label">Secured Final Admission (All IIMs)</div>
            </div>
            <div class="top02__right">
              <div class="top02__pct">2.6% – 2.9%</div>
            </div>
          </div>
          <div class="top02__bar">
            <div class="top02__fill" style="width:2.9%"></div>
          </div>
        </div>

        <div class="top02__arrow">↓</div>

        <div class="top02__step top02__step--5">
          <div class="top02__step-inner">
            <div class="top02__left">
              <div class="top02__num">~305</div>
              <div class="top02__label">Admitted to IIM Udaipur</div>
            </div>
            <div class="top02__right">
              <div class="top02__pct">0.16%</div>
            </div>
          </div>
          <div class="top02__bar">
            <div class="top02__fill" style="width:0.5%"></div>
          </div>
        </div>

        <div class="top02__arrow">↓</div>

        <!-- Final highlight — Me -->
        <div class="top02__me">
          <div class="top02__me-icon">🎓</div>
          <div class="top02__me-text">
            <div class="top02__me-name">Me, admitted to IIM Udaipur</div>
            <div class="top02__me-pct">Top 0.33% of all admitted students</div>
          </div>
          <div class="top02__me-badge">1</div>
        </div>

      </div>

    </section>
  `;
}