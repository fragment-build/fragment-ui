'use client';

import { useState } from 'react';
import { Button, Tooltip } from '@heroui/react';
import { IconCheck, IconCopy } from '@tabler/icons-react';

export interface CodeSnippetProps {
  code: string;
  prefix?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, prefix = '$' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fragment-code-snippet">
      <pre className="fragment-code-snippet__code">
        {prefix && <span className="fragment-code-snippet__prefix">{prefix} </span>}
        {code}
      </pre>
      <Tooltip>
        <Button
          isIconOnly
          aria-label="Copy to clipboard"
          size="sm"
          variant="ghost"
          onPress={handleCopy}
        >
          {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
        </Button>
        <Tooltip.Content>{copied ? 'Copied!' : 'Copy to clipboard'}</Tooltip.Content>
      </Tooltip>
    </div>
  );
};
