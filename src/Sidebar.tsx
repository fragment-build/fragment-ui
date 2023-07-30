import React from 'react';
import { AvatarProps, Dropdown, DropdownItem, DropdownItemProps, DropdownMenu, DropdownProps, DropdownTrigger, User, tv } from '@nextui-org/react';
import { SidebarNavigation, SidebarNavigationItem } from './Sidebar.Navigation';

interface SidebarItem {
  align?: 'top' | 'center' | 'bottom';
}

interface SidebarItemNavigation extends SidebarItem {
  type: 'navigation';
  label?: string;
  navigation: SidebarNavigationItem[];
}

interface SidebarItemUser extends SidebarItem {
  type: 'user';
  avatar: AvatarProps;
  name: string;
  dropdown?: DropdownProps;
  dropdownItems?: DropdownItemProps[];
}

interface SidebarItemCustom extends SidebarItem {
  type: 'custom';
  label?: string;
  render: React.ReactNode;
}

interface SidebarProps {
  items: Array<SidebarItemNavigation | SidebarItemUser | SidebarItemCustom>;
  // layout: 'collpased' | 'expanded';
  // width: number;
  // autoCollpase: boolean;
}

const sidebar = tv({
  slots: {
    base: "bg-white h-screen w-64 overflow-y-auto",
    scrollContent: "flex flex-col min-h-full p-7 items-start",
  },
});
 
const { base, scrollContent } = sidebar();

/**
 * Primary UI component for Dashboard Sidebars
 */
export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className={base()}>
      <div className={scrollContent()}>
        {items.map((item, index) => {
          switch (item.type) {
            case 'navigation':
              return (
                <>
                  {item.label && <h1 className='text-sm uppercase text-ellipsis'>{item.label}</h1>}
                  <SidebarNavigation
                    key={`${item.type}-${index}`}
                    navigation={item.navigation}
                    align={item.align}
                  />
                </>
              );
            case 'user':
              return (
                <Dropdown key={`${item.type}-${index}`} placement="bottom-start" {...item.dropdown}>
                  <DropdownTrigger>
                    <User
                      as="button"
                      avatarProps={item.avatar}
                      className="transition-transform"
                      description="@tonyreichert"
                      name={item.name}
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User Actions" color="primary" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-bold">Signed in as</p>
                      <p className="font-bold">@tonyreichert</p>
                    </DropdownItem>
                    <DropdownItem key="settings" showDivider>
                      My Settings
                    </DropdownItem>
                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                    <DropdownItem key="analytics" showDivider>
                      Analytics
                    </DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">Configurations</DropdownItem>
                    <DropdownItem key="help_and_feedback" showDivider>
                      Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" showDivider color="danger">
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              );
            case 'custom':
              return (
                <React.Fragment key={`${item.type}-${index}`}>
                  {item.label && <h1 className='text-sm uppercase text-ellipsis'>{item.label}</h1>}
                  {item.render}
                </React.Fragment>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};
