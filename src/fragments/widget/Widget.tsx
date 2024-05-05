/**
 * Primary UI component for Dashboard Widgets
 */

import { collapseAdjacentVariantBorders, colorVariants, tv } from "@nextui-org/react";
import { Card, CardBody, CardHeader } from "../../components";

export interface WidgetProps {
  children: React.ReactNode;
  header?: {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  };
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const widget = tv({
  slots: {
    base: 'px-7 py-5 gap-5',
    headerEndContent: 'ml-auto',
    header: 'p-0',
    body: 'p-0',
  },
  variants: {
    size: {
      sm: 'lg:col-span-1',
      md: 'lg:col-span-2',
      lg: 'lg:col-span-3',
    },
    variant: {
      solid: "border-none",
      bordered: "border-small bg-transparent",
      light: "bg-transparent",
      flat: "border-none",
      faded: "border-small",
      shadow: "border-none",
      ghost: "border-small bg-transparent",
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: "bordered",
    color: "default",
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: colorVariants.solid.default,
    },
    {
      variant: "solid",
      color: "primary",
      class: colorVariants.solid.primary,
    },
    {
      variant: "solid",
      color: "secondary",
      class: colorVariants.solid.secondary,
    },
    {
      variant: "solid",
      color: "success",
      class: colorVariants.solid.success,
    },
    {
      variant: "solid",
      color: "warning",
      class: colorVariants.solid.warning,
    },
    {
      variant: "solid",
      color: "danger",
      class: colorVariants.solid.danger,
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: colorVariants.shadow.default,
    },
    {
      variant: "shadow",
      color: "primary",
      class: colorVariants.shadow.primary,
    },
    {
      variant: "shadow",
      color: "secondary",
      class: colorVariants.shadow.secondary,
    },
    {
      variant: "shadow",
      color: "success",
      class: colorVariants.shadow.success,
    },
    {
      variant: "shadow",
      color: "warning",
      class: colorVariants.shadow.warning,
    },
    {
      variant: "shadow",
      color: "danger",
      class: colorVariants.shadow.danger,
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: 'border-default-200',
    },
    {
      variant: "bordered",
      color: "primary",
      class: colorVariants.bordered.primary,
    },
    {
      variant: "bordered",
      color: "secondary",
      class: colorVariants.bordered.secondary,
    },
    {
      variant: "bordered",
      color: "success",
      class: colorVariants.bordered.success,
    },
    {
      variant: "bordered",
      color: "warning",
      class: colorVariants.bordered.warning,
    },
    {
      variant: "bordered",
      color: "danger",
      class: colorVariants.bordered.danger,
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: [colorVariants.flat.default, 'bg-default/10'],
    },
    {
      variant: "flat",
      color: "primary",
      class: [colorVariants.flat.primary, 'bg-primary/10'],
    },
    {
      variant: "flat",
      color: "secondary",
      class: [colorVariants.flat.secondary, 'bg-secondary/10'],
    },
    {
      variant: "flat",
      color: "success",
      class: [colorVariants.flat.success, 'bg-success/10'],
    },
    {
      variant: "flat",
      color: "warning",
      class: [colorVariants.flat.warning, 'bg-warning/10'],
    },
    {
      variant: "flat",
      color: "danger",
      class: [colorVariants.flat.danger, 'bg-danger/10'],
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: colorVariants.faded.default,
    },
    {
      variant: "faded",
      color: "primary",
      class: colorVariants.faded.primary,
    },
    {
      variant: "faded",
      color: "secondary",
      class: colorVariants.faded.secondary,
    },
    {
      variant: "faded",
      color: "success",
      class: colorVariants.faded.success,
    },
    {
      variant: "faded",
      color: "warning",
      class: colorVariants.faded.warning,
    },
    {
      variant: "faded",
      color: "danger",
      class: colorVariants.faded.danger,
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: [colorVariants.light.default, "data-[hover=true]:bg-default/40"],
    },
    {
      variant: "light",
      color: "primary",
      class: [colorVariants.light.primary, "data-[hover=true]:bg-primary/20"],
    },
    {
      variant: "light",
      color: "secondary",
      class: [colorVariants.light.secondary, "data-[hover=true]:bg-secondary/20"],
    },
    {
      variant: "light",
      color: "success",
      class: [colorVariants.light.success, "data-[hover=true]:bg-success/20"],
    },
    {
      variant: "light",
      color: "warning",
      class: [colorVariants.light.warning, "data-[hover=true]:bg-warning/20"],
    },
    {
      variant: "light",
      color: "danger",
      class: [colorVariants.light.danger, "data-[hover=true]:bg-danger/20"],
    },
    // ghost / color
    {
      variant: "ghost",
      color: "default",
      class: colorVariants.ghost.default,
    },
    {
      variant: "ghost",
      color: "primary",
      class: colorVariants.ghost.primary,
    },
    {
      variant: "ghost",
      color: "secondary",
      class: colorVariants.ghost.secondary,
    },
    {
      variant: "ghost",
      color: "success",
      class: colorVariants.ghost.success,
    },
    {
      variant: "ghost",
      color: "warning",
      class: colorVariants.ghost.warning,
    },
    {
      variant: "ghost",
      color: "danger",
      class: colorVariants.ghost.danger,
    },
    // isInGroup / bordered / ghost
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "default",
      className: collapseAdjacentVariantBorders.default,
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "primary",
      className: collapseAdjacentVariantBorders.primary,
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "secondary",
      className: collapseAdjacentVariantBorders.secondary,
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "success",
      className: collapseAdjacentVariantBorders.success,
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "warning",
      className: collapseAdjacentVariantBorders.warning,
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "danger",
      className: collapseAdjacentVariantBorders.danger,
    },
    // variant / hover
    {
      variant: ["solid", "faded", "flat", "bordered", "shadow"],
      class: "data-[hover=true]:opacity-hover",
    },
  ],
});

export const Widget: React.FC<WidgetProps> = ({ children, title, header, ...props }) => {
  const { base, body, header: headerClasses, headerEndContent } = widget(props);

  return (
    <Card shadow="none" classNames={{ base: base(), body: body(), header: headerClasses() }}>
      {(title || header?.endContent) && (
        <CardHeader>
          {title && <h3>{title}</h3>}
          <div className={headerEndContent()}>{header?.endContent}</div>
        </CardHeader>
      )}
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};
