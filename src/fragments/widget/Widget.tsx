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
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const widget = tv({
  slots: {
    base: 'border-[1px] border-default-100',
    headerEndContent: 'ml-auto',
    header: 'px-7 pt-5',
    body: 'px-7 pb-5',
  },
  variants: {
    colSpan: {
      1: 'lg:col-span-1',
      2: 'lg:col-span-2',
      3: 'lg:col-span-3',
      4: 'lg:col-span-4',
      5: 'lg:col-span-5',
      6: 'lg:col-span-6',
      7: 'lg:col-span-7',
      8: 'lg:col-span-8',
      9: 'lg:col-span-9',
      10: 'lg:col-span-10',
      11: 'lg:col-span-11',
      12: 'lg:col-span-12',
    },
  },
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
