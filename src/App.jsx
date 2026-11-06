import { useState } from 'react'

const projects = [
  {
    title: 'Gestion des projets urbains — CUY',
    category: 'Stage · Développement frontend',
    description: 'Contribution frontend réalisée pendant mon stage à la Communauté Urbaine de Yaoundé, sur l’interface React/Vite du projet.',
    details: 'Périmètre vérifiable : interface frontend React/Vite. Le backend et les intégrations de données ne sont pas revendiqués, faute de code public permettant de les vérifier.',
    stack: ['React', 'Vite'],
    url: 'https://github.com/NBertrand1/Gest-Proj-Urb-CUY',
    featured: true,
  },
  {
    title: 'MyTaxApp',
    category: 'Conception · Frontend',
    description: 'Conception d’une plateforme de services fiscaux : consultation et calcul des taxes, suivi des paiements, gestion des contribuables et génération de reçus.',
    details: 'Projet resté au stade de la conception et des interfaces frontend ; la plateforme n’était pas opérationnelle.',
    stack: ['React', 'Vite', 'Material UI', 'Tailwind CSS'],
    url: 'https://github.com/NBertrand1/MyTaxApp',
    featured: true,
  },
  {
    title: 'Mediatheque',
    category: 'Projet pédagogique',
    description: 'Application PHP/MySQL qui classe des ressources PDF par matière et propose des pages de catégories ainsi que des parcours de connexion et d’inscription.',
    details: 'Prototype fonctionnel à auditer avant production : configuration des identifiants et gestion des sessions à renforcer.',
    stack: ['PHP', 'MySQL', 'PDO', 'HTML', 'CSS'],
    url: 'https://github.com/NBertrand1/Mediatheque',
    featured: true,
  },
  {
    title: 'Todo App React',
    category: 'Application en amélioration',
    description: 'Application de gestion de tâches avec ajout, modification, suppression, recherche, priorités, statuts et sauvegarde locale.',
    details: 'Projet React existant, en cours de consolidation.',
    stack: ['React', 'Vite', 'LocalStorage', 'Tailwind CSS'],
    url: 'https://github.com/NBertrand1/todo-app-react',
  },
  {
    title: 'Morning JS',
    category: 'Apprentissage',
    description: 'Exercices et pratique régulière des fondamentaux JavaScript.',
    details: 'Dépôt d’apprentissage, non présenté comme une application produit.',
    stack: ['JavaScript'],
    url: 'https://github.com/NBertrand1/Morning-js',
  },
  {
    title: 'Vintage-form',
    category: 'Projet frontend',
    description: 'Projet frontend personnel à auditer et à faire évoluer vers une expérience de formulaire complète.',
    details: 'Les fonctionnalités et technologies seront précisées après inspection du code.',
    stack: ['Audit à compléter'],
    url: 'https://github.com/NBertrand1/Vintage-form',
  },
]

