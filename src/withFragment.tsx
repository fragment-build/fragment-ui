import { forwardRef, useContext } from "react";
import deepMerge from "deepmerge";
import { FragmentUIContext } from "./context";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withFragment<C extends React.ComponentType<any>>(Component: C, configId: keyof FragmentUIContext['defaults']): C {
  const ComponentWithContext = forwardRef(({ children, ...props}: React.ComponentProps<C>, ref) => {
    const context = useContext(FragmentUIContext);
    return (
      <Component
        {...deepMerge(context['defaults'][configId] as React.ComponentProps<C> || {}, props as React.ComponentProps<C>)}
        ref={ref}
        children={children}
      />
    );
  });

  // fix react-aria collection
  if ('getCollectionNode' in Component) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ComponentWithContext as any).getCollectionNode = Component.getCollectionNode;
  }

  return ComponentWithContext as unknown as C;
}