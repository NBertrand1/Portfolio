export default function Footer({ t }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer section-wrap">
      <a className="brand" href="#home" aria-label="Beker — Accueil">
        b<span>.</span>
      </a>
      <p>{t.footer}</p>
      <span>
        {t.status} · © {currentYear}
      </span>
      <nav className="footer-legal" aria-label={t.legalNav}>
        <a href="/Portfolio/privacy.html">{t.privacy}</a>
        <a href="/Portfolio/terms.html">{t.terms}</a>
      </nav>
    </footer>
  )
}
