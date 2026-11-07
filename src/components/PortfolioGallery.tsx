'use client';

import React, { useState } from 'react';
import { Hammer, ArrowUpRight } from 'lucide-react';
import { Gallery, GalleryGrid, GalleryImage, ImageData } from '@/components/ui/shared-element-gallery';

export interface GalleryItem {
  id: number;
  title: string;
  category: 'Keuken' | 'Woonkamer' | 'Maatwerk';
  location: string;
  image: string;
  orientation: 'landscape' | 'portrait';
  width: number;
  height: number;
}

interface PortfolioGalleryProps {
  initialItems: GalleryItem[];
}

export default function PortfolioGallery({ initialItems }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Alle');

  const categories = ['Alle', 'Keuken', 'Woonkamer', 'Maatwerk'];

  const filteredItems = activeCategory === 'Alle'
    ? initialItems
    : initialItems.filter(item => item.category === activeCategory);

  return (
    <section id="projecten" className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500">
            <Hammer className="w-3.5 h-3.5" />
            <span>Atelier Galerij & Realisaties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-900 tracking-tight">
            Ontdek Onze Top 30 Meesterwerken
          </h2>
          <p className="text-stone-600 max-w-xl text-sm sm:text-base">
            Geselecteerde creaties uit ons archief. Klik op een foto voor een naadloze fullscreen weergave; swipe of sleep omlaag om te sluiten.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 bg-[#EBE8E4]/80 backdrop-blur-md p-1.5 rounded-full self-start md:self-auto border border-stone-300/40 shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-stone-900 text-[#F5F2EF] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-300/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Shared Element Framer-Motion Gallery Grid */}
      <Gallery>
        <GalleryGrid className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
          {filteredItems.map((item) => (
            <GalleryImage
              key={item.id}
              id={String(item.id)}
              src={item.image}
              alt={item.title}
              title={item.title}
              category={item.category}
              className="w-full"
            />
          ))}
        </GalleryGrid>
      </Gallery>
    </section>
  );
}
