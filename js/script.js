/* ============================================
   DATA — edit these to add/update content.
   Just drop matching files into /assets/ and
   keep the filenames in sync with the paths below.
============================================ */

const PROJECTS = [
  {
    id: "hostel-management-system",
    title: "Hostel Management System",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy","JWT","Gemini API", "sqlglot"],
    summary: "REST backend for hostel operations: room allocation, complaints and fees, with role-based auth.",
    bullets: [
      "Designed a normalized PostgreSQL database with 7+ relational tables and built REST APIs using FastAPI for room allocation, complaints, fee management and student records.",
      "Implemented JWT authentication and role-based authorization for Admin and Student users, with admin-only endpoints and per-student data filtering.",
      "Built an admin-only AI assistant using the Gemini API that turns natural-language questions into SQL with schema-aware prompts, integrated into the HTML, CSS and JavaScript frontend as an Ask AI tab.",
      "Secured the assistant with a sqlglot validator, read-only PostgreSQL role, 200-row cap, rate limiting and audit logging, and tested it with adversarial prompts."
    ],
    github: "https://github.com/abhayhck/Hostel_Management_System",
    // Add as many screenshots as you like — just keep the filenames matching.
    screenshots: [
      "assets/projects/hostel-1.jpg",
      "assets/projects/hostel-2.jpg",
      "assets/projects/hostel-3.jpg"
    ]
  },
  {
    id: "callrecall-android-app",
    title: "CallRecall",
    tech: ["Kotlin", "Room", "MVVM", "Coroutines", "Material Design"],
    summary: "Android app for notes linked to phone numbers, with a floating shortcut during calls and local data storage.",
    bullets: [
      "Built a caller-linked note-taking app using Kotlin, MVVM and Room.",
      "Implemented a draggable call overlay with tap-to-open and drag-to-dismiss actions.",
      "Developed autosaving notes, contact-name lookup, search and sorting.",
      "Standardized international phone numbers for consistent storage and caller matching.",
      "Added backup and restore with optional password encryption and per-note conflict resolution.",
      "Designed a minimalist interface with light and dark themes."
    ],
    github: "https://github.com/abhayhck/CallRecall",
    screenshots: [
      "assets/projects/callrecall-notes.jpg",
      "assets/projects/callrecall-editor.jpg",
      "assets/projects/callrecall-bubble.jpg",
      "assets/projects/callrecall-backup.jpg"
    ]
  },
  {
    id: "chatx-android-app",
    title: "ChatX Android App",
    tech: ["Kotlin", "Firebase"],
    summary: "Real-time one-to-one chat app with Firebase Auth and Realtime Database.",
    bullets: [
      "Built a real-time chat application using Kotlin and Firebase.",
      "Implemented Firebase Authentication for secure login and signup.",
      "Developed one-to-one messaging with Firebase Realtime Database.",
      "Designed user management, contact addition and real-time chat features."
    ],
    github: "https://github.com/abhayhck/ChatX",
    screenshots: [
      "assets/projects/chatx-1.jpg",
      "assets/projects/chatx-2.jpg"
    ]
  }
];

const CERTIFICATIONS = [
  {
    title: "Cisco Cybersecurity Essentials",
    issuer: "Cisco",
    image: "assets/certs/cisco-cybersecurity.jpg",
    link: "https://drive.google.com/file/d/16RZCSiiX2wSbSoePbwOoulN1W4oUq1IP/view?usp=sharing"
  },
  {
    title: "Bash Scripting",
    issuer: "Udemy",
    image: "assets/certs/bash-scripting.jpg",
    link: "https://drive.google.com/file/d/1eS2t7-WiT1AXyeWQk_h5yvAdfc1X5jg6/view?usp=sharing"
  },
  {
    title: "Oracle SQL / PLSQL",
    issuer: "Cognizant",
    image: "assets/certs/oracle-sql-plsql.jpg",
    link: "https://drive.google.com/file/d/17YnK_yudHo4t_a43DoHxOkFNVa0lMFsd/view?usp=sharing"
  },
  {
    title: "Supply Chain Management",
    issuer: "Cognizant",
    image: "assets/certs/supply-chain-management.jpg",
    link: "https://drive.google.com/drive/folders/1o5QvNwg4wJRTQEetROU5rU_3GVjhEQnH?usp=sharing"
  }
];

