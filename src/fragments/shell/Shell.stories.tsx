import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardBody,
  Divider,
  Input,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from "@nextui-org/react";
import {
  IconBox,
  IconBoxMultiple,
  IconHome,
  IconMessageCircle,
} from "@tabler/icons-react";
import { Shell } from "./Shell";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "components/Shell",
  component: Shell,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Shell>;

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
    sidebar: {
      ...Primary.args.sidebar,
      layout: "collapsed",
    },
  },
};

export const Auto: Story = {
  args: {
    ...Primary.args,
    sidebar: {
      ...Primary.args.sidebar,
      autoLayout: true,
    },
  },
};

export const WithTable: Story = {
  args: {
    ...Primary.args,
    children: (
      <>
        <h1>Customers</h1>
        <p className="mt-2 text-foreground-500">Blablabla</p>
        <Divider className="my-4" />
        <Tabs aria-label="Options">
          <Tab key="table" title="Table">
            <Table
              aria-label="Example static collection table"
              selectionMode="multiple"
              removeWrapper
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
          <Tab key="music" title="Music">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
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
