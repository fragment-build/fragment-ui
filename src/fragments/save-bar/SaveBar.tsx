'use client';

/**
 * The bar a settings form saves from. It appears once something has changed and stays pinned to
 * the bottom of the viewport while the form scrolls, so the save action is never a scroll away and
 * an unsaved edit is never silent.
 */

import { Button } from '@heroui/react';
import { IconAlertCircle } from '@tabler/icons-react';
import { saveBar } from './SaveBar.styles';

export interface SaveBarProps {
  isVisible: boolean;
  isPending?: boolean;
  message: React.ReactNode;
  saveLabel: React.ReactNode;
  discardLabel?: React.ReactNode;
  onDiscard?: () => void;
  /** Omit when the bar sits inside a `<form>`: the save button then submits it. */
  onSave?: () => void;
  isSaveDisabled?: boolean;
}

export const SaveBar: React.FC<SaveBarProps> = ({
  isVisible, isPending, message, saveLabel, discardLabel, onDiscard, onSave, isSaveDisabled,
}) => {
  const v = saveBar({ isVisible });

  return (
    <div aria-hidden={!isVisible} className={v.base()} inert={!isVisible}>
      <div className={v.bar()} role="status">
        <span className={v.message()}>
          <IconAlertCircle size={16} stroke={1.75} />
          {message}
        </span>
        <div className={v.actions()}>
          {onDiscard && discardLabel && (
            <Button isDisabled={isPending} onPress={onDiscard} size="sm" type="button" variant="ghost">
              {discardLabel}
            </Button>
          )}
          <Button
            isDisabled={isSaveDisabled}
            isPending={isPending}
            onPress={onSave}
            size="sm"
            type={onSave ? 'button' : 'submit'}
          >
            {saveLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
