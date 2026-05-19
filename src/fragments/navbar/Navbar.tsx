'use client';

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

  const overflowItems = (navigation ?? []).slice(4);
  const isOverflowActive = overflowItems.some((item) => activeNav?.link === item.link);

  return (
    <>
      <div className={v.topbar()}>
        {startContent}
        <ScrollShadow hideScrollBar orientation="horizontal" className={v.tabs()}>
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
                    className={v.tab()}
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
              <Dropdown.Popover className="fragment-navbar__user-popover" placement="bottom start">
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
        {navigation?.slice(0, 4).map((navItem) => (
          <Tooltip key={navItem.label}>
            <Tooltip.Content placement="top" offset={10}>{navItem.label}</Tooltip.Content>
            <Button
              render={(props) => <LinkComponent href={navItem.link}><button {...props} /></LinkComponent>}
              isIconOnly
              variant={activeNav?.link === navItem.link ? 'tertiary' : 'ghost'}
              fullWidth
            >
              <Badge.Anchor>
                {navItem.icon}
                {typeof navItem.badgeContent === 'string' && navItem.badgeContent ? (
                  <Badge variant="primary" color="accent" size="sm" className={v.bottomNavBadge()}>
                    {navItem.badgeContent}
                  </Badge>
                ) : null}
              </Badge.Anchor>
            </Button>
          </Tooltip>
        ))}
        {overflowItems.length > 0 && (
          <Dropdown>
            <Dropdown.Trigger>
              <Button variant={isOverflowActive ? 'tertiary' : 'ghost'} isIconOnly fullWidth>
                <IconDots />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Popover placement="top end">
              <Dropdown.Menu aria-label="More navigation">
                {overflowItems.map((item) => (
                  <Dropdown.Item key={item.label} href={item.link}>
                    {item.icon}{item.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        )}
      </nav>
    </>
  );
};
