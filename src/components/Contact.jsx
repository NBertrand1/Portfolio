import {
  MailIcon,
  WhatsAppIcon,
  GitHubIcon,
  LinkedInIcon,
  ArrowUpRightIcon,
} from './Icons'

export default function Contact({ t, personalInfo }) {
  function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || '').trim()
    const message = String(data.get('message') || '').trim()
    const channel = event.nativeEvent.submitter?.value

    // Honeypot: silently ignore basic automated submissions.
    if (data.get('website')) return

    if (!name || !email || !subject || !message) {
      form.reportValidity()
      return
    }

    const fullMessage = [
      t.formNameLabel + ': ' + name,
      t.formEmailLabel + ': ' + email,
      '',
      message,
    ].join('\n')
    const encodedSubject = encodeURIComponent(subject)
    const encodedMessage = encodeURIComponent(fullMessage)

    if (channel === 'email') {
      window.location.href = `mailto:${personalInfo.email}?subject=${encodedSubject}&body=${encodedMessage}`
      return
    }

    if (channel === 'whatsapp') {
      const whatsappUrl = `${personalInfo.whatsappUrl}?text=${encodeURIComponent(subject + '\n\n' + fullMessage)}`
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="contact-section section-wrap" id="contact">
      <p className="eyebrow">04 / CONTACT</p>
      <h2>{t.contactTitle}</h2>
      <p>{t.contactText}</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-grid">
          <div className="form-field">
            <label htmlFor="contact-name">{t.formNameLabel}</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" maxLength="100" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">{t.formEmailLabel}</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" maxLength="254" required />
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="contact-subject">{t.formSubjectLabel}</label>
            <input id="contact-subject" name="subject" type="text" maxLength="150" required />
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="contact-message">{t.formMessageLabel}</label>
            <textarea id="contact-message" name="message" rows="6" minLength="10" maxLength="5000" required />
          </div>
        </div>

        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" type="text" tabIndex="-1" autoComplete="off" />
        </div>

        <p className="form-help">{t.formHelp}</p>
        <div className="contact-form-actions">
          <button className="button button-primary" type="submit" value="email">
            <MailIcon />
            <span>{t.formEmailAction}</span>
            <ArrowUpRightIcon />
          </button>
          <button className="button button-whatsapp" type="submit" value="whatsapp">
            <WhatsAppIcon />
            <span>{t.formWhatsAppAction}</span>
            <ArrowUpRightIcon />
          </button>
        </div>
      </form>

      <div className="contact-actions contact-social-actions">
        <a
          className="button button-secondary"
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          <span>{t.github}</span>
          <ArrowUpRightIcon />
        </a>

        <a
          className="button button-secondary"
          href={personalInfo.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
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
