document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const slides = carousel.querySelectorAll('.slide');
  const total = slides.length;

  const angleStep = 360 / total;
  const radius = 300; // adjust this if slides look too far/close

  slides.forEach((slide, i) => {
    const angle = i * angleStep;
    slide.style.transform = `
      rotateY(${angle}deg) 
      translateZ(${radius}px) 
      translate(-50%, -50%)
    `;
  });
});

