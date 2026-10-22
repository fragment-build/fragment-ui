'use client';

/**
 * Primary UI component for Form Sections
 */

import React from 'react';
import { formSection } from './FormSection.styles';

export interface FormSectionProps {
  children: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Sits beside the title, for a status chip or a "reset to default" link. */
  titleEndContent?: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  fullWidth?: boolean;
}

export const FormSection: React.FC<FormSectionProps> = ({
  children, title, description, titleEndContent, ...props
}) => {
  const v = formSection(props);

  return (
    <div className={v.base()}>
      <div className={v.main()}>
        <div className={v.info()}>
          <div className={v.titleRow()}>
            <h3 className={v.title()}>{title}</h3>
            {titleEndContent}
          </div>
          {description && <div className={v.description()}>{description}</div>}
        </div>
        <div className={v.content()}>
          {children}
        </div>
      </div>
    </div>
  );
};
