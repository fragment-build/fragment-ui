import type { Meta, StoryObj } from "@storybook/react";
import {
  IconBox,
  IconBoxMultiple,
  IconHome,
  IconMessageCircle,
  IconPlus,
} from "@tabler/icons-react";
import { Shell } from "./Shell";
import {
  Card,
  CardBody,
  Divider,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tab,
  Tabs,
  BreadcrumbItem,
  Breadcrumbs,
  Textarea,
  Switch,
  Button
} from "../../components/base";
import { Form } from "../form/Form";
import { FormSection } from "../form/FormSection";
import { Widget } from "../widget/Widget";
import { Chart, Grid } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Shell> = {
  title: "fragments/Shell",
  component: Shell,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
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
          type: "user",
          key: "user",
          name: "Tony Reichert",
          description: "ACME Inc.",
          avatar: {
            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
          },
          dropdownItems: [
            {
              label: "My Profile",
            },
            {
              label: "Settings",
            },
            {
              label: "Organization Settings",
              showDivider: true,
            },
            {
              label: "Logout",
              color: "danger",
            },
          ],
        },
        {
          type: "custom",
          key: "search",
          render: <Input label="Search..." />,
        },
        {
          type: "navigation",
          key: "navigation-overview",
          label: "Overview",
          navigation: [
            {
              label: "Home",
              link: "/",
              icon: <IconHome stroke={1.5} />,
            },
            {
              label: "My Projects",
              link: "/projects",
              icon: <IconBoxMultiple stroke={1.5} />,
            },
            {
              label: "Chat",
              link: "/chat",
              icon: <IconMessageCircle stroke={1.5} />,
            },
          ],
        },
        {
          type: "navigation",
          key: "navigation-projects",
          label: "Projects",
          navigation: [
            {
              label: "Project 1",
              link: "/projects/1",
              icon: <IconBox stroke={1.5} />,
            },
            {
              label: "Project 2",
              link: "/projects/2",
              icon: <IconBox stroke={1.5} />,
            },
            {
              label: "Project 3",
              link: "/projects/3",
              icon: <IconBox stroke={1.5} />,
            },
          ],
        },
        {
          type: "custom",
          key: "bottom-banner",
          render: (
            <Card radius="lg" className="border-none">
              <img
                alt="Woman listing to music"
                className="object-cover w-full"
                height={200}
                src="https://nextui.org/images/hero-card.jpeg"
                width={200}
              />
            </Card>
          ),
          align: "bottom",
        },
      ],
    },
    children: "CONTENT",
  },
};

export const Collapsed: Story = {
  args: {
    ...Primary.args,
    sidebar: Primary.args?.sidebar ? {
      ...Primary.args.sidebar,
      layout: "collapsed",
    } : undefined,
  },
};

export const Auto: Story = {
  args: {
    ...Primary.args,
    sidebar: Primary.args?.sidebar ? {
      ...Primary.args.sidebar,
      autoLayout: true,
    } : undefined,
  },
};

