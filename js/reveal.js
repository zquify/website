document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(
    ".reveal-on-scroll, .card, .game-card, .press-card"
  );

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.15
  });

  items.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});