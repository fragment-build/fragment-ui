import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartBar } from './ChartBar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ChartBar> = {
  title: 'components/charts/ChartBar',
  component: ChartBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    height: 500,
    color: "primary",
    categories: [
      "Low",
      "Medium",
      "High"
    ],
    dataKey: "weekday",
    data: [
      {
        weekday: "Mon",
        Low: 120,
        Medium: 280,
        High: 180
      },
      {
        weekday: "Tue",
        Low: 150,
        Medium: 320,
        High: 220
      },
      {
        weekday: "Wed",
        Low: 180,
        Medium: 250,
        High: 150
      },
      {
        weekday: "Thu",
        Low: 140,
        Medium: 290,
        High: 180
      },
      {
        weekday: "Fri",
        Low: 160,
        Medium: 270,
        High: 190
      },
      {
        weekday: "Sat",
        Low: 130,
        Medium: 240,
        High: 210
      },
      {
        weekday: "Sun",
        Low: 170,
        Medium: 300,
        High: 240
      }
    ],
  },
};
