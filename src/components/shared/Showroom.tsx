'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_BIKES, BIKES, Bike } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FaInfoCircle, FaTools, FaPalette, FaCube, FaCheck } from 'react-icons/fa';
import { formatPrice } from '@/lib/utils';
import { getAsset } from '@/lib/assets';

const COLOR_MAP: Record<string, string> = {
    'Black': '#000000',
    'Pearl Igneous Black': '#0a0a0a',
    'Matte Axis Grey Metallic': '#4a4a4a',
    'Rebel Red Metallic': '#dc2626',
    'Imperial Red Metallic': '#991b1b',
    'Striking Green': '#22c55e',
    'Decent Blue Metallic': '#2563eb',
    'Geny Grey Metallic': '#6b7280',
    'Sports Red': '#ef4444',
    'Pearl Siren Blue': '#3b82f6',
    'Pearl Precious White': '#f8fafc',
    'Matte Sangria Red Metallic': '#7f1d1d',
    'Matte Marvel Blue Metallic': '#1e3a8a',
    'Matte Marshal Green Metallic': '#064e3b',
    'Pearl Nightstar Black': '#0f172a',
    'Precious Red Metallic': '#b91c1c',
    'Ross White': '#ffffff',
    'Matte Iridium Gray Metallic': '#374151',
    'Candy Chromosphere Red': '#dc2626',
    'Matte Gunpowder Black Metallic': '#171717',
    'Grand Prix Red': '#ef4444',
    'Black with Gold Stripes': '#000000', // Complex gradients simulated as base color
    'Black with Red Stripes': '#000000',
    'Black with Blue Stripes': '#000000',
    'Green & Black': '#22c55e',
    'Red & Black': '#ef4444',
    'Blue & Black': '#3b82f6',
};

const getColorHex = (name: string) => {
    // Try to find exact match
    if (COLOR_MAP[name]) return COLOR_MAP[name];

    // Fallback: Check if name contains a known color
    const lowerName = name.toLowerCase();
    if (lowerName.includes('black')) return '#000000';
    if (lowerName.includes('red')) return '#dc2626';
    if (lowerName.includes('blue')) return '#2563eb';
    if (lowerName.includes('grey') || lowerName.includes('gray')) return '#6b7280';
    if (lowerName.includes('white')) return '#ffffff';
    if (lowerName.includes('green')) return '#16a34a';
    if (lowerName.includes('yellow')) return '#ca8a04';

    return '#cccccc'; // Default gray
};

interface ShowroomProps {
    initialCategory?: 'all' | 'motorcycle' | 'scooter' | 'ev';
    limit?: number;
}

