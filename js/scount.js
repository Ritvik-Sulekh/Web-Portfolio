document.addEventListener("DOMContentLoaded", function () {
  // Select all skill bubbles
  const skillBubbles = document.querySelectorAll(".skill-bubble");

  // Count them
  const skillCount = skillBubbles.length;

  // Log to console
  console.log("Total skills:", skillCount);

  // Optional: display count in an element with id="skillCount"
  const countElement = document.getElementById("skillCount");
  if (countElement) {
    countElement.textContent = skillCount;
  }
});
