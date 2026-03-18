/* components/resume/resume.js */

(function () {

  const cards   = document.querySelectorAll('.resume__card');
  const frame   = document.getElementById('resumeFrame');
  const label   = document.getElementById('previewLabel');
  const openBtn = document.getElementById('previewOpen');

  cards.forEach(function(card) {
    card.addEventListener('click', function() {

      /* Remove active from all */
      cards.forEach(c => c.classList.remove('active'));

      /* Set active on clicked */
      card.classList.add('active');

      /* Update preview */
      const src  = card.dataset.src;
      const name = card.querySelector('.resume__card-name').textContent;
      const dl   = card.querySelector('.resume__card-dl').getAttribute('href');

      frame.src      = src;
      label.textContent = name;
      openBtn.setAttribute('href', dl);

      /* Scroll to preview on mobile */
      if (window.innerWidth <= 768) {
        document.querySelector('.resume__preview').scrollIntoView({ behavior: 'smooth' });
      }

    });
  });

})();
