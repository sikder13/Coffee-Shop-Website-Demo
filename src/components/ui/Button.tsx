import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'default' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-burnt-orange)] text-white hover:bg-[var(--color-burnt-orange-dark)]',
  secondary:
    'border border-[var(--color-burnt-orange)] text-[var(--color-burnt-orange)] bg-transparent hover:bg-[var(--color-burnt-orange)]/10',
  ghost:
    'bg-transparent text-[var(--color-burnt-orange)] hover:bg-[var(--color-burnt-orange)]/10',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-6 py-3 min-h-[44px] text-base',
  large: 'px-8 py-4 text-lg min-h-[48px]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'default', className = '', disabled, type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-burnt-orange)]',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
);

Button.displayName = 'Button';

