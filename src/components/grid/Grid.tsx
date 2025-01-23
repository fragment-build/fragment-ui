import { tv } from '@heroui/react';

/**
 * Primary UI component for selecting a color
 */

export interface GridProps {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
}

const grid = tv({
  slots: {
    base: 'grid gap-6 grid-flow-row-dense',
  },
  variants: {
    size: {
      sm: {
        base: 'grid-cols-1'
      },
      md: {
        base: 'grid-cols-1 lg:grid-cols-2'
      },
      lg: {
        base: 'grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'
      }
    }
  },
  defaultVariants: {
    size: 'md',
  },
});

export const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  const { base } = grid(props);

  return <div className={base()}>{children}</div>;
};
