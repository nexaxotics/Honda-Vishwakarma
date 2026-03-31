'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { calculateEMI, formatPrice } from '@/lib/utils';

export default function FinancePage() {
    const [bikePrice, setBikePrice] = useState(80000);
    const [downPayment, setDownPayment] = useState(20000);
    const [interestRate, setInterestRate] = useState(10.5);
    const [tenure, setTenure] = useState(24);

    const loanAmount = bikePrice - downPayment;
    const monthlyEMI = calculateEMI(loanAmount, interestRate, tenure);
    const totalPayment = monthlyEMI * tenure;
    const totalInterest = totalPayment - loanAmount;

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-gradient-to-r from-honda-gold to-honda-gold/80 text-gray-900 py-12">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Finance & Insurance</h1>
                    <p className="text-xl">
                        Make your dream bike affordable with easy EMI options
                    </p>
                </div>
            </div>

            <div className="container-custom section-padding">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* EMI Calculator */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-bold">EMI Calculator</h2>
                            <p className="text-gray-600">Calculate your monthly payment</p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium">Bike Price</label>
                                        <span className="text-sm font-bold text-honda-red">
                                            {formatPrice(bikePrice)}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="50000"
                                        max="200000"
                                        step="5000"
                                        value={bikePrice}
                                        onChange={(e) => setBikePrice(Number(e.target.value))}
                                        className="w-full accent-honda-red"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium">Down Payment</label>
                                        <span className="text-sm font-bold text-honda-red">
                                            {formatPrice(downPayment)}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={bikePrice * 0.5}
                                        step="5000"
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(Number(e.target.value))}
                                        className="w-full accent-honda-red"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium">Interest Rate</label>
                                        <span className="text-sm font-bold text-honda-red">
                                            {interestRate}% p.a.
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="8"
                                        max="15"
                                        step="0.5"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                        className="w-full accent-honda-red"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium">Loan Tenure</label>
                                        <span className="text-sm font-bold text-honda-red">
                                            {tenure} months
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="12"
                                        max="60"
                                        step="12"
                                        value={tenure}
                                        onChange={(e) => setTenure(Number(e.target.value))}
                                        className="w-full accent-honda-red"
                                    />
                                </div>

                                {/* Results */}
                                <div className="bg-gradient-to-br from-honda-red to-honda-red-dark text-white p-6 rounded-xl">
                                    <div className="text-center mb-6">
                                        <p className="text-sm opacity-90 mb-2">Monthly EMI</p>
                                        <p className="text-4xl font-bold">{formatPrice(monthlyEMI)}</p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                                        <div>
                                            <p className="opacity-80">Loan Amount</p>
                                            <p className="font-bold">{formatPrice(loanAmount)}</p>
                                        </div>
                                        <div>
                                            <p className="opacity-80">Interest</p>
                                            <p className="font-bold">{formatPrice(totalInterest)}</p>
                                        </div>
                                        <div>
                                            <p className="opacity-80">Total Payment</p>
                                            <p className="font-bold">{formatPrice(totalPayment)}</p>
                                        </div>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full">
                                    Apply for Finance
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Finance Benefits & Partners */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-bold">Finance Benefits</h3>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        'Low down payment starting from ₹10,000',
                                        'Flexible tenure: 12 to 60 months',
                                        'Quick approval in 24 hours',
                                        'Minimal documentation',
                                        'Competitive interest rates',
                                        'No hidden charges',
                                    ].map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-honda-gold text-xl">✓</span>
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-bold">Partner Banks & NBFCs</h3>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        'HDFC Bank',
                                        'ICICI Bank',
                                        'Bajaj Finserv',
                                        'SBI',
                                        'Kotak Mahindra',
                                        'HDB Financial',
                                    ].map((bank, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-gray-100 p-3 rounded-lg text-center font-medium text-gray-700"
                                        >
                                            {bank}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="text-xl font-bold">Insurance Options</h3>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Third Party Insurance', desc: 'Mandatory by law' },
                                        { name: 'Comprehensive Insurance', desc: 'Full coverage recommended' },
                                        { name: 'Zero Depreciation', desc: 'No depreciation on claims' },
                                    ].map((insurance, idx) => (
                                        <div key={idx} className="border-l-4 border-honda-gold pl-4">
                                            <p className="font-semibold">{insurance.name}</p>
                                            <p className="text-sm text-gray-600">{insurance.desc}</p>
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
