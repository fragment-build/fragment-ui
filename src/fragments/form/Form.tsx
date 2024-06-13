/**
 * Primary UI component for Form Sections
 */

import React from "react";
import { tv } from "@nextui-org/react";
import { Divider } from "../../components";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode[];
}

const form = tv({
  slots: {
    divider: 'my-6',
  },
});

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
  const v = form();

  return (
    <form {...props}>
      {children.map((child, index) => index === 0 ? child : (
        <React.Fragment key={index}>
          <Divider className={v.divider()} />
          {child}
        </React.Fragment>
      ))}
    </form>
  );
};