import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  IconBox,
  IconBoxMultiple,
  IconHome,
  IconMessageCircle,
  IconPlus,
} from '@tabler/icons-react';
import { Shell } from './Shell';
import {
  Input,
  Button,
  Card,
  Table,
  Tabs,
  TextArea,
  Breadcrumbs,
  Switch,
} from '@heroui/react';
import ApexChart from 'react-apexcharts';

import { Grid } from '../../components/grid/Grid';
import { Form } from '../form/Form';
import { FormSection } from '../form/FormSection';
import { Widget } from '../widget/Widget';
import { PageHeader } from '../page/PageHeader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Shell> = {
  title: 'fragments/Shell',
  component: Shell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    sidebar: {
      items: [
        {
          type: 'user',
          key: 'user',
          name: 'Tony Reichert',
          description: 'ACME Inc.',
          avatar: {
            src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
          },
          dropdownItems: [
            {
              key: 'profile',
              label: 'My Profile',
            },
            {
              key: 'settings',
              label: 'Settings',
            },
            {
              key: 'organization-settings',
              label: 'Organization Settings',
            },
            {
              key: 'logout',
              label: 'Logout',
              variant: 'danger',
            },
          ],
        },
        {
          type: 'custom',
          key: 'search',
          render: <Input placeholder="Search..." fullWidth />,
          showExpandedOnly: true,
        },
        {
          type: 'navigation',
          key: 'navigation-overview',
          label: 'Overview',
          navigation: [
            {
              label: 'Home',
              link: '/',
              icon: <IconHome stroke={1.5} />,
            },
            {
              label: 'My Projects',
              link: '/projects',
              icon: <IconBoxMultiple stroke={1.5} />,
            },
            {
              label: 'Chat',
              link: '/chat',
              icon: <IconMessageCircle stroke={1.5} />,
            },
          ],
        },
        {
          type: 'navigation',
          key: 'navigation-projects',
          label: 'Projects',
          navigation: [
            {
              label: 'Project 1',
              link: '/projects/1',
              icon: <IconBox stroke={1.5} />,
            },
            {
              label: 'Project 2',
              link: '/projects/2',
              icon: <IconBox stroke={1.5} />,
            },
            {
              label: 'Project 3',
              link: '/projects/3',
              icon: <IconBox stroke={1.5} />,
            },
          ],
        },
        {
          type: 'custom',
          key: 'bottom-banner',
          render: (
            <Card className="border-none">
              <img
                alt="Woman listing to music"
                className="object-cover w-full h-28"
                src="https://www.heroui.com/images/hero-card.jpeg"
              />
            </Card>
          ),
          align: 'bottom',
          showExpandedOnly: true,
        },
      ],
    },
    children: 'CONTENT',
  },
};

export const Collapsed: Story = {
  args: {
    ...Primary.args,
    sidebar: Primary.args?.sidebar ? {
      ...Primary.args.sidebar,
      layout: 'collapsed',
    } : undefined,
  },
};

export const Expanded: Story = {
  args: {
    ...Primary.args,
    sidebar: Primary.args?.sidebar ? {
      ...Primary.args.sidebar,
      layout: 'expanded',
    } : undefined,
  },
};

