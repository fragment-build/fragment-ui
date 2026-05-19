'use client';

import type { ListBoxProps } from '@heroui/react';
import { Accordion, Badge, Button, Chip, Header, ListBox, Tooltip } from '@heroui/react';
import { IconChevronRight } from '@tabler/icons-react';
import { useFragmentUI } from '../../context';

export type SidebarChildNavigationItem = Omit<SidebarNavigationItem, 'items'>;

export interface SidebarNavigationItem {
  label: string;
  link: string;
  onClick?: React.MouseEventHandler;
  icon?: React.ReactNode;
  endContent?: React.ReactNode;
  badgeContent?: React.ReactNode;
  items?: SidebarChildNavigationItem[];
}

export interface SidebarNavigationProps {
  navigation: SidebarNavigationItem[];
  label?: string;
  layout?: 'expanded' | 'collapsed';
  activeLink?: string;
  listboxProps?: Omit<ListBoxProps<object>, 'children'>;
}

const ButtonLink: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { href: string }> = ({ href, ...props }) => {
  const { linkComponent: LinkComponent } = useFragmentUI();
  return <LinkComponent href={href}><button {...props} /></LinkComponent>;
};

const NavItemBadge = ({ badgeContent, endContent }: Pick<SidebarNavigationItem, 'badgeContent' | 'endContent'>) => {
  const content = typeof badgeContent === 'string'
    ? <Chip size="sm" color="accent" variant="primary">{badgeContent}</Chip>
    : endContent ?? null;
  return content ? <span className="fragment-sidebar__nav-badge">{content}</span> : null;
};

const NavSubList: React.FC<{
  items: SidebarChildNavigationItem[];
  activeLink?: string;
  ariaLabel: string;
}> = ({ items, activeLink, ariaLabel }) => (
  <div className="fragment-sidebar__tree-list">
    <ListBox aria-label={ariaLabel}>
      {items.map((subItem) => (
        <ListBox.Item
          key={subItem.link}
          href={subItem.link}
          className={`fragment-sidebar__sub-item${activeLink === subItem.link ? ' fragment-sidebar__nav-item--active' : ''}`}
        >
          {subItem.icon}
          {subItem.label}
          <NavItemBadge badgeContent={subItem.badgeContent} endContent={subItem.endContent} />
        </ListBox.Item>
      ))}
    </ListBox>
  </div>
);

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  navigation,
  label,
  layout = 'expanded',
  activeLink,
  listboxProps,
}) => {
  if (layout === 'collapsed') {
    return (
      <nav className="fragment-sidebar__collapsed-nav">
        {navigation.map((navItem) => {
          const hasChildren = !!navItem.items?.length;
          const isActive = hasChildren
            ? navItem.items!.some((child) => activeLink === child.link)
            : activeLink === navItem.link;

          return (
            <Tooltip key={navItem.label} delay={0} closeDelay={hasChildren ? 300 : 0}>
              <Tooltip.Trigger>
                <Badge.Anchor>
                  <Button
                    variant={isActive ? 'primary' : 'ghost'}
                    size="lg"
                    render={(props) => <ButtonLink {...props} href={navItem.link} />}
                    isIconOnly
                  >
                    {navItem.icon}
                  </Button>
                  {typeof navItem.badgeContent === 'string' && navItem.badgeContent ? (
                    <Badge variant="primary" color="accent" size="sm">{navItem.badgeContent}</Badge>
                  ) : null}
                </Badge.Anchor>
              </Tooltip.Trigger>
              <Tooltip.Content
                placement={hasChildren ? 'bottom start' : 'right'}
              >
                {hasChildren ? (
                  <NavSubList items={navItem.items!} activeLink={activeLink} ariaLabel={navItem.label} />
                ) : navItem.label}
              </Tooltip.Content>
            </Tooltip>
          );
        })}
      </nav>
    );
  }

  type Batch =
    | { type: 'list'; items: SidebarNavigationItem[] }
    | { type: 'accordion'; item: SidebarNavigationItem };

  const batches: Batch[] = [];
  for (const navItem of navigation) {
    if (navItem.items?.length) {
      batches.push({ type: 'accordion', item: navItem });
    } else {
      const last = batches[batches.length - 1];
      if (last?.type === 'list') {
        last.items.push(navItem);
      } else {
        batches.push({ type: 'list', items: [navItem] });
      }
    }
  }

  return (
    <div className="fragment-sidebar__nav">
      {label && <Header>{label}</Header>}
      {batches.map((batch, i) => {
        if (batch.type === 'list') {
          return (
            <ListBox key={i} aria-label="Navigation" {...listboxProps}>
              {batch.items.map((navItem) => (
                <ListBox.Item
                  key={navItem.link}
                  href={navItem.link}
                  className={activeLink === navItem.link ? 'fragment-sidebar__nav-item--active' : ''}
                >
                  {navItem.icon}
                  {navItem.label}
                  <NavItemBadge badgeContent={navItem.badgeContent} endContent={navItem.endContent} />
                </ListBox.Item>
              ))}
            </ListBox>
          );
        }

        const navItem = batch.item;
        const hasActiveChild = navItem.items!.some((child) => activeLink === child.link);
        const isParentActive = activeLink === navItem.link;

        return (
          <Accordion key={navItem.label} className="fragment-sidebar__accordion" hideSeparator defaultExpandedKeys={isParentActive || hasActiveChild ? [navItem.label] : []}>
            <Accordion.Item id={navItem.label}>
              <Accordion.Heading>
                <Accordion.Trigger className={`fragment-sidebar__accordion-trigger${isParentActive ? ' fragment-sidebar__accordion-trigger--active' : ''}`}>
                  {navItem.icon}
                  <span className="fragment-sidebar__accordion-label">{navItem.label}</span>
                  <Accordion.Indicator>
                    <IconChevronRight className="fragment-sidebar__accordion-indicator" />
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <NavSubList items={navItem.items!} activeLink={activeLink} ariaLabel={`${navItem.label} sub-navigation`} />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </div>
  );
};
