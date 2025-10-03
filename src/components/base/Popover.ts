import {
  Popover as HeroPopover,
  PopoverContent as HeroPopoverContent,
  PopoverTrigger as HeroPopoverTrigger,
} from '@heroui/popover'
import { withFragment } from '../../withFragment'

export const Popover = withFragment(HeroPopover, 'popover');
export const PopoverContent = withFragment(HeroPopoverContent, 'popoverContent');
export const PopoverTrigger = withFragment(HeroPopoverTrigger, 'popoverTrigger');
