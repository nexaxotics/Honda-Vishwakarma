'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { GoogleMap } from '@/components/shared/GoogleMap';
import { BUSINESS_INFO } from '@/lib/constants';
import { getCallLink, getWhatsAppLink, formatPhoneNumber } from '@/lib/utils';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="gradient-red text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-white/90">
                        We're here to help. Get in touch with us today!
                    </p>
                </div>
            </div>

            <div className="container-custom section-padding">
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <h2 className="text-2xl font-bold">Get In Touch</h2>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Phone */}
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-honda-red rounded-full flex items-center justify-center">
                                            <FaPhone className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Call Us</p>
                                            <p className="font-semibold text-gray-900">Sales & Service</p>
                                        </div>
                                    </div>
                                    {BUSINESS_INFO.contact.phones.map((phone, idx) => (
                                        <a
                                            key={idx}
                                            href={getCallLink(phone)}
                                            className="block mb-2"
                                        >
                                            <Button variant="outline" className="w-full">
                                                <FaPhone /> {formatPhoneNumber(phone)}
                                            </Button>
                                        </a>
                                    ))}
                                </div>

                                {/* WhatsApp */}
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                            <FaWhatsapp className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">WhatsApp</p>
                                            <p className="font-semibold text-gray-900">Chat with us</p>
                                        </div>
                                    </div>
                                    <a
                                        href={getWhatsAppLink(
                                            BUSINESS_INFO.contact.whatsapp,
                                            'Hi! I have a question about Honda bikes.'
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button className="w-full bg-green-500 hover:bg-green-600">
                                            <FaWhatsapp /> Start WhatsApp Chat
                                        </Button>
                                    </a>
                                </div>

                                {/* Email */}
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-honda-gold rounded-full flex items-center justify-center">
                                            <FaEnvelope className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Email</p>
                                            <p className="font-semibold text-gray-900">Send us a message</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        {BUSINESS_INFO.contact.emails.map((email, idx) => (
                                            <a
                                                key={idx}
                                                href={`mailto:${email}`}
                                                className="block text-sm text-honda-red hover:underline break-all"
                                            >
                                                {email}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Address & Hours */}
                        <Card>
                            <CardContent className="p-6">
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-honda-red rounded-full flex items-center justify-center">
                                                <FaMapMarkerAlt className="text-white text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Showroom Address</p>
                                                <p className="font-semibold text-gray-900">Visit Us</p>
                                            </div>
                                        </div>
                                        <div className="pl-15 text-gray-700">
                                            <p>{BUSINESS_INFO.address.street}</p>
                                            <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}</p>
                                            <p>{BUSINESS_INFO.address.pincode}, {BUSINESS_INFO.address.country}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-honda-gold rounded-full flex items-center justify-center">
                                                <FaClock className="text-white text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Opening Hours</p>
                                                <p className="font-semibold text-gray-900">We're Open</p>
                                            </div>
                                        </div>
                                        <p className="pl-15 text-gray-700">{BUSINESS_INFO.hours.display}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Map */}
                    <div>
                        <Card className="h-full">
                            <CardHeader>
                                <h3 className="text-xl font-bold">Find Us on Map</h3>
                            </CardHeader>
                            <CardContent>
                                <GoogleMap />
                                <div className="mt-4">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={() =>
                                            window.open(
                                                `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS_INFO.location.latitude},${BUSINESS_INFO.location.longitude}`,
                                                '_blank'
                                            )
                                        }
                                    >
                                        Get Directions →
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Book Test Ride',
                            desc: 'Try before you buy',
                            link: '/test-ride',
                            icon: '🏍️',
                        },
                        {
                            title: 'Service Booking',
                            desc: 'Schedule a service',
                            link: '/service',
                            icon: '🔧',
                        },
                        {
                            title: 'Calculate EMI',
                            desc: 'Check loan options',
                            link: '/finance',
                            icon: '💳',
                        },
                    ].map((action, idx) => (
                        <Card key={idx} hover>
                            <CardContent className="p-6 text-center">
                                <div className="text-5xl mb-3">{action.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
                                <p className="text-gray-600 mb-4">{action.desc}</p>
                                <a href={action.link}>
                                    <Button variant="outline" className="w-full">
                                        {action.title} →
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
