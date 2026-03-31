export const BUSINESS_INFO = {
    name: 'Shree Honda Vishwakarma',
    tagline: 'A Unit of Arvind Kumar Vishwakarma',
    established: 2011,
    owner: 'Mr. Arvind Kumar Vishwakarma',

    address: {
        street: 'Takunatand / Block Road, Rajauli',
        city: 'Nawada',
        state: 'Bihar',
        pincode: '805125',
        country: 'India',
    },

    contact: {
        phones: ['+91 9631957878', '+91 7870880535'],
        emails: ['rajaulihonda@gmail.com', 'sri.vishwakarmahondarajauli@gmail.com'],
        whatsapp: '+919631957878',
    },

    gst: '10AHXPV2987M1ZB',

    hours: {
        weekdays: '9:30 AM to 6:30 PM',
        weekends: '9:30 AM to 6:30 PM',
        display: 'Monday to Sunday — 9:30 AM to 6:30 PM',
    },

    googleRating: {
        stars: 4.6,
        reviews: 59,
    },

    location: {
        latitude: 25.0582,
        longitude: 85.4052,
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.234!2d85.4052!3d25.0582',
    },

    social: {
        officialHonda: 'https://www.honda2wheelersindia.com',
    },
};

export const TESTIMONIALS = [
    {
        name: 'Rishidev Vishwakarma',
        text: 'Very helpful staff, good service. Way of dealing customers is awesome.',
        rating: 5,
        language: 'en',
    },
    {
        name: 'Dileep Kumar Pandit',
        text: 'Rajauli Best Bike Showroom and owner Arvind Vishwakarma best behavior.',
        rating: 5,
        language: 'en',
    },
    {
        name: 'Balm Kumar',
        text: 'Excellent service. All products are genuine.',
        rating: 5,
        language: 'en',
    },
    {
        name: 'Md Irfan',
        text: 'Very good service.',
        rating: 5,
        language: 'en',
    },
    {
        name: 'Shailesh Raj',
        text: 'Nice place for Honda bike.',
        rating: 5,
        badge: 'Local Guide',
        language: 'en',
    },
    {
        name: 'Anonymous',
        text: 'श्री होंडा विश्वकर्मा राजाुली भरोसे वाला शोरूम है, मैं 2014 से इस शोरूम से जुड़ा हूँ।',
        rating: 5,
        language: 'hi',
    },
];

import { ADDITIONAL_BIKES } from './honda-data-expanded';
import { Bike, BikeSpec } from './types';

// Re-export for backward compatibility
export type { Bike, BikeSpec };

// ... (removed interfaces)

