import {  useContext } from "react";
import { FragmentUIContext } from "./context";

export const withFragment = <P extends object>(Component: React.ComponentType<P>, configId: keyof FragmentUIContext['defaults']) => (props: P) => {
  const context = useContext(FragmentUIContext);
  return <Component {...context['defaults'][configId] || {}} {...props} />
};
