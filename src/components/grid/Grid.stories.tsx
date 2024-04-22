import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Grid> = {
  title: "components/Grid",
  component: Grid,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Small: Story = {
  args: {
    size: 'sm',
    children: (
      <>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
      </>
    ),
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: (
      <>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: (
      <>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
        <div style={{ backgroundColor: 'lightblue', height: '250px' }}></div>
      </>
    ),
  },
};