export const BIKES: { scooters: Bike[]; motorcycles: Bike[]; ev: Bike[] } = {
    ev: [
        ...ADDITIONAL_BIKES.ev
    ],
    scooters: [
        ...ADDITIONAL_BIKES.scooters,
        {
            id: 'activa-110',
            name: 'Activa 110',
            category: 'scooter',
            cc: 110,
            power: '7.73 bhp @ 8000 rpm',
            torque: '8.9 Nm @ 5500 rpm',
            mileage: '60 kmpl',
            price: 74536,
            image: '/images/honda_activa_110.png',
            featured: true,
            fuelCapacity: '5.3 L',
            weight: '104 kg',
            seatHeight: '780 mm',
            brakes: 'Front: Drum, Rear: Drum with CBS',
            tyres: 'Front: 90/100-10, Rear: 90/100-10',
            colors: ['Pearl Precious White', 'Matte Axis Grey Metallic', 'Black', 'Rebel Red Metallic'],
            warranty: '3 Years / 30,000 km',
            features: [
                'LED Headlight with Position Lamp',
                'External Fuel Fill with Lid Opener',
                '18L Under Seat Storage',
                'Combi-Brake System with Equalizer',
            ],
            description: 'India\'s most trusted scooter with advanced features and unmatched fuel efficiency.',
            officialUrl: 'https://www.honda2wheelersindia.com/products/scooter/activa-125'
        },
        {
            id: 'dio-110',
            name: 'Dio 110',
            category: 'scooter',
            cc: 110,
            power: '7.76 bhp @ 8000 rpm',
            torque: '9.0 Nm @ 5750 rpm',
            mileage: '60 kmpl',
            price: 71292,
            image: '/images/honda_dio_110.png',
            featured: true,
            fuelCapacity: '5.3 L',
            weight: '104 kg',
            seatHeight: '765 mm',
            brakes: 'Front: Drum, Rear: Drum with CBS',
            tyres: 'Front: 90/90-12, Rear: 90/90-12',
            colors: ['Sports Red', 'Matte Axis Grey Metallic', 'Pearl Siren Blue', 'Black'],
            warranty: '3 Years / 30,000 km',
            features: [
                'Full LED Headlamp & Position Lamp',
                'USB Charging Port',
                '18L Under Seat Storage',
                'Silent Start System',
            ],
            description: 'Sporty & stylish scooter with full LED lighting and smart features.',
        },
    ],
    motorcycles: [
        ...ADDITIONAL_BIKES.motorcycles,
        {
            id: 'sp125',
            name: 'SP 125',
            category: 'motorcycle',
            tagline: 'Advanced Sporty Commuter',
            cc: 125,
            power: '10.72 bhp @ 7500 rpm',
            torque: '10.9 Nm @ 6000 rpm',
            mileage: '65 kmpl',
            price: 90891,
            image: '/images/honda_sp125.png',
            featured: true,
            fuelCapacity: '11 L',
            weight: '115 kg',
            seatHeight: '790 mm',
            brakes: 'Front: Disc, Rear: Drum with CBS',
            tyres: 'Front: 80/100-18, Rear: 100/90-18',
            colors: ['Striking Green', 'Pearl Igneous Black', 'Imperial Red Metallic', 'Matte Axis Grey Metallic'],
            warranty: '3+7 Years Warranty Options',
            features: [
                'LED Headlamp',
                'Full Digital Instrument Cluster',
                'USB-C Charging Port (Anniversary Edition)',
                'Honda RoadSync Compatibility',
            ],
            description: 'Sporty bike with advanced digital features and punchy performance.',
            detailedSpecs: {
                engine: {
                    type: '4-stroke, SI engine, OBD2B compliant',
                    displacement: '123.94 cc',
                    maxPower: '8.0 kW @ 7500 rpm',
                    maxTorque: '10.9 Nm @ 6000 rpm',
                    fuelSystem: 'PGM-FI',
                    cooling: 'Air-Cooled'
                },
                transmission: {
                    clutch: 'Multiplate Wet Clutch',
                    gearbox: '5-Speed'
                },
                dimensions: {
                    wheelbase: '1285 mm',
                    kerbWeight: '116 kg',
                    groundClearance: '160 mm',
                    seatHeight: '790 mm',
                    fuelCapacity: '11.2 L'
                },
                chassis: {
                    frameType: 'Diamond Type',
                    frontSuspension: 'Telescopic',
                    rearSuspension: 'Hydraulic Type'
                },
                tyresBrakes: {
                    frontTyre: '80/100-18 M/C 47P',
                    rearTyre: '100/80-18 M/C 53P',
                    frontBrake: 'Disc 240 mm',
                    rearBrake: 'Drum 130 mm',
                    abs: 'CBS'
                },
                electricals: {
                    headlight: 'LED',
                    meter: 'Full Digital',
                    connectivity: 'RoadSync (on select trims)',
                    battery: '12V 5.0Ah'
                }
            },
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/sp125'
        },
        {
            id: 'shine125',
            name: 'Shine 125',
            category: 'motorcycle',
            tagline: 'India\'s Most Loved 125cc Bike',
            cc: 125,
            power: '10.74 bhp @ 7500 rpm',
            torque: '11.0 Nm @ 6000 rpm',
            mileage: '65 kmpl',
            price: 79800,
            image: '/images/honda_shine_125.png',
            featured: true,
            fuelCapacity: '10.5 L',
            weight: '113 kg',
            seatHeight: '791 mm',
            brakes: 'Front: Disc/Drum, Rear: Drum with CBS',
            tyres: 'Front: 80/100-18, Rear: 80/100-18',
            colors: ['Geny Grey Metallic', 'Black', 'Rebel Red Metallic', 'Decent Blue Metallic'],
            warranty: '3 Years / 30,000 km',
            features: [
                'HET (Honda Eco Technology) Engine',
                'Diamond Type Frame',
                'Comfortable Long Seat',
                'Silent Start with ACG',
            ],
            description: 'Economical commuter tuned for mileage and refinement.',
            detailedSpecs: {
                engine: {
                    displacement: '123.94 cc',
                    fuelSystem: 'PGM-FI',
                    cooling: 'Air-Cooled'
                }
            },
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/shine125'
        },
        {
            id: 'hornet20',
            name: 'Hornet 2.0',
            category: 'motorcycle',
            tagline: 'Streetfighter with Assist Slipper Clutch & RoadSync',
            cc: 184.4,
            power: '17.03 bhp @ 8500 rpm',
            torque: '15.9 Nm @ 6000 rpm',
            mileage: '45 kmpl',
            price: 139000,
            image: '/images/honda_hornet_2_0.png',
            featured: true,
            fuelCapacity: '12 L',
            weight: '142 kg',
            seatHeight: '790 mm',
            brakes: 'Front & Rear Disc with Single Channel ABS',
            tyres: 'Front: 110/70, Rear: 140/70',
            colors: ['Pearl Igneous Black', 'Matte Sangria Red Metallic', 'Matte Marvel Blue Metallic'],
            warranty: '3 Years / 30,000 km',
            features: [
                'Assist & Slipper Clutch',
                'USD (Up Side Down) Front Fork',
                'Honda RoadSync Bluetooth Connectivity',
                'All LED Lighting System',
            ],
            description: 'High-performance streetfighter with advanced engineering and aggressive styling.',
            detailedSpecs: {
                engine: {
                    displacement: '184.4 cc',
                    maxPower: '12.5 kW @ 8500 rpm',
                    maxTorque: '15.9 Nm @ 6000 rpm',
                    fuelSystem: 'PGM-FI'
                },
                transmission: {
                    clutch: 'Assist & Slipper Clutch',
                    gearbox: '5-Speed'
                },
                dimensions: {
                    wheelbase: '1355 mm',
                    kerbWeight: '142 kg',
                    groundClearance: '167 mm',
                    seatHeight: '790 mm',
                    fuelCapacity: '12 L'
                },
                chassis: {
                    frameType: 'Diamond Type',
                    frontSuspension: 'USD Fork',
                    rearSuspension: 'Monoshock'
                },
                tyresBrakes: {
                    frontTyre: '110/70-17 M/C 54S',
                    rearTyre: '140/70-17 M/C 66S',
                    frontBrake: 'Disc 276 mm',
                    rearBrake: 'Disc 220 mm',
                    abs: 'Single Channel'
                },
                electricals: {
                    headlight: 'LED',
                    meter: 'TFT Fully Digital',
                    connectivity: 'Honda RoadSync',
                    battery: '12V 5.0Ah'
                }
            },
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/hornet2.0'
        },
        {
            id: 'cb350-hness',
            name: 'CB350 H\'ness',
            category: 'motorcycle',
            tagline: 'Modern Classic Highness',
            cc: 348.36,
            power: '20.78 bhp @ 5500 rpm',
            torque: '30 Nm @ 3000 rpm',
            mileage: '35 kmpl',
            price: 209857,
            image: '/images/honda_cb350_hness.png',
            featured: true,
            fuelCapacity: '15 L',
            weight: '181 kg',
            seatHeight: '800 mm',
            brakes: 'Dual Channel ABS',
            tyres: 'Alloy Wheels with Tubeless Tyres',
            colors: ['Matte Marshal Green Metallic', 'Pearl Nightstar Black', 'Precious Red Metallic'],
            warranty: '3+7 Years Warranty Options',
            features: [
                'Selectable Torque Control',
                'Honda RoadSync Connectivity',
                'Dual Channel ABS',
                'Slipper Clutch',
            ],
            description: 'Retro-modern classic cruiser with a powerful engine and premium features.',
            detailedSpecs: {
                engine: {
                    displacement: '348.36 cc',
                    maxPower: '15.5 kW @ 5500 rpm',
                    maxTorque: '30 Nm @ 3000 rpm',
                    fuelSystem: 'PGM-FI',
                    cooling: 'Air-Cooled'
                },
                transmission: {
                    clutch: 'Multiplate Wet Clutch',
                    gearbox: '5-Speed'
                },
                dimensions: {
                    wheelbase: '1441 mm',
                    kerbWeight: '181 kg',
                    groundClearance: '166 mm',
                    seatHeight: '800 mm',
                    fuelCapacity: '15 L'
                },
                chassis: {
                    frameType: 'Half Duplex Cradle',
                    frontSuspension: 'Telescopic',
                    rearSuspension: 'Twin Shock'
                },
                tyresBrakes: {
                    frontTyre: '100/90-19 M/C 57H',
                    rearTyre: '130/70-18 M/C 63H',
                    frontBrake: 'Disc 310 mm',
                    rearBrake: 'Disc 240 mm',
                    abs: 'Dual Channel'
                },
                electricals: {
                    headlight: 'LED',
                    meter: 'Digital-Analogue',
                    connectivity: 'Honda RoadSync'
                }
            },
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/cb350'
        },
        {
            id: 'nx200',
            name: 'NX200',
            category: 'motorcycle',
            tagline: 'Urban Explorer',
            cc: 184.4,
            power: '17 bhp @ 8500 rpm',
            torque: '16.1 Nm @ 6000 rpm',
            mileage: '40 kmpl',
            price: 145000,
            image: '/images/honda_nx200.png',
            fuelCapacity: '12 L',
            weight: '147 kg',
            seatHeight: '810 mm',
            brakes: 'Single Channel ABS',
            tyres: 'Block Pattern Tyres',
            colors: ['Decent Blue Metallic', 'Pearl Nightstar Black', 'Sports Red'],
            warranty: '3 Years',
            features: [
                'Upright Riding Position',
                'Tough Adventure Styling',
                'Long Travel Suspension',
                'All-round LED Lighting',
            ],
            description: 'Adventure-styled motorcycle optimized for city tours and light off-roading.',
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/nx200'
        },
        {
            id: 'shine100',
            name: 'Shine 100',
            category: 'motorcycle',
            tagline: 'India\'s Reliable 100cc Commuter',
            cc: 100,
            power: '7.61 bhp @ 7500 rpm',
            torque: '8.05 Nm @ 5000 rpm',
            mileage: '70 kmpl',
            price: 64900,
            image: '/images/honda_shine_100.png',
            fuelCapacity: '9 L',
            weight: '99 kg',
            seatHeight: '786 mm',
            brakes: 'CBS with Drum Brakes',
            tyres: 'Tubeless Tyres',
            colors: ['Black with Gold Stripes', 'Black with Red Stripes', 'Black with Blue Stripes'],
            warranty: '3 Years / 30,000 km',
            features: [
                'Enhanced Smart Power (eSP)',
                'Auto Choke for easy start',
                'Comfortable Long Seat',
                'Durable & Low Maintenance',
            ],
            description: 'Optimized for fuel economy, low running cost, and reliable daily commuting.',
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/shine100'
        },
        {
            id: 'cb125-hornet',
            name: 'CB125 Hornet',
            category: 'motorcycle',
            tagline: 'Lightweight Naked Streetfighter',
            cc: 123.94,
            power: '11 bhp @ 7500 rpm',
            torque: '11.2 Nm @ 6000 rpm',
            mileage: '65 kmpl',
            price: 85000,
            image: '/images/honda_cb125_hornet.png',
            fuelCapacity: '12 L',
            weight: '115 kg',
            seatHeight: '790 mm',
            brakes: 'Front Disc, Rear Drum/Disc Options',
            tyres: 'Tubeless Tyres',
            colors: ['Green & Black', 'Red & Black', 'Blue & Black'],
            warranty: '3 Years',
            features: [
                'Modern Meter Console',
                'Quick Acceleration (0-60 km/h in 6s)',
                'Sporty Naked Styling',
                'LED Lighting (Selected Trims)',
            ],
            description: 'Entry-level streetfighter with aggressive styling and nimble handling.',
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/cb125-hornet'
        },
        {
            id: 'cb300f',
            name: 'CB300F',
            category: 'motorcycle',
            tagline: 'Modern Streetfighter Performance',
            cc: 293.52,
            power: '24.13 bhp @ 7500 rpm',
            torque: '25.6 Nm @ 5500 rpm',
            mileage: '30 kmpl',
            price: 170000,
            image: '/images/honda_cb300f.png',
            fuelCapacity: '14.1 L',
            weight: '153 kg',
            seatHeight: '789 mm',
            brakes: 'Dual Channel ABS',
            tyres: '110/70 Front, 150/60 Rear',
            colors: ['Sports Red', 'Matte Marvel Blue Metallic', 'Matte Axis Grey Metallic'],
            warranty: '3 Years',
            features: [
                '4-Valve Oil-Cooled Engine',
                '6-Speed Transmission',
                'Slipper Clutch',
                'Honda Selectable Torque Control (HSTC)',
            ],
            description: 'Powerful 300cc naked bike designed for urban performance and sharp handling.',
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/cb300f'
        },
        {
            id: 'xl750-transalp',
            name: 'XL750 Transalp',
            category: 'motorcycle',
            tagline: 'True Adventure Tourer',
            cc: 755,
            power: '90.5 bhp @ 9500 rpm',
            torque: '75 Nm @ 7250 rpm',
            mileage: '23 kmpl',
            price: 1100000,
            image: '/images/honda_xl750_transalp.png',
            fuelCapacity: '16.9 L',
            weight: '208 kg',
            seatHeight: '850 mm',
            brakes: 'Dual Channel ABS with Off-road Mode',
            tyres: '21" Front, 18" Rear Spoked Wheels',
            colors: ['Ross White', 'Matte Iridium Gray Metallic'],
            warranty: '3 Years Premium Coverage',
            features: [
                '5 Riding Modes',
                'TFT Instrument Cluster',
                'Honda RoadSync Connectivity',
                'Emergency Stop Signal (ESS)',
            ],
            description: 'Legendary adventure machine built to handle everything from city streets to mountain passes.',
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/xl750-transalp'
        },
        {
            id: 'cb650r',
            name: 'CB650R',
            category: 'motorcycle',
            tagline: 'Neo Sports Café Masterpiece',
            cc: 649,
            power: '94 bhp @ 12000 rpm',
            torque: '63 Nm @ 9500 rpm',
            mileage: '20 kmpl',
            price: 915000,
            image: '/images/honda_cb650r.png',
            fuelCapacity: '15.4 L',
            weight: '203 kg',
            seatHeight: '810 mm',
            brakes: 'Dual Channel ABS with E-Clutch Technology',
            tyres: '120/70 Front, 180/55 Rear',
            colors: ['Candy Chromosphere Red', 'Matte Gunpowder Black Metallic'],
            warranty: '3 Years Premium',
            features: [
                'Honda E-Clutch Technology',
                'Inline 4-Cylinder Engine',
                'Showa SFF-BP USD Forks',
                'Full LED Lighting',
            ],
            description: 'A perfect blend of retro-minimalism and modern engineering for the ultimate street experience.',
            detailedSpecs: {
                engine: {
                    type: 'Liquid-cooled 4-stroke 16-valve DOHC inline-4 cylinder',
                    displacement: '649 cc',
                    maxPower: '70 kW @ 12000 rpm',
                    maxTorque: '63 Nm @ 9500 rpm',
                    fuelSystem: 'PGM-FI'
                },
                transmission: {
                    clutch: 'E-Clutch / Assist & Slipper',
                    gearbox: '6-Speed'
                },
                dimensions: {
                    wheelbase: '1450 mm',
                    kerbWeight: '203 kg',
                    groundClearance: '150 mm',
                    seatHeight: '810 mm',
                    fuelCapacity: '15.4 L'
                },
                chassis: {
                    frameType: 'Steel Diamond',
                    frontSuspension: 'Showa 41mm SFF-BP USD',
                    rearSuspension: 'Monoshock with 10-step preload'
                },
                tyresBrakes: {
                    frontTyre: '120/70ZR17 M/C',
                    rearTyre: '180/55ZR17 M/C',
                    frontBrake: '2x 310mm Disc, 4-piston calipers',
                    rearBrake: '240mm Disc, single-piston caliper',
                    abs: '2-Channel'
                },
                electricals: {
                    headlight: 'Circular LED',
                    meter: '5-inch TFT',
                    connectivity: 'Honda RoadSync'
                }
            },
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/cb650r'
        },
        {
            id: 'cbr650r',
            name: 'CBR650R',
            category: 'motorcycle',
            tagline: 'Refined Full-Faired Excellence',
            cc: 649,
            power: '94 bhp @ 12000 rpm',
            torque: '63 Nm @ 9500 rpm',
            mileage: '20 kmpl',
            price: 935000,
            image: '/images/honda_cbr650r.png',
            fuelCapacity: '15.4 L',
            weight: '208 kg',
            seatHeight: '810 mm',
            brakes: 'Dual Channel ABS',
            tyres: '120/70 Front, 180/55 Rear',
            colors: ['Grand Prix Red', 'Matte Gunpowder Black Metallic'],
            warranty: '3 Years Premium',
            features: [
                'E-Clutch on 2024 Models',
                'Dual LED Headlights',
                'Aerodynamic Bodywork',
                'Aggressive Sport Riding Position',
            ],
            description: 'Racing-derived performance for the street with impeccable Honda refinement.',
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/cbr650r',
            view360: {
                totalFrames: 4,
                frames: [
                    '/images/360/cbr650r/frame_0.png',
                    '/images/360/cbr650r/frame_1.png',
                    '/images/360/cbr650r/frame_2.png',
                    '/images/360/cbr650r/frame_3.png'
                ]
            },
            hotspots: [
                {
                    frameIndex: 0,
                    x: 50,
                    y: 35,
                    title: 'DUAL LED HEADLIGHTS',
                    description: 'Aggressive racing-inspired illumination for maximum visibility.'
                },
                {
                    frameIndex: 1,
                    x: 40,
                    y: 40,
                    title: 'AERODYNAMIC WING',
                    description: 'Derives downforce from MotoGP technology for high-speed stability.'
                },
                {
                    frameIndex: 2,
                    x: 55,
                    y: 60,
                    title: 'INLINE-4 POWERHOUSE',
                    description: 'Smooth 649cc DOHC 16-valve engine with signature racing howl.'
                },
                {
                    frameIndex: 3,
                    x: 65,
                    y: 45,
                    title: 'RACING TAIL',
                    description: 'Minimalist rear design with sharp LED tail-light integration.'
                }
            ]
        },
        {
            id: 'unicorn',
            name: 'Unicorn',
            category: 'motorcycle',
            cc: 160,
            power: '12.73 bhp @ 7500 rpm',
            torque: '14.0 Nm @ 5500 rpm',
            mileage: '60 kmpl',
            price: 109800,
            image: '/images/honda_unicorn_160.png',
            fuelCapacity: '13 L',
            weight: '140 kg',
            seatHeight: '798 mm',
            brakes: 'Front: Disc, Rear: Drum with CBS',
            tyres: 'Front: 90/90-17, Rear: 110/80-17',
            colors: ['Imperial Red Metallic', 'Matte Axis Grey Metallic', 'Pearl Igneous Black'],
            warranty: '3 Years / 30,000 km',
            features: [
                'Premium Build Quality',
                'Bold & Masculine Styling',
                'Refined BS6 Engine',
            ],
            description: 'Premium 160cc motorcycle with legendary build quality and superior performance.',
            officialUrl: 'https://www.honda2wheelersindia.com/products/motorcycle/unicorn'
        },
    ],
};