export function Showroom({ initialCategory = 'all', limit }: ShowroomProps) {
    const [category, setCategory] = useState<'all' | 'motorcycle' | 'scooter' | 'ev'>(initialCategory);
    const [selectedBikeId, setSelectedBikeId] = useState<string | null>(null);

    const filteredBikes = category === 'all'
        ? [...ALL_BIKES, ...(BIKES.ev || [])] // Include EVs in ALL view if desired, or keep separate? Let's verify ALL_BIKES content first.
        // Actually ALL_BIKES is a flat array in constants.ts? No, I need to check constants.ts again.
        // BIKES is the object. ALL_BIKES is likely a flat array.
        // Let's assume ALL_BIKES needs updating or I should just use BIKES.
        // Let's rely on BIKES object from constants.ts instead of ALL_BIKES which might be outdated.
        : [];

    // Re-implementing filter logic based on BIKES object
    const getFilteredBikes = () => {
        if (category === 'all') {
            return [...BIKES.motorcycles, ...BIKES.scooters, ...(BIKES.ev || [])];
        } else if (category === 'motorcycle') {
            return BIKES.motorcycles;
        } else if (category === 'scooter') {
            return BIKES.scooters;
        } else if (category === 'ev') {
            return BIKES.ev || [];
        }
        return [];
    };

    const displayBikes = limit ? getFilteredBikes().slice(0, limit) : getFilteredBikes();

    return (
        <section className="section-padding bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            <div className="container-custom">
                {/* Header & Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                    <div>
                        <div className="inline-block px-4 py-1.5 bg-red-50 text-honda-red text-[10px] font-black uppercase tracking-[0.2em] mb-3 rounded-full border border-red-100">
                            The Collection
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 italic tracking-tighter uppercase leading-none">
                            EXPLORE THE <span className="text-honda-red">RANGE</span>
                        </h2>
                    </div>

                    <div className="flex bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 overflow-x-auto max-w-full">
                        {['all', 'motorcycle', 'scooter', 'ev'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat as any)}
                                className={`px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-all whitespace-nowrap ${category === cat
                                    ? 'bg-gray-900 text-white shadow-md'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                {cat === 'all' ? 'All Models' : (cat === 'ev' ? 'Electric' : cat + 's')}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bike Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayBikes.map((bike) => (
                        <BikeCard key={bike.id} bike={bike} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BikeCard({ bike }: { bike: Bike }) {
    const [selectedColor, setSelectedColor] = useState<string>(bike.colors?.[0] || 'Default');
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:shadow-black/5 border border-gray-100 hover:border-gray-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Area */}
            <div className="aspect-[4/3] relative flex items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                {/* Dynamic Background Blob based on color */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                    style={{ backgroundColor: getColorHex(selectedColor) }}
                />

                <div className="relative w-full h-full flex items-center justify-center transition-all duration-1000 group-hover:scale-110">
                    <Image
                        src={getAsset(bike.image)}
                        alt={`${bike.name} in ${selectedColor}`}
                        fill
                        className="object-contain transition-all duration-700 drop-shadow-2xl"
                    />
                </div>

                {/* "AI" Particle Effects (Pure CSS) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-honda-red/5 rounded-full blur-[40px] animate-pulse-slow" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-[30px] animate-pulse-slow delay-700" />
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 relative z-10 bg-white">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <Badge className="bg-gray-100 text-gray-500 border-none font-bold text-[10px] py-0.5 px-2 mb-2">
                            {bike.category.toUpperCase()}
                        </Badge>
                        <h3 className="text-2xl font-black text-gray-900 italic tracking-tighter leading-none">
                            {bike.name.toUpperCase()}
                        </h3>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] uppercase font-bold text-gray-400">Ex-Showroom</p>
                        <p className="text-xl font-black text-honda-red">{bike.price ? formatPrice(bike.price) : 'Announcing Soon'}</p>
                    </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-2 my-6 py-4 border-y border-gray-50">
                    <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-honda-red text-xs">
                            <FaTools />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase text-gray-400">Mileage</p>
                            <p className="text-xs font-bold">{bike.mileage || 'TBD'}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-blue-500 text-xs">
                            <FaInfoCircle />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase text-gray-400">Power</p>
                            <p className="text-xs font-bold">{bike.cc ? `${bike.cc} cc` : 'TBD'}</p>
                        </div>
                    </div>
                </div>

                {/* Color Selector */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-1">
                            <FaPalette /> Color Preference
                        </p>
                        <p className="text-[10px] font-bold text-gray-900 max-w-[50%] truncate">
                            {selectedColor}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {(bike.colors || []).map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-6 h-6 rounded-full border-2 transition-all hover:scale-125 ${selectedColor === color
                                    ? 'border-honda-red scale-110 shadow-md ring-2 ring-honda-red/20'
                                    : 'border-white ring-1 ring-gray-200'
                                    }`}
                                style={{ backgroundColor: getColorHex(color) }}
                                title={color}
                            >
                                {selectedColor === color && (
                                    <FaCheck className={`mx-auto text-[8px] ${getColorHex(color) === '#ffffff' ? 'text-black' : 'text-white'}`} />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <Link href={`/bikes/${bike.id}`} className="flex-1" prefetch={false}>
                        <Button variant="outline" className="w-full text-xs font-bold py-3">DETAILS</Button>
                    </Link>
                    <Link href="/test-ride" className="flex-1" prefetch={false}>
                        <Button className="w-full text-xs font-bold py-3 bg-gray-900 text-white hover:bg-honda-red border-none">
                            TEST RIDE
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
