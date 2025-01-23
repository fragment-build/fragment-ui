import {
  Table as HeroTable,
  TableBody as HeroTableBody,
  TableCell as HeroTableCell,
  TableColumn as HeroTableColumn,
  TableHeader as HeroTableHeader,
  TableRow as HeroTableRow,
} from '@heroui/react'
import { withFragment } from '../../withFragment'

export const Table = withFragment(HeroTable, 'table');
export const TableBody = withFragment(HeroTableBody, 'tableBody');
export const TableCell = withFragment(HeroTableCell, 'tableCell');
export const TableColumn = withFragment(HeroTableColumn, 'tableColumn');
export const TableHeader = withFragment(HeroTableHeader, 'tableHeader');
export const TableRow = withFragment(HeroTableRow, 'tableRow');
