/**
 * Primary UI component for Form Sections
 */

import React, { isValidElement } from 'react';
import { tv } from '@heroui/react';
import { Divider } from '../../components';
import { withFragment } from '../../withFragment';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode[];
}

const form = tv({
  slots: {
    divider: 'my-6',
  },
});

export const Form: React.FC<FormProps> = withFragment(({ children, ...props }) => {
  const v = form();

  return (
    <form {...props}>
      {children.filter(isValidElement).map((child, index) => index === 0 ? child : (
        <React.Fragment key={index}>
          <Divider className={v.divider()} />
          {child}
        </React.Fragment>
      ))}
    </form>
  );
}, 'form');
