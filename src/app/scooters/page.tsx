'use client';

import React from 'react';
import { Showroom } from '@/components/shared/Showroom';

export default function ScootersPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            <div className="bg-gray-900 text-white py-12 text-center">
                <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
                    Honda Scooters
                </h1>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                    Smart, stylish, and efficient. Discover our range of scooters designed for urban life.
                </p>
            </div>
            <Showroom initialCategory="scooter" />
        </div>
    );
}
