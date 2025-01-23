import {
  Breadcrumbs as HeroBreadcrumbs,
  BreadcrumbItem as HeroBreadcrumbItem,
} from '@heroui/react'
import { withFragment } from '../../withFragment'

export const Breadcrumbs = withFragment(HeroBreadcrumbs, 'breadcrumbs');
export const BreadcrumbItem = HeroBreadcrumbItem;
