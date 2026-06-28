interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const Header = ({ isDark, onToggleTheme }: HeaderProps) => {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border-primary backdrop-blur-2xl bg-surface-primary/70 transition-colors duration-300"
      style={{ boxShadow: 'var(--shadow-header)' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Site Title */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 text-white font-serif font-bold text-lg">
              B
            </div>
            <span className="text-xl font-semibold text-text-primary tracking-tight">
              Blog<span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">Editorial</span>
            </span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Nav Links (desktop) */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
              <a href="" onClick={(e) => e.preventDefault()} className="hover:text-text-primary transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">Articles</a>
              <a href="" onClick={(e) => e.preventDefault()} className="hover:text-text-primary transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">Topics</a>
              <a href="" onClick={(e) => e.preventDefault()} className="hover:text-text-primary transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">About</a>
            </nav>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleTheme}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border-primary bg-surface-tertiary/50 hover:bg-surface-tertiary transition-all duration-200 hover:scale-105 active:scale-95 hover:border-brand-500/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              id="theme-toggle"
            >
              <svg
                className={`absolute h-5 w-5 text-amber-500 transition-all duration-300 ${
                  isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>

              <svg
                className={`absolute h-5 w-5 text-brand-300 transition-all duration-300 ${
                  isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
