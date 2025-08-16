import type { Meta, StoryObj } from '@storybook/react-vite';
import { Widget } from './Widget';
import { Chart, Select, SelectItem } from '../../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Widget> = {
  title: 'fragments/Widget',
  component: Widget,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Analytics',
    header: {
      endContent: (
        <Select defaultSelectedKeys={['daily']} isRequired classNames={{ base: 'min-w-36' }}>
          {[{ label: 'Daily', value: 'daily' }, { label: 'Weekly', value: 'weekly' }, { label: 'Monthly', value: 'monthly' }].map((timespan) => (
            <SelectItem key={timespan.value} value={timespan.value}>
              {timespan.label}
            </SelectItem>
          ))}
        </Select>
      ),
    },
    children: (
      <Chart
        type="line"
        series={[
          {
            name: 'Clicks',
            data: [6500, 6418, 6456, 6526, 6356, 6456],
            color: '#1A56DB',
          },
          {
            name: 'CPC',
            data: [6456, 6356, 6526, 6332, 6418, 6500],
            color: '#7E3AF2',
          },
        ]}
        height="250px"
      />
    ),
  },
};

export const Flat: Story = {
  args: {
    children: (
      <>
        <h1 className="text-center text-5xl mt-3">30%</h1>
        <h3 className="text-center text-xl mt-2 mb-3">Project Cost Saving</h3>
      </>
    ),
    color: 'primary',
    variant: 'flat',
  },
};

export const BorderedColored: Story = {
  args: {
    children: (
      <>
        <h1 className="text-center text-5xl mt-3">30%</h1>
        <h3 className="text-center text-xl mt-2 mb-3">Project Cost Saving</h3>
      </>
    ),
    color: 'primary',
    variant: 'bordered',
  },
};
