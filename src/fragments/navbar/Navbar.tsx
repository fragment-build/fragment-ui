import type { AvatarImageProps, AvatarProps, DropdownItemProps, DropdownProps } from '@heroui/react';

import { Avatar, Badge, Button, Dropdown, ScrollShadow, Tabs, Tooltip } from '@heroui/react';
import { IconDots } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useFragmentUI } from '../../context';
import { navbar } from './Navbar.styles';

/**
 * Primary UI component for Dashboard Navbars
 */

interface NavbarNavigationItem {
  label: string;
  link: string;
  onClick?: React.MouseEventHandler; // TODO: is this used?
  icon?: React.ReactNode;
  endContent?: React.ReactNode;
  badgeContent?: React.ReactNode;
}

type NavbarItemNavigation = NavbarNavigationItem[];

interface NavbarItemUser {
  avatar?: AvatarProps & AvatarImageProps;
  name: string;
  description?: string;
  dropdown?: Omit<DropdownProps, 'children'>;
  dropdownItems?: (Omit<DropdownItemProps, 'children'> & { label: string })[];
}

export interface NavbarProps {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  navigation?: NavbarNavigationItem[];
  user?: NavbarItemUser;
  currentPath?: string;
}

const getActiveNav = (currentPath: NavbarProps['currentPath'], navigation: NavbarItemNavigation) => {
  if (!currentPath) return;
  const possibleMatches = navigation.filter((navItem) => navItem.link.startsWith(currentPath)).sort((a, b) => b.link.length - a.link.length);
  return possibleMatches.find((pMatch) => pMatch.link === currentPath) || possibleMatches[0];
}

export const Navbar: React.FC<NavbarProps> = ({ navigation, user, startContent, endContent, currentPath }) => {
  const v = navbar();
  const { linkComponent: LinkComponent } = useFragmentUI();
  const [activeNav, setActiveNav] = useState<NavbarNavigationItem | undefined>(getActiveNav(currentPath, navigation ?? []));

  useEffect(() => setActiveNav(getActiveNav(currentPath, navigation ?? [])), [currentPath, navigation]);

  return (
    <>
      <div className={v.topbar()}>
        {startContent}
        <ScrollShadow hideScrollBar orientation="horizontal">
          <Tabs
            selectedKey={activeNav?.label}
            onSelectionChange={(key) => {
              const nav = navigation?.find((item) => item.label === key);
              setActiveNav(nav);
            }}
          >
            <Tabs.ListContainer>
              <Tabs.List>
                {navigation?.map((item) => (
                  <Tabs.Tab
                    id={item.label}
                    key={item.label}
                    className="text-nowrap"
                    render={(domProps) => <LinkComponent {...domProps} href={item.link} />}
                  >
                    {item.label}
                    <Tabs.Indicator />
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs.ListContainer>
          </Tabs>
        </ScrollShadow>
        <div className={v.end()}>
          {endContent}
          {user && (
            <Dropdown {...user.dropdown}>
              <Dropdown.Trigger>
                <Avatar {...user.avatar}>
                  <Avatar.Image {...user.avatar} />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
              <Dropdown.Popover className="min-w-[256px]" placement="bottom start">
                <Dropdown.Menu aria-label="User Actions" items={user.dropdownItems || []}>
                  {(dropdownItem) => (
                    <Dropdown.Item
                      {...dropdownItem}
                      key={dropdownItem.label}
                    >
                      {dropdownItem.label}
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          )}
        </div>
      </div>

      <nav
        className={v.bottomNav()}
      >
        {navigation?.map((navItem) => (
          <Tooltip key={navItem.label}>
            <Tooltip.Content placement="top" offset={10}>{navItem.label}</Tooltip.Content>
            <Badge.Anchor className={v.bottomNavButton()}>
              <Button
                render={(props) => <LinkComponent href={navItem.link}><button {...props} /></LinkComponent>}
                isIconOnly
                variant={activeNav?.link === navItem.link ? 'tertiary' : 'ghost'}
                fullWidth
                className={v.bottomNavButton()}
              >
                {navItem.icon}
              </Button>
              {typeof navItem.badgeContent === 'string' && navItem.badgeContent ? (
                <Badge variant="primary" size="sm">
                  {navItem.badgeContent}
                </Badge>
              ) : null}
            </Badge.Anchor>
          </Tooltip>
        ))}
        <Button className={v.bottomNavButton()} variant="ghost" isIconOnly fullWidth>
          <IconDots size={24} stroke={1.5} />
        </Button>
      </nav>
    </>
  );
};
