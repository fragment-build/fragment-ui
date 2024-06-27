import { Sidebar, SidebarProps } from '../sidebar/Sidebar';

/**
 * Primary UI component for Dashboard App Shell
 */

interface ShellProps {
  sidebar: SidebarProps;
  children: React.ReactNode;
}

export const Shell: React.FC<ShellProps> = ({ sidebar, children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar {...sidebar} />
      <main className="flex-1 px-6 lg:px-12 xl:px-20 py-14 min-w-0 max-w-[1920px] mx-auto">
        {children}
      </main>
    </div>
  );
};
