/* ==========================================================================
   RENEL PORTFOLIO — SCRIPT PRINCIPAL (JAVASCRIPT PUR)
   ========================================================================== */

const COPY = {
  FR: {
    nav: ["À propos", "Services", "Certifications", "Projets"],
    navContact: "Contact",
    hello: "Salut, je suis",
    role: "Développeur Web",
    role2: "Backend & Designer.",
    intro:
      "De la logique du code à la force du visuel, je transforme vos idées en expériences utiles et singulières.",
    contactBtn: "CONTACT",
    downloadCv: "DOWNLOAD CV",
    contact: "Parlons de votre projet",
    discover: "DÉCOUVRIR MON UNIVERS",
    based: "BASÉ À DOUALA, CAMEROUN",
    about: "Plus qu'une passion.\nUne exigence.",
    aboutText:
      "Curieux par nature, créateur par conviction. Je relie la technologie, le design et la transmission pour donner vie à des projets qui ont du sens.",
    roles: [
      "Développeur Web",
      "Designer",
      "Formateur Web",
      "Maître de cérémonie",
      "Traducteur",
      "Rédacteur de livres",
    ],
    roleBackendCard: "Développeur Web Backend",
    services: "Six expertises avec\ndes possibilités infinies.",
    serviceText:
      "Une vision transversale pour vous accompagner, de la première idée au dernier détail.",
    serviceNames: [
      "Développement backend",
      "Design & identité visuelle",
      "Formation web",
      "Animation de cérémonies",
      "Traduction FR / EN / DE",
      "Rédaction technique",
    ],
    serviceDesc: [
      "Des fondations solides. Des applications pensées pour durer.",
      "Des interfaces intuitives et des identités qui se se distinguent.",
      "Apprendre, pratiquer et devenir autonome avec O'School.",
      "La bonne énergie, les bons mots, au bon moment.",
      "Faire dialoguer les langues, les cultures et les idées.",
      "Structurer vos idées. Donner de la clarté à vos projets.",
    ],
    certTitle: "La curiosité,\ncertifiée.",
    earned: "OBTENUE EN 2026",
    ongoing: "EN COURS",
    verify: "Voir la certification",
    download: "Télécharger",
    projectsTitle: "Des idées aux\nréalisations.",
    cli: "Un outil en ligne de commande qui transforme les informations utilisateur en factures. Projet final CS50P.",
    web: "Une plateforme de formation autodidacte pour rendre le développement web accessible à tous. (Lancement prévu en Avril 2027)",
    design:
      "Une direction visuelle pour révéler les talents du département Génie Informatique de l'IUT de Douala, faire valoir les business des startups comme Le Groupe Sciences Tech, et la vente des drones DJI Air 3.",
    artTitle: "Des talents. Une scène.",
    works: "Voir mes œuvres",
    demo: "Voir la démo",
    code: "Code source",
    build: "EN DÉVELOPPEMENT",
    together: "Et si l'on créait\nquelque chose de beau ?",
    contactText:
      "Une idée, un projet ou simplement envie d'échanger? La conversation commence ici.",
    name: "Votre nom",
    email: "Votre email",
    messageLabel: "Message",
    message: "Parlez-moi de votre projet...",
    send: "Envoyer le message",
    footer: "Du code, du sens et du caractère.",
    rights: "Tous droits réservés.",
    gallery: "Direction artistique & créations visuelles",
    close: "Fermer",
    instructor:
      "Fondateur d'O'School, une startup dédiée à l'apprentissage autodidacte du développement web.",
    mc: "De l'éloquence, de la prestance et une énergie au service de chaque événement.",
    events: [
      "Accueil des nouveaux étudiants IUT Douala Oct. 2026",
      "Bilinguisme & multiculturalisme Lycée de Bétaré-Oya Fév. 2024",
      "Réception des meilleurs élèves Sous-préfecture de Bétaré-Oya Fév. 2026",
      "Meilleur élève et MC (2024)",
      "Mariage d'un cadre de la CRTV Ekounou Cephta Juil. 2026",
    ],
    languages: [
      { code: "FR", label: "Français Langue natale" },
      { code: "EN", label: "Anglais Professionnel" },
      { code: "DE", label: "Allemand Intermédiaire" },
    ],
    translation:
      "Interprète entre micro-investisseurs allemands et commerçants camerounais en 2026.",
    writer:
      "Des documents professionnels et techniques précis. Principal rédacteur du projet académique MediCare.",
    writingExamples: "Voir des exemples de rédaction",
    docs: "Voir le cahier des charges",
    pause: "Mettre en pause",
    play: "Reprendre",
    skills: "COMPÉTENCES",
  },
  EN: {
    nav: ["About", "Services", "Certifications", "Projects"],
    navContact: "Contact",
    hello: "HELLO, I'M",
    role: "Backend Web",
    role2: "Developer & Designer.",
    intro:
      "From the logic of code to the power of visuals, I turn your ideas into useful, distinctive experiences.",
    contactBtn: "CONTACT",
    downloadCv: "DOWNLOAD CV",
    contact: "Let's talk about your project",
    discover: "EXPLORE MY WORLD",
    based: "BASED IN DOUALA, CAMEROON",
    about: "More than a passion.\nOne shared standard.",
    aboutText:
      "Curious by nature, a creator by conviction. I connect technology, design and teaching to bring meaningful projects to life.",
    roles: [
      "Web Developer",
      "Designer",
      "Web Instructor",
      "Master of Ceremonies",
      "Translator",
      "Book & Technical Writer",
    ],
    roleBackendCard: "Backend Web Developer",
    services: "Six areas of expertise.\nEndless possibilities.",
    serviceText:
      "A cross-disciplinary vision, from the first idea to the final detail.",
    serviceNames: [
      "Backend development",
      "Design & visual identity",
      "Web training",
      "Master of ceremonies",
      "FR / EN / DE translation",
      "Technical writing",
    ],
    serviceDesc: [
      "Solid foundations. Applications built to last.",
      "Intuitive interfaces and distinctive identities.",
      "Learn, practise and become independent with O'School.",
      "The right energy and the right words, at the right time.",
      "Connecting languages, cultures and ideas.",
      "Structure your ideas. Bring clarity to your projects.",
    ],
    certTitle: "Certified\ncuriosity.",
    earned: "EARNED IN 2026",
    ongoing: "IN PROGRESS",
    verify: "View certificate",
    download: "Download",
    projectsTitle: "From ideas\nto reality.",
    cli: "A command-line tool that turns user input into invoices. CS50P final project.",
    web: "A self-directed learning platform making web development accessible to everyone. (Expected launch April 2027)",
    design:
      "A visual direction showcasing talent at the Computer Engineering department of IUT Douala, supporting startups like Le Groupe Sciences Tech, and promoting DJI Air 3 drones.",
    artTitle: "Great talent. One stage.",
    works: "View my works",
    demo: "Watch demo",
    code: "Source code",
    build: "IN DEVELOPMENT",
    together: "Let's create\nsomething beautiful.",
    contactText:
      "An idea, a project, or simply a conversation? It all starts here.",
    name: "Your name",
    email: "Your email",
    messageLabel: "Message",
    message: "Tell me about your project...",
    send: "Send message",
    footer: "Code, purpose and character.",
    rights: "All rights reserved.",
    gallery: "Art direction & visual creations",
    close: "Close",
    instructor:
      "Founder of O'School, a startup dedicated to self-directed web development learning.",
    mc: "Eloquence, presence and the perfect energy for every event.",
    events: [
      "New student welcome IUT Douala Oct. 2026",
      "Bilingualism & multiculturalism Bétaré-Oya High School Feb. 2024",
      "Top students reception Bétaré-Oya sub-prefecture Feb. 2026",
      "Top student and MC (2024)",
      "CRTV executive wedding Ekounou Cephta Jul. 2026",
    ],
    languages: [
      { code: "FR", label: "French Native" },
      { code: "EN", label: "English Professional" },
      { code: "DE", label: "German Intermediate" },
    ],
    translation:
      "Interpreter between German micro-investors and Cameroonian merchants in 2026.",
    writer:
      "Precise professional and technical documents. Lead writer for the MediCare academic project.",
    writingExamples: "See writing samples",
    docs: "View project specifications",
    pause: "Pause",
    play: "Resume",
    skills: "SKILLS",
  },
  DE: {
    nav: ["Über mich", "Leistungen", "Zertifikate", "Projekte"],
    navContact: "Kontakt",
    hello: "HALLO, ICH BIN",
    role: "Backend-Webentwickler",
    role2: "& Designer.",
    intro:
      "Von der Logik des Codes bis zur Kraft der Gestaltung: Ich verwandle Ihre Ideen in nützliche, einzigartige Erlebnisse.",
    contactBtn: "KONTAKT",
    downloadCv: "LEBENSLAUF",
    contact: "Sprechen wir über Ihr Projekt",
    discover: "MEINE WELT ENTDECKEN",
    based: "IN DOUALA, KAMERUN",
    about: "Mehr als Leidenschaft.\nEin gemeinsamer Anspruch.",
    aboutText:
      "Neugierig von Natur aus, Gestalter aus Überzeugung. Ich verbinde Technologie, Design und Lehre für Projekte mit Bedeutung.",
    roles: [
      "Webentwickler",
      "Designer",
      "Webtrainer",
      "Moderator",
      "Übersetzer",
      "Buch- & Fachautor",
    ],
    roleBackendCard: "Backend-Webentwickler",
    services: "Sechs Kompetenzen.\nUnendliche Möglichkeiten.",
    serviceText:
      "Eine interdisziplinäre Perspektive, von der ersten Idee bis zum letzten Detail.",
    serviceNames: [
      "Backend-Entwicklung",
      "Design & visuelle Identität",
      "Webtraining",
      "Veranstaltungsmoderation",
      "Übersetzung FR / EN / DE",
      "Technische Dokumentation",
    ],
    serviceDesc: [
      "Solide Grundlagen. Langlebige Anwendungen.",
      "Intuitive Oberflächen und unverwechselbare Identitäten.",
      "Mit O'School selbstständig lernen und üben.",
      "Die richtige Energie und die richtigen Worte.",
      "Sprachen, Kulturen und Ideen verbinden.",
      "Ideen strukturieren. Projekte verständlich machen.",
    ],
    certTitle: "Zertifizierte\nNeugier.",
    earned: "ERWORBEN 2026",
    ongoing: "IN BEARBEITUNG",
    verify: "Zertifikat ansehen",
    download: "Herunterladen",
    projectsTitle: "Von der Idee\nzur Umsetzung.",
    cli: "Ein Kommandozeilen-Tool, das Nutzereingaben in Rechnungen umwandelt. CS50P-Abschlussprojekt.",
    web: "Eine Plattform zum selbstständigen Lernen, die Webentwicklung allen zugänglich macht. (Geplanter Start April 2027)",
    design:
      "Visuelle Gestaltung für die Talente der Informatikabteilung des IUT Douala, Startups wie Le Groupe Sciences Tech und DJI Air 3 Drohnen.",
    artTitle: "Talente. Eine Bühne.",
    works: "Meine Arbeiten ansehen",
    demo: "Demo ansehen",
    code: "Quellcode",
    build: "IN ENTWICKLUNG",
    together: "Lassen Sie uns\netwas Schönes schaffen.",
    contactText:
      "Eine Idee, ein Projekt oder einfach ein Gespräch? Hier beginnt es.",
    name: "Ihr Name",
    email: "Ihre E-Mail",
    messageLabel: "Ihre Nachricht",
    message: "Erzählen Sie von Ihrem Projekt...",
    send: "Nachricht senden",
    footer: "Code, Sinn und Charakter.",
    rights: "Alle Rechte vorbehalten.",
    gallery: "Art Direction & visuelle Arbeiten",
    close: "Schließen",
    instructor:
      "Gründer von O'School, einem Startup für selbstständiges Lernen in der Webentwicklung.",
    mc: "Redegewandtheit, Präsenz und die passende Energie für jede Veranstaltung.",
    events: [
      "Begrüßung neuer Studierender IUT Douala Okt. 2026",
      "Zweisprachigkeit & Multikulturalismus Gymnasium Bétaré-Oya Feb. 2024",
      "Empfang der besten Schüler Unterpräfektur Bétaré-Oya Feb. 2026",
      "Bester Schüler und Moderator (2024)",
      "Hochzeit eines CRTV-Managers Ekounou Cephta Juli 2026",
    ],
    languages: [
      { code: "FR", label: "Französisch Muttersprache" },
      { code: "EN", label: "Englisch Beruflich" },
      { code: "DE", label: "Deutsch Mittelstufe" },
    ],
    translation:
      "Dolmetscher zwischen deutschen Kleininvestoren und kamerunischen Händlern im Jahr 2026.",
    writer:
      "Präzise Fachtexte und technische Dokumente. Hauptautor des akademischen Projekts MediCare.",
    writingExamples: "Schreibproben ansehen",
    docs: "Lastenheft ansehen",
    pause: "Pausieren",
    play: "Fortsetzen",
    skills: "KOMPETENZEN",
  },
};

