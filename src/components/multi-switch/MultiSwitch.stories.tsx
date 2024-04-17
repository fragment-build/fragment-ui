import type { Meta, StoryObj } from "@storybook/react";
import { MultiSwitch } from "./MultiSwitch";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MultiSwitch> = {
  title: "components/MultiSwitch",
  component: MultiSwitch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Small: Story = {
  args: {
    onValueChange: console.log,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    onValueChange: console.log,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    onValueChange: console.log,
    size: 'lg',
  },
};
