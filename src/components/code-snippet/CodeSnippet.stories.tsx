import type { Meta, StoryObj } from '@storybook/react-vite';
import { CodeSnippet } from './CodeSnippet';

const meta: Meta<typeof CodeSnippet> = {
  title: 'Components/CodeSnippet',
  component: CodeSnippet,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: 'npm install @fragment-build/ui',
  },
};

export const NoPrefix: Story = {
  args: {
    code: 'npm install @fragment-build/ui',
    prefix: '',
  },
};

export const CustomPrefix: Story = {
  args: {
    code: 'pnpm add @fragment-build/ui',
    prefix: '❯',
  },
};

export const MultiLine: Story = {
  args: {
    code: 'npm install @fragment-build/ui\nnpm install @heroui/react\nnpm install @heroui/styles',
    prefix: '$',
  },
};
