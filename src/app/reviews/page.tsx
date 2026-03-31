'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { StarRating } from '@/components/ui/StarRating';
import { Badge } from '@/components/ui/Badge';
import { BUSINESS_INFO, TESTIMONIALS } from '@/lib/constants';

export default function ReviewsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="gradient-red text-white py-12">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <StarRating rating={BUSINESS_INFO.googleRating.stars} size="lg" showNumber />
                        <Badge className="bg-white/20 text-white border border-white/30">
                            {BUSINESS_INFO.googleRating.reviews}+ Reviews
                        </Badge>
                    </div>
                    <p className="text-xl text-white/90 mt-4">
                        See what our customers have to say
                    </p>
                </div>
            </div>

            <div className="container-custom section-padding">
                {/* Rating Summary */}
                <Card className="mb-12">
                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="text-center md:text-left">
                                <div className="inline-block">
                                    <p className="text-6xl font-bold text-gray-900 mb-2">
                                        {BUSINESS_INFO.googleRating.stars}
                                    </p>
                                    <StarRating rating={BUSINESS_INFO.googleRating.stars} size="lg" />
                                    <p className="text-gray-600 mt-2">
                                        Based on {BUSINESS_INFO.googleRating.reviews}+ Google reviews
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {[5, 4, 3, 2, 1].map((stars) => {
                                    const percentage = stars === 5 ? 92 : stars === 4 ? 8 : 0;
                                    return (
                                        <div key={stars} className="flex items-center gap-3">
                                            <span className="text-sm font-medium w-12">{stars} star</span>
                                            <div className="flex-1 bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-honda-gold h-3 rounded-full transition-all"
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600 w-12">{percentage}%</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((review, idx) => (
                        <Card key={idx} className="h-full">
                            <CardContent className="p-6 flex flex-col h-full">
                                <div className="mb-4">
                                    <StarRating rating={review.rating} />
                                </div>

                                <p className={`text-gray-700 mb-4 flex-grow italic ${review.language === 'hi' ? 'text-base leading-relaxed' : ''}`}>
                                    "{review.text}"
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t">
                                    <div>
                                        <p className="font-semibold text-gray-900">{review.name}</p>
                                        {review.badge && (
                                            <Badge variant="success" className="mt-1 text-xs">
                                                {review.badge}
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="text-gray-400">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
                                        </svg>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Share Your Experience
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Bought a bike from us? We'd love to hear your feedback!
                    </p>
                    <Button
                        size="lg"
                        onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review', '_blank')}
                    >
                        Write a Review on Google
                    </Button>
                </div>
            </div>
        </div>
    );
}
