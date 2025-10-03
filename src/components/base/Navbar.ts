import {
  Navbar as HeroNavbar,
  NavbarBrand as HeroNavbarBrand,
  NavbarContent as HeroNavbarContent,
  NavbarItem as HeroNavbarItem,
  NavbarMenu as HeroNavbarMenu,
  NavbarMenuItem as HeroNavbarMenuItem,
  NavbarMenuToggle as HeroNavbarMenuToggle,
} from '@heroui/navbar'
import { withFragment } from '../../withFragment'

export const Navbar = withFragment(HeroNavbar, 'navbar');
export const NavbarBrand = withFragment(HeroNavbarBrand, 'navbarBrand');
export const NavbarContent = withFragment(HeroNavbarContent, 'navbarContent');
export const NavbarItem = withFragment(HeroNavbarItem, 'navbarItem');
export const NavbarMenu = HeroNavbarMenu;
export const NavbarMenuItem = withFragment(HeroNavbarMenuItem, 'navbarMenuItem');
export const NavbarMenuToggle = withFragment(HeroNavbarMenuToggle, 'navbarMenuToggle');
