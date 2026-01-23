document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const countBox = document.getElementById("cardCount");

  countBox.textContent = cards.length;
});
