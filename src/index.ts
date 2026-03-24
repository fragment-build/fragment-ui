// TODO: export as utils.ts
export { VisuallyHidden } from '@react-aria/visually-hidden';
export { useTheme } from 'next-themes';

export { FragmentUIProvider } from './provider';

// fragment components
export { Grid, type GridProps } from './components/grid/Grid';
export { MultiSwitch, type MultiSwitchProps } from './components/multi-switch/MultiSwitch';
export { ThemeSwitch, type ThemeSwitchProps }  from './components/theme-switch/ThemeSwitch';

export { Form, type FormProps } from './fragments/form/Form';
export { FormSection, type FormSectionProps } from './fragments/form/FormSection';
export { PageHeader, type PageHeaderProps } from './fragments/page/PageHeader';
export { Shell, type ShellProps } from './fragments/shell/Shell';
export { Sidebar, type SidebarProps } from './fragments/sidebar/Sidebar';
export { Widget, type WidgetProps } from './fragments/widget/Widget';
