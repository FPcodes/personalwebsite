// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Expand Deployment Details
document.querySelectorAll(".expand-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Scroll Fade-In
const faders = document.querySelectorAll(".section, .project");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

faders.forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});