import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorInput } from './ColorInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ColorInput> = {
  title: 'components/ColorInput',
  component: ColorInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    onValueChange: console.log,
  },
};

export const PlaceholderValue: Story = {
  args: {
    onValueChange: console.log,
    placeholderValue: '#7d7d7d',
  },
};
