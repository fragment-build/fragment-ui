/**
 * Primary UI component for Form Sections
 */

import React from "react";
import { tv } from "@nextui-org/react";
import { Divider } from "../../components";

interface FormProps {
  children: React.ReactNode[];
}

const form = tv({
  slots: {
    divider: 'my-6',
  },
});

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
  const v = form(props);

  return (
    <section>
      {children.map((child, index) => index === 0 ? child : (
        <React.Fragment key={index}>
          <Divider className={v.divider()} />
          {child}
        </React.Fragment>
      ))}
    </section>
  );
};