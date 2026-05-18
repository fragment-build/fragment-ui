'use client';

import type { AvatarImageProps, AvatarProps, DropdownItemProps, DropdownProps, ListBoxProps } from '@heroui/react';

import { Avatar, Badge, Button, Description, Dropdown, Label, Modal, ScrollShadow, Tooltip } from '@heroui/react';
import { IconChevronLeft, IconDots } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useFragmentUI } from '../../context';
import { sidebar } from './Sidebar.styles';
import { breakpointsTailwind } from '../../constants';
import { SidebarNavigation } from './SidebarNavigation';
import type { SidebarNavigationItem, SidebarChildNavigationItem } from './SidebarNavigation';

/**
 * Primary UI component for Dashboard Sidebars
 */

interface SidebarItem {
  key: string;
  align?: 'top' | 'center' | 'bottom';
}

interface SidebarItemNavigation extends SidebarItem {
  type: 'navigation';
  label?: string;
  navigation: SidebarNavigationItem[];
  listboxProps?: Omit<ListBoxProps<object>, 'children'>;
}

interface SidebarItemUser extends SidebarItem {
  type: 'user';
  avatar?: AvatarProps & AvatarImageProps;
  name: string;
  description?: string;
  dropdown?: Omit<DropdownProps, 'children'>;
  dropdownItems?: (Omit<DropdownItemProps, 'children'> & { label: string })[];
}

interface SidebarItemCustom extends SidebarItem {
  type: 'custom';
  render: React.ReactNode;
  showCollapsedOnly?: boolean;
  showExpandedOnly?: boolean;
}

type SidebarItemVariants = SidebarItemNavigation | SidebarItemUser | SidebarItemCustom

export interface SidebarProps {
  items: SidebarItemVariants[];
  layout?: 'auto' | 'collapsed' | 'expanded';
  currentPath?: string;
}

export type { SidebarNavigationItem, SidebarChildNavigationItem };

const getAlignmentClass = (align: SidebarItemNavigation['align']) =>
  align ? `fragment-sidebar__item--${align}` : '';

const ButtonLink: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { href: string }> = ({ href, ...props }) => {
  const { linkComponent: LinkComponent } = useFragmentUI();
  return <LinkComponent href={href}><button {...props} /></LinkComponent>;
};

type RenderOptions = { layout: SidebarProps['layout'], activeLink: string | undefined };

