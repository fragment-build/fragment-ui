import {  useContext } from "react";
import deepMerge from "deepmerge";
import { FragmentUIContext } from "./context";

export const withFragment = <P extends object>(Component: React.ComponentType<P>, configId: keyof FragmentUIContext['defaults']) => {
  const ComponentWithContext = (props: P) => {
    const context = useContext(FragmentUIContext);
    return <Component {...deepMerge<P>(context['defaults'][configId] as P || {}, props)}/>
  };

  // fix react-aria collection
  if ('getCollectionNode' in Component) {
    ComponentWithContext.getCollectionNode = Component.getCollectionNode;
  }

  return ComponentWithContext;
};
