import { useState } from "react";
import "./App.css";
import { buildWhatsAppLink, siteData } from "./data";

function NavIcon({ name }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    case "home":
      return (
        <svg {...commonProps}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5.5 9.5V20h13V9.5" />
        </svg>
      );
    case "user":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="3.25" />
          <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
        </svg>
      );
    case "disc":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="4.25" y="4.25" width="15.5" height="15.5" rx="4.25" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "message":
      return (
        <svg {...commonProps}>
          <path d="M5.5 18.5 6.3 15A7 7 0 1 1 19 12a6.9 6.9 0 0 1-6.9 7c-1.4 0-2.7-.4-3.8-1.1L5.5 18.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function App() {
  const [photoAvailable, setPhotoAvailable] = useState(true);
  const whatsappHref = buildWhatsAppLink(
    siteData.contact.whatsapp.phoneE164,
    siteData.contact.whatsapp.defaultMessage,
  );

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container topbar">
          <a className="brand" href="#inicio">
            <span className="brand-name">{siteData.brand.name}</span>
            <span className="brand-signature">{siteData.brand.signature}</span>
          </a>

          <nav className="nav">
            {siteData.nav.map((item) => (
              <a key={item.href} href={item.href}>
                <span className="nav-icon" aria-hidden="true">
                  <NavIcon name={item.icon} />
                </span>
                <span className="nav-label nav-label-desktop">{item.label}</span>
                <span className="nav-label nav-label-mobile">{item.shortLabel}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="container hero-wrap">
            <div className="hero-panel">
              <div className="hero-background">
                {photoAvailable ? (
                  <img
                    src={siteData.hero.backgroundImage}
                    alt=""
                    onError={() => setPhotoAvailable(false)}
                  />
                ) : null}
              </div>

              <div className="hero-overlay" />

              <div className="hero-grid">
                <div className="hero-copy">
                  <p className="eyebrow">{siteData.brand.location}</p>
                  <h1>{siteData.hero.headline}</h1>
                  <p className="hero-text">{siteData.hero.subheadline}</p>

                  <div className="button-row">
                    <a
                      className="button button-accent"
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {siteData.hero.ctaPrimary}
                    </a>
                    <a
                      className="button button-ghost"
                      href={siteData.contact.instagram.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {siteData.hero.ctaSecondary}
                    </a>
                  </div>

                  <div className="chip-row">
                    {siteData.hero.highlights.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <aside className="hero-card">
                  <p className="hero-card-kicker">Atuação</p>
                  <h2>{siteData.brand.label}</h2>
                  <p>{siteData.brand.tagline}</p>

                  <div className="contact-mini-grid">
                    <div className="mini-card">
                      <span>Instagram</span>
                      <a
                        href={siteData.contact.instagram.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {siteData.contact.instagram.handle}
                      </a>
                    </div>

                    <div className="mini-card">
                      <span>WhatsApp</span>
                      <a href={whatsappHref} target="_blank" rel="noreferrer">
                        {siteData.contact.whatsapp.display}
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            <div className="metrics-grid">
              {siteData.metrics.map((item) => (
                <article className="metric-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="container about-grid">
            <div className="about-copy">
              <SectionHeading
                title={siteData.about.title}
                subtitle={siteData.about.text}
              />
              <p className="supporting-copy">{siteData.about.tagline}</p>
              <p className="supporting-note">{siteData.about.note}</p>
            </div>

            <div className="about-visual">
              {photoAvailable ? (
                <img
                  src={siteData.about.imageSrc}
                  alt={siteData.about.imageAlt}
                  onError={() => setPhotoAvailable(false)}
                />
              ) : (
                <div className="image-placeholder">
                  <span>Foto oficial</span>
                  <strong>Adicione `public/djbreno-photo.jpg`</strong>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <SectionHeading
              title={siteData.services.title}
              subtitle={siteData.services.subtitle}
            />

            <div className="service-grid">
              {siteData.services.items.map((service) => (
                <article className="glass-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Perfis que reforçam a marca"
              subtitle="Uma presença digital dividida entre apresentação principal e bastidores audiovisuais."
            />

            <div className="social-grid">
              {siteData.socialProfiles.map((profile) => (
                <a
                  className="glass-card social-card"
                  key={profile.title}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{profile.title}</strong>
                  <p>{profile.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="instagram">
          <div className="container">
            <SectionHeading
              title={siteData.instagram.title}
              subtitle={siteData.instagram.subtitle}
            />

            <div className="instagram-layout glass-card">
              <div className="instagram-copy">
                <div className="instagram-badge">Instagram</div>
                <h3>{siteData.instagram.profileTitle}</h3>
                <p className="instagram-subtitle">
                  {siteData.instagram.profileSubtitle}
                </p>
                <p>{siteData.instagram.description}</p>

                <a
                  className="button button-accent full-width-mobile"
                  href={siteData.contact.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteData.instagram.buttonLabel}
                </a>
              </div>

              <div className="instagram-frame-wrap">
                <div className="instagram-frame">
                  <iframe
                    src={siteData.instagram.embedUrl}
                    title="Feed do Instagram DJ Breno"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contato">
          <div className="container">
            <div className="contact-layout glass-card">
              <div>
                <p className="eyebrow">Contato</p>
                <h2>{siteData.contactSection.cta}</h2>
                <p>{siteData.contactSection.secondary}</p>
              </div>

              <div className="button-row contact-actions">
                <a
                  className="button button-accent"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteData.contactSection.primaryButton}
                </a>
                <a
                  className="button button-ghost"
                  href={siteData.contact.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteData.contactSection.secondaryButton}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
