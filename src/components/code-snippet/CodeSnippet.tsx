'use client';

import { useState } from 'react';
import { Button, Tooltip } from '@heroui/react';
import { IconCheck, IconCopy } from '@tabler/icons-react';

export interface CodeSnippetProps {
  code: string;
  prefix?: string;
  /**
   * `inline` (default) is a one-line command with the copy button beside it. `block` is a panel
   * for multi-line code, with a header carrying `title` and a labelled copy button.
   */
  variant?: 'inline' | 'block';
  /** The block header's label, e.g. the file or language the snippet belongs to. */
  title?: React.ReactNode;
  copyLabel?: string;
  copiedLabel?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code, prefix = '$', variant = 'inline', title, copyLabel = 'Copy', copiedLabel = 'Copied',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === 'block') {
    return (
      <div className="fragment-code-snippet--block">
        <div className="fragment-code-snippet__header">
          <span className="fragment-code-snippet__title">{title}</span>
          <Button aria-live="polite" onPress={handleCopy} size="sm" variant="ghost">
            {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            {copied ? copiedLabel : copyLabel}
          </Button>
        </div>
        <pre className="fragment-code-snippet__block-code">
          {prefix && <span className="fragment-code-snippet__prefix">{prefix} </span>}
          {code}
        </pre>
      </div>
    );
  }

  return (
    <div className="fragment-code-snippet">
      <pre className="fragment-code-snippet__code">
        {prefix && <span className="fragment-code-snippet__prefix">{prefix} </span>}
        {code}
      </pre>
      <Tooltip>
        <Button
          isIconOnly
          aria-label={copyLabel}
          size="sm"
          variant="ghost"
          onPress={handleCopy}
        >
          {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
        </Button>
        <Tooltip.Content>{copied ? copiedLabel : copyLabel}</Tooltip.Content>
      </Tooltip>
    </div>
  );
};
