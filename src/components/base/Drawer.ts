import {
  Drawer as HeroDrawer,
  DrawerContent as HeroDrawerContent,
  DrawerHeader as HeroDrawerHeader,
  DrawerBody as HeroDrawerBody,
  DrawerFooter as HeroDrawerFooter,
} from '@heroui/drawer'
import { withFragment } from '../../withFragment'

export const Drawer = withFragment(HeroDrawer, 'drawer');
export const DrawerContent = withFragment(HeroDrawerContent, 'drawerContent');
export const DrawerHeader = withFragment(HeroDrawerHeader, 'drawerHeader');
export const DrawerBody = withFragment(HeroDrawerBody, 'drawerBody');
export const DrawerFooter = withFragment(HeroDrawerFooter, 'drawerFooter');
