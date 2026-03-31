'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { FaArrowsAltH, FaInfoCircle } from 'react-icons/fa';

interface Hotspot {
    frameIndex: number;
    x: number;
    y: number;
    title: string;
    description: string;
}

interface Bike360ViewerProps {
    frames: string[];
    hotspots?: Hotspot[];
    totalFrames: number;
    className?: string;
}

export const Bike360Viewer: React.FC<Bike360ViewerProps> = ({
    frames,
    hotspots = [],
    totalFrames,
    className,
}) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [lastX, setLastX] = useState(0);
    const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
    const viewerRef = useRef<HTMLDivElement>(null);

    // Preload images
    useEffect(() => {
        frames.forEach((src) => {
            const img = new window.Image();
            img.src = src;
        });
    }, [frames]);

    const handleStart = (clientX: number) => {
        setIsDragging(true);
        setLastX(clientX);
        setActiveHotspot(null);
    };

    const handleMove = (clientX: number) => {
        if (!isDragging) return;

        const delta = clientX - lastX;
        const sensitivity = 10; // Pixels per frame shift

        if (Math.abs(delta) > sensitivity) {
            const framesToShift = Math.floor(delta / sensitivity);

            setCurrentFrame((prev) => {
                let next = prev - framesToShift;
                if (next < 0) next = totalFrames - 1;
                if (next >= totalFrames) next = 0;
                return next;
            });

            setLastX(clientX);
        }
    };

    const handleEnd = () => {
        setIsDragging(false);
    };

    const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
    const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();

    const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
    const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => handleEnd();

    // Global listeners for mouse up to prevent stickiness
    useEffect(() => {
        window.addEventListener('mouseup', handleEnd);
        return () => window.removeEventListener('mouseup', handleEnd);
    }, []);

    const currentHotspots = hotspots.filter(h => h.frameIndex === currentFrame);

    return (
        <div
            ref={viewerRef}
            className={cn(
                "relative select-none bg-black rounded-3xl overflow-hidden group cursor-grab active:cursor-grabbing border-4 border-white/5 shadow-2xl",
                className
            )}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Showroom Background */}
            <div className="absolute inset-0 opacity-40">
                <Image
                    src="/images/360/showroom_bg.png"
                    alt="Showroom"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            {/* Bike Image */}
            <div className="relative w-full h-full flex items-center justify-center p-8 md:p-12 z-10 transition-transform duration-500 overflow-hidden">
                <Image
                    src={frames[currentFrame]}
                    alt={`Frame ${currentFrame}`}
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-none"
                    priority
                />
            </div>

            {/* Hotspots */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {currentHotspots.map((hotspot, idx) => (
                    <div
                        key={idx}
                        className="absolute pointer-events-auto"
                        style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveHotspot(activeHotspot === hotspot ? null : hotspot);
                            }}
                            className="relative flex items-center justify-center w-6 h-6 md:w-8 md:h-8"
                        >
                            <span className="absolute inset-0 rounded-full bg-honda-red animate-ping opacity-40" />
                            <span className="relative w-3 h-3 md:w-4 md:h-4 rounded-full bg-honda-red border-2 border-white shadow-lg" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Hotspot Info Bubble */}
            {activeHotspot && (
                <div
                    className="absolute z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-honda-red/20 max-w-[200px] md:max-w-[250px] animate-in zoom-in-95 duration-200"
                    style={{
                        left: `${activeHotspot.x}%`,
                        top: `${activeHotspot.y}%`,
                        transform: 'translate(-50%, -120%)'
                    }}
                >
                    <h4 className="text-sm font-black text-gray-900 uppercase italic mb-1">{activeHotspot.title}</h4>
                    <p className="text-xs text-gray-600 font-medium leading-tight">{activeHotspot.description}</p>
                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-honda-red/10" />
                </div>
            )}

            {/* Controls Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 opacity-60 group-hover:opacity-100 transition-opacity">
                <FaArrowsAltH className="text-white/60 text-sm" />
                <span className="text-[10px] text-white font-black uppercase tracking-widest whitespace-nowrap">
                    Drag to rotate machine
                </span>
            </div>

            {/* Logo Watermark */}
            <div className="absolute top-8 left-8 z-10 opacity-10 pointer-events-none">
                <h2 className="text-4xl font-black italic text-white tracking-tighter">HONDA 360°</h2>
            </div>
        </div>
    );
};
