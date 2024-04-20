import {
  Navbar as NextNavbar,
  NavbarBrand as NextNavbarBrand,
  NavbarContent as NextNavbarContent,
  NavbarItem as NextNavbarItem,
  NavbarMenu as NextNavbarMenu,
  NavbarMenuItem as NextNavbarMenuItem,
  NavbarMenuToggle as NextNavbarMenuToggle,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Navbar = withFragment(NextNavbar, 'navbar');
export const NavbarBrand = withFragment(NextNavbarBrand, 'navbarBrand');
export const NavbarContent = withFragment(NextNavbarContent, 'navbarContent');
export const NavbarItem = withFragment(NextNavbarItem, 'navbarItem');
export const NavbarMenu = NextNavbarMenu;
export const NavbarMenuItem = withFragment(NextNavbarMenuItem, 'navbarMenuItem');
export const NavbarMenuToggle = withFragment(NextNavbarMenuToggle, 'navbarMenuToggle');
