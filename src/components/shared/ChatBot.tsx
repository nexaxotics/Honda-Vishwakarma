
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaMotorcycle, FaWrench, FaMoneyBillWave, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { cn, formatPrice } from '@/lib/utils';
import { BUSINESS_INFO, ALL_BIKES } from '@/lib/constants';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
    type?: 'text' | 'options';
    options?: string[];
}

const QUICK_ACTIONS = [
    { label: 'Check Prices', icon: <FaMoneyBillWave /> },
    { label: 'Book Test Ride', icon: <FaMotorcycle /> },
    { label: 'Service Center', icon: <FaWrench /> },
    { label: 'Showroom Location', icon: <FaMapMarkerAlt /> },
    { label: 'New Arrivals', icon: <FaRobot /> },
];

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: `Namaste! I am the **Honda AI Assistant**. How can I help you ride your dream Honda today?`,
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (text: string = input) => {
        if (!text.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: text,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Process Bot Response
        setTimeout(() => {
            const responseText = generateResponse(text);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500); // Realistic delay
    };

    const generateResponse = (query: string): string => {
        const q = query.toLowerCase();

        // 1. New Arrivals / Latest
        if (q.includes('new') || q.includes('latest') || q.includes('launch')) {
            return "The all-new **Honda SP 160** and **Hornet 2.0** are our latest sensations! They feature advanced PGM-FI engines and sporty designs. Would you like to check their prices?";
        }

        // 2. Service & Maintenance
        if (q.includes('service') || q.includes('repair') || q.includes('maintenance')) {
            return `Our authorized service center offers genuine Honda parts and expert care. \n\n📍 **Location**: ${BUSINESS_INFO.address.street}\n⏰ **Timings**: ${BUSINESS_INFO.hours.display}\n📞 **Booking**: Call ${BUSINESS_INFO.contact.phones[0]}`;
        }

        // 3. Finance / EMI
        if (q.includes('finance') || q.includes('loan') || q.includes('emi') || q.includes('down payment')) {
            return "We offer easy finance options with **low down payments** and **attractive interest rates** from partners like HDFC, IDFC, and Honda Finance. Visit us today for a quick eligibility check!";
        }

        // 4. Location
        if (q.includes('location') || q.includes('address') || q.includes('where')) {
            return `We are located at: **${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state}**.\n(Near Rajauli Market)`;
        }

        // 5. Contact
        if (q.includes('contact') || q.includes('phone') || q.includes('call')) {
            return `📞 Call us: **${BUSINESS_INFO.contact.phones.join(', ')}**\n💬 WhatsApp: **${BUSINESS_INFO.contact.whatsapp}**`;
        }

        // 6. Test Ride
        if (q.includes('test ride') || q.includes('book') || q.includes('try')) {
            return "Excited to ride? 🏍️ You can book a test ride directly through this website or simply visit our showroom. Don't forget your driving license!";
        }

        // 7. SPECIFIC BIKE QUERIES (Enhanced Data)
        for (const bike of ALL_BIKES) {
            const bikeName = bike.name.toLowerCase().replace('honda ', '');
            if (q.includes(bikeName)) {
                if (q.includes('price') || q.includes('cost')) {
                    return `💰 **${bike.name} Price**: Starts at **${formatPrice(bike.price ?? 0)}** (Ex-showroom). *On-road price may vary.*`;
                }
                if (q.includes('mileage') || q.includes('average')) {
                    return `⛽ **${bike.name} Mileage**: Delivers approximately **${bike.mileage}**. Best in class efficiency!`;
                }
                if (q.includes('color') || q.includes('colours')) {
                    return bike.colors && bike.colors.length > 0
                        ? `🎨 **${bike.name} Colors**: Available in ${bike.colors.join(', ')}.`
                        : `🎨 **${bike.name}**: Color information not available.`;
                }
                if (q.includes('spec') || q.includes('engine') || q.includes('power')) {
                    const features = bike.features && bike.features.length > 0 ? bike.features.slice(0, 2).join(', ') : 'Feature information not available';
                    return `⚙️ **${bike.name} Specs**:\n- Engine: ${bike.cc}cc\n- Power: ${bike.power}\n- Features: ${features}`;
                }
                return `**${bike.name}** is a fantastic choice! \n- ${bike.cc}cc Engine\n- ${bike.mileage} Mileage\n- Price: ${formatPrice(bike.price ?? 0)}\n\nWould you like to book a test ride?`;
            }
        }

        // 8. General Categories
        if (q.includes('scooter') || q.includes('activa')) {
            return "Looking for a scooter? We have the legendary **Activa 6G** and the sporty **Dio**. Which one fits your style?";
        }
        if (q.includes('bike') || q.includes('motorcycle')) {
            return "We have everything from the reliable **Shine 100** to the powerful **CB350**. Are you looking for a Commuter or Sporty bike?";
        }

        // Default
        return "I can help you with **Bike Prices**, **Mileage Info**, **Service Bookings**, or **Test Rides**. Please select an option below or type your query!";
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-sans">
            {/* Chat Window */}
            {isOpen && (
                <Card className="mb-4 w-[340px] sm:w-[380px] h-[550px] shadow-2xl border-none ring-1 ring-black/5 flex flex-col overflow-hidden animate-slide-up bg-white rounded-2xl">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-honda-red to-red-700 text-white p-4 shadow-md z-10">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30">
                                        <FaRobot className="text-lg" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-honda-red rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Honda AI Assistant</h3>
                                    <p className="text-[10px] text-white/80 font-medium">Always here to help</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-200">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex w-full animate-in fade-in slide-in-from-bottom-2 duration-300",
                                    msg.sender === 'user' ? "justify-end" : "justify-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm",
                                        msg.sender === 'user'
                                            ? "bg-honda-red text-white rounded-tr-sm"
                                            : "bg-white text-gray-800 border border-gray-100 rounded-tl-sm ring-1 ring-black/5"
                                    )}
                                >
                                    <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{
                                        __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')
                                    }} />
                                    <p className={cn(
                                        "text-[9px] mt-1.5 font-medium opacity-60",
                                        msg.sender === 'user' ? "text-white text-right" : "text-gray-500"
                                    )}>
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex justify-start animate-in fade-in">
                                <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5 items-center">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </CardContent>

                    {/* Quick Actions & Input */}
                    <div className="bg-white p-3 border-t border-gray-100">
                        {/* Quick Chips */}
                        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-1 mask-linear-fade">
                            {QUICK_ACTIONS.map((action) => (
                                <button
                                    key={action.label}
                                    onClick={() => handleSend(action.label)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-honda-red hover:text-white text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-wide transition-all whitespace-nowrap flex-shrink-0 border border-gray-200 hover:border-honda-red"
                                >
                                    {action.icon} {action.label}
                                </button>
                            ))}
                        </div>

                        {/* Input Field */}
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Type your question..."
                                className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-honda-red/10 focus:border-honda-red outline-none transition-all text-sm"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={!input.trim()}
                                className="absolute right-2 p-2 bg-honda-red text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md group"
                            >
                                <FaPaperPlane className="text-xs group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>
                </Card>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "h-14 w-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-50",
                    isOpen
                        ? "bg-gray-900 text-white rotate-90"
                        : "bg-honda-red text-white hover:scale-110 hover:shadow-honda-red/40 animate-bounce-subtle"
                )}
            >
                {isOpen ? <FaTimes className="text-xl" /> : <FaRobot className="text-2xl" />}
            </button>
        </div>
    );
}
