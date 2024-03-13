'use client';

import React, { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarProps,
  Button,
  Dropdown,
  DropdownItem,
  DropdownItemProps,
  DropdownMenu,
  DropdownProps,
  DropdownTrigger,
  Listbox,
  ListboxItem,
  ListboxProps,
  ListboxSection,
  Tooltip,
  User,
} from '@nextui-org/react';

import { useSmaller } from '../../hooks/breakpoints';

/**
 * Primary UI component for Dashboard Sidebars
 */

interface SidebarNavigationItem {
  label: string;
  link: string;
  onClick?: React.MouseEventHandler;
  icon?: React.ReactNode;
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
  showCollapsed?: boolean;
}

interface SidebarProps {
  items: Array<SidebarItemNavigation | SidebarItemUser | SidebarItemCustom>;
  layout?: 'collapsed' | 'expanded';
  autoLayout?: boolean;
}

const getAlignmentClasses = (align: SidebarItemNavigation['align']) => {
  switch (align) {
    case 'center':
      return 'my-auto';
    case 'bottom':
      return 'mt-auto sticky bottom-0 bg-content1';
    default:
      return '';
  }
};

const renderItems = (item: SidebarProps['items'][number], option: Omit<SidebarProps, 'items'>) => {
  switch (item.type) {
    case 'navigation':
      return option.layout === 'expanded' ? (
        <Listbox
          variant="flat"
          aria-label="Listbox menu with sections"
          itemClasses={{
            base: 'h-12 gap-6',
          }}
          {...item.listboxProps}
        >
          <ListboxSection title={item.label}>
            {item.navigation.map((navItem) => (
              <ListboxItem
                key={navItem.label}
                startContent={navItem.icon}
                href={navItem.link}
              >
                {navItem.label}
              </ListboxItem>
            ))}
          </ListboxSection>
        </Listbox>
      ) : (
        <nav className="flex flex-col">
          {item.navigation.map((navItem) => (
            <Tooltip
              key={navItem.label}
              placement="right"
              content={navItem.label}
            >
              <Button
                variant="light"
                size="lg"
                as="a"
                startContent={navItem.icon}
                href={navItem.link}
                isIconOnly
              />
            </Tooltip>
          ))}
        </nav>
      );
    case 'user':
      return (
        <Dropdown
          placement="bottom-start"
          classNames={{ trigger: 'justify-start px-2' }}
          isDisabled
          {...item.dropdown}
        >
          <DropdownTrigger>
            {option.layout === 'expanded' ? (
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
      return option.layout === 'expanded' || item.showCollapsed ? <div className="px-2">{item.render}</div> : null;
    default:
      return null;
  }
};

export const Sidebar: React.FC<SidebarProps> = ({ items, layout = 'expanded', autoLayout }) => {
  const [renderedLayout, setRenderedLayout] = useState(autoLayout ? undefined : layout);
  const isMobile = useSmaller('lg');

  useEffect(() => {
    if (!autoLayout) return;
    if (isMobile) {
      setRenderedLayout('collapsed');
    } else {
      setRenderedLayout('expanded');
    }
  }, [autoLayout, isMobile]);

  return (
    <div className="w-20 lg:w-72">
      <div
        // eslint-disable-next-line max-len
        className="fixed flex flex-col h-screen w-20 items-center lg:w-72 lg:items-start bg-content1 px-3 py-8 gap-8 overflow-y-auto"
      >
        {items.map((item) => {
          const children = renderedLayout ? renderItems(item, { layout: renderedLayout, autoLayout }) : null;
          return children ? (
            <div key={item.key} className={getAlignmentClasses(item.align)}>
              {children}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};
