'use client';

/**
 * Primary UI component for Form Sections
 */

import React from 'react';
import { formSection } from './FormSection.styles';

export interface FormSectionProps {
  children: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  fullWidth?: boolean;
}

export const FormSection: React.FC<FormSectionProps> = ({ children, title, description, ...props }) => {
  const v = formSection(props);

  return (
    <div className={v.base()}>
      <div className={v.main()}>
        <div className={v.info()}>
          <h3>{title}</h3>
          <div className={v.description()}>{description}</div>
        </div>
        <div className={v.content()}>
          {children}
        </div>
      </div>
    </div>
  );
};
