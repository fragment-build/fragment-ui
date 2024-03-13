'use client';

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
    <div className={`flex min-h-screen`}>
      <Sidebar {...sidebar} />
      <main className="flex-1 px-6 py-8">{children}</main>
    </div>
  );
};
