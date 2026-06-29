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

  let page = window.location.pathname.split("/").pop();
  if (!page || page === "") page = "index.html";

  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === page) {
      link.classList.add("active");
    }
  });
});