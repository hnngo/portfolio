import { SectionHeading } from "../SectionHeading";
import { SkillTag } from "../SkillTag";
import type { Project } from "../../types/content";

interface SelectedWorkSectionProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

export function SelectedWorkSection({
  projects,
  onOpenProject
}: SelectedWorkSectionProps) {
  return (
    <section className="content-section work-section reveal-on-scroll" id="work">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="A few projects that show how I build."
        description="A mix of product implementation, systems thinking, and frontend craft."
      />

      <div className="featured-grid reveal-children">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={index === 0 ? "project-card featured-primary" : "project-card featured-secondary"}
          >
            <div className={`project-visual visual-${project.accent}`}>
              <img
                alt={project.imageAlt}
                className="project-visual-image"
                loading="lazy"
                src={project.previewImage}
              />
              <div className="project-visual-overlay">
                <p>{project.role}</p>
                <strong>{project.name}</strong>
              </div>
            </div>
            <div className="project-card-body">
              <h3>{project.name}</h3>
              <p className="project-timeframe">{project.timeframe}</p>
              <p>{project.summary}</p>
              <ul className="project-highlight-list">
                {project.highlights.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <SkillTag key={item} label={item} />
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
