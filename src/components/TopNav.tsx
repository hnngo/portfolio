import type { NavItem, SectionId } from "../types/content";

interface TopNavProps {
  items: NavItem[];
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function TopNav({ items, activeSection, onNavigate }: TopNavProps) {
  return (
    <header className="top-nav">
      <button className="brand-mark" onClick={() => onNavigate("hero")} type="button">
        <span>HN</span>
      </button>
      <nav className="nav-links" aria-label="Primary">
        {items.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? "nav-link active" : "nav-link"}
            onClick={() => onNavigate(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
