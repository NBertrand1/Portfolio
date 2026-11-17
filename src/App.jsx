import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { personalInfo, projects, content } from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const baseUrl = import.meta.env.BASE_URL
const initialLanguage = window.location.pathname.startsWith(`${baseUrl}en`) ? 'en' : 'fr'

export default function App() {
  const language = initialLanguage
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const t = content[language]

  function changeLanguage(nextLanguage) {
    if (nextLanguage === language) return
    const destination = nextLanguage === 'en' ? `${baseUrl}en/` : baseUrl
    window.location.assign(destination)
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {language === 'fr' ? 'Aller au contenu principal' : 'Skip to main content'}
      </a>
      <Navbar
        navLabels={t.nav}
        navAria={t.navAria}
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        setLanguage={changeLanguage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        downloadText={t.downloadCv}
        themeLightText={t.themeLight}
        themeDarkText={t.themeDark}
        themeToggle={t.themeToggle}
        languageToggle={t.languageToggle}
        menuOpenText={t.menuOpen}
        menuCloseText={t.menuClose}
        cvFileName={personalInfo.cvFileName}
      />

      <main id="main-content" tabIndex="-1">
        <Hero t={t} location={personalInfo.location} />
        <About t={t} language={language} />
        <Skills t={t} />
        <Projects projects={projects} t={t} language={language} />
        <Contact t={t} personalInfo={personalInfo} />
      </main>

      <Footer t={t} />
    </div>
  )
}
