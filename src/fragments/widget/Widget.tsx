'use client';

/**
 * Primary UI component for Dashboard Widgets
 */

import { Card, CardProps } from '@heroui/react';
import { widget } from './Widget.styles';

export interface WidgetProps {
  children: React.ReactNode;
  header?: {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  };
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: CardProps['variant'];
}


export const Widget: React.FC<WidgetProps> = ({ children, title, header, variant, ...props }) => {
  const { base, content, header: headerClasses, headerEndContent } = widget(props);

  return (
    <Card className={base()} variant={variant}>
      {(title || header?.endContent) && (
        <Card.Header className={headerClasses()}>
          {title && <h3>{title}</h3>}
          <div className={headerEndContent()}>{header?.endContent}</div>
        </Card.Header>
      )}
      <Card.Content className={content()}>
        {children}
      </Card.Content>
    </Card>
  );
};
