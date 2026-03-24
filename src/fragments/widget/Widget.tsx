/**
 * Primary UI component for Dashboard Widgets
 */

import { tv } from 'tailwind-variants';
import { Card, CardProps } from '@heroui/react';

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

const widget = tv({
  slots: {
    base: 'px-7 py-5 gap-5',
    headerEndContent: 'ml-auto',
    header: 'p-0',
    content: 'p-0 overflow-visible',
  },
  variants: {
    size: {
      sm: 'col-span-1',
      md: 'col-span-1 lg:col-span-2',
      lg: 'col-span-1 lg:col-span-2 2xl:col-span-3',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

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
