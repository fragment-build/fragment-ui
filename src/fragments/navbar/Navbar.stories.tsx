import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  IconBell,
  IconBoxMultiple,
  IconCirclePlus,
  IconHome,
  IconMessageCircle,
} from '@tabler/icons-react';
import { Navbar } from './Navbar';
import { Button, ListBox, Select } from '@heroui/react';
import { ThemeSwitch } from '../../components/theme-switch/ThemeSwitch';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Navbar> = {
  title: 'fragments/Navbar',
  component: Navbar,
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
    currentPath: '/projects',
    startContent: <img src="/assets/logo-light.svg" alt="Logo" className='h-7' />,
    user: {
      name: 'Tony Reichert',
      description: 'ACME Inc.',
      avatar: {
        size: 'lg',
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
    endContent: (
      <>
        <Select className="w-[256px]" placeholder="Select one">
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="florida" textValue="Florida">
                Florida
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="delaware" textValue="Delaware">
                Delaware
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="california" textValue="California">
                California
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="texas" textValue="Texas">
                Texas
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="new-york" textValue="New York">
                New York
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="washington" textValue="Washington">
                Washington
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        <ThemeSwitch />
      </>
    ),
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
      },
      {
        label: 'Chat',
        link: '/chat',
        icon: <IconMessageCircle stroke={1.5} />,
        badgeContent: '',
      },
      {
        label: 'Notifications',
        link: '/notifications',
        icon: <IconBell stroke={1.5} />,
        badgeContent: '9+',
      },
    ],
  },
};
