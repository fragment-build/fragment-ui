'use client';

import { grid } from './Grid.styles';

/**
 * Primary UI component for selecting a color
 */

export interface GridProps {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
}

export const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  const { base } = grid(props);

  return <div className={base()}>{children}</div>;
};
