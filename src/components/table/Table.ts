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
export const TableBody = NextTableBody;
export const TableCell = NextTableCell;
export const TableColumn = NextTableColumn;
export const TableHeader = NextTableHeader;
export const TableRow = NextTableRow;
