document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('testimonial-slider');
  const countEl = document.getElementById('testimonial-count');

  if (slider && countEl) {
    const testimonials = slider.querySelectorAll('.testimonial-box');
    countEl.textContent = testimonials.length;
  }

  // ===== Fade + Gradient Highlight Row on Scroll =====
  const rows = document.querySelectorAll('.testimonial-row');

  const observer = new IntersectionObserver(
    entries => {
      // Remove active/highlight from all rows
      rows.forEach(row => {
        row.classList.remove('active');
        row.querySelectorAll('.testimonial-box').forEach(box => box.classList.remove('highlight'));
      });

      entries.forEach(entry => {
        if(entry.isIntersecting && entry.intersectionRatio > 0.5){
          const row = entry.target;
          row.classList.add('active');
          row.querySelectorAll('.testimonial-box').forEach(box => box.classList.add('highlight'));
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  rows.forEach(row => observer.observe(row));
});
