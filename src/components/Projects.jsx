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

              {/* High-fidelity interface mockup preview */}
              <div
                className="project-preview-wrapper"
                aria-label={`Aperçu interactif : ${project.title}`}
              >
                <ProjectPreview />
              </div>

              <h3>{project.title}</h3>

              {/* Textual clue & context */}
              <div className="project-clue">
                <span className="clue-dot" />
                <span className="clue-text">{project.clue[language]}</span>
              </div>

              <p className="project-description">{project.description[language]}</p>
              <p className="project-details">{project.details[language]}</p>

              {/* Domain key terms */}
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

              {/* Technical stack tags */}
              <div className="tag-list project-tags">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              {/* Source code link */}
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
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
