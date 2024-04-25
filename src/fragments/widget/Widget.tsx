/**
 * Primary UI component for Dashboard Widgets
 */

import { tv } from "@nextui-org/react";
import { Card, CardBody, CardHeader } from "../../components";

export interface WidgetProps {
  children: React.ReactNode;
  header?: {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  };
  title: string;
  size?: 'sm' | 'md' | 'lg';
}

const widget = tv({
  slots: {
    base: 'border-[1px] border-default-100',
    headerEndContent: 'ml-auto',
    header: 'px-7 pt-5',
    body: 'px-7 pb-5',
  },
  variants: {
    size: {
      sm: 'lg:col-span-1',
      md: 'lg:col-span-2',
      lg: 'lg:col-span-3',
    },
  },
  defaultVariants: {
    size: 'sm',
  }
});

export const Widget: React.FC<WidgetProps> = ({ children, title, header, ...props }) => {
  const { base, body, header: headerClasses, headerEndContent } = widget(props);

  return (
    <Card shadow="none" classNames={{ base: base(), body: body(), header: headerClasses(),  }}>
      <CardHeader>
        <h3>{title}</h3>
        <div className={headerEndContent()}>{header?.endContent}</div>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};
