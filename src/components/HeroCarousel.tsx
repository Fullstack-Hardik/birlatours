'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  slides?: Array<{
    src: string;
    tag: string;
    title: string;
    sub: string;
  }>;
}

const defaultSlides = [
  {
    src: '/carousel/c1.jpg',
    tag: 'Flagship Toyota Innova Crysta',
    title: 'Pristine 7-Seater Luxury Fleet',
    sub: 'Deep sanitized interiors, dual AC, plush captain seats & smooth mountain suspension'
  },
  {
    src: '/carousel/c2.jpg',
    tag: 'Char Dham Pilgrimage Expeditions',
    title: 'Kedarnath, Badrinath & Hemkund Sahib',
    sub: 'Experienced alpine drivers certified for Uttarakhand high mountain terrains'
  },
  {
    src: '/carousel/c3.jpg',
    tag: 'VIP Protocol & Escort Units',
    title: 'Government Protocol & Dignitary Convoy',
    sub: 'Security beacon authorized escorts and station receptions in Haridwar & Dehradun'
  },
  {
    src: '/carousel/c4.jpg',
    tag: '24x7 Airport Transfers',
    title: 'Jolly Grant Airport Dehradun Express',
    sub: 'Guaranteed on-time pickup, flight tracking and luxury door-to-door chauffeurs'
  },
  {
    src: '/carousel/c5.jpg',
    tag: 'Uttarakhand Tourism Network',
    title: 'Mussoorie, Rishikesh & Nainital Tours',
    sub: 'Transparent billing, veteran drivers, zero cancellation surprises'
  }
];

export default function HeroCarousel({ slides = defaultSlides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div 
      className="relative w-full max-w-[540px] mx-auto group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative backdrop glow */}
      <div className="absolute -inset-2 bg-[#f26b45]/20 rounded-3xl blur-2xl transition duration-500 group-hover:bg-[#f26b45]/30 -z-10" />

      {/* Main Container - Strict consistent 4:5 aspect ratio orientation */}
      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-stone-900 shadow-2xl border border-stone-300/40">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 540px"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />

              {/* Caption Card */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white">
                <span className="inline-block text-[11px] tracking-widest uppercase font-semibold bg-[#f26b45] px-3 py-1 rounded-full text-white mb-2.5 shadow-xs">
                  {slide.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif tracking-tight font-medium drop-shadow-sm">
                  {slide.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 mt-1 line-clamp-2 max-w-md font-sans">
                  {slide.sub}
                </p>
              </div>
            </div>
          );
        })}

        {/* Carousel Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 right-6 z-20 flex items-center gap-1.5 bg-stone-950/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-[#f26b45]' : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
