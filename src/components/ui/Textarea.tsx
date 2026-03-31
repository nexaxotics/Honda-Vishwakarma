import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {label}
                        {props.required && <span className="text-honda-red ml-1">*</span>}
                    </label>
                )}
                <textarea
                    className={cn(
                        'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honda-red focus:border-transparent outline-none transition-all resize-vertical min-h-[120px]',
                        error && 'border-red-500 focus:ring-red-500',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';
