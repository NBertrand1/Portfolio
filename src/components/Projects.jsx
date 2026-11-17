import { ArrowUpRightIcon } from './Icons'

export default function Projects({ projects, t, language }) {
  return (
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
            <article
              className={`project-card ${project.featured ? 'featured' : ''}`}
              key={project.id || project.title}
            >
              <div className="project-topline">
                <span>0{index + 1}</span>
                <span>{project.category[language]}</span>
              </div>

              <div
                className="project-preview-wrapper"
                role="img"
                aria-label={language === 'fr'
                  ? `Aperçu visuel du projet ${project.title}`
                  : `Visual preview of the ${project.title} project`}
              >
                <ProjectPreview />
              </div>

              <h3>{project.title}</h3>

              <div className="project-clue">
                <span className="clue-dot" aria-hidden="true" />
                <span className="clue-text">{project.clue[language]}</span>
              </div>

              <p className="project-description">{project.description[language]}</p>
              <p className="project-details">{project.details[language]}</p>

              <div className="project-keywords">
                <span className="keywords-label">{t.keywordsLabel} :</span>
                <div className="keywords-chips">
                  {project.keywords[language].map((term) => (
                    <span className="keyword-chip" key={term}>
                      #{term}
                    </span>
                  ))}
                </div>
              </div>

              <div className="tag-list project-tags">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.code}
                <ArrowUpRightIcon />
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
