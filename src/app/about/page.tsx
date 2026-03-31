'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { BUSINESS_INFO } from '@/lib/constants';
import { FaAward, FaCertificate, FaUsers, FaTools } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="gradient-red text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl text-white/90">
                        Your trusted Honda partner since {BUSINESS_INFO.established}
                    </p>
                </div>
            </div>

            <div className="container-custom section-padding">
                {/* Story */}
                <Card className="mb-8">
                    <CardContent className="p-8 md:p-12">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="text-6xl mb-6">🏍️</div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Established in <strong>{BUSINESS_INFO.established}</strong>, {BUSINESS_INFO.name} has been
                                serving the people of Rajauli, Nawada, and surrounding areas with genuine Honda
                                two-wheelers and exceptional service. Under the leadership of{' '}
                                <strong>{BUSINESS_INFO.owner}</strong>, we have built a reputation for trust,
                                quality, and customer satisfaction.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                As an <strong>Authorized Honda Dealer</strong>, we offer the complete range of
                                Honda motorcycles and scooters, backed by certified service and genuine spare
                                parts. Our commitment is to make your biking dreams come true with the best
                                products, competitive financing, and unmatched after-sales support.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {[
                        { icon: <FaAward />, number: BUSINESS_INFO.established, label: 'Established' },
                        { icon: <FaUsers />, number: '5000+', label: 'Happy Customers' },
                        { icon: <FaCertificate />, number: '100%', label: 'Genuine Products' },
                        { icon: <FaTools />, number: '24/7', label: 'Service Support' },
                    ].map((stat, idx) => (
                        <Card key={idx}>
                            <CardContent className="p-6 text-center">
                                <div className="text-4xl text-honda-red mb-3 flex justify-center">
                                    {stat.icon}
                                </div>
                                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</p>
                                <p className="text-gray-600">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Why Choose Us */}
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {[
                        {
                            title: 'Authorized Dealership',
                            desc: 'Official Honda two-wheeler dealer with GST: ' + BUSINESS_INFO.gst,
                            icon: '✓',
                        },
                        {
                            title: 'Expert Team',
                            desc: 'Trained sales advisors and certified technicians',
                            icon: '👨‍💼',
                        },
                        {
                            title: 'Genuine Parts Only',
                            desc: '100% authentic Honda spare parts and accessories',
                            icon: '🔧',
                        },
                        {
                            title: 'Easy Finance',
                            desc: 'Tie-ups with major banks for hassle-free loans',
                            icon: '💳',
                        },
                        {
                            title: 'Customer First',
                            desc: '4.6★ Google rating from 59+ satisfied customers',
                            icon: '⭐',
                        },
                        {
                            title: 'Local Trust',
                            desc: 'Serving Rajauli and Nawada for over a decade',
                            icon: '🏠',
                        },
                    ].map((item, idx) => (
                        <Card key={idx}>
                            <CardContent className="p-6 flex gap-4">
                                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Owner Info */}
                <Card className="bg-gradient-to-br from-honda-red to-honda-red-dark text-white">
                    <CardHeader>
                        <h3 className="text-2xl font-bold text-center">Meet Our Founder</h3>
                    </CardHeader>
                    <CardContent className="text-center p-8">
                        <div className="max-w-2xl mx-auto">
                            <div className="text-6xl mb-4">👨‍💼</div>
                            <h4 className="text-3xl font-bold mb-2">{BUSINESS_INFO.owner}</h4>
                            <p className="text-xl text-white/90 mb-4">Founder & Proprietor</p>
                            <p className="text-white/80 leading-relaxed">
                                With a vision to bring quality Honda bikes to every household in Nawada,
                                Mr. Vishwakarma established this dealership with values of trust, transparency,
                                and customer satisfaction at its core.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
