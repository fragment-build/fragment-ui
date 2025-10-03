import {
  Tab as HeroTab,
  Tabs as HeroTabs,
} from '@heroui/tabs';
import { withFragment } from '../../withFragment';

export const Tab = withFragment(HeroTab, 'tab');
export const Tabs = withFragment(HeroTabs, 'tabs');
