import { MouseEventHandler, ReactNode } from 'react';

export function Button({
  onClick,
  children,
  type = 'button',
  disabled = false,
  className,
}: {
  onClick?: MouseEventHandler;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}
