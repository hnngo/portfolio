import { SectionHeading } from "../SectionHeading";
import type { ExperienceItem } from "../../types/content";

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section className="content-section section-band" id="experience">
      <SectionHeading
        eyebrow="EXPERIENCE"
        title="Recent roles shaped by product depth and systems work."
        description="A timeline focused on ownership, outcomes, and the kinds of problems each role asked me to solve."
      />

      <div className="timeline">
        {items.map((item) => (
          <article key={`${item.company}-${item.dates}`} className="timeline-card">
            <div className="timeline-meta">
              <p>{item.dates}</p>
              <span>{item.location}</span>
            </div>
            <div className="timeline-body">
              <h3>{item.company}</h3>
              <p className="timeline-role">{item.title}</p>
              <ul className="highlight-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-row">
                {item.stack.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
