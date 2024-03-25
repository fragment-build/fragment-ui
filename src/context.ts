import { TableBodyProps, TableCellProps, TableColumnProps, TableHeaderProps, TableProps } from "@nextui-org/react";
import { TableRowProps } from "@nextui-org/table/dist/base/table-row";
import { createContext } from "react";

export interface FragmentUIContext {
  defaults: {
    table?: Partial<TableProps>;
    tableBody?: Partial<TableBodyProps<unknown>>;
    tableCell?: Partial<TableCellProps>;
    tableColumn?: Partial<TableColumnProps<unknown>>;
    tableHeader?: Partial<TableHeaderProps<unknown>>;
    tableRow?: Partial<TableRowProps>;
  }
}

export const defaultContext: FragmentUIContext = {
  defaults: {
    table: {
      removeWrapper: true,
    },
  },
}

export const FragmentUIContext = createContext(defaultContext);
