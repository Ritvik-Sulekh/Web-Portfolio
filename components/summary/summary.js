/* components/summary/summary.js */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.15 });
  revealEls.forEach(function (el) { io.observe(el); });

  /* ---------- stat counters (run once) ---------- */
  function animateCount(el, target, dur) {
    dur = dur || 900;
    const start = performance.now();
    function step(now) {
      const p = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(p * target);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  let counted = false;
  const statSection = document.querySelector('.thesis');
  if (statSection) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !counted) {
          counted = true;
          animateCount(document.getElementById('stat-entries'), 13);
          animateCount(document.getElementById('stat-locations'), 6);
        }
      });
    }, { threshold: 0.4 }).observe(statSection);
  }

  /* ---------- Globe ---------- */
  const canvas = document.getElementById('globe');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const tooltip = document.getElementById('tooltip');
  const W = 380, H = 380, R = 145, cx = W / 2, cy = H / 2;

  const markers = [
    { lat: 17.38, lon: 78.48, label: 'Hyderabad' },
    { lat: 23.0, lon: 72.58, label: 'Ahmedabad' },
    { lat: 24.47, lon: 54.37, label: 'UAE' }
  ];

  /* default orientation centers India (22°N, 78°E) facing the viewer on every load/refresh */
  const INDIA_LAT = 22, INDIA_LON = 78;
  let yaw = -INDIA_LON * Math.PI / 180, pitch = -INDIA_LAT * Math.PI / 180;
  let dragging = false, lastX = 0, lastY = 0;
  let mouse = { x: -999, y: -999 };

  function project(lat, lon, yawVal, pitchVal) {
    const phi = lat * Math.PI / 180, theta = lon * Math.PI / 180 + yawVal;
    const x = Math.cos(phi) * Math.sin(theta);
    const y = -Math.sin(phi);
    const z = Math.cos(phi) * Math.cos(theta);
    const y2 = y * Math.cos(pitchVal) - z * Math.sin(pitchVal);
    const z2 = y * Math.sin(pitchVal) + z * Math.cos(pitchVal);
    return { x: x * R, y: y2 * R, z: z2, visible: z2 > -0.15 };
  }

  const continents = [
    [[-168,66],[-165,60],[-140,60],[-130,55],[-125,49],[-124,40],[-117,32],[-105,20],
     [-97,16],[-90,14],[-83,9],[-77,8],[-80,10],[-85,15],[-95,20],[-97,26],[-90,30],
     [-81,25],[-80,32],[-75,35],[-70,41],[-65,45],[-60,50],[-55,52],[-60,58],[-70,60],
     [-80,62],[-90,65],[-100,68],[-110,70],[-130,70],[-150,70],[-165,68],[-168,66]],
    [[-52,60],[-42,60],[-22,70],[-25,78],[-45,83],[-62,78],[-68,70],[-58,62],[-52,60]],
    [[-79,9],[-77,3],[-79,-2],[-81,-5],[-80,-10],[-75,-15],[-70,-20],[-70,-25],[-68,-30],
     [-70,-35],[-73,-40],[-73,-45],[-70,-52],[-68,-55],[-65,-55],[-62,-50],[-58,-45],
     [-57,-38],[-53,-33],[-48,-25],[-40,-15],[-38,-10],[-35,-6],[-40,-2],[-50,0],
     [-55,5],[-60,8],[-65,10],[-70,10],[-75,9],[-79,9]],
    [[-9,38],[-9,43],[-5,48],[0,50],[5,51],[8,54],[10,57],[12,60],[15,63],[20,66],
     [25,68],[30,68],[35,65],[38,60],[40,55],[38,50],[35,45],[30,42],[27,40],[23,38],
     [18,40],[14,40],[10,38],[5,37],[0,36],[-5,36],[-9,38]],
    [[35,70],[45,68],[60,68],[70,66],[80,68],[90,70],[110,72],[130,70],[150,65],
     [170,65],[178,60],[170,55],[160,52],[150,45],[143,42],[135,35],[130,32],[122,30],
     [120,25],[110,22],[108,15],[105,10],[100,5],[97,3],[95,5],[90,10],[85,15],
     [80,10],[77,8],[73,15],[68,22],[65,25],[60,25],[55,25],[50,25],[47,29],[42,32],
     [36,36],[35,40],[30,40],[28,42],[30,45],[35,45],[40,50],[45,55],[50,60],
     [45,65],[38,68],[35,70]],
    [[-17,15],[-16,12],[-13,8],[-10,5],[-8,4],[-3,5],[0,6],[3,6],[8,4],[9,2],
     [13,-3],[12,-5],[12,-10],[14,-15],[16,-22],[18,-28],[20,-34],[25,-34],[30,-30],
     [33,-25],[35,-20],[40,-15],[41,-10],[40,-5],[42,0],[45,5],[43,10],[41,12],
     [38,15],[35,20],[33,27],[30,31],[25,32],[20,32],[15,32],[10,33],[5,36],
     [0,36],[-6,35],[-10,32],[-13,28],[-17,21],[-17,15]],
    [[113,-22],[115,-20],[122,-18],[129,-15],[135,-12],[137,-12],[142,-11],[145,-15],
     [148,-20],[150,-24],[153,-28],[152,-32],[150,-37],[147,-38],[144,-38],[140,-38],
     [137,-35],[135,-34],[132,-32],[129,-32],[126,-32],[122,-34],[118,-34],[115,-33],
     [113,-26],[113,-22]]
  ];

  function pointInPoly(lon, lat, poly) {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
      const intersects = ((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi);
      if (intersects) inside = !inside;
    }
    return inside;
  }
  function isLand(lat, lon) {
    return continents.some(function (poly) { return pointInPoly(lon, lat, poly); });
  }

  function drawGlobe() {
    ctx.clearRect(0, 0, W, H);

    const glow = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
    glow.addColorStop(0, '#F2FEFF');
    glow.addColorStop(0.45, '#D6F5F7');
    glow.addColorStop(1, '#AEE9EE');
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fillStyle = glow; ctx.fill();
    ctx.lineWidth = 1; ctx.strokeStyle = '#8FD9E0'; ctx.stroke();

    for (let la = -80; la <= 80; la += 5) {
      for (let lo = 0; lo < 360; lo += 5) {
        const lon = lo > 180 ? lo - 360 : lo;
        const p = project(la, lon, yaw, pitch);
        if (!p.visible) continue;
        const depth = (p.z + 1) / 2;
        ctx.beginPath(); ctx.arc(cx + p.x, cy + p.y, 0.9, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(20,150,165,' + (0.10 + 0.14 * depth) + ')';
        ctx.fill();
      }
    }

    for (let la = -80; la <= 80; la += 1.8) {
      for (let lo = 0; lo < 360; lo += 1.8) {
        const lon = lo > 180 ? lo - 360 : lo;
        if (!isLand(la, lon)) continue;
        const p = project(la, lon, yaw, pitch);
        if (!p.visible) continue;
        const depth = (p.z + 1) / 2;
        ctx.beginPath(); ctx.arc(cx + p.x, cy + p.y, 2.1 * (0.55 + 0.45 * depth), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(76,122,46,' + (0.75 + 0.25 * depth) + ')';
        ctx.fill();
      }
    }

    const proj = markers.map(function (m) {
      const p = project(m.lat, m.lon, yaw, pitch);
      return { lat: m.lat, lon: m.lon, label: m.label, x: p.x, y: p.y, z: p.z, visible: p.visible };
    });

    proj.forEach(function (m) {
      if (!m.visible) return;
      const depth = (m.z + 1) / 2;
      ctx.beginPath(); ctx.arc(cx + m.x, cy + m.y, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = '#C15E82'; ctx.globalAlpha = 0.7 + 0.3 * depth; ctx.fill(); ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(cx + m.x, cy + m.y, 4.2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(193,94,130,0.35)';
      ctx.stroke();
    });

    canvas._markers = proj;
  }

  drawGlobe();

  setInterval(function () {
    if (!dragging) { yaw += 0.0025; drawGlobe(); }
  }, 45);

  canvas.addEventListener('mousedown', function (e) { dragging = true; lastX = e.clientX; lastY = e.clientY; });
  window.addEventListener('mouseup', function () { dragging = false; });
  window.addEventListener('mousemove', function (e) {
    if (dragging) {
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      yaw += dx * 0.005; pitch = Math.max(-1, Math.min(1, pitch + dy * 0.005));
      lastX = e.clientX; lastY = e.clientY;
      requestAnimationFrame(drawGlobe);
    }
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
    const ms = canvas._markers || [];
    let hit = null;
    ms.forEach(function (m) {
      if (!m.visible) return;
      if (Math.hypot((cx + m.x) - mouse.x, (cy + m.y) - mouse.y) < 10) hit = m;
    });
    if (hit && tooltip) {
      tooltip.style.opacity = 1;
      tooltip.style.left = (cx + hit.x) + 'px';
      tooltip.style.top = (cy + hit.y) + 'px';
      tooltip.textContent = hit.label;
    } else if (tooltip) {
      tooltip.style.opacity = 0;
    }
  });

});