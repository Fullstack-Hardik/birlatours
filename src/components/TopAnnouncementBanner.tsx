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
    <div className="relative w-full h-12 sm:h-14 overflow-hidden bg-stone-950 border-b border-amber-500/25 select-none z-40 shadow-inner">
      {/* Background Panoramic Temple Image with enhanced visibility */}
      <div className="absolute inset-0 z-0 opacity-65">
        <Image
          src="/images/temple-panoramic.jpg"
          alt="Ancient Indian Temple Panorama"
          fill
          priority
          className="object-cover object-center filter saturate-150 contrast-110"
        />
        {/* Transparent warm golden glow & vignette allowing temple architecture to shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/80" />
        <div className="absolute inset-0 bg-stone-950/30" />
      </div>

      {/* Continuously Sliding Temple Themed Marquee with Star Separators */}
      <div className="relative z-10 h-full flex items-center overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] will-change-transform">
          {[...phrases, ...phrases, ...phrases].map((text, idx) => (
            <div key={idx} className="flex items-center gap-6 text-xs sm:text-[13px] tracking-widest uppercase font-semibold text-amber-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <span className="text-[#f26b45] text-base drop-shadow-[0_0_8px_rgba(242,107,69,0.8)]">★</span>
              <span className="tracking-widest font-serif">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
