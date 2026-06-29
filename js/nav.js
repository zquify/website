const navHTML = `
<nav>
  <a href="index.html" class="logo">HALFRABBIT</a>
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="games.html">Games</a>
    <a href="about.html">About</a>
    <a href="press.html">Press</a>
    <a href="contact.html">Contact</a>
  </div>
</nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", navHTML);

  const currentPage =
    location.pathname.split("/").filter(Boolean).pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === currentPage) {
      a.classList.add("active");
    }
  });
});