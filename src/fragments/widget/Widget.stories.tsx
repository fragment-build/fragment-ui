import type { Meta, StoryObj } from '@storybook/react-vite';
import { Widget } from './Widget';
import { ListBox, Select } from '@heroui/react';
import ApexChart from 'react-apexcharts';

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
        <Select defaultValue="daily" isRequired><Select.Trigger>
          <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {[{ label: 'Daily', value: 'daily' }, { label: 'Weekly', value: 'weekly' }, { label: 'Monthly', value: 'monthly' }].map((timespan) => (
                <ListBox.Item id={timespan.value} textValue={timespan.value}>
                  {timespan.label}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      ),
    },
    children: (
      <ApexChart
        type="line"
        options={{
          chart: {
            type: 'line',
          }
        }}
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
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: (
      <>
        <h1 className="text-center text-5xl mt-3">30%</h1>
        <h3 className="text-center text-xl mt-2 mb-3">Project Cost Saving</h3>
      </>
    ),
  },
};
