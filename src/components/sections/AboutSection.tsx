import { SectionHeading } from "../SectionHeading";
import type { AboutContent } from "../../types/content";

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="content-section about-section reveal-on-scroll" id="about">
      <div className="split-layout reveal-children">
        <div className="identity-panel">
          <div className="identity-topline">
            <p className="section-eyebrow">PROFILE</p>
            <p className="identity-mark">HN</p>
          </div>
          <p className="identity-copy">Full-stack engineer with a bias for clear systems, polished interfaces, and practical delivery.</p>
        </div>
        <div>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
          <div className="stacked-copy">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="focus-card">
            <h3>{content.focusTitle}</h3>
            <ul className="focus-list">
              {content.focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="meta-row">
            {content.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
