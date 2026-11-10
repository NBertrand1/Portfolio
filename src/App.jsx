import { useState, useEffect } from "react";
import {
  SunIcon,
  MoonIcon,
  DownloadIcon,
  WhatsAppIcon,
} from "./components/Icons";
import { projects, content } from "./data/portfolioData";

/* ──────────────────────────────────────────
   THEME HOOK
   ────────────────────────────────────────── */

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("portfolio-theme") || "dark";
  });

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
}, [theme]);

const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

return { theme, toggle };
}

const projects = [
  {
    title: "Gestion des projets urbains — CUY",
    category: "Application web · Stage",
    description:
      "Interface de présentation React/Vite réalisée dans le cadre d’un projet de stage à la Communauté Urbaine de Yaoundé.",
    details:
      "Le dépôt public actuel expose une interface de présentation ; le backend et les modules métier annoncés ne sont pas vérifiables dans le code disponible.",
    stack: ["React", "Vite"],
    url: "https://github.com/NBertrand1/Gest-Proj-Urb-CUY",
    featured: true,
  },
  {
    title: "MyTaxApp",
    category: "Conception · Frontend",
    description:
      "Conception d’une plateforme de services fiscaux : consultation et calcul des taxes, suivi des paiements, gestion des contribuables et génération de reçus.",
    details:
      "Projet resté au stade de la conception et des interfaces frontend ; la plateforme n’était pas opérationnelle.",
    stack: ["React", "Vite", "Material UI", "Tailwind CSS"],
    url: "https://github.com/NBertrand1/MyTaxApp",
    featured: true,
  },
  {
    title: "Mediatheque",
    category: "Projet pédagogique",
    description:
      "Application PHP/MySQL qui classe des ressources PDF par matière et propose des pages de catégories ainsi que des parcours de connexion et d’inscription.",
    details:
      "Prototype fonctionnel à auditer avant production : configuration des identifiants et gestion des sessions à renforcer.",
    stack: ["PHP", "MySQL", "PDO", "HTML", "CSS"],
    url: "https://github.com/NBertrand1/Mediatheque",
    featured: true,
  },
  {
    title: "Todo App React",
    category: "Application en amélioration",
    description:
      "Application de gestion de tâches avec ajout, modification, suppression, recherche, priorités, statuts et sauvegarde locale.",
    details: "Projet React existant, en cours de consolidation.",
    stack: ["React", "Vite", "LocalStorage", "Tailwind CSS"],
    url: "https://github.com/NBertrand1/todo-app-react",
  },
  {
    title: "Morning JS",
    category: "Apprentissage",
    description: "Exercices et pratique régulière des fondamentaux JavaScript.",
    details:
      "Dépôt d’apprentissage, non présenté comme une application produit.",
    stack: ["JavaScript"],
    url: "https://github.com/NBertrand1/Morning-js",
  },
  {
    title: "Vintage-form",
    category: "Projet frontend",
    description:
      "Projet frontend personnel à auditer et à faire évoluer vers une expérience de formulaire complète.",
    details:
      "Les fonctionnalités et technologies seront précisées après inspection du code.",
    stack: ["Audit à compléter"],
    url: "https://github.com/NBertrand1/Vintage-form",
  },
];

