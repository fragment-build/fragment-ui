'use client';

export interface CodeProps {
  children: React.ReactNode;
  className?: string;
}

export const Code: React.FC<CodeProps> = ({ children, className }) => (
  <code className={`fragment-code ${className ?? ''}`}>
    {children}
  </code>
);
