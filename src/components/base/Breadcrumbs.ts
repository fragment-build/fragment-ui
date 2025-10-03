import {
  Breadcrumbs as HeroBreadcrumbs,
  BreadcrumbItem as HeroBreadcrumbItem,
} from '@heroui/breadcrumbs'
import { withFragment } from '../../withFragment'

export const Breadcrumbs = withFragment(HeroBreadcrumbs, 'breadcrumbs');
export const BreadcrumbItem = HeroBreadcrumbItem;
