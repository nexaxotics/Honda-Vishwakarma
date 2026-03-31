import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary: 'bg-honda-red hover:bg-honda-red-dark text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
            secondary: 'bg-honda-gold hover:bg-honda-gold/90 text-gray-900 shadow-md hover:shadow-lg',
            outline: 'border-2 border-honda-red text-honda-red hover:bg-honda-red hover:text-white',
            ghost: 'hover:bg-gray-100 text-gray-700',
        };

        const sizes = {
            sm: 'text-sm py-2 px-4',
            md: 'text-base py-3 px-6',
            lg: 'text-lg py-4 px-8',
        };

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
