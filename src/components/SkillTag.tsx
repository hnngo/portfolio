import type { ReactNode } from "react";

interface SkillTagProps {
  label: string;
}

function TechIcon({ label }: SkillTagProps) {
  const icon = iconMap[label] ?? genericIcon;

  return <span className="skill-icon" aria-hidden="true">{icon}</span>;
}

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="tag skill-tag">
      <TechIcon label={label} />
      <span>{label}</span>
    </span>
  );
}

const iconMap: Record<string, ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        transform="rotate(120 12 12)"
      />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24">
      <path d="M12 2.6 19.4 6.8v10.4L12 21.4 4.6 17.2V6.8Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 7.6v8.8m0 0 3-1.7m-3 1.7-3-1.7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24">
      <path d="M6 15.4c3.4 2 8.6 2 12 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8.1 10.5h1.6l2 5H10l-.4-1.1H7.4L7 15.5H5.8Zm-.1 2.5h1.1l-.6-1.8Z" fill="currentColor" />
      <path d="M13 10.6h1.6v4.9H13Zm2.2 0h1.6l1.1 3 .9-3h1.5l-1.9 4.9h-1.2Z" fill="currentColor" />
    </svg>
  ),
  Redux: (
    <svg viewBox="0 0 24 24">
      <path d="M8 14.8c1.3 1.2 3 1.8 5 1.8 2.1 0 3.7-.7 4.7-2.1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 8.2c-1.5-.2-2.8.6-3.4 2-.5 1.2-.3 2.7.6 3.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.6 7.4c1.5.4 2.7 1.7 2.9 3.3.2 1.3-.3 2.7-1.3 3.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="7" cy="15" r="1.7" fill="currentColor" />
      <circle cx="9.2" cy="8" r="1.6" fill="currentColor" />
      <circle cx="17.2" cy="7.4" r="1.6" fill="currentColor" />
    </svg>
  ),
  Redis: (
    <svg viewBox="0 0 24 24">
      <path d="m4 8 8-3 8 3-8 3Z" fill="currentColor" opacity="0.9" />
      <path d="m4 12 8 3 8-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m4 8 8 3 8-3M4 12v4l8 3 8-3v-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24">
      <path d="M12 4.8c-2.6 0-4.6 1.7-4.6 4.2v4.7c0 1.1.9 2 2 2h1.1v2.1c0 .7.5 1.2 1.2 1.2.5 0 .9-.2 1.1-.6l.9-1.4h1.5c2.2 0 4-1.8 4-4.1V9.1c0-2.5-2.2-4.3-5.2-4.3Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10.4 10.2h3.5M10.4 13.1h2.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24">
      <path d="M12 3.2c2.1 2.3 3.2 4.8 3.2 7.7 0 3.4-1.5 6.5-3.2 9.9-1.8-3.4-3.3-6.5-3.3-9.9 0-2.9 1.1-5.4 3.3-7.7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 7.4v11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 24 24">
      <path d="m6.2 18.8 2.3-14.1 4 4.9Zm5.2-7.4L14.8 6l3 12.8Z" fill="currentColor" opacity="0.9" />
      <path d="m6.2 18.8 11.6-6-3-6.8-3.4 5.4-2.9-6.6Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 24 24">
      <rect x="4.5" y="4.5" width="15" height="15" rx="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.2 8.2h4.3c1.6 0 2.7.9 2.7 2.3 0 1-.5 1.7-1.4 2 1 .2 1.8 1.1 1.8 2.3 0 1.6-1.2 2.7-3 2.7H9.2Zm2 3.2h2c.7 0 1.1-.4 1.1-1s-.4-1-1.1-1h-2Zm0 4.2h2.2c.8 0 1.3-.4 1.3-1.1s-.5-1.1-1.3-1.1h-2.2Z" fill="currentColor" />
    </svg>
  ),
  "React Native": (
    <svg viewBox="0 0 24 24">
      <path d="M12 3.4c2.3 0 4.3 3.8 4.3 8.6S14.3 20.6 12 20.6 7.7 16.8 7.7 12 9.7 3.4 12 3.4Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 8.3c2-.9 6.2 1 9.1 4s4.8 7 4 9.1" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M19 8.3c-2-.9-6.2 1-9.1 4S5.1 19.3 6 21.4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.7" fill="currentColor" />
    </svg>
  ),
  d3: (
    <svg viewBox="0 0 24 24">
      <path d="M7 6.4c2.8 0 4.5 2.2 4.5 5.4S9.8 17.2 7 17.2c-1.5 0-2.9-.6-4-1.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13.8 7.1c1-.6 2.1-.9 3.3-.9 2.2 0 3.9 1.3 3.9 3.2 0 1.2-.7 2.1-1.9 2.5 1.4.4 2.3 1.5 2.3 3 0 2.1-1.8 3.6-4.4 3.6-1.3 0-2.5-.3-3.6-.9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  "Socket.io": (
    <svg viewBox="0 0 24 24">
      <path d="M11 4h2v8h3l-4 8v-8H8Z" fill="currentColor" />
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
    </svg>
  )
};

const genericIcon = (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);
