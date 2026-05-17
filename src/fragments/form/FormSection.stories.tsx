import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormSection } from './FormSection';
import { Input, Switch } from '@heroui/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FormSection> = {
  title: 'fragments/FormSection',
  component: FormSection,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    children: (
      <>
        <Input placeholder="Firstname" fullWidth />
        <Input placeholder="Lastname" fullWidth />
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    direction: 'horizontal',
    children: (
      <>
        <Input placeholder="Firstname" fullWidth />
        <Input placeholder="Lastname" fullWidth />
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    direction: 'horizontal',
    fullWidth: true,
    children: (
      <>
        <Input placeholder="Firstname" fullWidth />
        <Input placeholder="Lastname" fullWidth />
      </>
    ),
  },
};

export const WithSectionTitle: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    direction: 'horizontal',
    children: (
      <>
        <Input placeholder="Firstname" fullWidth />
        <Input placeholder="Lastname" fullWidth />
      </>
    ),
  },
};

export const HorizontalSimple: Story = {
  args: {
    title: 'Notifications',
    description: 'Turn on/off email notifications.',
    direction: 'horizontal',
    children: <Switch />,
  },
};
