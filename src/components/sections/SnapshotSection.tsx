import { SectionHeading } from "../SectionHeading";
import type { SnapshotItem } from "../../types/content";

interface SnapshotSectionProps {
  items: SnapshotItem[];
}

export function SnapshotSection({ items }: SnapshotSectionProps) {
  return (
    <section className="content-section snapshot-section" id="snapshot">
      <SectionHeading
        eyebrow="ENGINEERING SNAPSHOT"
        title="How I tend to contribute across a product."
      />

      <div className="snapshot-grid">
        {items.map((item) => (
          <article key={item.title} className="snapshot-card">
            <p className="section-eyebrow">{item.title}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
