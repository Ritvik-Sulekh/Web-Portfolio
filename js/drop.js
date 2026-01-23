
  document.querySelectorAll('details.dropdown').forEach(dropdown => {
    dropdown.addEventListener('toggle', () => {
      if (dropdown.open) {
        document.querySelectorAll('details.dropdown').forEach(other => {
          if (other !== dropdown) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });

document.addEventListener('click', e => {
    document.querySelectorAll('details.dropdown').forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.removeAttribute('open');
      }
    });
  });