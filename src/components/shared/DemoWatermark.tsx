'use client';

import React, { useEffect, useState } from 'react';
import { ASSET_SOURCE } from '@/config/assetSource';

export function DemoWatermark() {
    const [enabled, setEnabled] = useState(ASSET_SOURCE.demoMode);

    useEffect(() => {
        // Check for dev tools override
        const override = localStorage.getItem('honda_asset_source_override');
        if (override) {
            try {
                const parsed = JSON.parse(override);
                if (typeof parsed.demoMode !== 'undefined') {
                    setEnabled(parsed.demoMode);
                }
            } catch (e) {
                // ignore
            }
        }
    }, []);

    if (!enabled) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none opacity-30 flex items-center justify-center">
            <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-24 opacity-10 -rotate-12 scale-150 transform">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-4xl font-black text-white uppercase tracking-widest whitespace-nowrap border-4 border-white p-4">
                        DEMO ASSETS
                    </div>
                ))}
            </div>
            <div className="fixed bottom-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg opacity-80">
                DEMO MODE ENABLED
            </div>
        </div>
    );
}