const renderItems = (item: SidebarProps['items'][number], options: RenderOptions) => {
  switch (item.type) {
    case 'navigation':
      return (
        <SidebarNavigation
          navigation={item.navigation}
          label={item.label}
          layout={options.layout === 'expanded' ? 'expanded' : 'collapsed'}
          activeLink={options.activeLink}
          listboxProps={item.listboxProps}
        />
      );
    case 'user':
      return (
        <Dropdown {...item.dropdown}>
          <Dropdown.Trigger className="fragment-sidebar__user-trigger">
            {options.layout === 'expanded' ? (
              <div className="fragment-sidebar__user-info">
                <Avatar {...item.avatar}>
                  <Avatar.Image {...item.avatar} />
                  <Avatar.Fallback>{item.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <div className="fragment-sidebar__user-text">
                  <Label>{item.name}</Label>
                  <Description>{item.description}</Description>
                </div>
              </div>
            ) : (
              <Avatar {...item.avatar}>
                <Avatar.Image {...item.avatar} />
                <Avatar.Fallback>{item.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            )}
          </Dropdown.Trigger>
          <Dropdown.Popover className="min-w-[256px]" placement="bottom start">
            <Dropdown.Menu aria-label="User Actions" items={item.dropdownItems || []}>
              {(dropdownItem) => (
                <Dropdown.Item {...dropdownItem} key={dropdownItem.label}>
                  {dropdownItem.label}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      );
    case 'custom':
      return (
        (!item.showExpandedOnly && !item.showCollapsedOnly) ||
        (options.layout === 'expanded' && item.showExpandedOnly) ||
        (options.layout === 'collapsed' && item.showCollapsedOnly)
      )
        ? <div className="fragment-sidebar__custom-item">{item.render}</div>
        : null;
    default:
      return null;
  }
};

const getActiveLink = (currentPath: SidebarProps['currentPath'], items: SidebarProps['items']): string | undefined => {
  if (!currentPath) return undefined;

  const allNavItems: SidebarNavigationItem[] = [];
  items.forEach((item) => {
    if (item.type !== 'navigation') return;
    item.navigation.forEach((navItem) => {
      allNavItems.push(navItem);
      navItem.items?.forEach((child) => allNavItems.push(child as SidebarNavigationItem));
    });
  });

  const possibleMatches = allNavItems
    .filter((navItem) => navItem.link && (currentPath === navItem.link || currentPath.startsWith(navItem.link + '/')))
    .sort((a, b) => b.link.length - a.link.length);

  return (possibleMatches.find((m) => m.link === currentPath) || possibleMatches[0])?.link;
};

export const Sidebar: React.FC<SidebarProps> = ({ items, currentPath, layout: defaultLayout = 'auto' }) => {
  const [layout, setLayout] = useState(defaultLayout);

  const toggleLayout = () => {
    if (layout === 'auto') {
      if (document.body.clientWidth >= breakpointsTailwind.xl) {
        return setLayout('collapsed');
      }
      return setLayout('expanded');
    }
    setLayout(layout === 'collapsed' ? 'expanded' : 'collapsed');
  };

  const v = sidebar({ layout });

  const [activeLink, setActiveLink] = useState<string | undefined>(getActiveLink(currentPath, items));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setActiveLink(getActiveLink(currentPath, items)), [currentPath, items]);

  return (
    <>
      <div className={v.base()}>
        <div className={v.collapsed()}>
          <ScrollShadow hideScrollBar className={v.collapsedBody()}>
            {items.map((item) => {
              const children = item.align !== 'bottom' ? renderItems(item, { layout: 'collapsed', activeLink }) : null;
              return children ? (
                <div key={item.key} className={getAlignmentClass(item.align)}>{children}</div>
              ) : null;
            })}
          </ScrollShadow>
          <div className={v.collapsedFooter()}>
            {items.map((item) => {
              const children = item.align === 'bottom' ? renderItems(item, { layout: 'collapsed', activeLink }) : null;
              return children ? (
                <div key={item.key} className={getAlignmentClass(item.align)}>{children}</div>
              ) : null;
            })}
          </div>
        </div>
        <div className={v.expanded()}>
          <ScrollShadow hideScrollBar className={v.expandedBody()}>
            {items.map((item) => {
              const children = item.align !== 'bottom' ? renderItems(item, { layout: 'expanded', activeLink }) : null;
              return children ? (
                <div key={item.key} className={getAlignmentClass(item.align)}>{children}</div>
              ) : null;
            })}
          </ScrollShadow>
          <div className={v.expandedFooter()}>
            {items.map((item) => {
              const children = item.align === 'bottom' ? renderItems(item, { layout: 'expanded', activeLink }) : null;
              return children ? (
                <div key={item.key} className={getAlignmentClass(item.align)}>{children}</div>
              ) : null;
            })}
          </div>
        </div>
        <div className={v.placeholder()} />
        <div className={v.layoutButtonWrapper()}>
          <Button size="sm" isIconOnly variant="tertiary" className={v.layoutButton()} onPress={toggleLayout}>
            <IconChevronLeft />
          </Button>
        </div>
      </div>

      <nav className={v.bottomNav()} onClick={() => setMobileMenuOpen(false)}>
        {(items.find((item) => item.type === 'navigation') as SidebarItemNavigation | undefined)?.navigation?.map((navItem) => (
          <Tooltip key={navItem.label}>
            <Tooltip.Trigger>
              <Button
                render={(props) => <ButtonLink {...props} href={navItem.link} />}
                isIconOnly
                variant={activeLink === navItem.link ? 'tertiary' : 'ghost'}
                onPress={() => setMobileMenuOpen(false)}
              >
                <Badge.Anchor>
                  {navItem.icon}
                  {typeof navItem.badgeContent === 'string' && navItem.badgeContent ? (
                    <Badge variant="primary" color="accent" size="sm" className="fragment-sidebar__bottom-nav-badge">{navItem.badgeContent}</Badge>
                  ) : null}
                </Badge.Anchor>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content placement="top" offset={10}>{navItem.label}</Tooltip.Content>
          </Tooltip>
        ))}
        <Button variant={mobileMenuOpen ? 'tertiary' : 'ghost'} isIconOnly onPress={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <IconDots />
        </Button>
      </nav>

      <Modal isOpen={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog>
              <Modal.Header />
              <Modal.Body className={v.bottomNavModalBody()}>
                {items.map((item) => {
                  const children = item.align !== 'bottom' ? renderItems(item, { layout: 'expanded', activeLink }) : null;
                  return children ? (
                    <div key={item.key} className={getAlignmentClass(item.align)}>{children}</div>
                  ) : null;
                })}
              </Modal.Body>
              <Modal.Footer className={v.bottomNavModalFooter()}>
                {items.map((item) => {
                  const children = item.align === 'bottom' ? renderItems(item, { layout: 'expanded', activeLink }) : null;
                  return children ? (
                    <div key={item.key} className={getAlignmentClass(item.align)}>{children}</div>
                  ) : null;
                })}
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};
