'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaWhatsapp, FaInfoCircle, FaTools, FaCheckCircle, FaChevronRight, FaArrowsAltH } from 'react-icons/fa';
import { ALL_BIKES, BUSINESS_INFO } from '@/lib/constants';
import { formatPrice, getWhatsAppLink, calculateOnRoadPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Bike360Viewer } from '@/components/shared/Bike360Viewer';

export default function BikeDetailPage() {
    const { slug } = useParams();
    const bike = ALL_BIKES.find((b) => b.id === slug);
    const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'colors'>('specs');

    if (!bike) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Bike Not Found</h1>
                    <p className="text-gray-600 mb-8">The bike you are looking for doesn't exist in our catalog.</p>
                    <Link href="/motorcycles">
                        <Button>Browse All Bikes</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const onRoadPrice = calculateOnRoadPrice(bike.price || 0);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-100">
                <div className="container-custom py-4 flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <Link href="/" className="hover:text-honda-red">Home</Link>
                    <FaChevronRight className="text-[10px]" />
                    <Link href={bike.category === 'scooter' ? '/scooters' : '/motorcycles'} className="hover:text-honda-red">
                        {bike.category}s
                    </Link>
                    <FaChevronRight className="text-[10px]" />
                    <span className="text-gray-900">Honda {bike.name}</span>
                </div>
            </div>

            <div className="container-custom section-padding">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Image & Quick Stats */}
                    <div className="space-y-10 lg:sticky lg:top-24">
                        {bike.view360 ? (
                            <div className="group">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="bg-gray-900 text-white text-[10px] font-black py-1 px-3 rounded-full tracking-[0.2em] italic">
                                        VIRTUAL SHOWROOM
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 tracking-widest">
                                        <FaArrowsAltH className="animate-pulse" /> DRAG TO EXPLORE
                                    </div>
                                </div>
                                <Bike360Viewer
                                    frames={bike.view360.frames}
                                    totalFrames={bike.view360.totalFrames}
                                    hotspots={bike.hotspots as any}
                                    className="aspect-[4/3] w-full"
                                />
                                <p className="text-[10px] text-gray-400 mt-4 text-center font-bold tracking-widest uppercase">
                                    Interact with the machine to see key features
                                </p>
                            </div>
                        ) : (
                            <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-8 right-8 z-10">
                                    <Badge variant="default" className="bg-honda-red text-white py-1.5 px-4 font-black italic tracking-tighter">
                                        HONDA ORIGINAL
                                    </Badge>
                                </div>
                                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                                <div className="aspect-[4/3] relative z-10">
                                    <Image
                                        src={bike.image}
                                        alt={bike.name}
                                        fill
                                        className="object-contain transform transition-transform duration-1000 group-hover:scale-110 drop-shadow-2xl"
                                        priority
                                    />
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { label: 'Engine', value: `${bike.cc}cc` },
                                { label: 'Power', value: (bike.power || '').split('@')[0] },
                                { label: 'Mileage', value: bike.mileage },
                                { label: 'Weight', value: bike.weight },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white p-3 rounded-xl border shadow-sm text-center">
                                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                                    <p className="font-bold text-gray-900">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info & Pricing */}
                    <div className="space-y-8">
                        <div>
                            {bike.tagline && (
                                <Badge className="bg-honda-red/10 text-honda-red border-honda-red/20 mb-4 py-1 px-4 text-[10px] font-black tracking-[0.2em] italic uppercase">
                                    {bike.tagline}
                                </Badge>
                            )}
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 italic uppercase tracking-tighter leading-none">
                                {bike.name}
                            </h1>
                            <p className="text-lg text-gray-500 mb-8 leading-relaxed italic font-medium max-w-xl">
                                {bike.description}
                            </p>

                            <div className="flex flex-wrap gap-6 items-stretch mb-10">
                                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-2 border-honda-red/5 flex-1 min-w-[300px] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-honda-red/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500" />
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mb-2">Estimated On-Road Price</p>
                                    <p className="text-6xl font-black text-honda-red tracking-tighter italic">
                                        {formatPrice(onRoadPrice)}<span className="text-2xl ml-1 text-gray-300">*</span>
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-gray-100 text-[10px] text-gray-400 space-y-1.5 font-bold tracking-widest">
                                        <div className="flex justify-between uppercase">
                                            <span>Ex-Showroom Price</span>
                                            <span className="text-gray-600">{formatPrice(bike.price || 0)}</span>
                                        </div>
                                        <div className="flex justify-between uppercase">
                                            <span>RTO & Insurance</span>
                                            <span className="text-gray-600">Included*</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/finance" className="flex-1 min-w-[300px]">
                                    <div className="bg-gray-900 p-8 rounded-[2.5rem] border-2 border-transparent hover:border-honda-red/20 transition-all h-full flex flex-col justify-between group">
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] mb-2">Flexible Finance</p>
                                            <p className="text-4xl font-black text-white italic tracking-tighter">₹2,850<span className="text-gray-500 text-lg">/mo</span></p>
                                        </div>
                                        <p className="text-xs text-honda-red mt-6 font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all italic">
                                            CALCULATE EMI <FaChevronRight className="text-[10px]" />
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 border-b">
                                <Link href="/test-ride">
                                    <Button variant="primary" size="lg" className="w-full font-black py-7 italic text-lg shadow-xl shadow-honda-red/20">
                                        BOOK TEST RIDE
                                    </Button>
                                </Link>
                                <a
                                    href={getWhatsAppLink(
                                        BUSINESS_INFO.contact.whatsapp,
                                        `Hi! I want to get the best on-road price quote for Honda ${bike.name}.`
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" size="lg" className="w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-black py-7 italic text-lg">
                                        <FaWhatsapp className="text-2xl" /> GET BEST QUOTE
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Tabs for Details */}
                        <div>
                            <div className="flex border-b mb-6 overflow-x-auto gap-4 scrollbar-hide">
                                {[
                                    { id: 'specs', label: 'SPECIFICATIONS', icon: <FaInfoCircle /> },
                                    { id: 'features', label: 'KEY FEATURES', icon: <FaCheckCircle /> },
                                    { id: 'colors', label: 'RANGE OF COLORS', icon: <FaTools /> },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`flex items-center gap-2 px-6 py-4 font-black text-sm transition-all border-b-4 whitespace-nowrap tracking-widest ${activeTab === tab.id
                                            ? 'border-honda-red text-honda-red'
                                            : 'border-transparent text-gray-500 hover:text-gray-900'
                                            }`}
                                    >
                                        {tab.icon} {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 min-h-[400px]">
                                {activeTab === 'specs' && (
                                    <div className="space-y-10">
                                        {bike.detailedSpecs ? (
                                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                                {bike.detailedSpecs.engine && (
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-black italic text-honda-red border-l-4 border-honda-red pl-3 uppercase tracking-wider">Engine & Performance</h4>
                                                        <div className="space-y-2">
                                                            {Object.entries(bike.detailedSpecs.engine).map(([key, value]) => (
                                                                <div key={key} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                                                                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                                                                    <span className="text-gray-900 font-black italic">{value}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {bike.detailedSpecs.transmission && (
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-black italic text-honda-red border-l-4 border-honda-red pl-3 uppercase tracking-wider">Transmission</h4>
                                                        <div className="space-y-2">
                                                            {Object.entries(bike.detailedSpecs.transmission).map(([key, value]) => (
                                                                <div key={key} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                                                                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                                                                    <span className="text-gray-900 font-black italic">{value}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {bike.detailedSpecs.dimensions && (
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-black italic text-honda-red border-l-4 border-honda-red pl-3 uppercase tracking-wider">Body Dimensions</h4>
                                                        <div className="space-y-2">
                                                            {Object.entries(bike.detailedSpecs.dimensions).map(([key, value]) => (
                                                                <div key={key} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                                                                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                                                                    <span className="text-gray-900 font-black italic">{value}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {bike.detailedSpecs.chassis && (
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-black italic text-honda-red border-l-4 border-honda-red pl-3 uppercase tracking-wider">Frame & Suspension</h4>
                                                        <div className="space-y-2">
                                                            {Object.entries(bike.detailedSpecs.chassis).map(([key, value]) => (
                                                                <div key={key} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                                                                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                                                                    <span className="text-gray-900 font-black italic">{value}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {bike.detailedSpecs.tyresBrakes && (
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-black italic text-honda-red border-l-4 border-honda-red pl-3 uppercase tracking-wider">Tyres & Brakes</h4>
                                                        <div className="space-y-2">
                                                            {Object.entries(bike.detailedSpecs.tyresBrakes).map(([key, value]) => (
                                                                <div key={key} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                                                                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                                                                    <span className="text-gray-900 font-black italic">{value}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {bike.detailedSpecs.electricals && (
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-black italic text-honda-red border-l-4 border-honda-red pl-3 uppercase tracking-wider">Electricals</h4>
                                                        <div className="space-y-2">
                                                            {Object.entries(bike.detailedSpecs.electricals).map(([key, value]) => (
                                                                <div key={key} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                                                                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                                                                    <span className="text-gray-900 font-black italic">{value}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                                                {[
                                                    { l: 'Engine Type', v: `${bike.cc}cc single-cylinder` },
                                                    { l: 'Max Power', v: bike.power },
                                                    { l: 'Max Torque', v: bike.torque },
                                                    { l: 'Fuel Capacity', v: bike.fuelCapacity },
                                                    { l: 'Kerb Weight', v: bike.weight },
                                                    { l: 'Seat Height', v: bike.seatHeight },
                                                    { l: 'Braking System', v: bike.brakes },
                                                    { l: 'Tyre Type', v: bike.tyres },
                                                    { l: 'Warranty', v: bike.warranty },
                                                ].map((s, i) => (
                                                    <div key={i} className="flex justify-between py-3 border-b border-gray-50 text-sm">
                                                        <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{s.l}</span>
                                                        <span className="text-gray-900 font-black italic">{s.v}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {bike.officialUrl && (
                                            <div className="pt-6 mt-6 border-t border-gray-100 italic text-xs text-gray-400">
                                                * Specifications cited from <a href={bike.officialUrl} target="_blank" rel="noopener noreferrer" className="text-honda-red hover:underline">Honda Official Model Page</a>. Data may vary by variant and region.
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'features' && (
                                    <div className="space-y-8">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            {(bike.features || []).map((f, i) => (
                                                <div key={i} className="flex items-start gap-4 p-6 rounded-3xl bg-gray-50 border border-gray-100 group hover:border-honda-red/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                                                    <div className="w-12 h-12 bg-honda-red/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-honda-red transition-colors">
                                                        <FaCheckCircle className="text-honda-red text-xl group-hover:text-white transition-colors" />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-gray-900 font-black italic tracking-tight text-lg uppercase">{f}</span>
                                                        <p className="text-xs text-gray-400 font-medium">Genuine Honda Feature Protection</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'colors' && (
                                    <div className="space-y-10">
                                        <div className="flex flex-col items-center sm:items-start">
                                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-10">Available Color Range for {bike.name}:</p>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 w-full">
                                                {(bike.colors || []).map((c, i) => (
                                                    <div key={i} className="group flex flex-col items-center">
                                                        <div className="w-full aspect-square bg-white rounded-[2rem] mb-5 flex items-center justify-center border-2 border-gray-100 group-hover:border-honda-red transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 overflow-hidden relative">
                                                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                                            <div className="w-20 h-20 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_0_-5px_10px_rgba(0,0,0,0.1)] border-2 border-white relative z-10" style={{ backgroundColor: c.toLowerCase().includes('white') ? '#fff' : c.toLowerCase().includes('red') ? '#cc0000' : c.toLowerCase().includes('grey') ? '#555' : c.toLowerCase().includes('black') ? '#111' : c.toLowerCase().includes('yellow') ? '#ffd700' : c.toLowerCase().includes('blue') ? '#00008b' : c.toLowerCase().includes('green') ? '#006400' : c.toLowerCase().includes('silver') ? '#c0c0c0' : '#333' }} />
                                                        </div>
                                                        <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest block text-center leading-tight">{c}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Warranty Badge */}
                        <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative group">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                            <div className="z-10 relative">
                                <h4 className="text-3xl font-black mb-2 italic tracking-tighter italic">HONDA SHIELD</h4>
                                <p className="text-gray-400 font-medium">Extend your peace of mind with our optional 10-year warranty plans.</p>
                            </div>
                            <div className="flex-shrink-0 z-10 relative">
                                <Badge className="bg-honda-gold text-gray-900 py-3 px-8 text-sm font-black italic tracking-tighter">AUTHENTIC COVERAGE</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Bikes Section */}
            <section className="bg-white section-padding border-t relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <h2 className="text-4xl font-black mb-12 italic tracking-tighter uppercase">More from Honda</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {ALL_BIKES.filter(b => b.id !== bike.id).slice(0, 3).map((b) => (
                            <Card key={b.id} hover className="bg-gray-50 border-none group">
                                <Link href={`/bikes/${b.id}`} className="block">
                                    <CardHeader className="p-0 overflow-hidden">
                                        <div className="aspect-[4/3] relative bg-white p-10 flex items-center justify-center">
                                            <Image src={b.image} alt={b.name} fill className="object-contain p-6 transform group-hover:scale-115 transition-transform duration-700" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-black mb-2 italic tracking-tighter uppercase">{b.name}</h3>
                                        <p className="text-honda-red font-black text-3xl mb-6 tracking-tighter">{formatPrice(b.price || 0)}*</p>
                                        <Button variant="outline" className="w-full font-black border-2 border-gray-900 text-gray-900 group-hover:bg-gray-900 group-hover:text-white py-6">EXPLORE MACHINE</Button>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
