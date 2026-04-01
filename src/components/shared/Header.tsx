'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaPhone, FaChevronDown } from 'react-icons/fa';
import { BUSINESS_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { getCallLink } from '@/lib/utils';
import { SHARED_TRANSLATIONS } from '@/lib/translations';

interface HeaderProps {
    lang: 'en' | 'hi';
    onLanguageChange: (lang: 'en' | 'hi') => void;
}

export function Header({ lang, onLanguageChange }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const sharedT = SHARED_TRANSLATIONS[lang];
    const t = {
        en: {
            home: 'Home',
            motorcycles: 'Motorcycles',
            scooters: 'Scooters',
            testRide: 'Test Ride',
            service: 'Service',
            finance: 'Finance & Insurance',
            reviews: 'Reviews',
            about: 'About Us',
            contact: 'Contact',
            authorizedDealer: 'Authorized Honda Two-Wheeler Dealer',
            established: 'Established',
            bookTestRide: 'Book Test Ride',
        },
        hi: {
            home: '\u0939\u094b\u092e',
            motorcycles: '\u092e\u094b\u091f\u0930\u0938\u093e\u0907\u0915\u093f\u0932',
            scooters: '\u0938\u094d\u0915\u0942\u091f\u0930',
            testRide: '\u091f\u0947\u0938\u094d\u091f \u0930\u093e\u0907\u0921',
            service: '\u0938\u0930\u094d\u0935\u093f\u0938',
            finance: '\u092b\u093e\u0907\u0928\u0947\u0902\u0938 \u0914\u0930 \u0907\u0902\u0936\u094d\u092f\u094b\u0930\u0947\u0902\u0938',
            reviews: '\u0938\u092e\u0940\u0915\u094d\u0937\u093e',
            about: '\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902',
            contact: '\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902',
            authorizedDealer: '\u0905\u0927\u093f\u0915\u0943\u0924 \u0939\u094b\u0902\u0921\u093e \u091f\u0942-\u0935\u094d\u0939\u0940\u0932\u0930 \u0921\u0940\u0932\u0930',
            established: '\u0938\u094d\u0925\u093e\u092a\u093f\u0924',
            bookTestRide: '\u091f\u0947\u0938\u094d\u091f \u0930\u093e\u0907\u0921 \u092c\u0941\u0915 \u0915\u0930\u0947\u0902',
        },
    }[lang];

    const navigation = [
        { name: t.home, href: '/' },
        {
            name: sharedT.products,
            dropdown: true,
            items: [
                { name: t.motorcycles, href: '/motorcycles' },
                { name: t.scooters, href: '/scooters' },
            ],
        },
        {
            name: sharedT.services,
            dropdown: true,
            items: [
                { name: t.testRide, href: '/test-ride' },
                { name: t.service, href: '/service' },
                { name: t.finance, href: '/finance' },
            ],
        },
        { name: t.reviews, href: '/reviews' },
        { name: t.about, href: '/about' },
        { name: t.contact, href: '/contact' },
    ];

    return (
        <header className="relative z-50 bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-100">
            <div className="bg-gradient-to-r from-honda-red to-red-800 text-white py-2.5">
                <div className="container-custom flex justify-between items-center text-xs md:text-sm font-medium">
                    <div className="flex items-center gap-6">
                        <span className="hidden md:flex items-center gap-2 opacity-90">
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                            {t.authorizedDealer}
                        </span>
                        <span className="opacity-80">
                            {t.established} {BUSINESS_INFO.established}
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href={getCallLink(BUSINESS_INFO.contact.phones[0])}
                            className="flex items-center gap-2 hover:text-white opacity-90 hover:opacity-100"
                        >
                            <FaPhone className="text-xs" />
                            <span className="hidden sm:inline font-bold">
                                {BUSINESS_INFO.contact.phones[0]}
                            </span>
                        </a>

                        <button
                            onClick={() => onLanguageChange(lang === 'en' ? 'hi' : 'en')}
                            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold"
                        >
                            {lang === 'en' ? '\u0939\u093f\u0902' : 'EN'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-custom">
                <div className="flex items-center justify-between py-3">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg shadow border p-1">
                            <Image
                                src="/images/honda-logo.png"
                                alt="Honda Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-col leading-tight">
                            <span className="text-lg md:text-2xl font-black text-honda-red tracking-tight">
                                {BUSINESS_INFO.name.toUpperCase()}
                            </span>
                            <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">
                                {BUSINESS_INFO.tagline}
                            </span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex flex-1 justify-center">
                        <nav className="flex items-center gap-6">
                            {navigation.map((item) =>
                                item.dropdown ? (
                                    <div key={item.name} className="relative group">
                                        <button className="flex items-center gap-1 text-sm font-bold uppercase text-gray-600 hover:text-honda-red">
                                            {item.name}
                                            <FaChevronDown className="text-xs" />
                                        </button>

                                        <div className="absolute left-0 top-full pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all min-w-[200px]">
                                            <div className="bg-white border rounded-lg shadow-lg p-2 flex flex-col gap-1">
                                                {item.items.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-honda-red hover:text-white rounded-md transition-colors"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href as string}
                                        className="text-sm font-bold uppercase text-gray-600 hover:text-honda-red"
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )}
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/test-ride" className="hidden lg:block">
                            <Button className="bg-gray-900 hover:bg-honda-red text-white font-bold px-5 py-2 rounded-xl">
                                {t.bookTestRide}
                            </Button>
                        </Link>

                        <button
                            className="lg:hidden p-3 text-xl text-gray-800 hover:text-honda-red bg-gray-50 rounded-xl"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/60 z-40"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <nav className="fixed right-0 top-0 bottom-0 w-[280px] bg-white z-50 p-6 shadow-xl flex flex-col">
                            <div className="flex justify-between mb-6">
                                <span className="font-bold text-lg">{sharedT.menu}</span>
                                <FaTimes onClick={() => setMobileMenuOpen(false)} />
                            </div>

                            <div className="flex flex-col gap-3">
                                {navigation.map((item) =>
                                    item.dropdown ? (
                                        <div key={item.name} className="space-y-2">
                                            <span className="text-lg font-semibold text-gray-900">
                                                {item.name}
                                            </span>
                                            <div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-100">
                                                {item.items.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="text-base font-medium text-gray-700 hover:text-honda-red"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            key={item.name}
                                            href={item.href as string}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-lg font-semibold text-gray-700 hover:text-honda-red"
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                )}
                            </div>

                            <div className="mt-auto space-y-3">
                                <Link href="/test-ride">
                                    <Button className="w-full bg-honda-red text-white py-3 rounded-xl">
                                        {t.bookTestRide.toUpperCase()}
                                    </Button>
                                </Link>

                                <a href={getCallLink(BUSINESS_INFO.contact.phones[0])}>
                                    <Button variant="outline" className="w-full py-3">
                                        <FaPhone className="mr-2" /> {sharedT.callNow.toUpperCase()}
                                    </Button>
                                </a>
                            </div>
                        </nav>
                    </>
                )}
            </div>
        </header>
    );
}
