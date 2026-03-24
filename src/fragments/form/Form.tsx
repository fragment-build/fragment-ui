/**
 * Primary UI component for Form Sections
 */

import React, { isValidElement } from 'react';
import { tv } from 'tailwind-variants';
import { Separator } from '@heroui/react';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode[];
}

const form = tv({
  slots: {
    separator: 'my-6',
  },
});

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
  const v = form();

  return (
    <form {...props}>
      {children.filter(isValidElement).map((child, index) => index === 0 ? child : (
        <React.Fragment key={index}>
          <Separator className={v.separator()} />
          {child}
        </React.Fragment>
      ))}
    </form>
  );
};