/* ============================================
   RENDER PROJECTS
============================================ */
const projectsGrid = document.getElementById("projectsGrid");
const projectDetail = document.getElementById("projectDetail");

PROJECTS.forEach((p, i) => {
  const card = document.createElement("button");
  card.className = "project-card reveal";
  card.setAttribute("data-id", p.id);
  card.innerHTML = `
    <div class="term-bar">
      <span class="term-bar__dot term-bar__dot--red"></span>
      <span class="term-bar__dot term-bar__dot--yellow"></span>
      <span class="term-bar__dot term-bar__dot--green"></span>
      <span class="term-bar__label mono">~/projects/${p.id}</span>
    </div>
    <div class="card-body">
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <div class="project-card__tech">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      <span class="project-card__cta mono">view details →</span>
    </div>
  `;
  card.addEventListener("click", () => openProject(p.id));
  projectsGrid.appendChild(card);
});

function openProject(id) {
  const p = PROJECTS.find(proj => proj.id === id);
  if (!p) return;

  projectDetail.innerHTML = `
    <div class="term-bar">
      <span class="term-bar__dot term-bar__dot--red"></span>
      <span class="term-bar__dot term-bar__dot--yellow"></span>
      <span class="term-bar__dot term-bar__dot--green"></span>
      <span class="term-bar__label mono">~/projects/${p.id}/README.md</span>
      <button class="term-bar__close" id="closeDetail" aria-label="Close details">&times;</button>
    </div>
    <div class="card-body">
      <div class="project-detail__head">
        <h3>${p.title}</h3>
      </div>
      <div class="project-card__tech" style="margin-bottom:1rem;">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      <p class="project-detail__desc">${p.summary}</p>
      <ul class="project-detail__list">${p.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      <div class="project-detail__shots">
        ${p.screenshots.map(src => `<img src="${src}" alt="${p.title} screenshot" loading="lazy" onerror="this.parentElement.style.display='none'">`).join("")}
      </div>
      <a href="${p.github}" target="_blank" rel="noopener" class="btn btn--primary">View on GitHub</a>
    </div>
  `;

  projectDetail.classList.add("is-open");
  document.getElementById("closeDetail").addEventListener("click", () => {
    projectDetail.classList.remove("is-open");
  });

  projectDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============================================
   RENDER CERTIFICATIONS + LIGHTBOX
============================================ */
const certsGrid = document.getElementById("certsGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxIssuer = document.getElementById("lightboxIssuer");
const lightboxLink = document.getElementById("lightboxLink");
const lightboxClose = document.getElementById("lightboxClose");

CERTIFICATIONS.forEach(c => {
  const card = document.createElement("button");
  card.className = "cert-card reveal";
  const slug = c.issuer.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  card.innerHTML = `
    <div class="term-bar">
      <span class="term-bar__dot term-bar__dot--red"></span>
      <span class="term-bar__dot term-bar__dot--yellow"></span>
      <span class="term-bar__dot term-bar__dot--green"></span>
      <span class="term-bar__label mono">~/certs/${slug}</span>
    </div>
    <div class="cert-card__thumb"><img src="${c.image}" alt="${c.title} certificate" loading="lazy"></div>
    <div class="cert-card__body">
      <h3>${c.title}</h3>
      <p class="mono">${c.issuer}</p>
    </div>
  `;
  card.addEventListener("click", () => {
    lightboxImg.src = c.image;
    lightboxImg.alt = c.title + " certificate";
    lightboxTitle.textContent = c.title;
    lightboxIssuer.textContent = c.issuer;
    lightboxLink.href = c.link;
    lightbox.classList.add("is-open");
  });
  certsGrid.appendChild(card);
});

function closeLightbox() { lightbox.classList.remove("is-open"); }
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

/* ============================================
   MISC
============================================ */
document.getElementById("year").textContent = new Date().getFullYear();

// Fallback if profile photo hasn't been added yet
const profileImg = document.getElementById("profileImg");
profileImg.addEventListener("error", () => {
  profileImg.replaceWith(Object.assign(document.createElement("div"), {
    className: "mono",
    style: "color:#6B6F76;font-size:0.8rem;text-align:center;padding:2rem;",
    textContent: "Add assets/profile.png"
  }));
});

/* Scroll-reveal for timeline items too */
document.querySelectorAll(".timeline__item, .edu__item, .contact__card").forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
