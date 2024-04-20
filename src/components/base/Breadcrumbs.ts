import {
  Breadcrumbs as NextBreadcrumbs,
  BreadcrumbItem as NextBreadcrumbItem,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Breadcrumbs = withFragment(NextBreadcrumbs, 'breadcrumbs');
export const BreadcrumbItem = NextBreadcrumbItem;
