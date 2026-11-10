export default function Skills({ t }) {
  return (
    <section className="content-section section-wrap" id="skills">
      <div className="section-heading">
        <p className="eyebrow">02 / STACK</p>
        <h2>{t.skillsTitle}</h2>
        <p className="section-lead">{t.skillsIntro}</p>
      </div>
      <div className="skills-grid">
        {t.skillsGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
