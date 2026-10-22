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
  title?: React.ReactNode;
  /** One line under the title saying what the widget measures. */
  description?: React.ReactNode;
  /** Pinned to the bottom of the card, behind a hairline: a "view all" link, a timestamp. */
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  /** `none` lets a table or a list run edge to edge inside the card. */
  padding?: 'none' | 'sm' | 'md';
  variant?: CardProps['variant'];
  className?: string;
}

export const Widget: React.FC<WidgetProps> = ({
  children, title, description, header, footer, variant, className, ...props
}) => {
  const v = widget(props);
  const hasHeader = !!(title || description || header?.startContent || header?.endContent);

  return (
    <Card className={v.base({ className })} variant={variant}>
      {hasHeader && (
        <Card.Header className={v.header()}>
          {header?.startContent && <div className={v.headerStartContent()}>{header.startContent}</div>}
          <div className={v.heading()}>
            {title && <h3 className={v.title()}>{title}</h3>}
            {description && <p className={v.description()}>{description}</p>}
          </div>
          {header?.endContent && <div className={v.headerEndContent()}>{header.endContent}</div>}
        </Card.Header>
      )}
      <Card.Content className={v.content()}>
        {children}
      </Card.Content>
      {footer && <Card.Footer className={v.footer()}>{footer}</Card.Footer>}
    </Card>
  );
};
