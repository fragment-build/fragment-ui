import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "./PageHeader";
import { Button } from "../../components";
import { IconPlus, IconTrash } from "@tabler/icons-react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PageHeader> = {
  title: "fragments/PageHeader",
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
    children: <Button endContent={<IconPlus stroke={1.5} />} fullWidth color="primary">Create</Button>,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    children: (
      <>
        <Button startContent={<IconPlus stroke={1.5} size={18} />} fullWidth color="primary">Create</Button>
        <Button startContent={<IconTrash stroke={1.5} size={18} />} fullWidth color="danger">Delete</Button>
      </>
    ),
  },
};
