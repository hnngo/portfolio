import { SectionHeading } from "../SectionHeading";
import type { Project } from "../../types/content";

interface ArchiveSectionProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

export function ArchiveSection({ projects, onOpenProject }: ArchiveSectionProps) {
  return (
    <section className="content-section archive-section reveal-on-scroll" id="archive">
      <SectionHeading
        eyebrow="MORE PROJECTS"
        title="Additional work, experiments, and earlier builds."
      />

      <div className="archive-grid reveal-children">
        {projects.map((project) => (
          <article key={project.id} className="archive-card">
            <img
              alt={project.imageAlt}
              className="archive-image"
              loading="lazy"
              src={project.previewImage}
            />
            <p className="section-eyebrow">{project.role}</p>
            <h3>{project.name}</h3>
            <p className="project-timeframe">{project.timeframe}</p>
            <p>{project.summary}</p>
            <ul className="project-highlight-list">
              {project.highlights.slice(0, 2).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="tag-row">
              {project.stack.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="link-row">
              <button className="secondary-link button-link" onClick={() => onOpenProject(project)} type="button">
                Open Case Study
              </button>
              {project.links.map((link) => (
                <a key={link.label} className="secondary-link" href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
