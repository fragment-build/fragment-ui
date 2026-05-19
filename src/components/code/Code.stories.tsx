import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'npm install @fragment-build/ui',
  },
};

export const Inline: Story = {
  render: () => (
    <p>
      Install the package by running <Code>npm install @fragment-build/ui</Code> in your terminal.
    </p>
  ),
};
