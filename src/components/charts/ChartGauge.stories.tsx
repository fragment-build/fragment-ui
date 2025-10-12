import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartGauge } from './ChartGauge';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ChartGauge> = {
  title: 'components/charts/ChartGauge',
  component: ChartGauge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    height: 500,
    color: "primary",
    total: 1358,
    chartData: [{
      name: "Active Users", value: 780, fill: "hsl(var(--heroui-primary))",
    }],
  },
};
