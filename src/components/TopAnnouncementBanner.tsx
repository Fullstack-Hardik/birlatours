'use client';

import React from 'react';
import TextLoop from '@/components/ui/TextLoop';

export default function TopAnnouncementBanner() {
  const text = "CHAR DHAM YATRA 2026 BOOKINGS OPEN ✦ TOYOTA INNOVA CRYSTA LUXURY CABS ✦ 24x7 JOLLY GRANT AIRPORT TAXI ✦ HARIDWAR & DEHRADUN OFFICES ✦ CALL 9917490721 / 6397295500 ✦ KEDARNATH & BADRINATH DIRECT EXPEDITIONS ✦ MUSSOORIE & DHANAULTI SIGHTSEEING";

  return (
    <div className="relative w-full bg-[#1c1917] text-white border-b border-stone-800 overflow-hidden py-1.5 z-40 select-none">
      <div className="max-w-7xl mx-auto flex items-center">
        <TextLoop
          text={text}
          shape="line"
          speed={45}
          direction="forward"
          separator="✦"
          fontSize={11}
          fontWeight={700}
          letterSpacing={1.8}
          uppercase
          ribbon={false}
          color="#f26b45"
          className="h-6 flex items-center"
        />
      </div>
    </div>
  );
}

