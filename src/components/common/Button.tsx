import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'solid' | 'outline' | 'transparent';
  color?: 'default' | 'primary';
}

function Button({
  children,
  className = '',
  variant = 'solid',
  color = 'default',
  ...props
}: ButtonProps) {
  const buttonVariant = clsx(
    `cursor-pointer rounded p-2 ${className} h-[40px] min-w-[64px]`,
    variant === 'transparent'
      ? 'bg-transparent text-black font-semibold'
      : variant === 'outline'
        ? 'bg-transparent text-black border border-black'
        : 'bg-black text-white'
  );

  const colorVariant = clsx(
    color === 'primary' && 'text-primary font-semibold'
  );

  return (
    <button className={`${buttonVariant} ${colorVariant}`} {...props}>
      {children}
    </button>
  );
}

export default memo(Button);
