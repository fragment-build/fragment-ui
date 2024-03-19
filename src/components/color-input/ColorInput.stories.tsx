import type { Meta, StoryObj } from "@storybook/react";
import { ColorInput } from "./ColorInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "components/ColorInput",
  component: ColorInput,
  tags: ["autodocs"],
} satisfies Meta<typeof ColorInput>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    onValueChange: console.log,
  },
};
