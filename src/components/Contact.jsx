import {
  MailIcon,
  WhatsAppIcon,
  GitHubIcon,
  LinkedInIcon,
  ArrowUpRightIcon,
} from './Icons'

export default function Contact({ t, personalInfo }) {
  return (
    <section className="contact-section section-wrap" id="contact">
      <p className="eyebrow">04 / CONTACT</p>
      <h2>{t.contactTitle}</h2>
      <p>{t.contactText}</p>

      <div className="contact-actions">
        <a
          className="button button-primary"
          href={`mailto:${personalInfo.email}`}
        >
          <MailIcon />
          <span>{t.email}</span>
          <ArrowUpRightIcon />
        </a>

        <a
          className="button button-whatsapp"
          href={personalInfo.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          <span>{t.whatsapp}</span>
          <ArrowUpRightIcon />
        </a>

        <a
          className="button button-secondary"
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
          <span>{t.github}</span>
          <ArrowUpRightIcon />
        </a>

        <a
          className="button button-secondary"
          href={personalInfo.linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
          <span>{t.linkedin}</span>
          <ArrowUpRightIcon />
        </a>
      </div>

      <p className="email-line">
        {personalInfo.email} · {personalInfo.phoneDisplay} · {personalInfo.location}
      </p>
    </section>
  )
}
