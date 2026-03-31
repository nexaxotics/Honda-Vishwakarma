import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { BUSINESS_INFO, TRANSLATIONS } from '@/lib/constants';
import { formatPhoneNumber } from '@/lib/utils';

interface FooterProps {
    lang: 'en' | 'hi';
}

export function Footer({ lang }: FooterProps) {
    const t = TRANSLATIONS[lang];
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
                    {/* About Section */}
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

                    {/* Contact Section */}
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

                    {/* Quick Links */}
                    <div className="text-center md:text-left border-t border-b border-white/5 py-8 md:py-0 md:border-none">
                        <h4 className="text-lg font-bold text-white mb-6 md:mb-4 uppercase tracking-tight italic">Quick Links</h4>
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

                    {/* Opening Hours */}
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
                                Official Honda Website →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="container-custom py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div className="space-y-1">
                            <p className="text-sm font-bold tracking-tight">
                                © {currentYear} {BUSINESS_INFO.name}
                            </p>
                            <p className="text-xs opacity-40 font-medium">
                                Authorized Dealer • Rajauli, Bihar
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] md:text-right opacity-40 leading-relaxed max-w-sm md:ml-auto">
                                Honda and the Honda logo are trademarks of Honda Motor Co., Ltd.
                                This is an authorized {BUSINESS_INFO.name.toUpperCase()} dealership website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
