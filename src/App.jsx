import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon, DownloadIcon, WhatsAppIcon } from './components/Icons'
import { projects, content } from './data/portfolioData'

/* ──────────────────────────────────────────
   THEME HOOK
   ────────────────────────────────────────── */

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}

/* ──────────────────────────────────────────
   MAIN APP
   ────────────────────────────────────────── */

function App() {
  const [language, setLanguage] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle: toggleTheme } = useTheme()
  const t = content[language]

  const navAnchors = ['#home', '#about', '#skills', '#projects', '#contact']
  const whatsappUrl = 'https://wa.me/237699036049'

  return (
    <div className="site-shell">

      {/* ── HEADER & NAVIGATION ── */}
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Beker — home">b<span>.</span></a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Fermer' : 'Menu'}
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {t.nav.map((label, i) => (
            <a key={label} href={navAnchors[i]} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="cv-download" href="/CV-TANG-ELOUMOU.pdf" download="CV-TANG-ELOUMOU.pdf" aria-label={t.downloadCv}>
            <DownloadIcon />
            <span>{t.downloadCv}</span>
          </a>

          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Changer de thème">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            <span>{theme === 'dark' ? t.themeLight : t.themeDark}</span>
          </button>

          <button className="language-toggle" type="button" onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} aria-label="Switch language">
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
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

        {/* ── ABOUT ── */}
        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / {language === 'fr' ? 'PROFIL' : 'PROFILE'}</p>
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
            {t.skillsGroups.map(group => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map(item => <span className="tag" key={item}>{item}</span>)}
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
              const ProjectPreview = project.Preview
              return (
                <article className={project.featured ? 'project-card featured' : 'project-card'} key={project.id || project.title}>
                  <div className="project-topline">
                    <span>0{index + 1}</span>
                    <span>{project.category[language]}</span>
                  </div>

                  {/* Visual Interface Mockup */}
                  <div className="project-preview-wrapper" aria-label={`Aperçu de l'interface ${project.title}`}>
                    <ProjectPreview />
                  </div>

                  <h3>{project.title}</h3>

                  {/* Textual Clue / Context */}
                  <div className="project-clue">
                    <span className="clue-dot" />
                    <span className="clue-text">{project.clue[language]}</span>
                  </div>

                  <p className="project-description">{project.description[language]}</p>
                  <p className="project-details">{project.details[language]}</p>

                  {/* Domain Key Terms */}
                  <div className="project-keywords">
                    <span className="keywords-label">{t.keywordsLabel} :</span>
                    <div className="keywords-chips">
                      {project.keywords[language].map(term => (
                        <span className="keyword-chip" key={term}>{term}</span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Stack Tags */}
                  <div className="tag-list project-tags">
                    {project.stack.map(item => <span className="tag" key={item}>{item}</span>)}
                  </div>

                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                    {t.code}<span aria-hidden="true">↗</span>
                  </a>
                </article>
              )
            })}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">04 / CONTACT</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:eloumounarcisse@gmail.com">
              {t.email}<span aria-hidden="true">↗</span>
            </a>
            <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              <WhatsAppIcon />{t.whatsapp}
            </a>
            <a className="button button-secondary" href="https://github.com/NBertrand1" target="_blank" rel="noreferrer">
              {t.github}<span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="email-line">eloumounarcisse@gmail.com · +237 699 036 049</p>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">b<span>.</span></a>
        <p>{t.footer}</p>
        <span>{t.status} · © {new Date().getFullYear()}</span>
      </footer>

    </div>
  )
}

export default App
