import {
  Tab as NextTab,
  Tabs as NextTabs,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Tab = withFragment(NextTab, 'tab');
export const Tabs = withFragment(NextTabs, 'tabs');
