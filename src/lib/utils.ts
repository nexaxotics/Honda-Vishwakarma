import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(price);
}

export function formatPhoneNumber(phone: string): string {
    // Format +91 9631957878 to +91 96319 57878
    return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, '$1 $2 $3');
}

export function getWhatsAppLink(phone: string, message: string = ''): string {
    const cleanPhone = phone.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanPhone}${message ? `?text=${encodedMessage}` : ''}`;
}

export function getCallLink(phone: string): string {
    return `tel:${phone}`;
}

export function calculateOnRoadPrice(exShowroomPrice: number): number {
    // Rough calculation: Ex-showroom + 10% RTO + 5% Insurance
    const rto = exShowroomPrice * 0.10;
    const insurance = exShowroomPrice * 0.05;
    return Math.round(exShowroomPrice + rto + insurance);
}

export function calculateEMI(
    principal: number,
    annualRate: number,
    tenureMonths: number
): number {
    const monthlyRate = annualRate / 12 / 100;
    const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    return Math.round(emi);
}
