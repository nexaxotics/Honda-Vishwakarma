'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { ALL_BIKES, BUSINESS_INFO } from '@/lib/constants';
import { getWhatsAppLink } from '@/lib/utils';

export default function TestRidePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        bikeModel: '',
        preferredDate: '',
        location: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
            // Send WhatsApp message
            const message = `*New Test Ride Booking*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nBike: ${formData.bikeModel}\nPreferred Date: ${formData.preferredDate}\nLocation: ${formData.location}`;

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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 section-padding">
                <Card className="max-w-2xl w-full">
                    <CardContent className="p-12 text-center">
                        <div className="text-6xl mb-6">✅</div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Test Ride Booking Submitted!
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Thank you, {formData.name}! Our sales advisor will contact you soon at {formData.phone}.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button onClick={() => router.push('/')}>
                                Back to Home
                            </Button>
                            <Button variant="outline" onClick={() => setSubmitted(false)}>
                                Book Another
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="gradient-red text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Test Ride</h1>
                    <p className="text-xl text-white/90">
                        Experience the thrill of Honda bikes firsthand
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="container-custom section-padding">
                <div className="max-w-2xl mx-auto">
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Fill in your details
                            </h2>
                            <p className="text-gray-600 mt-2">
                                We'll confirm your test ride appointment within 24 hours
                            </p>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    label="Full Name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    required
                                    placeholder="+91 XXXXX XXXXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    pattern="[0-9+\s]+"
                                />

                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Bike Model <span className="text-honda-red">*</span>
                                    </label>
                                    <select
                                        name="bikeModel"
                                        required
                                        value={formData.bikeModel}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honda-red focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="">Choose a bike</option>
                                        <optgroup label="Scooters">
                                            {ALL_BIKES.filter(b => b.category === 'scooter').map(bike => (
                                                <option key={bike.id} value={bike.name}>
                                                    Honda {bike.name}
                                                </option>
                                            ))}
                                        </optgroup>
                                        <optgroup label="Motorcycles">
                                            {ALL_BIKES.filter(b => b.category === 'motorcycle').map(bike => (
                                                <option key={bike.id} value={bike.name}>
                                                    Honda {bike.name}
                                                </option>
                                            ))}
                                        </optgroup>
                                    </select>
                                </div>

                                <Input
                                    label="Preferred Date"
                                    name="preferredDate"
                                    type="date"
                                    required
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split('T')[0]}
                                />

                                <Input
                                    label="Your Location (Optional)"
                                    name="location"
                                    type="text"
                                    placeholder="Your area/city"
                                    value={formData.location}
                                    onChange={handleChange}
                                />

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <p className="text-sm text-blue-800">
                                        <strong>Note:</strong> After submitting, you'll be redirected to WhatsApp to confirm your booking with our team.
                                    </p>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full"
                                    disabled={loading}
                                >
                                    {loading ? 'Submitting...' : 'Book Test Ride'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Why Test Ride */}
                    <div className="mt-8 grid md:grid-cols-3 gap-4">
                        {[
                            { icon: '🏍️', title: 'Try Before You Buy', desc: 'Experience the bike firsthand' },
                            { icon: '👨‍💼', title: 'Expert Guidance', desc: 'Our team will assist you' },
                            { icon: '📅', title: 'Flexible Timing', desc: 'Choose your preferred date' },
                        ].map((item, idx) => (
                            <Card key={idx}>
                                <CardContent className="p-6 text-center">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
