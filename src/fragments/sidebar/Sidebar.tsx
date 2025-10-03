import type { AvatarProps } from '@heroui/avatar';
import type { DropdownItemProps, DropdownProps } from '@heroui/dropdown';
import type { ListboxProps } from '@heroui/listbox';

import { IconChevronLeft, IconDots } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Listbox, ListboxItem, ListboxSection } from '../../components/base/Listbox';
import { Chip } from '../../components/base/Chip';
import { Tooltip } from '../../components/base/Tooltip';
import { Button } from '../../components/base/Button';
import { Badge } from '../../components/base/Badge';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '../../components/base/Dropdown';
import { User } from '../../components/base/User';
import { Avatar } from '../../components/base/Avatar';
import { ScrollShadow } from '../../components/base/ScrollShadow';
import { Link } from '../../components/base/Link';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '../../components/base/Modal';
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
  listboxProps?: Omit<ListboxProps, 'children'>;
}

interface SidebarItemUser extends SidebarItem {
  type: 'user';
  avatar?: AvatarProps;
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
        <Listbox
          variant="flat"
          aria-label="Listbox menu with sections"
          itemClasses={{
            base: 'h-12 gap-6',
          }}
          {...item.listboxProps}
        >
          <ListboxSection title={item.label} classNames={{ group: 'flex flex-col gap-1' }}>
            {item.navigation.map((navItem) => (
              <ListboxItem
                key={navItem.label}
                startContent={navItem.icon}
                endContent={typeof navItem.badgeContent === 'string' ? <Chip size="sm" color="primary" variant={navItem.badgeContent ? 'solid' : 'dot'} classNames={{ base: 'border-none' }}>{navItem.badgeContent}</Chip> : navItem.endContent}
                href={navItem.link}
                color={options.activeNav?.link === navItem.link ? 'primary' : 'default'}
                className={options.activeNav?.link === navItem.link ? 'text-primary' : ''}
              >
                {navItem.label}
              </ListboxItem>
            ))}
          </ListboxSection>
        </Listbox>
      ) : (
        <nav className="flex flex-col gap-1">
          {item.navigation.map((navItem) => (
            <Tooltip
              key={navItem.label}
              placement="right"
              content={navItem.label}
            >
              <Button
                color={options.activeNav?.link === navItem.link ? 'primary' : 'default'}
                variant="light"
                size="lg"
                as={Link}
                href={navItem.link}
                isIconOnly
              >
                <Badge content={navItem.badgeContent} color="primary" size="sm" isInvisible={typeof navItem.badgeContent !== 'string'}>
                  {navItem.icon}
                </Badge>
              </Button>
            </Tooltip>
          ))}
        </nav>
      );
    case 'user':
      return (
        <Dropdown
          placement="bottom-start"
          classNames={{ trigger: options.layout === 'expanded' ? 'justify-start px-2' : 'justify-start' }}
          {...item.dropdown}
        >
          <DropdownTrigger>
            {options.layout === 'expanded' ? (
              <User
                as="button"
                avatarProps={item.avatar}
                className="transition-transform"
                description={item.description}
                name={item.name}
              />
            ) : (
              <Avatar
                as="button"
                className="transition-transform"
                {...item.avatar}
              />
            )}
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" color="primary" variant="flat" items={item.dropdownItems || []}>
            {(dropdownItem) => (
              <DropdownItem
                {...dropdownItem}
                key={dropdownItem.label}
              >
                {dropdownItem.label}
              </DropdownItem>
            )}
          </DropdownMenu>
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
          <Button size="sm" isIconOnly radius="full" className={v.layoutButton()} onPress={toggleLayout}>
            <IconChevronLeft size={14} />
          </Button>
        </div>
      </div>

      <nav
        className={v.bottomNav()}
        onClick={() => setMobileMenuOpen(false)}
      >
        {(items.find((item) => item.type === 'navigation') as SidebarItemNavigation | undefined )?.navigation?.map((navItem) => (
          <Tooltip
            key={navItem.label}
            placement="top"
            content={navItem.label}
            offset={10}
          >
            <Button
              as={Link}
              radius="md"
              className={v.bottomNavButton()}
              variant="light"
              isIconOnly
              color={activeNav?.link === navItem.link ? 'primary' : 'default'}
              onPress={() => setMobileMenuOpen(false)}
              href={navItem.link}
            >
              <Badge content={navItem.badgeContent} color="primary" size="sm" isInvisible={typeof navItem.badgeContent !== 'string'}>
                {navItem.icon}
              </Badge>
            </Button>
          </Tooltip>
        ))}
        <Button radius="md" className={v.bottomNavMenuButton()} variant={mobileMenuOpen ? 'flat' : 'light'} isIconOnly onPress={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <IconDots size={24} stroke={1.5} />
        </Button>
      </nav>

      <Modal isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} classNames={{ wrapper: v.bottomNavModalWrapper(), backdrop: v.bottomNavModalBackdrop(), base: v.bottomNavModalBase() }} isDismissable={false} radius="none">
        <ModalContent>
          {() => (
            <>
              <ModalHeader />
              <ModalBody as={ScrollShadow} hideScrollBar className={v.bottomNavModalFooter()}>
                {items.map((item) => {
                  const children = item.align !== 'bottom' ? renderItems(item, { layout: 'expanded', activeNav }) : null;
                  return children ? (
                    <div key={item.key} className={getAlignmentClasses(item.align)}>
                      {children}
                    </div>
                  ) : null;
                })}
              </ModalBody>
              <ModalFooter className={v.bottomNavModalBody()}>
                {items.map((item) => {
                  const children = item.align === 'bottom' ? renderItems(item, { layout: 'expanded', activeNav }) : null;
                  return children ? (
                    <div key={item.key} className={getAlignmentClasses(item.align)}>
                      {children}
                    </div>
                  ) : null;
                })}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
