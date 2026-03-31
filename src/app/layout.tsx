import React from 'react';
import { BUSINESS_INFO } from '@/lib/constants';
import { ClientLayout } from '@/components/shared/ClientLayout';
import './globals.css';

import { ASSET_SOURCE } from '@/config/assetSource';

export const metadata = {
    title: `${BUSINESS_INFO.name} - Authorized Honda Two-Wheeler Dealer | Rajauli, Nawada, Bihar`,
    description: `Official Honda dealership in Rajauli, Nawada. Book test rides, service appointments. ${BUSINESS_INFO.googleRating.stars}★ rated. Call ${BUSINESS_INFO.contact.phones[0]}`,
    keywords: "Honda bikes, Honda scooters, Activa, Dio, SP125, SP160, Rajauli Honda dealer, Nawada bike showroom, Honda service center",
    robots: ASSET_SOURCE.demoMode ? { index: false, follow: false } : undefined,
    openGraph: {
        title: `${BUSINESS_INFO.name} - Authorized Honda Dealer`,
        description: "Authorized Honda Two-Wheeler Dealer in Rajauli, Nawada, Bihar. Book your test ride today!",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Local Business Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'MotorcycleDealer',
                            name: BUSINESS_INFO.name,
                            image: '/logo.png',
                            '@id': '',
                            url: '',
                            telephone: BUSINESS_INFO.contact.phones[0],
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: BUSINESS_INFO.address.street,
                                addressLocality: BUSINESS_INFO.address.city,
                                addressRegion: BUSINESS_INFO.address.state,
                                postalCode: BUSINESS_INFO.address.pincode,
                                addressCountry: 'IN',
                            },
                            geo: {
                                '@type': 'GeoCoordinates',
                                latitude: BUSINESS_INFO.location.latitude,
                                longitude: BUSINESS_INFO.location.longitude,
                            },
                            openingHoursSpecification: {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                                opens: '09:30',
                                closes: '18:30',
                            },
                            aggregateRating: {
                                '@type': 'AggregateRating',
                                ratingValue: BUSINESS_INFO.googleRating.stars,
                                reviewCount: BUSINESS_INFO.googleRating.reviews,
                            },
                        }),
                    }}
                />
            </head>
            <body className="antialiased">
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}
