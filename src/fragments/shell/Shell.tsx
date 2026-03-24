import { Navbar, type NavbarProps } from '../navbar/Navbar';
import { Sidebar, type SidebarProps } from '../sidebar/Sidebar';

/**
 * Primary UI component for Dashboard App Shell
 */

interface ShellPropsHorizontal {
  direction: 'horizontal';
  sidebar: SidebarProps;
  children: React.ReactNode;
}

interface ShellPropsVertical {
  direction: 'vertical';
  navbar: NavbarProps;
  children: React.ReactNode;
}

export type ShellProps = ShellPropsHorizontal | ShellPropsVertical;

export const Shell: React.FC<ShellProps> = (props) => {
  if (props.direction === 'vertical') {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar {...props.navbar} />
        <main className="flex-1 px-6 py-14 min-w-0 max-w-[2100px] mx-auto w-full">
          {props.children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar {...props.sidebar} />
      <main className="flex-1 px-6 lg:px-12 xl:px-20 py-14 min-w-0 max-w-[1920px] mx-auto">
        {props.children}
      </main>
    </div>
  );
};
