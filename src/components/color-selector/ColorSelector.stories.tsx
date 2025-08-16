import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorSelector } from './ColorSelector';
import { IconCheck } from '@tabler/icons-react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ColorSelector> = {
  title: 'components/ColorSelector',
  component: ColorSelector,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    values: ['red', 'green', 'blue'],
    onValueChange: console.log,
    color: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    values: ['red', 'green', 'blue'],
    onValueChange: console.log,
    color: 'primary',
    icon: <IconCheck size={24} stroke={1.5} />
  },
};

export const Small: Story = {
  args: {
    values: ['red', 'green', 'blue'],
    onValueChange: console.log,
    color: 'primary',
    size: 'sm',
  },
};
