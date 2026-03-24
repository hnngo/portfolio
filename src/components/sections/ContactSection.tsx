import { SectionHeading } from "../SectionHeading";
import type { ContactContent } from "../../types/content";

interface ContactSectionProps {
  content: ContactContent;
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section className="content-section contact-panel section-band reveal-on-scroll" id="contact">
      <div className="contact-card">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <a className="primary-button contact-button" href={`mailto:${content.email}`}>
          Email Me
        </a>
        <div className="link-row centered-links">
          {content.links.map((link) => (
            <a key={link.label} className="secondary-link" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