const BACKEND_SKILLS = [
  ["Python", 97],
  ["HTML5", 89],
  ["CSS3", 65],
  ["Bootstrap 5", 77],
  ["JavaScript", 45],
  ["SQL", 80],
  ["Django", 85],
  ["Django REST", 54],
  ["Java", 12],
  ["Git", 91],
  ["Docker", 20],
];

const DESIGN_SKILLS = [
  ["Canva", 73],
  ["Inkscape", 74],
  ["Framer", 59],
  ["Adobe", 47],
  ["Figma", 80],
  ["Behance", 43],
  ["Photoshop", 25],
];

const WRITING_SKILLS = [
  ["LibreOffice", 83],
  ["Overleaf", 43],
];

const SERVICE_ICONS = [
  "bi-code-slash",
  "bi-gem",
  "bi-mortarboard",
  "bi-mic",
  "bi-globe",
  "bi-vector-pen",
];

const GALLERY_ITEMS = [
  { file: "./assets/chanteurs.png", alt: "Affiche chanteurs" },
  { file: "./assets/danseurs.png", alt: "Affiche danseurs" },
  { file: "./assets/gaming.png", alt: "Affiche gaming" },
  { file: "./assets/échec.png", alt: "Affiche échec" },
  { file: "./assets/exposants.png", alt: "Affiche exposants" },
  { file: "./assets/miss.png", alt: "Affiche miss" },
  { file: "./assets/parrainage.png", alt: "Affiche parrainage" },
  { file: "./assets/quiz.png", alt: "Affiche quiz" },
  { file: "./assets/communication.png", alt: "Affiche communication" },
  { file: "./assets/gs.png", alt: "Flyer GS" },
  { file: "./assets/drone.png", alt: "Flyer drone" },
];

