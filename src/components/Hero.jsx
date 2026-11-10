import { ArrowUpRightIcon } from './Icons'

export default function Hero({ t, location }) {
  return (
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
            <ArrowUpRightIcon />
          </a>
          <a className="button button-secondary" href="#contact">
            {t.secondary}
          </a>
        </div>
        <p className="location-line">{location || t.location}</p>
      </div>

      <div className="hero-aside" aria-label="Présentation visuelle">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="hero-monogram">
          B<span>.</span>
        </div>
        <div className="floating-note note-top">React · Node · Fullstack</div>
        <div className="floating-note note-bottom">Concevoir · Bâtir · Fiabiliser</div>
      </div>
    </section>
  )
}
