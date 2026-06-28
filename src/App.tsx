import Header from './components/Header';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { sections } from './components/TableOfContents';
import { useDarkMode } from './hooks/useDarkMode';
import { useActiveSection } from './hooks/useActiveSection';

const App = () => {
  const { isDark, toggle } = useDarkMode();
  const sectionIds = sections.map((s) => s.id);
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen flex flex-col bg-surface-secondary transition-colors duration-300">
      <Header isDark={isDark} onToggleTheme={toggle} />

      <main className="glow-bg flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-10 items-start">
          <Sidebar activeId={activeId} />
          <Article />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
