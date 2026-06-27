export const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'design-tokens', title: 'Design Tokens' },
  { id: 'component-architecture', title: 'Component Architecture' },
  { id: 'responsive-patterns', title: 'Responsive Patterns' },
  { id: 'dark-mode', title: 'Dark Mode Implementation' },
  { id: 'performance', title: 'Performance Considerations' },
  { id: 'accessibility', title: 'Accessibility' },
  { id: 'conclusion', title: 'Conclusion' },
];

const TableOfContents = ({ activeId }) => {
  return (
    <div className="rounded-2xl border border-border-primary bg-surface-elevated/50 backdrop-blur-sm p-5 transition-all duration-300" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4 flex items-center gap-2">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Table of Contents
      </h3>
      <nav aria-label="Table of Contents">
        <ul className="space-y-0.5">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`
                    block px-3 py-2 text-sm rounded-lg transition-all duration-200
                    ${isActive
                      ? 'bg-brand-500/10 text-brand-400 font-medium border-l-2 border-brand-500 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-tertiary/50'
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
