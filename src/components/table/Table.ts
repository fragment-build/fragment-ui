import {
  Table as NextTable,
  TableBody as NextTableBody,
  TableCell as NextTableCell,
  TableColumn as NextTableColumn,
  TableHeader as NextTableHeader,
  TableRow as NextTableRow,
} from '@nextui-org/react'
import { withFragment } from '../../withFragment'

export const Table = withFragment(NextTable, 'table');
export const TableBody = withFragment(NextTableBody, 'tableBody');
export const TableCell = withFragment(NextTableCell, 'tableCell');
export const TableColumn = withFragment(NextTableColumn, 'tableColumn');
export const TableHeader = withFragment(NextTableHeader, 'tableHeader');
export const TableRow = withFragment(NextTableRow, 'tableRow');
