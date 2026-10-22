import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconUsers } from '@tabler/icons-react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'fragments/StatCard',
  component: StatCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Visits',
    value: '12,840',
    icon: <IconUsers stroke={1.75} />,
    hint: 'Shopping trips with the widget on the page',
    help: 'A visit is a run of activity with no 30-minute gap.',
  },
};

export const WithDelta: Story = {
  args: {
    label: 'Conversion rate',
    value: '2.7%',
    delta: { value: '+0.4 pt', direction: 'up', label: 'vs. previous 30 days' },
  },
};

export const DownIsGood: Story = {
  args: {
    label: 'Bounce rate',
    value: '31%',
    delta: { value: '−6%', direction: 'down', sentiment: 'positive', label: 'vs. previous 30 days' },
  },
};

export const Loading: Story = {
  args: { label: 'Visits', value: '—', isLoading: true },
};
