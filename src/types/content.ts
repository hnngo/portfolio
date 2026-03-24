export type SectionId =
  | "hero"
  | "work"
  | "about"
  | "experience"
  | "snapshot"
  | "archive"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string[];
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
  metadata: string[];
  highlights: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  timeframe: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  accent: string;
  previewImage: string;
  detailImage: string;
  imageAlt: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  focusTitle: string;
  focusItems: string[];
  meta: string[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  dates: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export interface SnapshotItem {
  title: string;
  description: string;
  tags: string[];
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  description: string;
  email: string;
  links: ProjectLink[];
}

export interface SiteContent {
  nav: NavItem[];
  hero: HeroContent;
  featuredProjects: Project[];
  archiveProjects: Project[];
  about: AboutContent;
  experience: ExperienceItem[];
  snapshot: SnapshotItem[];
  contact: ContactContent;
}
