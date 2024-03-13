import type { Meta, StoryObj } from '@storybook/react';
import { Card, Input } from '@nextui-org/react';
import {
  IconBox, IconBoxMultiple, IconHome, IconMessageCircle,
} from '@tabler/icons-react';
import { Sidebar } from './Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    items: [
      {
        type: 'user',
        key: 'user',
        name: 'Tony Reichert',
        description: 'ACME Inc.',
        avatar: {
          src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        },
        dropdownItems: [
          {
            label: 'My Profile',
          },
          {
            label: 'Settings',
          },
          {
            label: 'Organization Settings',
            showDivider: true,
          },
          {
            label: 'Logout',
            color: 'danger',
          },
        ],
      },
      {
        type: 'custom',
        key: 'search',
        render: <Input label="Search..." />,
      },
      {
        type: 'navigation',
        key: 'navigation-overview',
        label: 'Overview',
        navigation: [
          {
            label: 'Home',
            link: '/',
            icon: <IconHome stroke={1.5} />,
          },
          {
            label: 'My Projects',
            link: '/projects',
            icon: <IconBoxMultiple stroke={1.5} />,
          },
          {
            label: 'Chat',
            link: '/chat',
            icon: <IconMessageCircle stroke={1.5} />,
          },
        ],
      },
      {
        type: 'navigation',
        key: 'navigation-projects',
        label: 'Projects',
        navigation: [
          {
            label: 'Project 1',
            link: '/projects/1',
            icon: <IconBox stroke={1.5} />,
          },
          {
            label: 'Project 2',
            link: '/projects/2',
            icon: <IconBox stroke={1.5} />,
          },
          {
            label: 'Project 3',
            link: '/projects/3',
            icon: <IconBox stroke={1.5} />,
          },
        ],
      },
      {
        type: 'custom',
        key: 'bottom-banner',
        render: (
          <Card
            radius="lg"
            className="border-none"
          >
            <img
              alt="Woman listing to music"
              className="object-cover w-full"
              height={200}
              src="https://nextui.org/images/hero-card.jpeg"
              width={200}
            />
          </Card>
        ),
        align: 'bottom',
      },
    ],
  },
};

export const Collapsed: Story = {
  args: {
    ...Primary.args,
    layout: 'collapsed',
  },
};

export const Auto: Story = {
  args: {
    ...Primary.args,
    autoLayout: true,
  },
};