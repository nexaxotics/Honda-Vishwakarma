import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { BUSINESS_INFO } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';
import { SHARED_TRANSLATIONS } from '@/lib/translations';

interface FooterProps {
    lang: 'en' | 'hi';
}

export function Footer({ lang }: FooterProps) {
    const sharedT = SHARED_TRANSLATIONS[lang];
    const t = {
        en: {
            authorizedDealer: 'Authorized Honda Two-Wheeler Dealer',
            established: 'Established',
            contact: 'Contact',
            motorcycles: 'Motorcycles',
            scooters: 'Scooters',
            testRide: 'Test Ride',
            service: 'Service',
            finance: 'Finance & Insurance',
            about: 'About Us',
            openingHours: 'Opening Hours',
            bottomNote: `Honda and the Honda logo are trademarks of Honda Motor Co., Ltd. This is an authorized ${BUSINESS_INFO.name.toUpperCase()} dealership website.`,
        },
        hi: {
            authorizedDealer: '\u0905\u0927\u093f\u0915\u0943\u0924 \u0939\u094b\u0902\u0921\u093e \u091f\u0942-\u0935\u094d\u0939\u0940\u0932\u0930 \u0921\u0940\u0932\u0930',
            established: '\u0938\u094d\u0925\u093e\u092a\u093f\u0924',
            contact: '\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902',
            motorcycles: '\u092e\u094b\u091f\u0930\u0938\u093e\u0907\u0915\u093f\u0932',
            scooters: '\u0938\u094d\u0915\u0942\u091f\u0930',
            testRide: '\u091f\u0947\u0938\u094d\u091f \u0930\u093e\u0907\u0921',
            service: '\u0938\u0930\u094d\u0935\u093f\u0938',
            finance: '\u092b\u093e\u0907\u0928\u0947\u0902\u0938 \u0914\u0930 \u0907\u0902\u0936\u094d\u092f\u094b\u0930\u0947\u0902\u0938',
            about: '\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902',
            openingHours: '\u0916\u0941\u0932\u0928\u0947 \u0915\u093e \u0938\u092e\u092f',
            bottomNote: `Honda \u0914\u0930 Honda \u0932\u094b\u0917\u094b, Honda Motor Co., Ltd. \u0915\u0947 \u091f\u094d\u0930\u0947\u0921\u092e\u093e\u0930\u094d\u0915 \u0939\u0948\u0902. \u092f\u0939 ${BUSINESS_INFO.name.toUpperCase()} \u0915\u0940 \u0905\u0927\u093f\u0915\u0943\u0924 \u0921\u0940\u0932\u0930\u0936\u093f\u092a \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u0939\u0948.`,
        },
    }[lang];
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                            {BUSINESS_INFO.name}
                        </h3>
                        <p className="text-sm mb-2 opacity-80">{BUSINESS_INFO.tagline}</p>
                        <p className="text-sm text-honda-gold font-black uppercase tracking-widest">
                            {t.authorizedDealer}
                        </p>
                        <p className="text-sm mt-3 font-medium">
                            {t.established}: {BUSINESS_INFO.established}
                        </p>
                        <p className="text-[10px] mt-4 opacity-50 font-bold uppercase tracking-widest">
                            GST: {BUSINESS_INFO.gst}
                        </p>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold text-white mb-6 md:mb-4 uppercase tracking-tight italic">
                            {t.contact}
                        </h4>
                        <div className="space-y-4 text-sm font-medium">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                                <FaMapMarkerAlt className="text-honda-red md:mt-1 flex-shrink-0" />
                                <div className="opacity-80 leading-relaxed">
                                    <p>{BUSINESS_INFO.address.street}</p>
                                    <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                                <FaPhone className="text-honda-red md:mt-1" />
                                <div className="opacity-80">
                                    {BUSINESS_INFO.contact.phones.map((phone, idx) => (
                                        <p key={idx}>{formatPhoneNumber(phone)}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                                <FaEnvelope className="text-honda-red md:mt-1" />
                                <div className="opacity-80">
                                    {BUSINESS_INFO.contact.emails.map((email, idx) => (
                                        <p key={idx} className="break-all text-sm md:text-xs">{email}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center md:text-left border-t border-b border-white/5 py-8 md:py-0 md:border-none">
                        <h4 className="text-lg font-bold text-white mb-6 md:mb-4 uppercase tracking-tight italic">{sharedT.quickLinks}</h4>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-4 md:space-y-3 text-sm font-semibold">
                            {[
                                { name: t.motorcycles, href: '/motorcycles' },
                                { name: t.scooters, href: '/scooters' },
                                { name: t.testRide, href: '/test-ride' },
                                { name: t.service, href: '/service' },
                                { name: t.finance, href: '/finance' },
                                { name: t.about, href: '/about' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-honda-red transition-colors inline-block py-1">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold text-white mb-6 md:mb-4 uppercase tracking-tight italic">
                            {t.openingHours}
                        </h4>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-sm font-medium">
                            <FaClock className="text-honda-red md:mt-1" />
                            <p className="opacity-80">{BUSINESS_INFO.hours.display}</p>
                        </div>
                        <div className="mt-8 md:mt-6">
                            <a
                                href={BUSINESS_INFO.social.officialHonda}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-honda-red text-white py-3 px-6 rounded-xl transition-all font-bold text-sm"
                            >
                                {sharedT.officialHondaWebsite} &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5">
                <div className="container-custom py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div className="space-y-1">
                            <p className="text-sm font-bold tracking-tight">
                                Copyright {currentYear} {BUSINESS_INFO.name}
                            </p>
                            <p className="text-xs opacity-40 font-medium">
                                {sharedT.authorizedDealerRajauli}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] md:text-right opacity-40 leading-relaxed max-w-sm md:ml-auto">
                                {t.bottomNote}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
