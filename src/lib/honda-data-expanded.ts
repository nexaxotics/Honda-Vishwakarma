import { Bike } from './types';

export const ADDITIONAL_BIKES: { scooters: Bike[]; motorcycles: Bike[]; ev: Bike[] } = {
    ev: [
        {
            id: 'activa-e',
            name: 'Activa e:',
            category: 'ev',
            image: '/images/honda_activa_110.png', // Placeholder
            fuel: 'Electric',
            series: 'Activa',
            segment: 'Scooter',
            slug: 'activa-e',
            description: 'The electric evolution of India\'s favorite scooter.',
            features: ['Swappable Battery', 'Digital Display'],
            colors: ['Pearl White', 'Matte Black']
        },
        {
            id: 'qc1',
            name: 'QC1',
            category: 'ev',
            image: '/images/honda_dio_110.png', // Placeholder
            fuel: 'Electric',
            segment: 'Scooter',
            slug: 'qc1',
            description: 'Compact urban electric mobility.',
            colors: ['Silver', 'White']
        }
    ],
    scooters: [
        {
            id: 'activa-110',
            name: 'Activa 110',
            category: 'scooter',
            cc: 109.51,
            price: 76234,
            image: '/images/honda_activa_110.png',
            series: 'Activa',
            segment: 'Commuter',
            fuel: 'Petrol',
            type: 'Scooter',
            slug: 'activa-110',
            colors: ['Decent Blue', 'Pearl Precious White', 'Black'],
            features: ['eSP Technology', 'Engine Start/Stop Switch'],
            description: 'The game changing scooter of India.'
        },
        {
            id: 'activa-110-anniversary',
            name: 'Activa 110 Anniversary Edition',
            category: 'scooter',
            cc: 109.51,
            price: 78000,
            image: '/images/honda_activa_110.png',
            series: 'Activa',
            segment: 'Commuter',
            fuel: 'Petrol',
            type: 'Scooter',
            slug: 'activa-110-anniversary',
            featured: true
        },
        {
            id: 'activa-125',
            name: 'Activa 125',
            category: 'scooter',
            cc: 124,
            price: 85000,
            image: '/images/honda_activa_110.png',
            series: 'Activa',
            segment: 'Premium',
            fuel: 'Petrol',
            type: 'Scooter',
            slug: 'activa-125'
        },
        {
            id: 'activa-125-anniversary',
            name: 'Activa 125 Anniversary Edition',
            category: 'scooter',
            cc: 124,
            price: 87000,
            image: '/images/honda_activa_110.png',
            series: 'Activa',
            segment: 'Premium',
            fuel: 'Petrol',
            type: 'Scooter',
            slug: 'activa-125-anniversary'
        },
        {
            id: 'dio-110',
            name: 'Dio 110',
            category: 'scooter',
            cc: 109.51,
            price: 74000,
            image: '/images/honda_dio_110.png',
            series: 'Dio',
            segment: 'Sporty',
            fuel: 'Petrol',
            type: 'Scooter',
            slug: 'dio-110'
        },
        {
            id: 'dio-125',
            name: 'Dio 125',
            category: 'scooter',
            cc: 123.9,
            price: 83400,
            image: '/images/honda_dio_110.png',
            series: 'Dio',
            segment: 'Sporty',
            fuel: 'Petrol',
            type: 'Scooter',
            slug: 'dio-125'
        },
        {
            id: 'dio-125-x',
            name: 'Dio 125 X-Edition',
            category: 'scooter',
            cc: 123.9,
            price: 85000,
            image: '/images/honda_dio_110.png',
            series: 'Dio',
            segment: 'Sporty',
            fuel: 'Petrol',
            type: 'Scooter',
            slug: 'dio-125-x'
        }
    ],
    motorcycles: [
        // Commuters
        {
            id: 'shine-100',
            name: 'Shine 100',
            category: 'motorcycle',
            cc: 100,
            price: 64900,
            image: '/images/honda_shine_100.png',
            series: 'Shine',
            segment: 'Commuter',
            fuel: 'Petrol',
            slug: 'shine-100'
        },
        {
            id: 'shine-100-dx',
            name: 'Shine 100 DX',
            category: 'motorcycle',
            cc: 100,
            price: 66000,
            image: '/images/honda_shine_100.png',
            series: 'Shine',
            segment: 'Commuter',
            fuel: 'Petrol',
            slug: 'shine-100-dx'
        },
        {
            id: 'shine-125',
            name: 'Shine 125',
            category: 'motorcycle',
            cc: 125,
            price: 79800,
            image: '/images/honda_shine_125.png',
            series: 'Shine',
            segment: 'Commuter',
            fuel: 'Petrol',
            slug: 'shine-125'
        },
        {
            id: 'shine-125-limited',
            name: 'Shine 125 Limited Edition',
            category: 'motorcycle',
            cc: 125,
            price: 82000,
            image: '/images/honda_shine_125.png',
            series: 'Shine',
            segment: 'Commuter',
            fuel: 'Petrol',
            slug: 'shine-125-limited'
        },
        {
            id: 'sp125',
            name: 'SP 125',
            category: 'motorcycle',
            cc: 125,
            price: 86000,
            image: '/images/honda_sp125.png',
            series: 'SP',
            segment: 'Commuter',
            fuel: 'Petrol',
            slug: 'sp-125'
        },
        {
            id: 'sp125-anniversary',
            name: 'SP 125 Anniversary Edition',
            category: 'motorcycle',
            cc: 125,
            price: 88000,
            image: '/images/honda_sp125.png',
            series: 'SP',
            segment: 'Commuter',
            fuel: 'Petrol',
            slug: 'sp-125-anniversary'
        },
        {
            id: 'sp160',
            name: 'SP 160',
            category: 'motorcycle',
            cc: 162.71,
            price: 117500,
            image: '/images/honda_sp160.png',
            series: 'SP',
            segment: 'Sport Commuter',
            fuel: 'Petrol',
            slug: 'sp-160'
        },
        {
            id: 'livo',
            name: 'Livo',
            category: 'motorcycle',
            cc: 110,
            price: 78500,
            image: '/images/honda_livo_110.png',
            series: 'Livo',
            segment: 'Commuter',
            fuel: 'Petrol',
            slug: 'livo'
        },
        {
            id: 'unicorn',
            name: 'Unicorn',
            category: 'motorcycle',
            cc: 160,
            price: 109800,
            image: '/images/honda_unicorn_160.png',
            series: 'Unicorn',
            segment: 'Commuter',
            fuel: 'Petrol',
            slug: 'unicorn'
        },
        // Hornet & Sport
        {
            id: 'hornet-2-0',
            name: 'Hornet 2.0',
            category: 'motorcycle',
            cc: 184,
            price: 139000,
            image: '/images/honda_hornet_2_0.png',
            series: 'Hornet',
            segment: 'Sport',
            fuel: 'Petrol',
            slug: 'hornet-2-0'
        },
        {
            id: 'cb300f',
            name: 'CB300F',
            category: 'motorcycle',
            cc: 293,
            price: 170000,
            image: '/images/honda_cb300f.png',
            series: 'CB',
            segment: 'Sport',
            fuel: 'Petrol',
            slug: 'cb300f'
        },
        // CB Series Premium
        {
            id: 'cb350',
            name: 'CB350',
            category: 'motorcycle',
            cc: 348,
            price: 199900,
            image: '/images/honda_cb350_hness.png', // Using Hness as proxy
            series: 'CB',
            segment: 'Premium',
            fuel: 'Petrol',
            type: 'Classic',
            slug: 'cb350'
        },
        {
            id: 'hness-cb350',
            name: 'H\'ness CB350',
            category: 'motorcycle',
            cc: 348.36,
            price: 209857,
            image: '/images/honda_cb350_hness.png',
            series: 'CB',
            segment: 'Premium',
            fuel: 'Petrol',
            type: 'Classic',
            slug: 'hness-cb350'
        },
        {
            id: 'cb350rs',
            name: 'CB350RS',
            category: 'motorcycle',
            cc: 348.36,
            price: 214856,
            image: '/images/honda_cb350_hness.png', // Using Hness as proxy
            series: 'CB',
            segment: 'Premium',
            fuel: 'Petrol',
            type: 'Scrambler',
            slug: 'cb350rs'
        },
        // Big Bikes / Adventure
        {
            id: 'nx500',
            name: 'NX500',
            category: 'motorcycle',
            cc: 471,
            price: 590000,
            image: '/images/honda_nx200.png', // Using NX200 as proxy for NX500
            series: 'NX',
            segment: 'Adventure',
            fuel: 'Petrol',
            slug: 'nx500'
        },
        {
            id: 'nx200',
            name: 'NX200',
            category: 'motorcycle',
            cc: 184,
            price: 147000,
            image: '/images/honda_nx200.png',
            series: 'NX',
            segment: 'Adventure',
            fuel: 'Petrol',
            slug: 'nx200'
        },
        {
            id: 'transalp-750',
            name: 'XL750 Transalp',
            category: 'motorcycle',
            cc: 755,
            price: 1099990,
            image: '/images/honda_xl750_transalp.png',
            series: 'XL',
            segment: 'Adventure',
            fuel: 'Petrol',
            slug: 'transalp-750'
        },
        {
            id: 'goldwing',
            name: 'Gold Wing Tour',
            category: 'motorcycle',
            cc: 1833,
            price: 3916055,
            image: '/images/honda_xl750_transalp.png', // Using Transalp - Adventure style
            series: 'Gold Wing',
            segment: 'Flagship',
            fuel: 'Petrol',
            type: 'Tourer',
            slug: 'goldwing'
        },
        // Racing
        {
            id: 'cbr1000rr-r',
            name: 'CBR1000RR-R Fireblade',
            category: 'motorcycle',
            cc: 1000,
            price: 2300000,
            image: '/images/honda_cbr650r.png', // Using CBR650 as proxy
            series: 'CBR',
            segment: 'Flagship',
            fuel: 'Petrol',
            type: 'Supersport',
            slug: 'cbr1000rr-r'
        },
        {
            id: 'cbr650r',
            name: 'CBR650R',
            category: 'motorcycle',
            cc: 650,
            price: 935427,
            image: '/images/honda_cbr650r.png',
            series: 'CBR',
            segment: 'Sport',
            fuel: 'Petrol',
            slug: 'cbr650r'
        },
        {
            id: 'cb650r',
            name: 'CB650R',
            category: 'motorcycle',
            cc: 650,
            price: 914813,
            image: '/images/honda_cb650r.png',
            series: 'CB',
            segment: 'Sport',
            fuel: 'Petrol',
            slug: 'cb650r'
        }
    ]
};
