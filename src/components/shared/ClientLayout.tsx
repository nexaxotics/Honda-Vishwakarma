'use client';

import React, { useState } from 'react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { FloatingButtons } from '@/components/shared/FloatingButtons';
import { ChatBot } from '@/components/shared/ChatBot';
import AssetDevTools from '@/components/dev/AssetDevTools';
import { DemoWatermark } from '@/components/shared/DemoWatermark';

interface ClientLayoutProps {
    children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
    const [lang, setLang] = useState<'en' | 'hi'>('en');

    return (
        <div className="flex flex-col min-h-screen">
            <Header lang={lang} onLanguageChange={setLang} />
            <main className="flex-grow">{children}</main>
            <Footer lang={lang} />
            <FloatingButtons />
            <ChatBot />
            <AssetDevTools />
            {/* <DemoWatermark /> */}
        </div>
    );
}
