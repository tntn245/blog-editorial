import AuthorCard from './AuthorCard';
import TableOfContents from './TableOfContents';
import TagList from './TagList';

interface SidebarProps {
  activeId: string;
}

const Sidebar = ({ activeId }: SidebarProps) => {
  return (
    <aside
      className="lg:sticky lg:top-20 lg:h-fit space-y-5 order-2 lg:order-none animate-fade-in"
      aria-label="Sidebar"
    >
      <AuthorCard />
      <TableOfContents activeId={activeId} />
      <TagList />
    </aside>
  );
};

export default Sidebar;
