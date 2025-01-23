import {
  Pagination as HeroPagination,
  PaginationItem as HeroPaginationItem,
  PaginationCursor as HeroPaginationCursor,
} from '@heroui/react'
import { withFragment } from '../../withFragment'

export const Pagination = withFragment(HeroPagination, 'pagination');
export const PaginationItem = withFragment(HeroPaginationItem, 'paginationItem');
export const PaginationCursor = withFragment(HeroPaginationCursor, 'paginationCursor');
