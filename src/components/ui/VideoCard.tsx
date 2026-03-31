import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

interface VideoCardProps {
    src: string;
    poster?: string;
    title?: string;
    description?: string;
    badge?: string;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({
    src,
    poster,
    title,
    description,
    badge,
    className,
    autoPlay = true,
    muted = true,
    loop = true,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isMuted, setIsMuted] = useState(muted);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            if (autoPlay) {
                videoRef.current.play().catch(error => {
                    console.log("Autoplay prevented:", error);
                    setIsPlaying(false);
                });
            }
        }
    }, [autoPlay]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div 
            className={cn(
                "relative group overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl", 
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <video
                ref={videoRef}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                poster={poster}
                loop={loop}
                muted={muted} // Initial mute state for attribute
                playsInline
                onClick={togglePlay}
            >
                <source src={src} type="video/mp4" />
                <source src={src.replace('.mp4', '.webm')} type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-300" />

            {/* Controls & Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10 pointer-events-none">
                <div className="flex justify-between items-start">
                    {badge && (
                        <Badge className="bg-honda-red/90 text-white border-none shadow-lg backdrop-blur-sm animate-fade-in pointer-events-auto">
                            {badge}
                        </Badge>
                    )}
                    
                    <button 
                        onClick={toggleMute}
                        className={cn(
                            "w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all hover:bg-honda-red pointer-events-auto",
                            isHovered || !isMuted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                        )}
                        aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                        {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
                    </button>
                </div>

                <div 
                    className={cn(
                        "transition-all duration-500 transform",
                        isHovered ? "translate-y-0" : "translate-y-2"
                    )}
                >
                    {title && (
                        <h3 className="text-2xl font-black text-white italic tracking-tighter mb-2 drop-shadow-md">
                            {title}
                        </h3>
                    )}
                    {description && (
                        <p className={cn(
                            "text-white/80 font-medium text-sm leading-relaxed max-w-[90%] transition-all duration-500 delay-100",
                            isHovered ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
                        )}>
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {/* Central Play Button (Only shows when paused) */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center text-white pl-1 pointer-events-auto cursor-pointer hover:scale-110 transition-transform hover:bg-honda-red hover:border-honda-red" onClick={togglePlay}>
                        <FaPlay size={24} />
                    </div>
                </div>
            )}
        </div>
    );
};
