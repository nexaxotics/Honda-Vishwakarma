'use client';

import React from 'react';

interface GoogleMapProps {
    className?: string;
}

export function GoogleMap({ className = '' }: GoogleMapProps) {
    // Google Maps embed for Rajauli, Nawada, Bihar
    const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.234!2d85.4052!3d25.0582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAzJzI5LjUiTiA4NcKwMjQnMTguNyJF!5e0!3m2!1sen!2sin!4v1234567890`;

    return (
        <div className={`w-full ${className}`}>
            <iframe
                src={mapSrc}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
                title="Sri Vishwakarma Honda Location"
            />
        </div>
    );
}