let currentLang = "FR";
let isPaused = false;
let galleryIndex = null;

function createSkillElement([name, value]) {
  const wrapper = document.createElement("div");
  wrapper.className = "skill";
  wrapper.dataset.targetValue = String(value);

  const symbol = document.createElement("span");
  symbol.className = "skill-symbol";
  symbol.textContent = name.slice(0, 2);

  const content = document.createElement("div");

  const labelRow = document.createElement("div");
  labelRow.className = "skill-label";

  const skillName = document.createElement("span");
  skillName.textContent = name;

  const skillPercent = document.createElement("span");
  skillPercent.className = "skill-percent";
  skillPercent.textContent = "0%";

  labelRow.append(skillName, skillPercent);

  const bar = document.createElement("div");
  bar.className = "bar";

  const barFill = document.createElement("i");
  bar.appendChild(barFill);

  content.append(labelRow, bar);
  wrapper.append(symbol, content);
  return wrapper;
}

function renderSkills() {
  const groups = {
    backend: BACKEND_SKILLS,
    design: DESIGN_SKILLS,
    writing: WRITING_SKILLS,
  };

  Object.entries(groups).forEach(([groupKey, list]) => {
    const container = document.querySelector(`[data-skill-group="${groupKey}"]`);
    if (!container) return;
    container.innerHTML = "";
    list.forEach((item) => container.appendChild(createSkillElement(item)));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.targetValue || 0);
        const barFill = el.querySelector(".bar i");
        const percentText = el.querySelector(".skill-percent");
        if (barFill) barFill.style.width = `${target}%`;
        if (percentText) percentText.textContent = `${target}%`;
        observer.unobserve(el);
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".skill").forEach((el) => observer.observe(el));
}

