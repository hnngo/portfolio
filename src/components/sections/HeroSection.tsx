import { HeroScene } from "../HeroScene";
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
    <section className="hero-section reveal-on-scroll in-view" id="hero">
      <div className="hero-copy">
        <p className="section-eyebrow hero-eyebrow">{content.eyebrow}</p>
        <h1 className="hero-title">
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

      <div className="hero-visual hero-visual-shell" aria-hidden="true">
        <HeroScene />
        <div className="hero-visual-glow hero-visual-glow-warm" />
        <div className="hero-visual-glow hero-visual-glow-cool" />
      </div>
    </section>
  );
}
