'use client';

/**
 * What a list, table or panel shows when there is nothing in it yet: an icon, one line saying
 * what would be here, one saying how to get it there, and the action that does.
 */

import { emptyState } from './EmptyState.styles';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Buttons or links. */
  children?: React.ReactNode;
  size?: 'sm' | 'md';
  /** Draws a dashed outline, for an empty state that stands in for a whole card. */
  bordered?: boolean;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon, title, description, children, className, ...props
}) => {
  const v = emptyState(props);

  return (
    <div className={v.base({ className })}>
      {icon && <div className={v.icon()}>{icon}</div>}
      <p className={v.title()}>{title}</p>
      {description && <p className={v.description()}>{description}</p>}
      {children && <div className={v.actions()}>{children}</div>}
    </div>
  );
};