function renderMarquee(roles) {
  const html = roles.map((role) => `<span>${role}<b>*</b></span>`).join("");
  const track1 = document.getElementById("marquee-track-1");
  const track2 = document.getElementById("marquee-track-2");
  if (track1) track1.innerHTML = html;
  if (track2) track2.innerHTML = html;
}

function renderHoneycomb(c) {
  const container = document.getElementById("services-honeycomb");
  if (!container) return;

  container.innerHTML = c.serviceNames
    .map(
      (name, idx) => `
      <a href="#contact" class="hex hex-${idx}">
        <span class="hex-number">0${idx + 1}</span>
        <i class="bi ${SERVICE_ICONS[idx] || "bi-arrow-up-right"}" aria-hidden="true"></i>
        <h3>${name}</h3>
        <p>${c.serviceDesc[idx] || ""}</p>
      </a>
    `
    )
    .join("");
}

function renderEventsAndLanguages(c) {
  const eventsEl = document.getElementById("mc-events");
  if (eventsEl) {
    eventsEl.innerHTML = c.events.map((ev) => `<li>${ev}</li>`).join("");
  }

  const langListEl = document.getElementById("language-list");
  if (langListEl) {
    langListEl.innerHTML = c.languages
      .map((item) => `<div><span>${item.code}</span> ${item.label}</div>`)
      .join("");
  }
}