const content = {
  fr: {
    nav: ['Accueil', 'Profil', 'Compétences', 'Projets', 'Contact'],
    eyebrow: 'DÉVELOPPEUR WEB JUNIOR',
    greeting: 'Construire des solutions utiles,',
    headline: 'comprendre chaque ligne de code.',
    intro: 'Je suis Beker, diplômé en informatique et génie logiciel. Je développe mes compétences en conception d’applications web, avec une attention particulière portée à la logique métier, à la qualité du code et à la compréhension des choix techniques.',
    primary: 'Découvrir mes projets',
    secondary: 'Me contacter',
    location: 'Yaoundé, Cameroun · Ouvert aux opportunités junior',
    profileTitle: 'À propos',
    profileText: 'Titulaire d’une Licence en informatique et génie logiciel obtenue en 2025 à l’IAI, je construis mon parcours professionnel à travers des projets concrets, l’apprentissage continu et la pratique. Dans le cadre de mon stage à la Communauté Urbaine de Yaoundé, j’ai travaillé sur une interface React/Vite de présentation d’un projet de gestion urbaine. Le dépôt public actuel ne contient pas de backend complet vérifiable.',
    approachTitle: 'Ma façon de travailler',
    approachText: 'Je privilégie les bases solides : analyser le besoin, comprendre la logique métier, structurer une solution, puis vérifier et améliorer le code. Je veux être capable d’expliquer ce que je construis, y compris lorsque j’utilise des outils d’IA.',
    skillsTitle: 'Technologies & apprentissage',
    skillsIntro: 'Des technologies mobilisées dans mes projets et des sujets que je travaille actuellement.',
    skillsGroups: [
      { title: 'Frontend', items: ['JavaScript', 'React', 'HTML', 'CSS', 'TypeScript — apprentissage'] },
      { title: 'Backend & données', items: ['Node.js', 'ExpressJS', 'PHP', 'MySQL', 'NestJS — apprentissage'] },
      { title: 'Outils & pratiques', items: ['Git', 'GitHub', 'Vite', 'Conception UI', 'Analyse fonctionnelle', 'DevOps — apprentissage'] },
    ],
    projectsTitle: 'Projets sélectionnés',
    projectsIntro: 'Quelques réalisations et travaux d’apprentissage. Les limites et l’état de chaque projet sont indiqués avec transparence.',
    code: 'Voir le code',
    contactTitle: 'Échangeons',
    contactText: 'Vous avez une opportunité junior, un projet web ou souhaitez discuter de développement logiciel ? Vous pouvez me contacter par e-mail ou consulter mes dépôts.',
    email: 'M’écrire',
    github: 'Mon GitHub',
    footer: 'Conçu et développé progressivement par Beker.',
    status: 'Portfolio en évolution',
  },
  en: {
    nav: ['Home', 'Profile', 'Skills', 'Projects', 'Contact'],
    eyebrow: 'JUNIOR WEB DEVELOPER',
    greeting: 'Building useful solutions,',
    headline: 'understanding every line of code.',
    intro: 'I’m Beker, a Computer Science and Software Engineering graduate. I’m developing my skills in web application design, with a focus on business logic, code quality, and understanding technical decisions.',
    primary: 'Explore my projects',
    secondary: 'Get in touch',
    location: 'Yaoundé, Cameroon · Open to junior opportunities',
    profileTitle: 'About me',
    profileText: 'I hold a Bachelor’s degree in Computer Science and Software Engineering, obtained in 2025 at IAI. I am building my professional path through practical projects, continuous learning, and hands-on practice. During my internship at the Yaoundé City Council, I worked on a React/Vite presentation interface for an urban project. The current public repository does not contain a verifiable complete backend.',
    approachTitle: 'How I work',
    approachText: 'I value strong fundamentals: understand the need, clarify business logic, structure a solution, then review and improve the code. I want to be able to explain what I build, including when I use AI tools.',
    skillsTitle: 'Technologies & learning',
    skillsIntro: 'Technologies used in my projects and topics I am currently learning.',
    skillsGroups: [
      { title: 'Frontend', items: ['JavaScript', 'React', 'HTML', 'CSS', 'TypeScript — learning'] },
      { title: 'Backend & data', items: ['Node.js', 'ExpressJS', 'MySQL', 'NestJS — learning'] },
      { title: 'Tools & practices', items: ['Git', 'GitHub', 'Vite', 'UI design', 'Requirements analysis', 'DevOps — learning'] },
    ],
    projectsTitle: 'Selected projects',
    projectsIntro: 'A selection of projects and learning work. The status and limitations of each project are stated transparently.',
    code: 'View source',
    contactTitle: 'Let’s connect',
    contactText: 'Have a junior opportunity, a web project, or want to discuss software development? Reach me by email or explore my repositories.',
    email: 'Send an email',
    github: 'My GitHub',
    footer: 'Designed and progressively built by Beker.',
    status: 'Portfolio in progress',
  },
}

function App() {
  const [language, setLanguage] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[language]

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Beker — home">b<span>.</span></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Fermer' : 'Menu'}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {t.nav.map((label, index) => <a key={label} href={['#home', '#about', '#skills', '#projects', '#contact'][index]} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <button className="language-toggle" type="button" onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} aria-label="Switch language">
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
      </header>

      <main>
        <section className="hero-section section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />{t.eyebrow}</p>
            <h1>{t.greeting}<br /><span>{t.headline}</span></h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{t.primary}<span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#contact">{t.secondary}</a>
            </div>
            <p className="location-line">{t.location}</p>
          </div>
          <div className="hero-aside" aria-label="Professional focus">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-monogram">B<span>.</span></div>
            <div className="floating-note note-top">JavaScript / React</div>
            <div className="floating-note note-bottom">Build · Learn · Improve</div>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading"><p className="eyebrow">01 / {language === 'fr' ? 'PROFIL' : 'PROFILE'}</p><h2>{t.profileTitle}</h2></div>
          <div className="about-grid">
            <p className="large-copy">{t.profileText}</p>
            <div className="approach-card"><span className="card-index">A — Z</span><h3>{t.approachTitle}</h3><p>{t.approachText}</p></div>
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading"><p className="eyebrow">02 / STACK</p><h2>{t.skillsTitle}</h2><p className="section-lead">{t.skillsIntro}</p></div>
          <div className="skills-grid">
            {t.skillsGroups.map(group => <article className="skill-card" key={group.title}><h3>{group.title}</h3><div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}
          </div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <div className="section-heading"><p className="eyebrow">03 / SELECTED WORK</p><h2>{t.projectsTitle}</h2><p className="section-lead">{t.projectsIntro}</p></div>
          <div className="projects-grid">
            {projects.map((project, index) => <article className={project.featured ? 'project-card featured' : 'project-card'} key={project.title}>
              <div className="project-topline"><span>0{index + 1}</span><span>{project.category}</span></div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-details">{project.details}</p>
              <div className="tag-list project-tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
              <a className="project-link" href={project.url} target="_blank" rel="noreferrer">{t.code}<span aria-hidden="true">↗</span></a>
            </article>)}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">04 / CONTACT</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:eloumounarcisse@gmail.com">{t.email}<span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="https://github.com/NBertrand1" target="_blank" rel="noreferrer">{t.github}<span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/tang-eloumou-narcisse-bertrand/" target="_blank" rel="noreferrer">LinkedIn<span aria-hidden="true">↗</span></a>
          </div>
          <p className="email-line">eloumounarcisse@gmail.com</p>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="brand" href="#home">b<span>.</span></a><p>{t.footer}</p><span>{t.status} · © {new Date().getFullYear()}</span></footer>
    </div>
  )
}

export default App
