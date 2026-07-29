import type { ButtonHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';

type ButtonType = 'DEFAULT' | 'POSITIVE' | 'NEGATIVE';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
}

const ButtonVariants = cva(
  'typo-2lg-regular cursor-pointer rounded-[5px] border-0 px-5 py-2.5 text-nowrap disabled:cursor-not-allowed',
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
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={ButtonVariants({ variant })} {...props}>
      {children}
    </button>
  );
}
