import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  IconBell,
  IconBox,
  IconBoxMultiple,
  IconCirclePlus,
  IconHome,
  IconMessageCircle,
} from '@tabler/icons-react';
import { Sidebar } from './Sidebar';
import { Input, Button, Card } from '@heroui/react';
import { ThemeSwitch } from '../../components/theme-switch/ThemeSwitch';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Sidebar> = {
  title: 'fragments/Sidebar',
  component: Sidebar,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    currentPath: '/projects/1',
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
            key: 'profile',
            label: 'My Profile',
          },
          {
            key: 'settings',
            label: 'Settings',
          },
          {
            key: 'organization-settings',
            label: 'Organization Settings',
          },
          {
            key: 'logout',
            label: 'Logout',
            variant: 'danger',
          },
        ],
      },
      {
        type: 'custom',
        key: 'search',
        render: <Input placeholder="Search..." fullWidth />,
        showExpandedOnly: true,
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
            endContent: (
              <Button size="sm" variant="tertiary" isIconOnly>
                <IconCirclePlus stroke={1.5} />
              </Button>
            ),
            items: [
              { label: 'Project 1', link: '/projects/1' },
              { label: 'Project 2', link: '/projects/2' },
              { label: 'Project 3', link: '/projects/3' },
            ],
          },
          {
            label: 'Chat',
            link: '/chat',
            icon: <IconMessageCircle stroke={1.5} />,
            endContent: <Button size="sm" variant="tertiary" isIconOnly>
              <IconCirclePlus stroke={1.5} />
            </Button>,
          },
          {
            label: 'Notifications',
            link: '/notifications',
            icon: <IconBell stroke={1.5} />,
            badgeContent: '9+',
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
        key: 'theme-switch',
        render: <ThemeSwitch />,
        align: 'bottom'
      },
      {
        type: 'custom',
        key: 'bottom-banner',
        render: (
          <Card className="border-none p-0">
            <img
              className="object-cover w-full h-34"
              src="https://heroui.pro/_next/image?url=%2Fimages%2Fomelette-with-cherry-tomatoes.png&w=750&q=75&dpl=dpl_9VDXjVuaANQtB2iRvgwLBgZB2ZCm"
            />
          </Card>
        ),
        align: 'bottom',
        showExpandedOnly: true,
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

export const Expanded: Story = {
  args: {
    ...Primary.args,
    layout: 'expanded',
  },
};
