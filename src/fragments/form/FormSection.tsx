/**
 * Primary UI component for Form Sections
 */

import React from "react";
import { tv } from "@nextui-org/react";

export interface FormSectionProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  direction?: 'vertical' | 'horizontal';
  fullWidth?: boolean;
}

const formSection = tv({
  slots: {
    base: '',
    main: 'flex flex-col',
    content: 'flex flex-col gap-4 flex-1',
    info: 'flex-1 pb-4',
    description: 'text-small text-foreground-500',
  },
  variants: {
    direction: {
      horizontal: {
        main: 'sm:flex-row',
        content: 'sm:items-end sm:justify-center sm:max-w-sm',
        info: 'sm:max-w-sm sm:pr-4 sm:pb-0',
      },
      vertical: {
        content: 'sm:max-w-3xl',
      },
    },
    fullWidth: {
      true: {
        content: 'sm:max-w-full',
      },
    },
  },
  defaultVariants: {
    direction: 'vertical',
    fullWidth: false,
  },
});

export const FormSection: React.FC<FormSectionProps> = ({ children, title, description, ...props }) => {
  const v = formSection(props);

  return (
    <div className={v.base()}>
      <div className={v.main()}>
        <div className={v.info()}>
          <h3>{title}</h3>
          <p className={v.description()}>{description}</p>
        </div>
        <div className={v.content()}>
          {children}
        </div>
      </div>
    </div>
  );
};
