export default function About({ t, language }) {
  return (
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
  )
}
