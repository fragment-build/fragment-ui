import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './Chart';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Chart> = {
  title: 'components/Chart',
  component: Chart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Area: Story = {
  args: {
    type: 'area',
    height: '500px',
    options: {
      xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
      }
    },
    series: [
      {
        name: 'New users',
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: '#1A56DB',
      },
    ],
  },
};

export const Line: Story = {
  args: {
    type: 'line',
    height: '500px',
    series: [
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
    ],
  },
};

export const Column: Story = {
  args: {
    type: 'column',
    height: '500px',
    series: [
      {
        name: 'Organic',
        color: '#1A56DB',
        data: [
          { x: 'Mon', y: 231 },
          { x: 'Tue', y: 122 },
          { x: 'Wed', y: 63 },
          { x: 'Thu', y: 421 },
          { x: 'Fri', y: 122 },
          { x: 'Sat', y: 323 },
          { x: 'Sun', y: 111 },
        ],
      },
      {
        name: 'Social media',
        color: '#FDBA8C',
        data: [
          { x: 'Mon', y: 232 },
          { x: 'Tue', y: 113 },
          { x: 'Wed', y: 341 },
          { x: 'Thu', y: 224 },
          { x: 'Fri', y: 522 },
          { x: 'Sat', y: 411 },
          { x: 'Sun', y: 243 },
        ],
      },
    ],
  },
};

export const Bar: Story = {
  args: {
    type: 'bar',
    height: '500px',
    options: {
      tooltip: {
        y: {
          formatter: function (value) {
            return '$' + value
          }
        }
      },
    },
    series: [
      {
        name: 'Income',
        color: '#31C48D',
        data: [1420, 1620, 1820, 1420, 1650, 2120],
      },
      {
        name: 'Expense',
        data: [788, 810, 866, 788, 1100, 1200],
        color: '#F05252',
      }
    ]
  },
};

export const Pie: Story = {
  args: {
    type: 'pie',
    height: '500px',
    options: {
      labels: ['Direct', 'Organic search', 'Referrals'],
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + '%'
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value  + '%'
          },
        },
      }
    },
    series: [52.8, 26.8, 20.4],
  },
};

export const Donut: Story = {
  args: {
    type: 'donut',
    height: '500px',
    options: {
      labels: ['Direct', 'Sponsor', 'Affiliate', 'Email marketing'],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              total: {
                label: 'Unique visitors',
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a: number, b: number) => {
                    return a + b
                  }, 0)
                  return '$' + sum + 'k'
                },
              },
              value: {
                formatter: function (value) {
                  return value + 'k'
                },
              }
            }
          }
        }
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + 'k'
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value  + 'k'
          },
        },
      },
    },
    series: [35.1, 23.5, 2.4, 5.4],
  },
};

export const Radial: Story = {
  args: {
    type: 'radial',
    height: '500px',
    options: {
      labels: ['Done', 'In progress', 'To do'],
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + '%';
          }
        }
      }
    },
    series: [90, 85, 70],
  },
};
