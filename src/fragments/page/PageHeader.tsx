/**
 * Primary UI component for Form Sections
 */

import React from "react";
import { tv } from "@nextui-org/react";

export interface PageHeaderProps {
  children?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
}

const pageHeader = tv({
  slots: {
    base: 'flex gap-4 justify-between sm:items-end mb-8 flex-col sm:flex-row',
    description: 'mt-2 text-foreground-500 ',
    actions: 'flex gap-4',
  },
});

export const PageHeader: React.FC<PageHeaderProps> = ({ children, title, description, ...props }) => {
  const v = pageHeader(props);

  return (
    <header className={v.base()}>
      <div>
        <h1>{title}</h1>
        {description && <p className={v.description()}>{description}</p>}
      </div>
      <div className={v.actions()}>{children}</div>
    </header>
  );
};
