import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type TestRideBooking = {
    id?: string;
    name: string;
    phone: string;
    bike_model: string;
    preferred_date: string;
    location?: string;
    status?: 'pending' | 'contacted' | 'completed';
    created_at?: string;
};

export type ServiceBooking = {
    id?: string;
    name: string;
    phone: string;
    bike_model: string;
    registration_no: string;
    issue: string;
    preferred_date: string;
    status?: 'pending' | 'in-progress' | 'completed';
    created_at?: string;
};

export type Enquiry = {
    id?: string;
    name: string;
    phone: string;
    email?: string;
    message: string;
    enquiry_type: 'general' | 'price' | 'finance' | 'other';
    created_at?: string;
};
