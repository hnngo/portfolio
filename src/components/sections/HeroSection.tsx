import type { HeroContent } from "../../types/content";

interface HeroSectionProps {
  content: HeroContent;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
}

export function HeroSection({
  content,
  onPrimaryAction,
  onSecondaryAction
}: HeroSectionProps) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-copy">
        <p className="section-eyebrow">{content.eyebrow}</p>
        <h1>
          {content.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero-description">{content.description}</p>
        <div className="hero-actions">
          <button className="primary-button" onClick={onPrimaryAction} type="button">
            {content.primaryActionLabel}
          </button>
          <button className="ghost-button" onClick={onSecondaryAction} type="button">
            {content.secondaryActionLabel}
          </button>
        </div>
        <div className="hero-metadata">
          {content.metadata.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-large" />
        <div className="orb orb-small" />
        {content.highlights.map((item) => (
          <div key={item} className="floating-chip">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
