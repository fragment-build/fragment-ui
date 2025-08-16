import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const commonTheme = create({
  base: 'light',
  brandTitle: 'Fragment UI',
  brandUrl: 'https://fragment.build',
  brandTarget: '_self',
  brandImage: 'assets/logo-light.svg',
});
 
addons.setConfig({
  theme: commonTheme,
});
