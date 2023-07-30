import React, { useMemo } from 'react';
import { Button, tv } from '@nextui-org/react';

export interface SidebarNavigationItem {
  label: string;
  link: string;
  onClick?: React.MouseEventHandler;
  icon?: React.ReactNode;

  navigation: Omit<SidebarNavigationItem, 'navigation'>[];
}

export interface SidebarNavigationProps {
  navigation: SidebarNavigationItem[];
  align?: 'top' | 'center' | 'bottom';
}

const sidebar = tv({
  slots: {
    base: "flex flex-col w-full",
  },
  variants: {
    align: {
      top: {
        base: ''
      },
      center: {
        base: 'my-auto'
      },
      bottom: {
        base: 'mt-auto'
      },
    },
  },
});

/**
 * UI component for Dashboard Sidebar Navigation
 */
export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  navigation = [],
  align = 'top',
}) => {
  const slots = useMemo(() => sidebar({
      align,
    }),
    [align],
  );
  
  return (
    <nav className={slots.base()}>
      {navigation.map((navItem) => (
          <>
            <Button
              key={navItem.label}
              variant="light"
              size="lg"
              fullWidth
              className='justify-start'
            >
              {navItem.label}
            </Button>
            {navItem.navigation.length > 0 && (
              <nav>
                {navItem.navigation.map((subNavItem) => (
                  <Button
                    key={subNavItem.label}
                    variant="light"
                    size="lg"
                    fullWidth
                    className='justify-start'
                  >
                    {subNavItem.label}
                  </Button>
                ))}
              </nav>
            )}
          </>
        )
      )}
    </nav>
  );
};
