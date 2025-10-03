import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartCircle } from './ChartCircle';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ChartCircle> = {
  title: 'components/ChartCircle',
  component: ChartCircle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    height: 500,
    color: "primary",
    categories: ["Chrome", "Safari", "Firefox", "Edge"],
    chartData: [
      {
        name: "Chrome",
        value: 350
      },
      {
        name: "Safari",
        value: 280
      },
      {
        name: "Firefox",
        value: 220
      },
      {
        name: "Edge",
        value: 150
      }
    ],
  },
};
