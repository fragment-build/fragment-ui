import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from "./Chart";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Chart> = {
  title: "component/Chart",
  component: Chart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Line: Story = {
  args: {
    type: 'line',
    height: '500px',
    series: [
      {
        name: "Clicks",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB",
      },
      {
        name: "CPC",
        data: [6456, 6356, 6526, 6332, 6418, 6500],
        color: "#7E3AF2",
      },
    ],
  },
};
