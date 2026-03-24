import { useEffect, useState } from "react";
import { siteContent } from "./data/site";
import { ProjectModal } from "./components/ProjectModal";
import { TopNav } from "./components/TopNav";
import { HeroSection } from "./components/sections/HeroSection";
import { SelectedWorkSection } from "./components/sections/SelectedWorkSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { SnapshotSection } from "./components/sections/SnapshotSection";
import { ArchiveSection } from "./components/sections/ArchiveSection";
import { ContactSection } from "./components/sections/ContactSection";
import type { Project, SectionId } from "./types/content";

const trackedSections: SectionId[] = [
  "hero",
  "work",
  "about",
  "experience",
  "snapshot",
  "contact"
];

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".top-nav");

    if (!nav) {
      return undefined;
    }

    const updateNavHeight = () => {
      document.documentElement.style.setProperty("--nav-height", `${nav.offsetHeight}px`);
    };

    updateNavHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateNavHeight();
    });

    resizeObserver.observe(nav);
    window.addEventListener("resize", updateNavHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id as SectionId);
        }
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6]
      }
    );

    trackedSections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll")
    );

    if (elements.length === 0) {
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16
      }
    );

    elements.forEach((element) => revealObserver.observe(element));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  const navigateTo = (sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="page-shell">
      <div className="page-noise" aria-hidden="true" />
      <TopNav items={siteContent.nav} activeSection={activeSection} onNavigate={navigateTo} />

      <main className="page-content">
        <HeroSection
          content={siteContent.hero}
          onPrimaryAction={() => navigateTo("work")}
          onSecondaryAction={() => navigateTo("contact")}
        />
        <SelectedWorkSection
          projects={siteContent.featuredProjects}
          onOpenProject={setSelectedProject}
        />
        <AboutSection content={siteContent.about} />
        <ExperienceSection items={siteContent.experience} />
        <SnapshotSection items={siteContent.snapshot} />
        <ArchiveSection
          projects={siteContent.archiveProjects}
          onOpenProject={setSelectedProject}
        />
        <ContactSection content={siteContent.contact} />
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
