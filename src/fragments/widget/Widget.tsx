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
}

const widget = tv({
  slots: {
    base: 'border-[1px] border-default-100 px-5 py-3',
    headerEndContent: 'ml-auto',
  },
});

export const Widget: React.FC<WidgetProps> = ({ children, title, header, ...props }) => {
  const { base, headerEndContent } = widget(props);

  return (
    <Card shadow="none" classNames={{ base: base() }}>
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
