document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('testimonial-slider');
  const countEl = document.getElementById('testimonial-count');

  if (slider && countEl) {
    const testimonials = slider.querySelectorAll('.testimonial-box');
    countEl.textContent = testimonials.length;

    // Adjust animation duration based on content width
    const sliderWidth = slider.scrollWidth;
    const wrapperWidth = slider.parentElement.offsetWidth;
    const totalDistance = sliderWidth + wrapperWidth; // distance it travels
    const pxPerSecond = 80; // speed control
    const duration = Math.max(20, Math.round(totalDistance / pxPerSecond));
    slider.style.setProperty('--marquee-speed', `${duration}s`);
  }
});