const content = {
  fr: {
    nav: ["Accueil", "Profil", "Compétences", "Projets", "Contact"],
    eyebrow: "DÉVELOPPEUR WEB JUNIOR",
    greeting: "Construire des solutions utiles,",
    headline: "comprendre chaque ligne de code.",
    intro:
      "Je suis Beker, diplômé en informatique et génie logiciel. Je développe mes compétences en conception d’applications web, avec une attention particulière portée à la logique métier, à la qualité du code et à la compréhension des choix techniques.",
    primary: "Découvrir mes projets",
    secondary: "Me contacter",
    location: "Yaoundé, Cameroun · Ouvert aux opportunités junior",
    profileTitle: "À propos",
    profileText:
      "Titulaire d’une Licence en informatique et génie logiciel obtenue en 2025 à l’IAI, je construis mon parcours professionnel à travers des projets concrets, l’apprentissage continu et la pratique. Dans le cadre de mon stage à la Communauté Urbaine de Yaoundé, j’ai travaillé sur une interface React/Vite de présentation d’un projet de gestion urbaine. Le dépôt public actuel ne contient pas de backend complet vérifiable.",
    approachTitle: "Ma façon de travailler",
    approachText:
      "Je privilégie les bases solides : analyser le besoin, comprendre la logique métier, structurer une solution, puis vérifier et améliorer le code. Je veux être capable d’expliquer ce que je construis, y compris lorsque j’utilise des outils d’IA.",
    skillsTitle: "Technologies & apprentissage",
    skillsIntro:
      "Des technologies mobilisées dans mes projets et des sujets que je travaille actuellement.",
    skillsGroups: [
      {
        title: "Frontend",
        items: [
          "JavaScript",
          "React",
          "HTML",
          "CSS",
          "TypeScript — apprentissage",
        ],
      },
      {
        title: "Backend & données",
        items: [
          "Node.js",
          "ExpressJS",
          "PHP",
          "MySQL",
          "NestJS — apprentissage",
        ],
      },
      {
        title: "Outils & pratiques",
        items: [
          "Git",
          "GitHub",
          "Vite",
          "Conception UI",
          "Analyse fonctionnelle",
          "DevOps — apprentissage",
        ],
      },
    ],
    projectsTitle: "Projets sélectionnés",
    projectsIntro:
      "Quelques réalisations et travaux d’apprentissage. Les limites et l’état de chaque projet sont indiqués avec transparence.",
    code: "Voir le code",
    contactTitle: "Échangeons",
    contactText:
      "Vous avez une opportunité junior, un projet web ou souhaitez discuter de développement logiciel ? Vous pouvez me contacter par e-mail ou consulter mes dépôts.",
    email: "M’écrire",
    github: "Mon GitHub",
    footer: "Conçu et développé progressivement par Beker.",
    status: "Portfolio en évolution",
  },
  en: {
    nav: ["Home", "Profile", "Skills", "Projects", "Contact"],
    eyebrow: "JUNIOR WEB DEVELOPER",
    greeting: "Building useful solutions,",
    headline: "understanding every line of code.",
    intro:
      "I’m Beker, a Computer Science and Software Engineering graduate. I’m developing my skills in web application design, with a focus on business logic, code quality, and understanding technical decisions.",
    primary: "Explore my projects",
    secondary: "Get in touch",
    location: "Yaoundé, Cameroon · Open to junior opportunities",
    profileTitle: "About me",
    profileText:
      "I hold a Bachelor’s degree in Computer Science and Software Engineering, obtained in 2025 at IAI. I am building my professional path through practical projects, continuous learning, and hands-on practice. During my internship at the Yaoundé City Council, I worked on a React/Vite presentation interface for an urban project. The current public repository does not contain a verifiable complete backend.",
    approachTitle: "How I work",
    approachText:
      "I value strong fundamentals: understand the need, clarify business logic, structure a solution, then review and improve the code. I want to be able to explain what I build, including when I use AI tools.",
    skillsTitle: "Technologies & learning",
    skillsIntro:
      "Technologies used in my projects and topics I am currently learning.",
    skillsGroups: [
      {
        title: "Frontend",
        items: ["JavaScript", "React", "HTML", "CSS", "TypeScript — learning"],
      },
      {
        title: "Backend & data",
        items: ["Node.js", "ExpressJS", "MySQL", "NestJS — learning"],
      },
      {
        title: "Tools & practices",
        items: [
          "Git",
          "GitHub",
          "Vite",
          "UI design",
          "Requirements analysis",
          "DevOps — learning",
        ],
      },
    ],
    projectsTitle: "Selected projects",
    projectsIntro:
      "A selection of projects and learning work. The status and limitations of each project are stated transparently.",
    code: "View source",
    contactTitle: "Let’s connect",
    contactText:
      "Have a junior opportunity, a web project, or want to discuss software development? Reach me by email or explore my repositories.",
    email: "Send an email",
    github: "My GitHub",
    footer: "Designed and progressively built by Beker.",
    status: "Portfolio in progress",
  },
};

/* ──────────────────────────────────────────
   MAIN APP
   ────────────────────────────────────────── */

