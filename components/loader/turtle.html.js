function renderLoader() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/loader/turtle.css">
    <div id="loader">

      <div class="loader__turtle">
        <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" fill="none">

          <!-- ── Body ── -->
          <ellipse cx="95" cy="85" rx="48" ry="32" fill="#1a4a1a" opacity="0.08"/>

          <!-- ── Shell — geometric polygon style ── -->
          <!-- Main shell outline -->
          <path d="M55 80 Q60 45 95 38 Q130 45 138 80 Q130 105 95 108 Q60 105 55 80Z"
                fill="#1a4a1a" stroke="#1a4a1a" stroke-width="2.5" stroke-linejoin="round"/>

          <!-- Shell triangular grid pattern -->
          <!-- Vertical center line -->
          <line x1="96" y1="40" x2="96" y2="106" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>

          <!-- Horizontal bands -->
          <path d="M62 62 Q96 56 130 62" stroke="#faf8f5" stroke-width="1.5" fill="none" opacity="0.5"/>
          <path d="M58 78 Q96 72 134 78" stroke="#faf8f5" stroke-width="1.5" fill="none" opacity="0.5"/>
          <path d="M60 93 Q96 88 132 93" stroke="#faf8f5" stroke-width="1.5" fill="none" opacity="0.5"/>

          <!-- Left diagonal lines -->
          <line x1="62" y1="62" x2="58" y2="78" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>
          <line x1="79" y1="58" x2="75" y2="75" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>
          <line x1="79" y1="75" x2="75" y2="93" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>
          <line x1="62" y1="78" x2="60" y2="93" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>

          <!-- Right diagonal lines -->
          <line x1="130" y1="62" x2="134" y2="78" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>
          <line x1="113" y1="58" x2="117" y2="75" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>
          <line x1="113" y1="75" x2="117" y2="93" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>
          <line x1="130" y1="78" x2="132" y2="93" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>

          <!-- Top triangle dividers -->
          <line x1="79" y1="58" x2="96" y2="40" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>
          <line x1="113" y1="58" x2="96" y2="40" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>
          <line x1="79" y1="58" x2="96" y2="56" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>
          <line x1="113" y1="58" x2="96" y2="56" stroke="#faf8f5" stroke-width="1.5" opacity="0.5"/>

          <!-- ── Head ── -->
          <ellipse cx="148" cy="72" rx="16" ry="12" fill="#1a4a1a"
                   stroke="#1a4a1a" stroke-width="2"/>
          <!-- Head taper toward shell -->
          <path d="M134 78 Q140 82 148 84 Q140 84 134 80Z" fill="#1a4a1a"/>
          <!-- Eye -->
          <circle cx="154" cy="68" r="4" fill="#faf8f5"/>
          <circle cx="155" cy="68" r="2" fill="#1a4a1a"/>
          <circle cx="156" cy="67" r="0.8" fill="#faf8f5"/>
          <!-- Nostril -->
          <circle cx="160" cy="73" r="1" fill="#faf8f5" opacity="0.6"/>

          <!-- ── Tail ── -->
          <path d="M57 82 Q44 80 38 86 Q44 90 57 88Z"
                fill="#1a4a1a" stroke="#1a4a1a" stroke-width="1.5" stroke-linejoin="round"/>

          <!-- ── Front flippers ── -->
          <!-- Front top -->
          <path d="M118 60 Q132 42 148 40 Q140 52 128 62Z"
                fill="#1a4a1a" stroke="#1a4a1a" stroke-width="1.5" stroke-linejoin="round"/>
          <!-- Front bottom -->
          <path d="M118 100 Q132 112 148 118 Q138 106 126 98Z"
                fill="#1a4a1a" stroke="#1a4a1a" stroke-width="1.5" stroke-linejoin="round"/>

          <!-- ── Back flippers ── -->
          <!-- Back top -->
          <path d="M70 62 Q56 44 42 42 Q50 56 64 64Z"
                fill="#1a4a1a" stroke="#1a4a1a" stroke-width="1.5" stroke-linejoin="round"/>
          <!-- Back bottom -->
          <path d="M70 100 Q56 116 42 120 Q52 106 66 100Z"
                fill="#1a4a1a" stroke="#1a4a1a" stroke-width="1.5" stroke-linejoin="round"/>

        </svg>
      </div>

      <p class="loader__text">Loading Portfolio...</p>
      <p class="loader__subtext">This may take a moment ⏳</p>
    </div>
  `;
}