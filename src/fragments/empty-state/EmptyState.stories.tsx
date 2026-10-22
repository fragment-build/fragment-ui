import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@heroui/react';
import { IconPackage } from '@tabler/icons-react';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'fragments/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <IconPackage stroke={1.5} />,
    title: 'No products yet',
    description: 'Your products appear here as soon as a source has been synced.',
    children: <Button size="sm" variant="tertiary">Manage sources</Button>,
  },
};

export const Bordered: Story = {
  args: { ...Default.args, bordered: true },
};

export const Small: Story = {
  args: { icon: <IconPackage stroke={1.5} />, title: 'No data for this period', size: 'sm' },
};
