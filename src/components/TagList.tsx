interface Tag {
  label: string;
  color: string;
}

const tags: Tag[] = [
  { label: 'React', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20 hover:bg-sky-500/20' },
  { label: 'CSS', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20' },
  { label: 'Design Systems', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20' },
  { label: 'Tailwind', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20' },
  { label: 'Web Dev', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20' },
  { label: 'Frontend', color: 'bg-rose-500/10 text-rose-400 border-rose-500/20 hover:bg-rose-500/20' },
];

const TagList = () => {
  return (
    <div className="rounded-2xl border border-border-primary bg-surface-elevated/50 backdrop-blur-sm p-5 transition-all duration-300" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4 flex items-center gap-2">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
        Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <a
            key={tag.label}
            href=""
            onClick={(e) => e.preventDefault()}
            className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${tag.color}`}
          >
            {tag.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TagList;
