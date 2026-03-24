import { useEffect } from "react";
import { SkillTag } from "./SkillTag";
import type { Project } from "../types/content";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        aria-labelledby="project-modal-title"
        aria-modal="true"
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        tabIndex={-1}
      >
        <button
          aria-label={`Close ${project.name} details`}
          className="modal-close"
          onClick={onClose}
          type="button"
        >
          Close
        </button>
        <div className="modal-grid">
          <div className="modal-copy">
            <p className="section-eyebrow">{project.role}</p>
            <h3 id="project-modal-title">{project.name}</h3>
            <p className="modal-timeframe">{project.timeframe}</p>
            <p className="modal-summary">{project.summary}</p>

            <div className="modal-block">
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </div>

            <div className="modal-block">
              <h4>What I Built</h4>
              <p>{project.solution}</p>
            </div>

            <div className="modal-block">
              <h4>Outcome</h4>
              <p>{project.impact}</p>
            </div>

            <div className="modal-block">
              <h4>Key Highlights</h4>
              <ul className="project-highlight-list">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tag-row">
              {project.stack.map((item) => (
                <SkillTag key={item} label={item} />
              ))}
            </div>

            <div className="link-row">
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

          <div className={`modal-visual visual-${project.accent}`}>
            {project.detailImage ? (
              <img
                alt={project.imageAlt}
                className="modal-project-image"
                loading="lazy"
                src={project.detailImage}
              />
            ) : (
              <div className="modal-project-fallback" aria-hidden="true">
                <span>{project.role}</span>
                <strong>{project.name}</strong>
                <p>{project.stack.slice(0, 4).join(" • ")}</p>
              </div>
            )}
            <div className="visual-panel">
              <p>Case Study</p>
              <strong>{project.name}</strong>
              <span>{project.stack.join(" • ")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