function App() {
  const [language, setLanguage] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();
  const t = content[language];

  const navAnchors = ["#home", "#about", "#skills", "#projects", "#contact"];
  const whatsappUrl = "https://wa.me/237699036049";

  return (
    <div className="site-shell">
      {/* ── HEADER & NAVIGATION ── */}
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Beker — home">
          b<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Fermer" : "Menu"}
        </button>

        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {t.nav.map((label, i) => (
            <a
              key={label}
              href={navAnchors[i]}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="cv-download"
            href="/CV-TANG-ELOUMOU.pdf"
            download="CV-TANG-ELOUMOU.pdf"
            aria-label={t.downloadCv}
          >
            <DownloadIcon />
            <span>{t.downloadCv}</span>
          </a>

          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Changer de thème"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            <span>{theme === "dark" ? t.themeLight : t.themeDark}</span>
          </button>

          <button
            className="language-toggle"
            type="button"
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            aria-label="Switch language"
          >
            {language === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="hero-section section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              {t.eyebrow}
            </p>
            <h1>
              {t.greeting}
              <br />
              <span>{t.headline}</span>
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.primary}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                {t.secondary}
              </a>
            </div>
            <p className="location-line">{t.location}</p>
          </div>
          <div className="hero-aside" aria-label="Professional focus">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-monogram">
              B<span>.</span>
            </div>
            <div className="floating-note note-top">JavaScript / React</div>
            <div className="floating-note note-bottom">
              Build · Learn · Improve
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">
              01 / {language === "fr" ? "PROFIL" : "PROFILE"}
            </p>
            <h2>{t.profileTitle}</h2>
          </div>
          <div className="about-grid">
            <p className="large-copy">{t.profileText}</p>
            <div className="approach-card">
              <span className="card-index">A — Z</span>
              <h3>{t.approachTitle}</h3>
              <p>{t.approachText}</p>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="content-section section-wrap" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / STACK</p>
            <h2>{t.skillsTitle}</h2>
            <p className="section-lead">{t.skillsIntro}</p>
          </div>
          <div className="skills-grid">
            {t.skillsGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="content-section section-wrap" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>{t.projectsTitle}</h2>
            <p className="section-lead">{t.projectsIntro}</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => {
              const ProjectPreview = project.Preview;
              return (
                <article
                  className={
                    project.featured ? "project-card featured" : "project-card"
                  }
                  key={project.id || project.title}
                >
                  <div className="project-topline">
                    <span>0{index + 1}</span>
                    <span>{project.category[language]}</span>
                  </div>

                  {/* Visual Interface Mockup */}
                  <div
                    className="project-preview-wrapper"
                    aria-label={`Aperçu de l'interface ${project.title}`}
                  >
                    <ProjectPreview />
                  </div>

                  <h3>{project.title}</h3>

                  {/* Textual Clue / Context */}
                  <div className="project-clue">
                    <span className="clue-dot" />
                    <span className="clue-text">{project.clue[language]}</span>
                  </div>

                  <p className="project-description">
                    {project.description[language]}
                  </p>
                  <p className="project-details">{project.details[language]}</p>

                  {/* Domain Key Terms */}
                  <div className="project-keywords">
                    <span className="keywords-label">{t.keywordsLabel} :</span>
                    <div className="keywords-chips">
                      {project.keywords[language].map((term) => (
                        <span className="keyword-chip" key={term}>
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Stack Tags */}
                  <div className="tag-list project-tags">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.code}
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">04 / CONTACT</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:eloumounarcisse@gmail.com"
            >
              {t.email}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              {t.whatsapp}
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/NBertrand1"
              target="_blank"
              rel="noreferrer"
            >
              {t.github}
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button-primary"
              href="mailto:eloumounarcisse@gmail.com"
            >
              {t.email}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/NBertrand1"
              target="_blank"
              rel="noreferrer"
            >
              {t.github}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/tang-eloumou-narcisse-bertrand-133331249/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn<span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="email-line">
            eloumounarcisse@gmail.com · +237 699 036 049
          </p>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">
          b<span>.</span>
        </a>
        <p>{t.footer}</p>
        <span>
          {t.status} · © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}

export default App;
