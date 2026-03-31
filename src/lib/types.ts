export interface BikeSpec {
    engine?: {
        type?: string;
        displacement?: string;
        maxPower?: string;
        maxTorque?: string;
        fuelSystem?: string;
        cooling?: string;
    };
    transmission?: {
        clutch?: string;
        gearbox?: string;
    };
    dimensions?: {
        wheelbase?: string;
        kerbWeight?: string;
        groundClearance?: string;
        seatHeight?: string;
        fuelCapacity?: string;
    };
    chassis?: {
        frameType?: string;
        frontSuspension?: string;
        rearSuspension?: string;
    };
    tyresBrakes?: {
        frontTyre?: string;
        rearTyre?: string;
        frontBrake?: string;
        rearBrake?: string;
        abs?: string;
    };
    electricals?: {
        headlight?: string;
        tailLight?: string;
        meter?: string;
        connectivity?: string;
        battery?: string;
    };
}

export interface Bike {
    id: string;
    name: string;
    category: 'scooter' | 'motorcycle' | 'ev';
    cc?: number;
    power?: string;
    torque?: string;
    mileage?: string;
    price?: number;
    image: string;
    videoUrl?: string;
    featured?: boolean;
    fuelCapacity?: string;
    weight?: string;
    seatHeight?: string;
    brakes?: string;
    tyres?: string;
    colors?: string[];
    warranty?: string;
    features?: string[];
    description?: string;
    detailedSpecs?: BikeSpec;
    tagline?: string;
    officialUrl?: string;

    // New Fields
    segment?: string; // e.g. "Premium", "Commuter"
    series?: string; // e.g. "Activa", "CB"
    fuel?: 'Petrol' | 'Electric';
    type?: string; // e.g. "Cruiser", "Sports"
    slug?: string;
    view360?: {
        frames: string[];
        totalFrames: number;
    };
    hotspots?: {
        frameIndex: number;
        x: number; // Percentage 0-100
        y: number; // Percentage 0-100
        title: string;
        description: string;
    }[];
}

export interface Hotspot {
    frameIndex: number;
    x: number;
    y: number;
    title: string;
    description: string;
}

