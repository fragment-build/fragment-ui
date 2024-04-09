/**
 * Primary UI component for Form Sections
 */

import { tv } from "@nextui-org/react";

export interface FormSectionProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  direction?: 'vertical' | 'horizontal'
}

const formSection = tv({
  slots: {
    base: 'flex gap-4 py-6 border-t-1 border-default-100 max-w-3xl',
    content: 'flex flex-col gap-4 flex-1',
    info: 'flex-1',
    description: 'text-small text-foreground-500',
  },
  variants: {
    direction: {
      horizontal: {
        base: 'flex-row',
        content: 'items-end justify-center',
      },
      vertical: {
        base: 'flex-col',
        content: 'items-start',
      }
    }
  },
  defaultVariants: {
    direction: 'vertical',
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
