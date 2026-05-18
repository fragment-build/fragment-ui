'use client';

/**
 * Primary UI component for Form Sections
 */

import React from 'react';
import { pageHeader } from './PageHeader.styles';

export interface PageHeaderProps {
  children?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
}


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
