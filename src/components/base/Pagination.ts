import {
  Pagination as NextPagination,
  PaginationItem as NextPaginationItem,
  PaginationCursor as NextPaginationCursor,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Pagination = withFragment(NextPagination, 'pagination');
export const PaginationItem = withFragment(NextPaginationItem, 'paginationItem');
export const PaginationCursor = withFragment(NextPaginationCursor, 'paginationCursor');
