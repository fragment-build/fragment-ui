import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageHeader } from './PageHeader';
import { Button } from '@heroui/react';
import { IconPlus, IconTrash } from '@tabler/icons-react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PageHeader> = {
  title: 'fragments/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    children: <Button fullWidth variant="primary"><IconPlus />Create</Button>,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    children: (
      <>
        <Button fullWidth variant="primary"><IconPlus />Create</Button>
        <Button fullWidth variant="danger"><IconTrash />Delete</Button>
      </>
    ),
  },
};