export const WithTable: Story = {
  args: {
    ...Primary.args,
    sidebar: Primary.args?.sidebar ? {
      ...Primary.args.sidebar,
      autoLayout: true,
    } : undefined,
    children: (
      <>
        <header className="flex gap-4 justify-between sm:items-end mb-8 flex-col sm:flex-row">
          <div>
            <h1>Customers</h1>
            <p className="mt-2 text-foreground-500">Blablabla</p>
          </div>
          <div><Button endContent={<IconPlus stroke={1.5} />} className="w-full" color="primary">Create</Button></div>
        </header>
        <Tabs aria-label="Options">
          <Tab key="table" title="Table">
            <Table
              aria-label="Example static collection table"
              selectionMode="multiple"
            >
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
                <TableColumn>STATUS</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Jane Fisher</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>William Howard</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Tab>
          <Tab key="settings" title="Settings">
            <Form>
              <FormSection title="Name" description="Description" direction="horizontal">
                <Input label="First name" />
                <Input label="Last name" />
              </FormSection>
              <FormSection title="Biography" description="Description">
                <Textarea label="Biography" minRows={6} />
              </FormSection>
              <FormSection title="Notifications" description="Turn on/off email notifications." direction="horizontal">
                <Switch />
              </FormSection>
              <FormSection title="Title" description="Description" direction="horizontal">
                <Input label="First name" />
                <Input label="Last name" />
              </FormSection>
              <FormSection title="Full Width" description="Description" direction="horizontal" fullWidth>
                <Input label="First name" />
                <Input label="Last name" />
              </FormSection>
            </Form>
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
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
      autoLayout: true,
    } : undefined,
    children: (
      <>
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Customers</BreadcrumbItem>
        </Breadcrumbs>
        <h1>Customers</h1>
        <p className="mt-2 text-foreground-500">Blablabla</p>
        <Divider className="my-4" />
        <Grid size="lg">
          <Widget title="Analytics" size="md">
            <Chart
              type="line"
              series={[
                {
                  name: "Clicks",
                  data: [6500, 6418, 6456, 6526, 6356, 6456],
                  color: "#1A56DB",
                },
                {
                  name: "CPC",
                  data: [6456, 6356, 6526, 6332, 6418, 6500],
                  color: "#7E3AF2",
                },
              ]}
              height="350px"
            />
          </Widget>
          <Widget title="Traffic">
            <Chart
              type="pie"
              options={{
                labels: ["Direct", "Organic search", "Referrals"],
                yaxis: {
                  labels: {
                    formatter: function (value) {
                      return value + "%"
                    },
                  },
                },
                xaxis: {
                  labels: {
                    formatter: function (value) {
                      return value  + "%"
                    },
                  },
                }
              }}
              series={[52.8, 26.8, 20.4]}
              height="350px"
            />
          </Widget>
          <Widget title="Origins" size="md">
            <Chart
              type="column"
              series={[
                {
                  name: "Organic",
                  color: "#1A56DB",
                  data: [
                    { x: "Mon", y: 231 },
                    { x: "Tue", y: 122 },
                    { x: "Wed", y: 63 },
                    { x: "Thu", y: 421 },
                    { x: "Fri", y: 122 },
                    { x: "Sat", y: 323 },
                    { x: "Sun", y: 111 },
                  ],
                },
                {
                  name: "Social media",
                  color: "#FDBA8C",
                  data: [
                    { x: "Mon", y: 232 },
                    { x: "Tue", y: 113 },
                    { x: "Wed", y: 341 },
                    { x: "Thu", y: 224 },
                    { x: "Fri", y: 522 },
                    { x: "Sat", y: 411 },
                    { x: "Sun", y: 243 },
                  ],
                },
              ]}
              height="350px"
            />
          </Widget>
          <Widget title="Cost">
            <Chart
              type="bar"
              options={{
                tooltip: {
                  y: {
                    formatter: function (value) {
                      return "$" + value
                    }
                  }
                },
              }}
              series={[
                {
                  name: "Income",
                  color: "#31C48D",
                  data: [1420, 1620, 1820, 1420, 1650, 2120],
                },
                {
                  name: "Expense",
                  data: [788, 810, 866, 788, 1100, 1200],
                  color: "#F05252",
                }
              ]}
            />
          </Widget>
          <Widget title="New Users">
            <Chart
              type="area"
              options={{
                xaxis: {
                  categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
                }
              }}
              series={[
                {
                  name: "New users",
                  data: [6500, 6418, 6456, 6526, 6356, 6456],
                  color: "#1A56DB",
                },
              ]}
            />
          </Widget>
          <Widget title="Website traffic">
            <Chart
              type="donut"
              options={{
                labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        total: {
                          label: "Unique visitors",
                          formatter: function (w) {
                            const sum = w.globals.seriesTotals.reduce((a: number, b: number) => {
                              return a + b
                            }, 0)
                            return sum + 'k'
                          },
                        },
                        value: {
                          formatter: function (value) {
                            return value + "k"
                          },
                        }
                      }
                    }
                  }
                },
                yaxis: {
                  labels: {
                    formatter: function (value) {
                      return value + "k"
                    },
                  },
                },
                xaxis: {
                  labels: {
                    formatter: function (value) {
                      return value  + "k"
                    },
                  },
                },
              }}
              series={[35.1, 23.5, 2.4, 5.4]}
              height="350px"
            />
          </Widget>
          <Widget title="New Users">
            <Chart
              type="radial"
              options={{
                labels: ["Done", "In progress", "To do"],
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
