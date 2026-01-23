const roles = [
  "Business Analyst",
  "Excel Specialist",
  "Product Manager",
  "FinOps Manager",
  "Operation Manager",
  "Marketing Manager"
];

const roleElement = document.getElementById("role");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120; // ms per character
let pauseBetweenRoles = 1500; // pause after a word is fully typed

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    roleElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    roleElement.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length + 1) {
    // finished typing → pause before deleting
    isDeleting = true;
    setTimeout(typeEffect, pauseBetweenRoles);
    return;
  }

  if (isDeleting && charIndex === -1) {
    // finished deleting → move to next role
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? typingSpeed / 2 : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