function applyLanguage(lang) {
  currentLang = COPY[lang] ? lang : "FR";
  const c = COPY[currentLang];

  document.documentElement.lang = currentLang.toLowerCase();
  const currentLangEl = document.getElementById("current-lang");
  if (currentLangEl) currentLangEl.textContent = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const parts = key.split(".");
    let val = c;
    for (const p of parts) {
      val = val?.[p];
    }
    if (typeof val === "string") {
      el.textContent = val;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && typeof c[key] === "string") {
      el.setAttribute("placeholder", c[key]);
    }
  });

  renderMarquee(c.roles);
  renderHoneycomb(c);
  renderEventsAndLanguages(c);
  updateLanguageMenuOptions();
  updateCarouselToggleAria();
}

function updateLanguageMenuOptions() {
  const menu = document.getElementById("lang-menu");
  if (!menu) return;
  const others = ["FR", "EN", "DE"].filter((l) => l !== currentLang);
  menu.innerHTML = others
    .map((l) => `<button type="button" data-lang="${l}">${l}</button>`)
    .join("");

  menu.querySelectorAll("button[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      if (selected) applyLanguage(selected);
      menu.hidden = true;
      const toggle = document.getElementById("lang-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupHeaderAndLanguage() {
  const langToggle = document.getElementById("lang-toggle");
  const langMenu = document.getElementById("lang-menu");
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileIcon = document.getElementById("mobile-toggle-icon");
  const nav = document.getElementById("main-nav");

  if (langToggle && langMenu) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = langMenu.hidden;
      langMenu.hidden = !willOpen;
      langToggle.setAttribute("aria-expanded", String(willOpen));
    });

    document.addEventListener("click", (e) => {
      if (
        !langMenu.hidden &&
        !langMenu.contains(e.target) &&
        !langToggle.contains(e.target)
      ) {
        langMenu.hidden = true;
        langToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
      if (mobileIcon) {
        mobileIcon.className = isOpen ? "bi bi-x-lg" : "bi bi-list";
      }
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
        if (mobileIcon) mobileIcon.className = "bi bi-list";
      });
    });
  }
}

function updateCarouselToggleAria() {
  const toggleBtn = document.getElementById("carousel-toggle");
  const toggleIcon = document.getElementById("carousel-toggle-icon");
  const c = COPY[currentLang];
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-label", isPaused ? c.play : c.pause);
  }
  if (toggleIcon) {
    toggleIcon.className = isPaused ? "bi bi-play-fill" : "bi bi-pause-fill";
  }
}

