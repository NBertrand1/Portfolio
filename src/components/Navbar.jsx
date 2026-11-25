import { SunIcon, MoonIcon, DownloadIcon } from './Icons'

export default function Navbar({
  navLabels,
  navAria,
  theme,
  toggleTheme,
  language,
  setLanguage,
  menuOpen,
  setMenuOpen,
  downloadText,
  themeLightText,
  themeDarkText,
  themeToggle,
  languageToggle,
  menuOpenText,
  menuCloseText,
  cvFileName,
}) {
  const navAnchors = ['#home', '#about', '#skills', '#projects', '#contact']
  const cvPath = `${import.meta.env.BASE_URL}${cvFileName}`

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={language === 'fr' ? 'Beker — Accueil' : 'Beker — Home'}>
        b<span>.</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? menuCloseText : menuOpenText}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav
        id="primary-navigation"
        className={`main-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label={navAria}
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
          aria-label={`${theme === 'dark' ? themeLightText : themeDarkText} — ${themeToggle}`}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          <span>{theme === 'dark' ? themeLightText : themeDarkText}</span>
        </button>

        <button
          className="language-toggle"
          type="button"
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          aria-label={`${language === 'fr' ? 'EN' : 'FR'} — ${languageToggle}`}
        >
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>
    </header>
  )
}
