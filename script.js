// ===============================
// NAVBAR SCROLL + ACTIVE
// ===============================
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const scrollPosition = window.scrollY + window.innerHeight / 2;

sections.forEach(section => {
  const sectionTop = section.offsetTop;
  const sectionBottom = sectionTop + section.offsetHeight;

  if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    current = section.getAttribute("id");
  }
});
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ===============================
// GLOW EFFECT
// ===============================
document.querySelectorAll(".card, .skill-card, .project-card, .contact-card")
.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", (e.clientX - rect.left) + "px");
    card.style.setProperty("--y", (e.clientY - rect.top) + "px");
  });
});


// ===============================
// TRADUÇÕES
// ===============================
const translations = {
  pt: {
    inicio: "Início",
    habilidades: "Habilidades",
    projetos: "Projetos",
    contato: "Contato",

    badge: "Desenvolvedora Front-End",
    titulo: "Evellyn Barbosa",
    descricao: "Desenvolvedora Front-End criando interfaces modernas, responsivas e performáticas",
    texto: "Atuo no desenvolvimento front-end criando interfaces modernas e responsivas. Utilizo HTML, CSS, JavaScript e Python, além de ferramentas como Git e GitHub para versionamento e organização dos projetos.",
    botao: "Entre em contato →",

    habilidadesTitulo: "Habilidades",
    habilidadesSub: "Tecnologias que utilizo no dia a dia",

    projetosTitulo: "Projetos",

    proj1Titulo: "Landing Page - Lilian Marinho",
    proj1Desc: "Landing page desenvolvida com foco em captação de leads e apresentação da gerente Lilian Marinho e seus imóveis disponíveis. Possui design moderno, responsivo e otimizado para conversão.",

    contatoTitulo: "Entre em Contato",
    contatoSub: "Interessado em trabalhar juntos? Vamos conversar."
  },

  en: {
    inicio: "Home",
    habilidades: "Skills",
    projetos: "Projects",
    contato: "Contact",

    badge: "Front-End Developer",
    titulo: "Evellyn Barbosa",
    descricao: "Building modern, responsive and high-performance interfaces",
    texto: "I work in front-end development creating modern and responsive interfaces. I use HTML, CSS, JavaScript and Python, along with Git and GitHub for version control and project organization.",
    botao: "Contact me →",

    habilidadesTitulo: "Skills",
    habilidadesSub: "Technologies I use daily",

    projetosTitulo: "Projects",

    proj1Titulo: "Landing Page - Lilian Marinho",
    proj1Desc: "Landing page developed for lead generation and presentation of manager Lilian Marinho and her available properties. Modern and responsive design focused on conversion.",

    contatoTitulo: "Get in Touch",
    contatoSub: "Interested in working together? Let's talk."
  }
};


// ===============================
// TROCAR IDIOMA
// ===============================
function setLang(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}


// ===============================
// TEMA
// ===============================
function toggleTheme() {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");

  const btn = document.getElementById("themeBtn");

  btn.style.transform = "scale(0.8)";
  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 150);

  btn.innerText = isLight ? "☀️" : "🌙";
}


// ===============================
// INICIALIZAÇÃO
// ===============================
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt";
  const savedTheme = localStorage.getItem("theme");
  const btn = document.getElementById("themeBtn");

  setLang(savedLang);

  if (savedTheme === "light") {
    document.body.classList.add("light");
    btn.innerText = "☀️";
  } else {
    btn.innerText = "🌙";
  }
});


// ===============================
// SCROLL ANIMATION
// ===============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hero, .skills, .projects, .contact")
.forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});