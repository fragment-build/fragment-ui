'use client';

/**
 * Primary UI component for Page Headers
 */

import React from 'react';
import { pageHeader } from './PageHeader.styles';

export interface PageHeaderProps {
  /** Actions, aligned to the end of the title row. */
  children?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** A small line above the title: a breadcrumb, a back link or a section name. */
  eyebrow?: React.ReactNode;
  /** Content below the title row that still belongs to the header, such as tabs or filters. */
  footer?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ children, title, description, eyebrow, footer }) => {
  const v = pageHeader({ hasFooter: !!footer });

  return (
    <header className={v.base()}>
      <div className={v.row()}>
        <div className={v.heading()}>
          {eyebrow && <div className={v.eyebrow()}>{eyebrow}</div>}
          <h1 className={v.title()}>{title}</h1>
          {description && <p className={v.description()}>{description}</p>}
        </div>
        {children && <div className={v.actions()}>{children}</div>}
      </div>
      {footer && <div className={v.footer()}>{footer}</div>}
    </header>
  );
};
