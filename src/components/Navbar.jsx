import { SunIcon, MoonIcon, DownloadIcon } from './Icons'

export default function Navbar({
  navLabels,
  theme,
  toggleTheme,
  language,
  setLanguage,
  menuOpen,
  setMenuOpen,
  downloadText,
  themeLightText,
  themeDarkText,
  cvFileName,
}) {
  const navAnchors = ['#home', '#about', '#skills', '#projects', '#contact']
  const cvPath = `${import.meta.env.BASE_URL}${cvFileName}`
  const labels = language === 'fr'
    ? { home: 'Beker — Accueil', menu: 'Basculer le menu de navigation', navigation: 'Navigation principale', theme: 'Changer le thème', language: 'Passer en anglais' }
    : { home: 'Beker — Home', menu: 'Toggle navigation menu', navigation: 'Main navigation', theme: 'Change color theme', language: 'Switch to French' }

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={labels.home}>
        b<span>.</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={labels.menu}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
      </button>

      <nav
        id="primary-navigation"
        className={`main-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label={labels.navigation}
      >
        {navLabels.map((label, index) => (
          <a
            key={label}
            href={navAnchors[index]}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="cv-download"
          href={cvPath}
          download={cvFileName}
          aria-label={downloadText}
        >
          <DownloadIcon />
          <span>{downloadText}</span>
        </a>

        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={labels.theme}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          <span>{theme === 'dark' ? themeLightText : themeDarkText}</span>
        </button>

        <button
          className="language-toggle"
          type="button"
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          aria-label={labels.language}
        >
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>
    </header>
  )
}
