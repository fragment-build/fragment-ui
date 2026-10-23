'use client';

/**
 * A single headline number: label, value, an optional change against a named period and a hint.
 */

import { Card, Skeleton, Tooltip } from '@heroui/react';
import { IconArrowDownRight, IconArrowUpRight, IconInfoCircle, IconMinus } from '@tabler/icons-react';
import { statCard } from './StatCard.styles';

export interface StatCardDelta {
  /** Already formatted and signed, e.g. "+12%". */
  value: React.ReactNode;
  direction: 'up' | 'down' | 'flat';
  /**
   * Whether this direction is good news. Defaults to "up is good"; pass it explicitly for a
   * number where down is the win (a bounce rate, a cost).
   */
  sentiment?: 'positive' | 'negative' | 'neutral';
  /** The period the change is measured against, e.g. "vs. previous 30 days". */
  label?: React.ReactNode;
}

export interface StatCardProps {
  label: React.ReactNode;
  value: React.ReactNode;
  icon?: React.ReactNode;
  delta?: StatCardDelta;
  /** One quiet line under the value. */
  hint?: React.ReactNode;
  /** Shown behind an info icon beside the label. */
  help?: React.ReactNode;
  /** Accessible name of the info icon. */
  helpLabel?: string;
  isLoading?: boolean;
  /** Marks the card as the one the view is about: a lifted surface and a larger value. */
  emphasis?: boolean;
  className?: string;
}

const deltaIcon = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
  flat: IconMinus,
} as const;

export const StatCard: React.FC<StatCardProps> = ({
  label, value, icon, delta, hint, help, helpLabel = 'More information', isLoading, emphasis, className,
}) => {
  const sentiment = delta?.sentiment ?? (
    delta?.direction === 'up' ? 'positive' : delta?.direction === 'down' ? 'negative' : 'neutral'
  );
  const v = statCard({ emphasis, sentiment });
  const DeltaIcon = delta ? deltaIcon[delta.direction] : null;

  return (
    <Card className={v.base({ className })}>
      <div className={v.top()}>
        <span className={v.label()}>
          <span className="truncate">{label}</span>
          {help && (
            <Tooltip delay={0}>
              <Tooltip.Trigger className={v.help()} aria-label={helpLabel} tabIndex={0}>
                <IconInfoCircle size={14} stroke={1.75} />
              </Tooltip.Trigger>
              <Tooltip.Content className="max-w-xs">{help}</Tooltip.Content>
            </Tooltip>
          )}
        </span>
        {icon && <span className={v.icon()}>{icon}</span>}
      </div>
      {isLoading ? (
        <Skeleton className={v.skeleton()} />
      ) : (
        <div className={v.valueRow()}>
          <span className={v.value()}>{value}</span>
          {delta && DeltaIcon && (
            <span className={v.delta()}>
              <DeltaIcon size={14} stroke={2} />
              {delta.value}
            </span>
          )}
        </div>
      )}
      {(hint || delta?.label) && !isLoading && (
        <p className={v.hint()}>{hint ?? delta?.label}</p>
      )}
    </Card>
  );
};
