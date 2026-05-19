import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormSection } from './FormSection';
import { Form } from './Form';
import {
  Input,
  InputGroup,
  NumberField,
  TextField,
  TextArea,
  SearchField,
  Select,
  ListBox,
  ListBoxItem,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Slider,
} from '@heroui/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FormSection> = {
  title: 'fragments/FormSection',
  component: FormSection,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    children: (
      <>
        <Input placeholder="Firstname" fullWidth />
        <Input placeholder="Lastname" fullWidth />
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    direction: 'horizontal',
    children: (
      <>
        <Input placeholder="Firstname" fullWidth />
        <Input placeholder="Lastname" fullWidth />
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    direction: 'horizontal',
    fullWidth: true,
    children: (
      <>
        <Input placeholder="Firstname" fullWidth />
        <Input placeholder="Lastname" fullWidth />
      </>
    ),
  },
};

export const WithSectionTitle: Story = {
  args: {
    title: 'Profile',
    description: 'These are my personal information.',
    direction: 'horizontal',
    children: (
      <>
        <Input placeholder="Firstname" fullWidth />
        <Input placeholder="Lastname" fullWidth />
      </>
    ),
  },
};

export const AllInputs: Story = {
  render: () => (
    <Form>
      <FormSection title="Input" description="Bare single-line input.">
        <Input placeholder="Enter text..." fullWidth />
      </FormSection>
      <FormSection title="TextField" description="Input wrapped in a field context.">
        <TextField fullWidth>
          <Input placeholder="Enter text..." />
        </TextField>
      </FormSection>
      <FormSection title="InputGroup" description="Input with prefix and suffix adornments.">
        <InputGroup fullWidth>
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <InputGroup.Input placeholder="your-domain.com" />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </FormSection>
      <FormSection title="TextArea" description="Multi-line text input.">
        <TextArea placeholder="Tell us about yourself..." fullWidth />
      </FormSection>
      <FormSection title="SearchField" description="Input with built-in search affordances.">
        <SearchField fullWidth>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </FormSection>
      <FormSection title="NumberField" description="Numeric input with increment/decrement.">
        <NumberField fullWidth>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input placeholder="0" />
            <NumberField.IncrementButton />
          </NumberField.Group>
        </NumberField>
      </FormSection>
      <FormSection title="Select" description="Dropdown selection.">
        <Select fullWidth>
          <Select.Trigger><Select.Value /><Select.Indicator /></Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBoxItem id="de">Germany</ListBoxItem>
              <ListBoxItem id="us">United States</ListBoxItem>
              <ListBoxItem id="fr">France</ListBoxItem>
            </ListBox>
          </Select.Popover>
        </Select>
      </FormSection>
      <FormSection title="CheckboxGroup" description="Multiple selection.">
        <CheckboxGroup>
          <Checkbox value="design"><Checkbox.Control><Checkbox.Indicator /></Checkbox.Control><Checkbox.Content>Design</Checkbox.Content></Checkbox>
          <Checkbox value="engineering"><Checkbox.Control><Checkbox.Indicator /></Checkbox.Control><Checkbox.Content>Engineering</Checkbox.Content></Checkbox>
          <Checkbox value="marketing"><Checkbox.Control><Checkbox.Indicator /></Checkbox.Control><Checkbox.Content>Marketing</Checkbox.Content></Checkbox>
        </CheckboxGroup>
      </FormSection>
      <FormSection title="RadioGroup" description="Single selection.">
        <RadioGroup>
          <Radio value="free"><Radio.Control><Radio.Indicator /></Radio.Control><Radio.Content>Free</Radio.Content></Radio>
          <Radio value="pro"><Radio.Control><Radio.Indicator /></Radio.Control><Radio.Content>Pro</Radio.Content></Radio>
          <Radio value="enterprise"><Radio.Control><Radio.Indicator /></Radio.Control><Radio.Content>Enterprise</Radio.Content></Radio>
        </RadioGroup>
      </FormSection>
      <FormSection title="Slider" description="Range selection.">
        <Slider defaultValue={40}>
          <Slider.Track>
            <Slider.Fill />
            <Slider.Thumb />
          </Slider.Track>
        </Slider>
      </FormSection>
      <FormSection title="Switch" description="Boolean toggle." direction="horizontal">
        <Switch><Switch.Control><Switch.Thumb /></Switch.Control></Switch>
      </FormSection>
    </Form>
  ),
};

export const HorizontalSimple: Story = {
  args: {
    title: 'Notifications',
    description: 'Turn on/off email notifications.',
    direction: 'horizontal',
    children: <Switch><Switch.Control><Switch.Thumb /></Switch.Control></Switch>,
  },
};
