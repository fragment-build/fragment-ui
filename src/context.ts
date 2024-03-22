import { TableProps } from "@nextui-org/react";
import { createContext } from "react";

export interface FragmentUIContext {
  defaults: {
    table?: Partial<TableProps>;
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
