'use client';

import React, { useState, useEffect } from 'react';
import { ASSET_SOURCE } from '@/config/assetSource';
import { getAsset } from '@/lib/assets';
import { FaCog, FaImage, FaCopy, FaSave, FaTimes, FaUndo, FaSearch } from 'react-icons/fa';

export default function AssetDevTools() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'config' | 'picker'>('config');
    const [config, setConfig] = useState(ASSET_SOURCE);
    const [testPath, setTestPath] = useState('honda2wheelersindia/home/banner-1.png');
    const [previewUrl, setPreviewUrl] = useState('');

    useEffect(() => {
        // Load override from local storage on mount
        const override = localStorage.getItem('honda_asset_source_override');
        if (override) {
            try {
                const parsed = JSON.parse(override);
                setConfig(parsed);
            } catch (e) {
                console.error("Failed to parse asset override", e);
            }
        }
    }, []);

    const handleSave = () => {
        if (config.type !== 'local' && !config.baseUrl.startsWith('http')) {
            alert("Please enter a valid URL starting with http:// or https://");
            return;
        }
        localStorage.setItem('honda_asset_source_override', JSON.stringify(config));
        window.location.reload();
    };

    const handleReset = () => {
        localStorage.removeItem('honda_asset_source_override');
        window.location.reload();
    };

    const handleTestAsset = () => {
        // We use the local state config to generate the URL for preview
        let baseUrl = config.baseUrl;
        if (baseUrl.endsWith('/')) baseUrl = baseUrl.slice(0, -1);

        const cleanPath = testPath.startsWith('/') ? testPath.slice(1) : testPath;

        if (config.type === 'external' || config.type === 'dealer') {
            setPreviewUrl(`${baseUrl}/${cleanPath}`);
        } else {
            setPreviewUrl(`/${cleanPath}`);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // Could add a toast here
    };

    if (process.env.NODE_ENV !== 'development') return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 font-sans">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-black/80 hover:bg-black text-white p-3 rounded-full shadow-lg border border-white/20 transition-all hover:scale-105"
                    title="Asset Source Manager"
                >
                    <FaCog className="text-xl animate-spin-slow" />
                </button>
            )}

            {isOpen && (
                <div className="bg-gray-900 border border-white/10 rounded-xl shadow-2xl w-80 md:w-96 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-gray-950 p-3 border-b border-white/10 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold bg-honda-red text-white px-2 py-0.5 rounded">DEV</span>
                            <span className="text-sm font-semibold text-white">Asset Manager</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/50 hover:text-white transition-colors"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-white/5 bg-white/5">
                        <button
                            onClick={() => setActiveTab('config')}
                            className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider ${activeTab === 'config' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
                        >
                            Config
                        </button>
                        <button
                            onClick={() => setActiveTab('picker')}
                            className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider ${activeTab === 'picker' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
                        >
                            Picker
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-gray-900 text-gray-200 text-sm max-h-[60vh] overflow-y-auto">

                        {activeTab === 'config' && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs text-white/50 font-bold uppercase">Source Type</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {['external', 'dealer', 'local'].map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setConfig({ ...config, type })}
                                                className={`py-1.5 px-2 rounded border text-xs font-medium transition-all ${config.type === type
                                                    ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                                                    : 'bg-white/5 border-white/5 text-white/50 hover:border-white/20'
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-white/50 font-bold uppercase">Base URL</label>
                                    <textarea
                                        value={config.baseUrl}
                                        onChange={(e) => setConfig({ ...config, baseUrl: e.target.value })}
                                        className="w-full bg-black/50 border border-white/10 rounded p-2 text-xs text-white font-mono h-20 focus:border-blue-500 outline-none resize-none"
                                        placeholder="https://..."
                                    />
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <button
                                        onClick={handleSave}
                                        className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded flex items-center justify-center gap-2 font-semibold transition-colors"
                                    >
                                        <FaSave /> Apply & Reload
                                    </button>
                                    <button
                                        onClick={handleReset}
                                        className="bg-white/10 hover:bg-white/20 text-white py-2 px-3 rounded flex items-center justify-center gap-2 transition-colors"
                                        title="Reset to Default"
                                    >
                                        <FaUndo />
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'picker' && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs text-white/50 font-bold uppercase">Asset Path</label>
                                    <div className="flex gap-2">
                                        <input
                                            value={testPath}
                                            onChange={(e) => setTestPath(e.target.value)}
                                            className="flex-1 bg-black/50 border border-white/10 rounded p-2 text-xs text-white font-mono focus:border-blue-500 outline-none"
                                            placeholder="folder/image.png"
                                        />
                                        <button
                                            onClick={handleTestAsset}
                                            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded"
                                        >
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>

                                {previewUrl && (
                                    <div className="space-y-2 animate-in fade-in zoom-in duration-300">
                                        <div className="border border-white/10 rounded-lg overflow-hidden bg-checkered aspect-video flex items-center justify-center relative group">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={previewUrl} alt="Preview" className="max-w-full max-h-full object-contain" />
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <p className="text-xs text-white font-mono">{Math.round(Math.random() * 1000)}kb (simulated)</p>
                                            </div>
                                        </div>

                                        <div className="bg-black/50 p-2 rounded border border-white/5 flex items-center justify-between gap-2">
                                            <code className="text-[10px] text-green-400 font-mono truncate">
                                                {`<img src={getAsset("${testPath}")} />`}
                                            </code>
                                            <button
                                                onClick={() => copyToClipboard(`<img src={getAsset("${testPath}")} />`)}
                                                className="text-white/40 hover:text-white"
                                            >
                                                <FaCopy />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>

                    {/* Footer Status */}
                    <div className="bg-black/50 px-3 py-1 text-[10px] text-white/30 border-t border-white/5 flex justify-between">
                        <span>Antigravity IDE</span>
                        <span>v1.0.0</span>
                    </div>
                </div>
            )}

            <style jsx global>{`
                .bg-checkered {
                    background-color: #1a1a1a;
                    background-image: 
                        linear-gradient(45deg, #222 25%, transparent 25%), 
                        linear-gradient(-45deg, #222 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, #222 75%), 
                        linear-gradient(-45deg, transparent 75%, #222 75%);
                    background-size: 20px 20px;
                    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
                }
                .animate-spin-slow {
                    animation: spin 3s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
