import type { Meta, StoryObj } from '@storybook/react-vite';
import { SaveBar } from './SaveBar';

const meta: Meta<typeof SaveBar> = {
  title: 'fragments/SaveBar',
  component: SaveBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Visible: Story = {
  args: {
    isVisible: true,
    message: 'You have unsaved changes',
    saveLabel: 'Save changes',
    discardLabel: 'Discard',
    onDiscard: () => {},
    onSave: () => {},
  },
};

export const Saving: Story = {
  args: { ...Visible.args, isPending: true },
};
