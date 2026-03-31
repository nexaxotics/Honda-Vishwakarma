'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { BUSINESS_INFO } from '@/lib/constants';
import { getWhatsAppLink } from '@/lib/utils';

export default function ServicePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        bikeModel: '',
        registrationNo: '',
        issue: '',
        preferredDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            const message = `*New Service Booking*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nBike: ${formData.bikeModel}\nReg No: ${formData.registrationNo}\nIssue: ${formData.issue}\nPreferred Date: ${formData.preferredDate}`;

            window.open(
                getWhatsAppLink(BUSINESS_INFO.contact.whatsapp, message),
                '_blank'
            );

            setLoading(false);
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 section-padding">
                <Card className="max-w-2xl w-full">
                    <CardContent className="p-12 text-center">
                        <div className="text-6xl mb-6">🔧</div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Service Booking Confirmed!
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Thank you, {formData.name}! Our service team will contact you at {formData.phone}.
                        </p>
                        <Button onClick={() => router.push('/')}>
                            Back to Home
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="gradient-red text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Service</h1>
                    <p className="text-xl text-white/90">
                        Genuine Honda parts & certified technicians
                    </p>
                </div>
            </div>

            <div className="container-custom section-padding">
                <div className="grid lg:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-bold">Service Booking Form</h2>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    label="Full Name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Bike Model"
                                    name="bikeModel"
                                    required
                                    placeholder="e.g., Honda Activa 110"
                                    value={formData.bikeModel}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Registration Number"
                                    name="registrationNo"
                                    required
                                    placeholder="e.g., BR XX XXXX"
                                    value={formData.registrationNo}
                                    onChange={handleChange}
                                />

                                <Textarea
                                    label="Describe the Issue"
                                    name="issue"
                                    required
                                    placeholder="What problem are you facing?"
                                    value={formData.issue}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Preferred Date"
                                    name="preferredDate"
                                    type="date"
                                    required
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split('T')[0]}
                                />

                                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                                    {loading ? 'Submitting...' : 'Book Service'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-bold">Our Service Promise</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        { icon: '✓', text: 'Certified Honda technicians' },
                                        { icon: '✓', text: 'Genuine spare parts only' },
                                        { icon: '✓', text: 'Transparent pricing' },
                                        { icon: '✓', text: 'Free pickup & drop (within 5km)' },
                                        { icon: '✓', text: '6-month service warranty' },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className="text-honda-red text-xl">{item.icon}</span>
                                            <span className="text-gray-700">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-bold">Service Types</h3>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[
                                        { name: 'General Service', desc: 'Regular maintenance & checkup' },
                                        { name: 'Oil Change', desc: 'Engine oil & filter replacement' },
                                        { name: 'Brake Service', desc: 'Brake pads & disc maintenance' },
                                        { name: 'Battery Replacement', desc: 'Genuine Honda batteries' },
                                    ].map((service, idx) => (
                                        <div key={idx} className="border-l-4 border-honda-red pl-4">
                                            <p className="font-semibold text-gray-900">{service.name}</p>
                                            <p className="text-sm text-gray-600">{service.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
