import { SectionHeading } from "../SectionHeading";
import { SkillTag } from "../SkillTag";
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
            <div className={`archive-visual visual-${project.accent}`}>
              {project.previewImage ? (
                <img
                  alt={project.imageAlt}
                  className="archive-image"
                  loading="lazy"
                  src={project.previewImage}
                />
              ) : (
                <div className="project-visual-fallback archive-visual-fallback" aria-hidden="true">
                  <span>{project.stack.slice(0, 3).join(" • ")}</span>
                </div>
              )}
            </div>
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
                <SkillTag key={tag} label={tag} />
              ))}
            </div>
            <div className="link-row">
              <button
                className="secondary-link action-chip action-chip-primary button-link"
                onClick={() => onOpenProject(project)}
                type="button"
              >
                Open Case Study
              </button>
              {project.links.map((link) => (
                <a
                  key={link.label}
                  className="secondary-link action-chip"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
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
