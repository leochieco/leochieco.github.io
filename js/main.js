
function loadHeader() {
  const header = document.getElementById("site-header");

  header.innerHTML = `
    <div class="header-left">
      <img src="assets/logo/logo.png" class="logo" alt="Logo">
      <span class="site-title">  Electronics with Leo</span>
    </div>

    <button class="menu-toggle" aria-label="Toggle menu">
      ☰
    </button>

    <nav class="main-nav">
      <a href="index.html">Home</a>
      <a href="about.html">About me</a>
    </nav>
  `;

  const toggle = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".main-nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}


function loadProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;


  
  

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";
 
const flags = p.language
  ? p.language.split(",").map(l => l.trim()).map(l => {
      if (l.toLowerCase().startsWith("italian")) return "🇮🇹";
      if (l.toLowerCase().startsWith("english")) return "🇬🇧";
      return "";
    }).join(" ")
  : "";

card.innerHTML = `
  <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
  <div class="project-card-content">
    <div class="card-top">
      <span class="badge ${p.difficulty}">${p.difficulty}</span>
      <span class="flags">${flags}</span>
    </div>
    <h3>${p.title}</h3>
    <div class="meta">${p.category}</div>
    <p>${p.description_brief}</p>
  </div>
`;
 
 
 
 
    card.onclick = () => window.location.href = "project.html?id=" + p.id;
    grid.appendChild(card);
  });
}


function loadFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <p>
      © ${new Date().getFullYear()} Electronics with Leo |
      <a href="https://www.linkedin.com/in/leonardo-chieco-53550b129" target="_blank">LinkedIn</a>
    </p>
  `;
  document.body.appendChild(footer);
}



function loadProjectPage() {
  const container = document.getElementById("project-content");
  if (!container) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const p = projects.find(x => x.id === id);
  if (!p) return;
  
 

  container.innerHTML = `
    <h1>${p.title}</h1>
    <span class="badge">${p.difficulty}</span>
    <img src="${p.thumbnail}" alt="${p.title}" style="max-width:400px;margin:20px 0;display:block;">
    <p>${p.description}</p>

    <ul>
      <li><strong>Language:</strong> ${p.language || "N/A"}</li>
      <li><strong>Year:</strong> ${p.year || "N/A"}</li>
	  
      ${p.extra ? Object.entries(p.extra).map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join("") : ""}
      <li><strong>Category:</strong> ${p.category}</li>
    </ul>

    <p>
      <a href="${p.github}" target="_blank" rel="noopener">View full tutorial on GitHub</a>
    </p>
  `;
}


loadHeader();
loadProjects();
loadProjectPage();
loadFooter();
