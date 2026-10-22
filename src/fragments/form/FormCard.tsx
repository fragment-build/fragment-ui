'use client';

/**
 * One group of settings drawn as a card: a heading that says what the group is for, then its
 * fields. Where FormSection separates groups with rules on one sheet, FormCard gives each group its
 * own surface — the better fit for a long settings page, where the eye needs landmarks to scan by.
 */

import { Card } from '@heroui/react';
import { formCard } from './FormCard.styles';

export interface FormCardProps {
  children: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Beside the title: a status chip, a "reset" link, a switch that enables the whole group. */
  titleEndContent?: React.ReactNode;
  /** Behind a hairline at the bottom: secondary actions, or a note on when the change applies. */
  footer?: React.ReactNode;
  /** `danger` marks a group of irreversible actions. */
  variant?: 'default' | 'danger';
  id?: string;
  className?: string;
}

export const FormCard: React.FC<FormCardProps> = ({
  children, title, description, titleEndContent, footer, id, className, ...props
}) => {
  const v = formCard(props);

  return (
    <Card className={v.base({ className })} id={id}>
      <div className={v.header()}>
        <div className={v.heading()}>
          <h3 className={v.title()}>{title}</h3>
          {description && <div className={v.description()}>{description}</div>}
        </div>
        {titleEndContent && <div className={v.headerEnd()}>{titleEndContent}</div>}
      </div>
      <div className={v.body()}>{children}</div>
      {footer && <div className={v.footer()}>{footer}</div>}
    </Card>
  );
};
