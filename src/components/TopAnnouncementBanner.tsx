'use client';

import React from 'react';
import Image from 'next/image';

export default function TopAnnouncementBanner() {
  const phrases = [
    "Discover Uttarakhand's Sacred Heritage",
    "Char Dham Yatra 2026: Kedarnath · Badrinath · Gangotri · Yamunotri",
    "Your Journey, Our Responsibility",
    "Pristine Toyota Innova Crysta Chauffeur Service",
    "Haridwar Junction · Jolly Grant Dehradun Airport · Roorkee NH-334",
    "Call 9917490721 · 6397295500",
  ];

  return (
    <div className="relative w-full h-11 sm:h-12 overflow-hidden bg-stone-950 border-b border-amber-900/40 select-none z-40">
      {/* Background Panoramic Temple Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/temple-panoramic.jpg"
          alt="Ancient Indian Temple Panorama"
          fill
          priority
          className="object-cover object-center filter saturate-125"
        />
        {/* Soft Golden Gradient & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-stone-950/90 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-stone-950/40" />
      </div>

      {/* Continuously Sliding Temple Themed Marquee */}
      <div className="relative z-10 h-full flex items-center overflow-hidden">
        <div className="flex items-center gap-10 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] will-change-transform">
          {[...phrases, ...phrases, ...phrases].map((text, idx) => (
            <div key={idx} className="flex items-center gap-6 text-[11px] sm:text-xs tracking-wider uppercase font-medium text-amber-100/90 drop-shadow-sm">
              <span className="text-amber-400/80 font-serif">✦</span>
              <span className="font-sans font-medium text-amber-50/95 tracking-widest">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
