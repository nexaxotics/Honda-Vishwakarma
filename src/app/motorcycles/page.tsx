'use client';

import React from 'react';
import { Showroom } from '@/components/shared/Showroom';

export default function MotorcyclesPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            <div className="bg-gray-900 text-white py-12 text-center">
                <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
                    Honda Motorcycles
                </h1>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                    Experience the thrill of the ride with our premium collection of motorcycles.
                </p>
            </div>
            <Showroom initialCategory="motorcycle" />
        </div>
    );
}
