/**
 * Primary UI component for Form Sections
 */

import { tv } from "@nextui-org/react";

export interface FormSectionProps {
  children: React.ReactNode;
  title: string;
  description?: string | React.ReactNode;
  direction?: 'vertical' | 'horizontal'
  fullWidth?: boolean;
  noBorder?: boolean;
}

const formSection = tv({
  slots: {
    base: 'flex gap-4 py-6 flex-col',
    content: 'flex flex-col gap-4 flex-1',
    info: 'flex-1',
    description: 'text-small text-foreground-500',
  },
  variants: {
    direction: {
      horizontal: {
        base: 'sm:flex-row',
        content: 'sm:items-end sm:justify-center',
      },
      vertical: {},
    },
    fullWidth: {
      true: {
        base: 'w-full',
      },
      false: {
        base: 'max-w-3xl',
      }
    },
    noBorder: {
      true: {},
      false: {
        base: 'border-t-1 border-default-100',
      }
    }
  },
  defaultVariants: {
    direction: 'vertical',
    fullWidth: false,
    noBorder: false,
  },
});

export const FormSection: React.FC<FormSectionProps> = ({ children, title, description, ...props }) => {
  const { base, content, description: descriptionClasses, info } = formSection(props);

  return (
    <div className={base()}>
      <div className={info()}>
        <h3>{title}</h3>
        <p className={descriptionClasses()}>{description}</p>
      </div>
      <div className={content()}>
        {children}
      </div>
    </div>
  );
};
