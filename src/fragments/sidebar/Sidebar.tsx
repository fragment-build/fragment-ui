import {
  Link,
  type AvatarProps,
  type DropdownItemProps,
  type DropdownProps,
  type ListboxProps,
} from '@nextui-org/react';

import { useSmaller } from '../../hooks/breakpoints';
import { IconChevronLeft, IconDots } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import {
  Avatar,
  Badge,
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Listbox,
  ListboxItem,
  ListboxSection,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  Tooltip,
  User,
} from '../../components/base';

/**
 * Primary UI component for Dashboard Sidebars
 */

interface SidebarNavigationItem {
  label: string;
  link: string;
  onClick?: React.MouseEventHandler;
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
  layout?: 'collapsed' | 'expanded';
  autoLayout?: boolean;
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
                className={options.activeNav?.link === navItem.link ? "text-primary" : ''}
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
                key={dropdownItem.label}
                {...dropdownItem}
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

export const Sidebar: React.FC<SidebarProps> = ({ items, layout = 'expanded', autoLayout, currentPath }) => {
  const isMobile = useSmaller('xl');
  const [activeNav, setActiveNav] = useState<SidebarNavigationItem | undefined>(getActiveNav(currentPath, items))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setActiveNav(getActiveNav(currentPath, items)), [currentPath, items]);

  let renderedLayout = autoLayout ? undefined : layout;
  if (autoLayout) {
    if (isMobile) {
      renderedLayout = 'collapsed';
    } else {
      renderedLayout = 'expanded';
    }
  }

  const [collapsed, setCollapsed] = useState(renderedLayout === 'collapsed');

  useEffect(() => { if (autoLayout) setCollapsed(isMobile) }, [isMobile, setCollapsed, autoLayout])

  const layoutStyles = collapsed ? 'w-20 opacity-0 pointer-events-none' : 'w-72';
  const collapseButtonStyles = collapsed ? 'left-20 translate-x-1/2 rotate-180' : 'left-72 -translate-x-1/2';

  return (
    <>
      <div className='hidden md:flex'>
        <div className={`fixed top-0 left-0 border-r-[1px] border-default-100 flex flex-col h-screen bg-content1 gap-8 transition-all ${collapsed ? '' : 'opacity-0'}`}>
          <ScrollShadow hideScrollBar className={`w-20 items-center flex flex-col gap-8 px-3 pt-8 overflow-y-auto flex-1`}>
            {items.map((item) => {
              const children = item.align !== 'bottom' ? renderItems(item, { layout: 'collapsed', activeNav }) : null;
              return children ? (
                <div key={item.key} className={getAlignmentClasses(item.align)}>
                  {children}
                </div>
              ) : null;
            })}
          </ScrollShadow>
          <div className={`w-20 items-center flex flex-col gap-8 px-3 pb-8`}>
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
        <div className={`${layoutStyles} fixed top-0 left-0 border-r-[1px] border-default-100 flex flex-col h-screen bg-content1 gap-8 overflow-hidden transition-all`}>
          <ScrollShadow hideScrollBar className={`w-72 flex flex-col gap-8 px-3 pt-8 overflow-y-auto flex-1`}>
            {items.map((item) => {
              const children = item.align !== 'bottom' ? renderItems(item, { layout: 'expanded', activeNav }) : null;
              return children ? (
                <div key={item.key} className={getAlignmentClasses(item.align)}>
                  {children}
                </div>
              ) : null;
            })}
          </ScrollShadow>
          <div className={`w-72 flex flex-col gap-8 px-3 pb-8`}>
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
        <div className={`${layoutStyles} transition-all h-screen`} />
        <div className={`fixed top-6 transition-all ${collapseButtonStyles}`}>
          <Button size="sm" isIconOnly radius="full" className="h-6 w-6 min-w-6 bg-default-100" onClick={() => setCollapsed(!collapsed)}>
            <IconChevronLeft size={14} />
          </Button>
        </div>
      </div>

      <nav
        className="fixed md:hidden z-50 bottom-0 bg-background flex w-full gap-2 px-2 py-1 border-t-[1px] border-default-100 [&>*:nth-child(n+5):not(:last-child)]:hidden"
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
              className="h-12 flex-1"
              variant="light"
              isIconOnly
              color={activeNav?.link === navItem.link ? 'primary' : 'default'}
              onClick={() => setMobileMenuOpen(false)}
              href={navItem.link}
            >
              <Badge content={navItem.badgeContent} color="primary" size="sm" isInvisible={typeof navItem.badgeContent !== 'string'}>
                {navItem.icon}
              </Badge>
            </Button>
          </Tooltip>
        ))}
        <Button radius="md" className="flex-col gap-0 h-12 flex-1" variant={mobileMenuOpen ? 'flat' : 'light'} isIconOnly onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <IconDots size={24} stroke={1.5} />
        </Button>
      </nav>

      <Modal isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} classNames={{ wrapper: 'pb-14 z-40', backdrop: 'z-40', base: 'max-w-full m-0 sm:m-0 h-full' }} isDismissable={false} radius="none">
        <ModalContent>
          {() => (
            <>
              <ModalHeader />
              <ModalBody as={ScrollShadow} hideScrollBar className="flex flex-col gap-8">
                {items.map((item) => {
                  const children = item.align !== 'bottom' ? renderItems(item, { layout: 'expanded', activeNav }) : null;
                  return children ? (
                    <div key={item.key} className={getAlignmentClasses(item.align)}>
                      {children}
                    </div>
                  ) : null;
                })}
              </ModalBody>
              <ModalFooter className='flex flex-col gap-8'>
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
