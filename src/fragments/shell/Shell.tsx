import { Navbar, type NavbarProps } from '../navbar/Navbar';
import { Sidebar, type SidebarProps } from '../sidebar/Sidebar';
import { shell } from './Shell.styles';

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
  const v = shell({ direction: props.direction });

  if (props.direction === 'vertical') {
    return (
      <div className={v.base()}>
        <Navbar {...props.navbar} />
        <main className={v.main()}>
          {props.children}
        </main>
      </div>
    );
  }

  return (
    <div className={v.base()}>
      <Sidebar {...props.sidebar} />
      <main className={v.main()}>
        {props.children}
      </main>
    </div>
  );
};
