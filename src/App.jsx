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

export default function App() {
  const [language, setLanguage] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const t = content[language]

  return (
    <div className="site-shell">
      <Navbar
        navLabels={t.nav}
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        setLanguage={setLanguage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        downloadText={t.downloadCv}
        themeLightText={t.themeLight}
        themeDarkText={t.themeDark}
        cvFileName={personalInfo.cvFileName}
      />

      <main id="main-content">
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
