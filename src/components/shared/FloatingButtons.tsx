'use client';

import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { BUSINESS_INFO } from '@/lib/constants';
import { getWhatsAppLink, getCallLink } from '@/lib/utils';

export function FloatingButtons() {
    const whatsappMessage = `Hello Sri Vishwakarma Honda! I'm interested in your bikes.`;

    return (
        <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-3">
            {/* WhatsApp Button */}
            <a
                href={getWhatsAppLink(BUSINESS_INFO.contact.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
            >
                <FaWhatsapp className="text-2xl" />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    WhatsApp Now
                </span>
            </a>

            {/* Call Button */}
            <a
                href={getCallLink(BUSINESS_INFO.contact.phones[0])}
                className="group relative bg-honda-red hover:bg-honda-red-dark text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
                aria-label="Call Now"
            >
                <FaPhone className="text-2xl" />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Call Now
                </span>
            </a>
        </div>
    );
}