export const ALL_BIKES = [...BIKES.scooters, ...BIKES.motorcycles];
export const FEATURED_BIKES = ALL_BIKES.filter(bike => bike.featured);

export const TRANSLATIONS = {
    en: {
        home: 'Home',
        motorcycles: 'Motorcycles',
        scooters: 'Scooters',
        testRide: 'Test Ride',
        service: 'Service',
        finance: 'Finance & Insurance',
        reviews: 'Reviews',
        about: 'About Us',
        contact: 'Contact',
        callNow: 'Call Now',
        whatsappNow: 'WhatsApp Now',
        bookTestRide: 'Book Test Ride',
        getOnRoadPrice: 'Get On-Road Price',
        authorizedDealer: 'Authorized Honda Two-Wheeler Dealer',
        established: 'Established',
        openingHours: 'Opening Hours',
        testimonials: 'What Our Customers Say',
        featuredBikes: 'Featured Bikes',
        viewAll: 'View All',
        learnMore: 'Learn More',
    },
    hi: {
        home: 'होम',
        motorcycles: 'मोटरसाइकिल',
        scooters: 'स्कूटर',
        testRide: 'टेस्ट राइड',
        service: 'सर्विस',
        finance: 'फाइनेंस और इंश्योरेंस',
        reviews: 'समीक्षा',
        about: 'हमारे बारे में',
        contact: 'संपर्क करें',
        callNow: 'अभी कॉल करें',
        whatsappNow: 'व्हाट्सएप करें',
        bookTestRide: 'टेस्ट राइड बुक करें',
        getOnRoadPrice: 'ऑन-रोड कीमत जानें',
        authorizedDealer: 'अधिकृत होंडा टू-व्हीलर डीलर',
        established: 'स्थापित',
        openingHours: 'खुलने का समय',
        testimonials: 'हमारे ग्राहक क्या कहते हैं',
        featuredBikes: 'फीचर्ड बाइक',
        viewAll: 'सभी देखें',
        learnMore: 'और जानें',
    },
};
