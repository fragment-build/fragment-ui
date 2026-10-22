import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'components/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const Interval = ({ size }: { size?: 'sm' | 'md' }) => {
  const [value, setValue] = useState<'12h' | '24h' | '7d' | '30d'>('30d');
  return (
    <SegmentedControl
      aria-label="Interval"
      onChange={setValue}
      options={[
        { id: '12h', label: '12h' },
        { id: '24h', label: '24h' },
        { id: '7d', label: '7 days' },
        { id: '30d', label: '30 days' },
      ]}
      size={size}
      value={value}
    />
  );
};

export const Default: Story = { render: () => <Interval /> };

export const Small: Story = { render: () => <Interval size="sm" /> };
