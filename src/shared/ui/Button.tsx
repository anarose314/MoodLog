import type { ButtonHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';

type ButtonType = 'DEFAULT' | 'POSITIVE' | 'NEGATIVE';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
}

const ButtonVariants = cva(
  'typo-md-medium md:typo-2lg-regular cursor-pointer rounded-md border-0 px-4 py-2.5 text-nowrap disabled:cursor-not-allowed md:px-5',
  {
    variants: {
      variant: {
        DEFAULT: 'bg-gray-100 transition-colors hover:bg-gray-200',
        POSITIVE: 'bg-green text-white transition-opacity hover:opacity-80',
        NEGATIVE: 'bg-red text-white transition-opacity hover:opacity-80',
      },
    },
    defaultVariants: {
      variant: 'DEFAULT',
    },
  }
);

/**
 * @example
 * <Button variant="POSITIVE" onClick={handleClick} />
 */
export default function Button({
  children,
  variant,
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(ButtonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
