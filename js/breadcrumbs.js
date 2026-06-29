document.addEventListener("DOMContentLoaded", () => {
  const file = location.pathname.split("/").pop() || "index.html";

  const pageMap = {
    "index.html": ["Home"],
    "games.html": ["Home", "Games"],
    "about.html": ["Home", "About"],
    "press.html": ["Home", "Press"],
    "contact.html": ["Home", "Contact"],
    "ant-up.html": ["Home", "Games", "Ant Up!"]
  };

  const trail = pageMap[file];
  if (!trail) return;

  const container = document.createElement("div");
  container.className = "breadcrumbs";

  let html = "";

  trail.forEach((label, i) => {
    const isLast = i === trail.length - 1;

    if (!isLast) {
      const href = getHref(label);

      html += `
        <a href="${href}">${label}</a>
        <span class="crumb-sep">/</span>
      `;
    } else {
      html += `<span>${label}</span>`;
    }
  });

  container.innerHTML = html;

  const section = document.querySelector("section");
  if (section) section.prepend(container);
});

function getHref(label){
  switch(label){
    case "Home": return "index.html";
    case "Games": return "games.html";
    case "About": return "about.html";
    case "Press": return "press.html";
    case "Contact": return "contact.html";
    default: return "index.html";
  }
}