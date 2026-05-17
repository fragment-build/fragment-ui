import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconBell, IconBox, IconBoxMultiple, IconHome, IconMessageCircle } from '@tabler/icons-react';
import { SidebarNavigation } from './SidebarNavigation';

const meta: Meta<typeof SidebarNavigation> = {
  title: 'fragments/SidebarNavigation',
  component: SidebarNavigation,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

const flatNavigation = [
  { label: 'Home', link: '/', icon: <IconHome stroke={1.5} /> },
  { label: 'Chat', link: '/chat', icon: <IconMessageCircle stroke={1.5} /> },
  { label: 'Notifications', link: '/notifications', icon: <IconBell stroke={1.5} />, badgeContent: '9+' },
];

const nestedNavigation = [
  { label: 'Home', link: '/', icon: <IconHome stroke={1.5} /> },
  {
    label: 'Projects',
    link: '/projects',
    icon: <IconBoxMultiple stroke={1.5} />,
    items: [
      { label: 'Project 1', link: '/projects/1', icon: <IconBox stroke={1.5} /> },
      { label: 'Project 2', link: '/projects/2', icon: <IconBox stroke={1.5} /> },
      { label: 'Project 3', link: '/projects/3', icon: <IconBox stroke={1.5} /> },
    ],
  },
  { label: 'Notifications', link: '/notifications', icon: <IconBell stroke={1.5} />, badgeContent: '9+' },
];

export const Expanded: Story = {
  args: {
    label: 'Overview',
    navigation: flatNavigation,
    layout: 'expanded',
  },
};

export const ExpandedWithActive: Story = {
  args: {
    label: 'Overview',
    navigation: flatNavigation,
    layout: 'expanded',
    activeLink: '/chat',
  },
};

export const ExpandedWithNested: Story = {
  args: {
    label: 'Overview',
    navigation: nestedNavigation,
    layout: 'expanded',
  },
};

export const ExpandedNestedActive: Story = {
  args: {
    label: 'Overview',
    navigation: nestedNavigation,
    layout: 'expanded',
    activeLink: '/projects/2',
  },
};

export const Collapsed: Story = {
  args: {
    navigation: flatNavigation,
    layout: 'collapsed',
  },
};

export const CollapsedWithActive: Story = {
  args: {
    navigation: flatNavigation,
    layout: 'collapsed',
    activeLink: '/notifications',
  },
};
