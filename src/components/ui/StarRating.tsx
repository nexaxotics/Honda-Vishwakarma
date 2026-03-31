import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    showNumber?: boolean;
    className?: string;
}

export function StarRating({ rating, maxRating = 5, size = 'md', showNumber = false, className }: StarRatingProps) {
    const sizes = {
        sm: 'text-sm',
        md: 'text-lg',
        lg: 'text-2xl',
    };

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="text-honda-gold" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="text-honda-gold" />);
        }

        const emptyStars = maxRating - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
        }

        return stars;
    };

    return (
        <div className={cn('flex items-center gap-1', className)}>
            <div className={cn('flex gap-0.5', sizes[size])}>
                {renderStars()}
            </div>
            {showNumber && (
                <span className="ml-2 text-gray-600 font-semibold">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
}
