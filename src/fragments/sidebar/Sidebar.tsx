import type { AvatarImageProps, AvatarProps, DropdownItemProps, DropdownProps, ListBoxProps } from '@heroui/react';

import { Avatar, Badge, Button, Chip, Description, Dropdown, Header, Label, ListBox, Modal, ScrollShadow, Tooltip } from '@heroui/react';
import { IconChevronLeft, IconDots } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { sidebar } from './Sidebar.styles';
import { breakpointsTailwind } from '../../constants';

/**
 * Primary UI component for Dashboard Sidebars
 */

interface SidebarNavigationItem {
  label: string;
  link: string;
  onClick?: React.MouseEventHandler; // TODO: is this used?
  icon?: React.ReactNode;
  endContent?: React.ReactNode;
  badgeContent?: React.ReactNode;
  items?: SidebarItemVariants[];
}

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

const getAlignmentClasses = (align: SidebarItemNavigation['align']) => {
  switch (align) {
    case 'center':
      return 'my-auto max-w-full';
    case 'bottom':
      return 'mt-auto max-w-full sticky bottom-0';
    default:
      return '';
  }
};

const renderItems = (item: SidebarProps['items'][number], options: { layout: SidebarProps['layout'], activeNav: SidebarNavigationItem | undefined }) => {
  switch (item.type) {
    case 'navigation':
      return options.layout === 'expanded' ? (
        <ListBox
          aria-label="Listbox menu with sections"
          {...item.listboxProps}
        >
          <ListBox.Section>
            <Header>{item.label}</Header>
            {item.navigation.map((navItem) => (
              <ListBox.Item
                key={navItem.label}
                href={navItem.link}
                variant={options.activeNav?.link === navItem.link ? 'danger' : 'default'}
                className={options.activeNav?.link === navItem.link ? 'text-primary' : ''}
              >
                {navItem.icon}
                {navItem.label}
                {typeof navItem.badgeContent === 'string' ? <Chip size="sm" variant="primary">{navItem.badgeContent}</Chip> : navItem.endContent}
              </ListBox.Item>
            ))}
          </ListBox.Section>
        </ListBox>
      ) : (
        <nav className="flex flex-col gap-1">
          {item.navigation.map((navItem) => (
            <Tooltip key={navItem.label}>
              <Tooltip.Content placement="right" offset={10}>{navItem.label}</Tooltip.Content>
              <Badge.Anchor>
                <Button
                  variant={options.activeNav?.link === navItem.link ? 'primary' : 'tertiary'}
                  size="lg"
                  render={(props) => <a href={navItem.link}><button {...props} /></a>}
                  isIconOnly
                >
                  {navItem.icon}
                </Button>
                <Badge variant="primary" size="sm">
                  {navItem.badgeContent}
                </Badge>
              </Badge.Anchor>
            </Tooltip>
          ))}
        </nav>
      );
    case 'user':
      return (
        <Dropdown {...item.dropdown}>
          <Dropdown.Trigger className={options.layout === 'expanded' ? 'justify-start px-2' : 'justify-start'}>
            {options.layout === 'expanded' ? (
              <Button variant="ghost">
                <Avatar {...item.avatar}>
                  <Avatar.Image {...item.avatar} />
                  <Avatar.Fallback>{item.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <div className="flex flex-col">
                  <Label>{item.name}</Label>
                  <Description>{item.description}</Description>
                </div>
              </Button>
            ) : (
              <button type="button">
                <Avatar {...item.avatar}>
                  <Avatar.Image {...item.avatar} />
                  <Avatar.Fallback>{item.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </button>
            )}
          </Dropdown.Trigger>
          <Dropdown.Popover className="min-w-[256px]"
          placement="bottom start">
          <Dropdown.Menu aria-label="User Actions" items={item.dropdownItems || []}>
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
      );
    case 'custom':
      return (
        (!item.showExpandedOnly && !item.showCollapsedOnly) ||
        (options.layout === 'expanded' && item.showExpandedOnly) ||
        (options.layout === 'collapsed' && item.showCollapsedOnly)
      )
      ? <div className="px-2">{item.render}</div>
      : null;
    default:
      return null;
  }
};

const getActiveNav = (currentPath: SidebarProps['currentPath'], items: SidebarProps['items']) => {
  if (!currentPath) return;

  const navigations: SidebarNavigationItem[][] = [];

  items.forEach((item) => {
    if (item.type !== 'navigation') return;
    navigations.push(item.navigation);
  });

  const possibleMatches = navigations.flat().filter((navItem) => navItem.link.startsWith(currentPath)).sort((a, b) => b.link.length - a.link.length);
  return possibleMatches.find((pMatch) => pMatch.link === currentPath) || possibleMatches[0];
}

export const Sidebar: React.FC<SidebarProps> = ({ items, currentPath, layout: defaultLayout = "auto" }) => {
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
  const [activeNav, setActiveNav] = useState<SidebarNavigationItem | undefined>(getActiveNav(currentPath, items))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setActiveNav(getActiveNav(currentPath, items)), [currentPath, items]);

  return (
    <>
      <div className={v.base()}>
        <div className={v.collapsed()}>
          <ScrollShadow hideScrollBar className={v.collapsedBody()}>
            {items.map((item) => {
              const children = item.align !== 'bottom' ? renderItems(item, { layout: 'collapsed', activeNav }) : null;
              return children ? (
                <div key={item.key} className={getAlignmentClasses(item.align)}>
                  {children}
                </div>
              ) : null;
            })}
          </ScrollShadow>
          <div className={v.collapsedFooter()}>
            {items.map((item) => {
              const children = item.align === 'bottom' ? renderItems(item, { layout: 'collapsed', activeNav }) : null;
              return children ? (
                <div key={item.key} className={getAlignmentClasses(item.align)}>
                  {children}
                </div>
              ) : null;
            })}
          </div>
        </div>
        <div className={v.expanded()}>
          <ScrollShadow hideScrollBar className={v.expandedBody()}>
            {items.map((item) => {
              const children = item.align !== 'bottom' ? renderItems(item, { layout: 'expanded', activeNav }) : null;
              return children ? (
                <div key={item.key} className={getAlignmentClasses(item.align)}>
                  {children}
                </div>
              ) : null;
            })}
          </ScrollShadow>
          <div className={v.expandedFooter()}>
            {items.map((item) => {
              const children = item.align === 'bottom' ? renderItems(item, { layout: 'expanded', activeNav }) : null;
              return children ? (
                <div key={item.key} className={getAlignmentClasses(item.align)}>
                  {children}
                </div>
              ) : null;
            })}
          </div>
        </div>
        <div className={v.placeholder()} />
        <div className={v.layoutButtonWrapper()}>
          <Button size="sm" isIconOnly className={v.layoutButton()} onPress={toggleLayout}>
            <IconChevronLeft size={14} />
          </Button>
        </div>
      </div>

      <nav
        className={v.bottomNav()}
        onClick={() => setMobileMenuOpen(false)}
      >
        {(items.find((item) => item.type === 'navigation') as SidebarItemNavigation | undefined )?.navigation?.map((navItem) => (
          <Tooltip key={navItem.label}>
            <Tooltip.Content placement="top" offset={10}>{navItem.label}</Tooltip.Content>
            <Badge.Anchor>
              <Button
                render={(props) => <a href={navItem.link}><button {...props} /></a>}
                className={v.bottomNavButton()}
                isIconOnly
                variant={activeNav?.link === navItem.link ? 'primary' : 'tertiary'}
                onPress={() => setMobileMenuOpen(false)}
              >
                {navItem.icon}
              </Button>
              <Badge variant="primary" size="sm">
                {navItem.badgeContent}
              </Badge>
            </Badge.Anchor>
          </Tooltip>
        ))}
        <Button className={v.bottomNavMenuButton()} variant={mobileMenuOpen ? 'tertiary' : 'ghost'} isIconOnly onPress={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <IconDots size={24} stroke={1.5} />
        </Button>
      </nav>

      <Modal isOpen={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog>+
              <Modal.Header />
              <Modal.Body className={v.bottomNavModalFooter()}>
                {items.map((item) => {
                  const children = item.align !== 'bottom' ? renderItems(item, { layout: 'expanded', activeNav }) : null;
                  return children ? (
                    <div key={item.key} className={getAlignmentClasses(item.align)}>
                      {children}
                    </div>
                  ) : null;
                })}
              </Modal.Body>
              <Modal.Footer className={v.bottomNavModalBody()}>
                {items.map((item) => {
                  const children = item.align === 'bottom' ? renderItems(item, { layout: 'expanded', activeNav }) : null;
                  return children ? (
                    <div key={item.key} className={getAlignmentClasses(item.align)}>
                      {children}
                    </div>
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