export const WithTable: Story = {
  args: {
    ...Primary.args,
    children: (
      <>
        <PageHeader title="Customers" description="Manage your customers and your profile.">
          <Button fullWidth variant="primary"><IconPlus stroke={1.5} />Create</Button>
        </PageHeader>
        <Tabs variant="secondary">
          <Tabs.ListContainer>
            <Tabs.List>
              <Tabs.Tab id="table">
                Table
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="settings">
                Settings
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="videos">
                Videos
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel id="table">
            <Table variant="secondary">
              <Table.ScrollContainer>
                <Table.Content
                  aria-label="Example static collection table"
                >
                  <Table.Header>
                    <Table.Column>NAME</Table.Column>
                    <Table.Column>ROLE</Table.Column>
                    <Table.Column>STATUS</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row id={1}>
                      <Table.Cell>Tony Reichert</Table.Cell>
                      <Table.Cell>CEO</Table.Cell>
                      <Table.Cell>Active</Table.Cell>
                    </Table.Row>
                    <Table.Row id={2}>
                      <Table.Cell>Zoey Lang</Table.Cell>
                      <Table.Cell>Technical Lead</Table.Cell>
                      <Table.Cell>Paused</Table.Cell>
                    </Table.Row>
                    <Table.Row id={3}>
                      <Table.Cell>Jane Fisher</Table.Cell>
                      <Table.Cell>Senior Developer</Table.Cell>
                      <Table.Cell>Active</Table.Cell>
                    </Table.Row>
                    <Table.Row id={4}>
                      <Table.Cell>William Howard</Table.Cell>
                      <Table.Cell>Community Manager</Table.Cell>
                      <Table.Cell>Vacation</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </Tabs.Panel>
          <Tabs.Panel id="settings">
            <Form>
              <FormSection title="Name" description="Description" direction="horizontal">
                <Input placeholder="First name" fullWidth />
                <Input placeholder="Last name" fullWidth />
              </FormSection>
              <FormSection title="Biography" description="Description">
                <TextArea placeholder="Biography" rows={6} />
              </FormSection>
              <FormSection title="Notifications" description="Turn on/off email notifications." direction="horizontal">
                <Switch />
              </FormSection>
              <FormSection title="Title" description="Description" direction="horizontal">
                <Input placeholder="First name" fullWidth />
                <Input placeholder="Last name" fullWidth />
              </FormSection>
              <FormSection title="Full Width" description="Description" direction="horizontal" fullWidth>
                <Input placeholder="First name" fullWidth />
                <Input placeholder="Last name" fullWidth />
              </FormSection>
            </Form>
          </Tabs.Panel>
          <Tabs.Panel id="videos">
            <Card>
              <Card.Content>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Card.Content>
            </Card>
          </Tabs.Panel>
        </Tabs>
      </>
    ),
  },
};

export const WithGrid: Story = {
  args: {
    ...Primary.args,
    sidebar: Primary.args?.sidebar ? {
      ...Primary.args.sidebar,
    } : undefined,
    children: (
      <>
        <Breadcrumbs>
          <Breadcrumbs.Item>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>Customers</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeader title="Dashboard" />
        <Grid size="lg">
          <Widget title="Analytics" size="md" variant="secondary">
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
              height="350px"
            />
          </Widget>
          <Widget title="Traffic" variant="secondary">
            <ApexChart
              type="pie"
              options={{
                chart: {
                  type: 'pie',
                },
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
              }}
              series={[52.8, 26.8, 20.4]}
              height="350px"
            />
          </Widget>
          <Widget title="Origins" size="md" variant="secondary">
            <ApexChart
              type="bar"
              options={{
                chart: {
                  type: 'bar',
                },
              }}
              series={[
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
              ]}
              height="350px"
            />
          </Widget>
          <Widget title="Cost" variant="secondary">
            <ApexChart
              type="bar"
              options={{
                chart: {
                  type: 'bar',
                },
                tooltip: {
                  y: {
                    formatter: function (value) {
                      return '$' + value
                    }
                  }
                },
              }}
              series={[
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
              ]}
            />
          </Widget>
          <Widget title="New Users" variant="secondary">
            <ApexChart
              type="area"
              options={{
                chart: {
                  type: 'area',
                },
                xaxis: {
                  categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
                }
              }}
              series={[
                {
                  name: 'New users',
                  data: [6500, 6418, 6456, 6526, 6356, 6456],
                  color: '#1A56DB',
                },
              ]}
            />
          </Widget>
          <Widget title="Website traffic" variant="secondary">
            <ApexChart
              type="donut"
              options={{
                chart: {
                  type: 'donut',
                },
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
                            return sum + 'k'
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
              }}
              series={[35.1, 23.5, 2.4, 5.4]}
              height="350px"
            />
          </Widget>
          <Widget title="New Users" variant="secondary">
            <ApexChart
              type="donut"
              options={{
                chart: {
                  type: 'donut',
                },
                labels: ['Done', 'In progress', 'To do'],
                yaxis: {
                  labels: {
                    formatter: function (value) {
                      return value + '%';
                    }
                  }
                }
              }}
              series={[90, 85, 70]}
              height="350px"
            />
          </Widget>
        </Grid>
      </>
    ),
  },
};
