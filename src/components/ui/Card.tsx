import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
    hover?: boolean;
}

export function Card({ className, children, hover = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                'bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300',
                hover && 'hover:shadow-xl hover:-translate-y-1 cursor-pointer',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn('p-6 pb-4', className)}>{children}</div>;
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn('p-6 pt-0', className)}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn('p-6 pt-4 border-t border-gray-100', className)}>{children}</div>;
}
