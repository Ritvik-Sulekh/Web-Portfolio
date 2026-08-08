/* components/summary/summary.html.js */

function renderSummary() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/summary/summary.css">

    <div class="summary-hero">
      <section class="wrap thesis">
        <div class="thesis-col">
          <div class="thesis-header">
            <div class="profile-pic" aria-label="Profile photo">
              <img src="${b}assets/profile.png" alt="Profile Photo"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <span style="display:none;">Add photo</span>
            </div>
            <h1>Resilience turns setbacks into bounce-backs.</h1>
          </div>
          <p class="sub">Ritvik Sulekh — IIM Udaipur graduate, Guinness World Record breaker. This page is a short, structured brief: what I've built, where I've worked, and everything else is right at the bottom.</p>
          <div class="stat-row">
            <div class="stat"><div class="v" id="stat-entries">0</div><div class="l">LOGGED ENTRIES</div></div>
            <div class="stat"><div class="v" id="stat-locations">0</div><div class="l">LOCATIONS WORKED</div></div>
          </div>
        </div>
        <div class="globe-wrap">
          <canvas id="globe" width="380" height="380"></canvas>
          <div class="tooltip" id="tooltip"></div>
        </div>
      </section>
    </div>
  `;
}