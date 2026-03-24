import { createContext, useContext } from 'react';

export type LinkComponent = React.ElementType;

interface FragmentUIContextValue {
  linkComponent: LinkComponent;
}

export const FragmentUIContext = createContext<FragmentUIContextValue>({
  linkComponent: 'a',
});

export const useFragmentUI = () => useContext(FragmentUIContext);
