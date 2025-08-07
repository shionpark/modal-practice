import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`cursor-pointer rounded bg-black px-4 py-2 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
