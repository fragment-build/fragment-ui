import { forwardRef, useContext } from "react";
import defaultsDeep from "lodash.defaultsdeep";
import { FragmentUIContext } from "./context";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withFragment<C extends React.ComponentType<any>>(Component: C, configId: keyof FragmentUIContext['defaults']): C {
  const ComponentWithContext = forwardRef<unknown, React.ComponentProps<C>>(({ children, ...props }, ref) => {
    const context = useContext(FragmentUIContext);
    // TODO: check if defaultsDeep is performance issue, consider introducing useMemo
    return (
      <Component
        {...defaultsDeep(props, context['defaults'][configId] || {})}
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

  // fix https://github.com/nextui-org/nextui/pull/2815
  ComponentWithContext.displayName = Component.displayName;

  return ComponentWithContext as unknown as C;
}
