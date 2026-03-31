'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaStar, FaCheckCircle, FaInfoCircle, FaTools } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { StarRating } from '@/components/ui/StarRating';
import { Badge } from '@/components/ui/Badge';
import { GoogleMap } from '@/components/shared/GoogleMap';
import { Showroom } from '@/components/shared/Showroom';
import { VideoCard } from '@/components/ui/VideoCard';
import { BUSINESS_INFO, FEATURED_BIKES, TESTIMONIALS } from '@/lib/constants';
import { formatPrice, getWhatsAppLink, getCallLink } from '@/lib/utils';

export default function HomePage() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-honda-red to-red-900 text-white section-padding overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in text-center lg:text-left">
                            <Badge variant="default" className="bg-white/20 text-white mb-6 border border-white/30 backdrop-blur-sm px-4 py-1.5 font-bold mx-auto lg:mx-0 w-fit">
                                ⭐ AUTHORIZED HONDA DEALER SINCE {BUSINESS_INFO.established}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-[1.1] tracking-tighter italic">
                                {BUSINESS_INFO.name.toUpperCase()}
                            </h1>
                            <p className="text-xl md:text-3xl mb-3 md:mb-4 text-honda-gold font-bold italic tracking-tight">
                                {BUSINESS_INFO.tagline}
                            </p>
                            <p className="text-lg md:text-xl mb-8 md:mb-10 text-white/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Experience world-class engineering and reliability. Your premier destination for Honda two-wheelers in Rajauli.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 justify-center lg:justify-start">
                                <a href={getCallLink(BUSINESS_INFO.contact.phones[0])} className="w-full sm:w-auto sm:flex-1 sm:min-w-[180px]">
                                    <Button size="lg" variant="secondary" className="w-full font-black py-6 md:py-7 shadow-xl shadow-black/20 hover:scale-105 transition-transform">
                                        <FaPhone className="mr-2" /> CALL NOW
                                    </Button>
                                </a>
                                <Link href="/test-ride" className="w-full sm:w-auto sm:flex-1 sm:min-w-[180px]">
                                    <Button size="lg" className="w-full bg-white text-honda-red hover:bg-gray-100 font-black py-6 md:py-7 shadow-xl shadow-black/20 border-none hover:scale-105 transition-transform">
                                        BOOK TEST RIDE
                                    </Button>
                                </Link>
                            </div>

                            {/* Google Rating */}
                            <div className="mt-10 md:mt-12 flex items-center gap-4 md:gap-6 bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 w-fit mx-auto lg:mx-0">
                                <div className="flex flex-col items-center border-r border-white/20 pr-4 md:pr-6">
                                    <p className="text-3xl md:text-4xl font-black text-honda-gold">{BUSINESS_INFO.googleRating.stars}</p>
                                    <StarRating rating={BUSINESS_INFO.googleRating.stars} size="sm" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm md:text-lg font-black uppercase tracking-widest text-white/90">Customer Trust</p>
                                    <p className="text-[10px] md:text-sm text-white/60 font-bold">
                                        {BUSINESS_INFO.googleRating.reviews}+ Professional Reviews
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image Section - Dynamic */}
                        <div className="relative h-[400px] lg:h-[550px] flex items-center justify-center perspective-[1000px] mt-8 lg:mt-0">
                            {/* Animated Background Rings Removed */}

                            <div className="relative w-full h-full p-8 flex items-center justify-center z-10">
                                <Image
                                    src="/images/honda_sp160.png"
                                    alt="Honda SP 160"
                                    fill
                                    className="object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] animate-slide-up"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                />
                                {/* Dynamic Sparkles */}
                                <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-honda-gold rounded-full animate-ping" />
                                <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                            </div>

                            {/* Floating Highlight Card */}
                            <div className="absolute bottom-12 -left-8 bg-white p-5 rounded-2xl shadow-2xl border text-gray-900 hidden md:block animate-bounce shadow-honda-red/20 z-20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-honda-red rounded-full flex items-center justify-center shadow-lg shadow-honda-red/40 animate-pulse-slow">
                                        <FaCheckCircle className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">New Gen Power</p>
                                        <p className="text-lg font-black italic tracking-tighter">SP 160 EDITION</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Honda Experience Video Section */}
            <section className="section-padding py-12 bg-black overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

                <div className="container-custom relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                        <div>
                            <Badge className="mb-4 bg-honda-red text-white font-bold py-1 px-4 uppercase tracking-widest w-fit">
                                THE FUTURE IS HERE
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-tight">
                                Honda Experience
                            </h2>
                        </div>
                        <p className="text-white/60 max-w-md font-medium text-right md:text-left hidden md:block">
                            Witness the evolution of mobility. From electric innovation to racing DNA.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
                        {/* Primary Video - EV */}
                        <div className="lg:col-span-8 h-[400px] lg:h-full">
                            <VideoCard
                                src="/video/EV.mp4"
                                className="w-full h-full border border-white/10"
                                badge="ELECTRIC EVOLUTION"
                                title="The Ride That Moves You"
                                description="Experience the silent revolution. Honda's latest electric mobility solutions are here to change the way you move."
                            />
                        </div>

                        {/* Secondary Videos Stack */}
                        <div className="lg:col-span-4 grid grid-rows-2 gap-6 h-[500px] lg:h-full">
                            <VideoCard
                                src="/video/BigWing.webm"
                                className="w-full h-full border border-white/10"
                                badge="HONDA BIGWING"
                                title="Premium Racing DNA"
                                description="Unleash the power of high-performance engineering."
                            />
                            <VideoCard
                                src="/video/Honda-Hornet.mp4"
                                className="w-full h-full border border-white/10"
                                badge="STREET SPORTS"
                                title="Hornet 2.0"
                                description="Fly against the wind. The definition of street aggression."
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Showroom Section - Featured Only */}
            <Showroom limit={6} />

            <div className="text-center pb-12 bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                <Link href="/motorcycles">
                    <Button variant="outline" className="text-gray-900 border-gray-900 font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-gray-900 hover:text-white transition-all">
                        View All Models
                    </Button>
                </Link>
            </div>

            {/* Testimonials */}
            <section className="section-padding bg-gray-900 text-white relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
                <div className="container-custom relative z-10">
                    <div className="text-center mb-12 md:mb-16">
                        <Badge className="mb-4 bg-honda-gold text-gray-900 font-black py-1 px-4">VOICE OF OUR RIDERS</Badge>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase leading-tight">
                            What Our Customers Say
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 bg-white/5 w-fit mx-auto p-4 md:p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                            <StarRating rating={BUSINESS_INFO.googleRating.stars} size="lg" />
                            <div className="hidden sm:block h-8 w-[1px] bg-white/20" />
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-black text-honda-gold">{BUSINESS_INFO.googleRating.stars}/5.0</span>
                                <span className="text-white/60 font-medium text-sm">on Google Maps</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, idx) => (
                            <Card key={idx} className="bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/[0.08] transition-colors">
                                <CardContent className="p-8">
                                    <StarRating rating={testimonial.rating} className="mb-6" />
                                    <p className="text-gray-300 mb-8 italic font-medium leading-relaxed text-lg">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                        <div>
                                            <p className="font-black text-xl italic tracking-tight uppercase">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-[10px] text-honda-gold font-bold uppercase tracking-widest mt-1">Verified Customer</p>
                                        </div>
                                        {testimonial.badge && (
                                            <Badge className="bg-honda-gold/20 text-honda-gold border-honda-gold/30 font-black text-[10px] py-1">
                                                {testimonial.badge}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12 md:mb-20">
                        <Badge className="mb-4 bg-gray-100 text-gray-500 font-bold py-1 px-4">HONDA PROMISE</Badge>
                        <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 italic tracking-tighter uppercase leading-tight">
                            The Sri Vishwakarma Edge
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '✓',
                                title: 'OFFICIAL DEALER',
                                desc: 'Every booking backed by direct Honda authorization and trust.',
                                color: 'bg-honda-red/10 text-honda-red'
                            },
                            {
                                icon: '⭐',
                                title: 'PREMIUM SERVICE',
                                desc: 'Consistently rated 4.6 stars for sales and after-sales support.',
                                color: 'bg-honda-gold/10 text-honda-gold'
                            },
                            {
                                icon: '🔧',
                                title: 'MASTER WORKSHOP',
                                desc: 'Certified engineers and 100% genuine Honda spare parts guarantee.',
                                color: 'bg-blue-500/10 text-blue-500'
                            },
                            {
                                icon: '💳',
                                title: 'EXPRESS FINANCE',
                                desc: 'Instant approvals and the lowest interest rates in Bihar.',
                                color: 'bg-green-500/10 text-green-500'
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center group p-8 rounded-[2rem] hover:bg-gray-50 transition-all duration-300 border-2 border-transparent hover:border-gray-100">
                                <div className={`w-20 h-20 ${item.color} rounded-3xl mx-auto flex items-center justify-center text-4xl mb-8 transform group-hover:rotate-12 transition-transform shadow-lg shadow-black/5`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tighter italic">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="section-padding bg-gray-50 border-t border-gray-100">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in text-center lg:text-left">
                            <Badge className="mb-4 bg-honda-red text-white font-bold py-1 px-4 uppercase tracking-widest mx-auto lg:mx-0 w-fit">Visit Us</Badge>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 md:mb-10 italic tracking-tighter uppercase leading-tight">
                                Our Showroom
                            </h2>

                            <div className="space-y-10">
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 mx-auto lg:mx-0">
                                        <div className="w-14 h-14 md:w-16 md:h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center group-hover:bg-honda-red group-hover:text-white transition-all">
                                            <FaMapMarkerAlt className="text-xl md:text-2xl" />
                                        </div>
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <h3 className="font-black text-lg md:text-xl italic mb-1 md:mb-2 tracking-tight uppercase">Base Location</h3>
                                        <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed">
                                            {BUSINESS_INFO.address.street}<br />
                                            {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}<br />
                                            PIN: {BUSINESS_INFO.address.pincode}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center group-hover:bg-honda-red group-hover:text-white transition-all">
                                            <FaClock className="text-2xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-xl italic mb-2 tracking-tight uppercase">Operating Hours</h3>
                                        <p className="text-gray-500 font-medium text-lg">
                                            {BUSINESS_INFO.hours.display}
                                        </p>
                                        <p className="text-honda-red text-sm font-bold mt-1 uppercase tracking-widest">Open Today</p>
                                    </div>
                                </div>

                                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS_INFO.location.latitude},${BUSINESS_INFO.location.longitude}`} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1">
                                        <Button size="lg" variant="primary" className="w-full font-black py-6 md:py-7 shadow-xl shadow-honda-red/20 rounded-2xl">
                                            GET DIRECTIONS
                                        </Button>
                                    </a>
                                    <Link href="/contact" className="w-full sm:flex-1">
                                        <Button size="lg" variant="outline" className="w-full font-black py-6 md:py-7 border-2 border-gray-900 text-gray-900 rounded-2xl">
                                            MORE INFO
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="h-[350px] md:h-[500px] lg:h-[600px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white group">
                            <GoogleMap className="w-full h-full transform group-hover:scale-105 transition-transform duration-1000" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
