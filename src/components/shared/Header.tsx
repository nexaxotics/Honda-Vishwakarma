'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { BUSINESS_INFO, TRANSLATIONS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { getCallLink } from '@/lib/utils';

interface HeaderProps {
    lang: 'en' | 'hi';
    onLanguageChange: (lang: 'en' | 'hi') => void;
}

export function Header({ lang, onLanguageChange }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t = TRANSLATIONS[lang];

    const navigation = [
        { name: t.home, href: '/' },
        { name: t.motorcycles, href: '/motorcycles' },
        { name: t.scooters, href: '/scooters' },
        { name: t.testRide, href: '/test-ride' },
        { name: t.service, href: '/service' },
        { name: t.finance, href: '/finance' },
        { name: t.reviews, href: '/reviews' },
        { name: t.about, href: '/about' },
        { name: t.contact, href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-100 transition-all duration-300">
            {/* Top Bar - Red Honda Brand Strip */}
            <div className="bg-gradient-to-r from-honda-red to-red-800 text-white py-2.5">
                <div className="container-custom flex justify-between items-center text-xs md:text-sm font-medium tracking-wide">
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
                            className="flex items-center gap-2 hover:text-white transition-colors opacity-90 hover:opacity-100"
                        >
                            <FaPhone className="text-xs" />
                            <span className="hidden sm:inline font-bold">{BUSINESS_INFO.contact.phones[0]}</span>
                        </a>
                        <button
                            onClick={() => onLanguageChange(lang === 'en' ? 'hi' : 'en')}
                            className="flex items-center justify-center w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-xs font-bold border border-white/20"
                        >
                            {lang === 'en' ? 'हिं' : 'EN'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container-custom">
                <div className="flex justify-between items-center py-4 md:py-5 transition-all duration-300">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-105 duration-300">
                            <Image
                                src="/images/honda-logo.png"
                                alt="Honda Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-3xl font-black text-honda-red leading-none tracking-tighter group-hover:text-red-700 transition-colors">
                                {BUSINESS_INFO.name.toUpperCase()}
                            </span>
                            <span className="text-[9px] md:text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase mt-1 group-hover:text-gray-800 transition-colors">
                                {BUSINESS_INFO.tagline}
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-[11px] xl:text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-honda-red transition-colors py-2 group whitespace-nowrap"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-honda-red transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
                            </Link>
                        ))}
                        <Link href="/test-ride">
                            <Button className="bg-gray-900 hover:bg-honda-red text-white font-bold uppercase tracking-wider text-[10px] xl:text-xs px-4 xl:px-6 py-2 xl:py-3 rounded-xl shadow-lg hover:shadow-honda-red/30 transition-all hover:-translate-y-0.5 ml-1 xl:ml-4 whitespace-nowrap">
                                Book Test Ride
                            </Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-3 text-2xl text-gray-800 hover:text-honda-red transition-colors bg-gray-50 rounded-xl hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Navigation Overlay */}
                {mobileMenuOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <nav className="fixed right-0 top-0 bottom-0 w-[300px] bg-white z-50 lg:hidden shadow-2xl p-8 animate-scale-in flex flex-col h-full">
                            <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
                                <span className="text-lg font-black text-gray-900 uppercase tracking-tighter">Menu</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <FaTimes className="text-xl" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2 overflow-y-auto flex-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-lg font-bold text-gray-600 hover:text-honda-red hover:bg-red-50 hover:pl-4 transition-all py-3 px-2 rounded-lg flex items-center justify-between group"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span>{item.name}</span>
                                        <span className="opacity-0 group-hover:opacity-100 text-honda-red transition-opacity">→</span>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                                <Link href="/test-ride" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-honda-red text-white font-bold py-4 rounded-xl shadow-lg shadow-red-200">
                                        BOOK TEST RIDE
                                    </Button>
                                </Link>
                                <a href={getCallLink(BUSINESS_INFO.contact.phones[0])}>
                                    <Button variant="outline" className="w-full font-bold py-4 border-2 border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 rounded-xl">
                                        <FaPhone className="mr-2" /> CALL NOW
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
