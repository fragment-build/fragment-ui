import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
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
        name: 'Tony Reichert',
        avatar: {
          src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        },
      },
      {
        type: 'navigation',
        label: 'Navigation',
        orientation: 'vertical',
        align: 'top',
        navigation: [
          {
            label: 'Test1',
            link: '/test',
            navigation: [],
          },
          {
            label: 'Test2',
            link: '/test',
            navigation: [],
          },
          {
            label: 'Test3',
            link: '/test',
            navigation: [],
          },
        ],
      },
      {
        type: 'custom',
        render: <div>Test</div>,
      },
    ]
  },
};