function setupCarousel() {
  const carousel = document.getElementById("expertise-carousel");
  const toggleBtn = document.getElementById("carousel-toggle");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  if (!carousel) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) isPaused = true;

  carousel.addEventListener("mouseenter", () => {
    isPaused = true;
    updateCarouselToggleAria();
  });

  carousel.addEventListener(
    "touchstart",
    () => {
      isPaused = true;
      updateCarouselToggleAria();
    },
    { passive: true }
  );

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isPaused = !isPaused;
      updateCarouselToggleAria();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      isPaused = true;
      updateCarouselToggleAria();
      carousel.scrollBy({ left: -440, behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      isPaused = true;
      updateCarouselToggleAria();
      carousel.scrollBy({ left: 440, behavior: "smooth" });
    });
  }

  let lastTime = 0;
  function step(time) {
    if (!isPaused) {
      if (lastTime) {
        carousel.scrollLeft += (time - lastTime) * 0.012;
        if (
          carousel.scrollLeft >=
          carousel.scrollWidth - carousel.clientWidth - 1
        ) {
          carousel.scrollLeft = 0;
        }
      }
      lastTime = time;
    } else {
      lastTime = 0;
    }
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function syncGalleryModal() {
  const dialog = document.getElementById("gallery-dialog");
  if (!dialog) return;

  if (galleryIndex === null) {
    if (dialog.open) dialog.close();
    return;
  }

  const item = GALLERY_ITEMS[galleryIndex];
  const img = document.getElementById("gallery-img");
  const counter = document.getElementById("gallery-counter");
  const dl = document.getElementById("gallery-download");
  const total = String(GALLERY_ITEMS.length).padStart(2, "0");

  if (img) {
    img.src = item.file;
    img.alt = item.alt;
  }
  if (counter) {
    counter.textContent = `${String(galleryIndex + 1).padStart(2, "0")} / ${total}`;
  }
  if (dl) {
    dl.href = item.file;
  }

  if (!dialog.open) dialog.showModal();
}

function setupGallery() {
  const dialog = document.getElementById("gallery-dialog");
  const open1 = document.getElementById("open-gallery-btn");
  const open2 = document.getElementById("open-gallery-btn-2");
  const closeBtn = document.getElementById("close-gallery-btn");
  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");

  const openGallery = (idx = 0) => {
    galleryIndex = idx;
    syncGalleryModal();
  };

  if (open1) open1.addEventListener("click", () => openGallery(0));
  if (open2) open2.addEventListener("click", () => openGallery(0));

  document.querySelectorAll(".poster-cover img").forEach((thumb, idx) => {
    thumb.addEventListener("click", (e) => {
      e.stopPropagation();
      openGallery(idx);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      galleryIndex = null;
      syncGalleryModal();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (galleryIndex === null) return;
      galleryIndex =
        (galleryIndex + GALLERY_ITEMS.length - 1) % GALLERY_ITEMS.length;
      syncGalleryModal();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (galleryIndex === null) return;
      galleryIndex = (galleryIndex + 1) % GALLERY_ITEMS.length;
      syncGalleryModal();
    });
  }

  if (dialog) {
    dialog.addEventListener("cancel", () => {
      galleryIndex = null;
    });

    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        galleryIndex = null;
        syncGalleryModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (galleryIndex === null) return;
      if (e.key === "ArrowLeft") {
        galleryIndex =
          (galleryIndex + GALLERY_ITEMS.length - 1) % GALLERY_ITEMS.length;
        syncGalleryModal();
      } else if (e.key === "ArrowRight") {
        galleryIndex = (galleryIndex + 1) % GALLERY_ITEMS.length;
        syncGalleryModal();
      }
    });
  }
}

function setupContactAndFooter() {
  const form = document.getElementById("whatsapp-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      const text = `${name}\n${email}\n\n${message}`;
      const url = `https://wa.me/237621631214?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupHeaderAndLanguage();
  renderSkills();
  applyLanguage("FR");
  setupCarousel();
  setupGallery();
  setupContactAndFooter();
});