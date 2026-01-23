document.addEventListener("DOMContentLoaded", () => {
  const toggleInput = document.getElementById("theme-toggle");
  const body = document.body;

  // Restore saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleInput.checked = true;
    requestAnimationFrame(initConstellations);
  }

  toggleInput.addEventListener("change", () => {
    // ✅ defer until checkbox state is FINAL
    queueMicrotask(() => {
      if (toggleInput.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        requestAnimationFrame(initConstellations);
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        clearConstellations();
      }
    });
  });
});


/* -------------------
   CONSTELLATIONS
------------------- */
let constellationCanvas, ctx, stars = [], animationId;

function initConstellations() {
  // avoid duplicates
  if (document.getElementById("constellationCanvas")) return;

  constellationCanvas = document.createElement("canvas");
  constellationCanvas.id = "constellationCanvas";
  constellationCanvas.style.position = "fixed";
  constellationCanvas.style.inset = "0";
  constellationCanvas.style.zIndex = "1";
  constellationCanvas.style.pointerEvents = "none";
  document.body.appendChild(constellationCanvas);

  ctx = constellationCanvas.getContext("2d");

  function resizeCanvas() {
    constellationCanvas.width = window.innerWidth;
    constellationCanvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Stars
  stars = Array.from({ length: 60 }, () => ({
    x: Math.random() * constellationCanvas.width,
    y: Math.random() * constellationCanvas.height,
  }));

  function drawStars() {
    ctx.clearRect(0, 0, constellationCanvas.width, constellationCanvas.height);

    // Stars
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,200,255,0.9)";
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(0,200,255,0.8)";
      ctx.fill();
    });

    // Connections
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.strokeStyle = "rgba(0,200,255,0.3)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    drawStars();
    animationId = requestAnimationFrame(animate);
  }

  animate();
}

function clearConstellations() {
  if (animationId) cancelAnimationFrame(animationId);
  const canvas = document.getElementById("constellationCanvas");
  if (canvas) canvas.remove();
}
