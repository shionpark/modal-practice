import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="cursor-pointer rounded bg-black px-4 py-2 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
