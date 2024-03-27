import {  useContext } from "react";
import deepMerge from "deepmerge";
import { FragmentUIContext } from "./context";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withFragment<P extends React.ComponentType<any>>(Component: P, configId: keyof FragmentUIContext['defaults']): P {
  const ComponentWithContext = (props: React.ComponentProps<P>) => {
    const context = useContext(FragmentUIContext);
    return <Component {...deepMerge<P>(context['defaults'][configId] as React.ComponentProps<P> || {}, props) as React.ComponentProps<P>}/>
  };

  // fix react-aria collection
  if ('getCollectionNode' in Component) {
    (ComponentWithContext as typeof Component).getCollectionNode = Component.getCollectionNode;
  }

  return ComponentWithContext as P;
}
