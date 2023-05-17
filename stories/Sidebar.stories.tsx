import { Sidebar } from './Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
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
            label: 'Test',
            link: '/test',
            navigation: [],
          },
          {
            label: 'Test',
            link: '/test',
            navigation: [],
          },
          {
            label: 'Test',
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
