import {
  Popover as NextPopover,
  PopoverContent as NextPopoverContent,
  PopoverTrigger as NextPopoverTrigger,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Popover = withFragment(NextPopover, 'popover');
export const PopoverContent = withFragment(NextPopoverContent, 'popoverContent');
export const PopoverTrigger = withFragment(NextPopoverTrigger, 'popoverTrigger');
