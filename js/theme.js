document.addEventListener("DOMContentLoaded", () => {
  const toggleInput = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleInput.checked = true;
    // Delay a bit to ensure DOM/CSS painted before adding canvas
    setTimeout(() => initConstellations(), 50);
  }

  toggleInput.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      initConstellations();
    } else {
      localStorage.setItem("theme", "light");
      clearConstellations();
    }
  });
});
