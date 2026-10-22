import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Chip, Input, Label, TextField } from '@heroui/react';
import { FormCard } from './FormCard';

const meta: Meta<typeof FormCard> = {
  title: 'fragments/FormCard',
  component: FormCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Project',
    description: 'How this project is named and which shop it belongs to.',
    children: (
      <TextField fullWidth>
        <Label>Name</Label>
        <Input placeholder="My shop" />
      </TextField>
    ),
  },
};

export const WithStatusAndFooter: Story = {
  args: {
    ...Default.args,
    titleEndContent: <Chip color="success" size="sm" variant="soft">Live</Chip>,
    footer: <span>Changes apply on the next page load.</span>,
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger zone',
    description: 'Deleting stops the assistant immediately.',
    variant: 'danger',
    children: <Button className="self-start" variant="danger-soft">Delete project</Button>,
  },
};
