import { forwardRef, isValidElement, useContext } from "react";
import defaultsDeep from "lodash.defaultsdeep";
import { FragmentUIContext } from "./context";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withFragment<C extends React.ComponentType<any>>(Component: C, configId: keyof FragmentUIContext['defaults']): C {
  const ComponentWithContext = forwardRef(({ children, ...props}: React.ComponentProps<C>, ref) => {
    const context = useContext(FragmentUIContext);
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

  if (isValidElement(ComponentWithContext) && isValidElement(Component)) {
    ComponentWithContext.type = Component.type;
  }

  return ComponentWithContext as unknown as C;
}