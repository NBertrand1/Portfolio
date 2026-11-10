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
    </footer>
  )
}
