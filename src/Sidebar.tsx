import React from 'react';
import { AvatarProps, Dropdown, DropdownItem, DropdownItemProps, DropdownMenu, DropdownProps, DropdownTrigger, User } from '@nextui-org/react';

interface SidebarNavigationItem {
  label: string;
  link: string;
  onClick?: React.MouseEventHandler;
  icon?: React.ReactNode;

  navigation: SidebarNavigationItem[];
}

interface SidebarItemNavigation {
  type: 'navigation';
  label: string;
  orientation: 'horizontal' | 'vertical';
  align: 'top' | 'center' | 'bottom';
  navigation: SidebarNavigationItem[];
}

interface SidebarItemUser {
  type: 'user';
  avatar: AvatarProps;
  name: string;
  dropdown?: DropdownProps;
  dropdownItems?: DropdownItemProps[];
}

interface SidebarItemCustom {
  type: 'custom';
  render: React.ReactNode;
}

interface SidebarProps {
  items: Array<SidebarItemNavigation | SidebarItemUser | SidebarItemCustom>;
  // layout: 'collpased' | 'expanded';
  // width: number;
  // autoCollpase: boolean;
}

/**
 * Primary UI component for Dashboard Sidebars
 */
export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="flex flex-col bg-white h-screen w-64">
      {items.map((item, index) => {
        switch (item.type) {
          case 'navigation':
            return (
              <div
                key={`${item.type}-${index}`}
                className={`flex flex-col ${
                  item.orientation === 'horizontal' ? 'flex-row' : 'flex-col'
                }`}
              >
                {item.navigation.map((navItem) => {
                  return (
                    <div
                      key={navItem.label}
                      className={`flex flex-col ${
                        item.orientation === 'horizontal' ? 'flex-row' : 'flex-col'
                      }`}
                    >
                      {navItem.label}
                    </div>
                  );
                })}
              </div>
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
            return <React.Fragment key={`${item.type}-${index}`}>{item.render}</React.Fragment>;
          default:
            return null;
        }
      })}
    </div>
  );
};
