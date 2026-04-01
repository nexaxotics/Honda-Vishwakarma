'use client';

import React from 'react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { FloatingButtons } from '@/components/shared/FloatingButtons';
import { ChatBot } from '@/components/shared/ChatBot';
import AssetDevTools from '@/components/dev/AssetDevTools';
import { DemoWatermark } from '@/components/shared/DemoWatermark';
import { LanguageProvider, useLanguage } from '@/components/shared/LanguageContext';

interface ClientLayoutProps {
    children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
    return (
        <LanguageProvider>
            <ClientLayoutContent>{children}</ClientLayoutContent>
        </LanguageProvider>
    );
}

function ClientLayoutContent({ children }: ClientLayoutProps) {
    const { lang, setLang } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen relative">
            <Header lang={lang} onLanguageChange={setLang} />
            <main className="flex-grow">{children}</main>
            <Footer lang={lang} />
            {/* Overlay elements for better stacking and alignment */}
            <div className="pointer-events-none">
                <div className="pointer-events-auto">
                    <FloatingButtons />
                    <ChatBot />
                    <AssetDevTools />
                </div>
            </div>
        </div>
    );
}
