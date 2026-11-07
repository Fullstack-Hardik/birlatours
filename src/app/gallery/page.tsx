'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gallery, GalleryGrid, GalleryImage } from '@/components/ui/shared-element-gallery';
import galleryData from '../../../public/gallery/metadata.json';
import { ArrowLeft, Phone } from 'lucide-react';
import Footer from '@/components/Footer';
import GhostType from '@/components/ui/ghost-type';

interface GalleryItemData {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
}

export default function GalleryPage() {
  const items = galleryData as GalleryItemData[];
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll blur effect
  const { scrollY } = useScroll();

  return (
    <div ref={containerRef} className="relative min-h-screen bg-transparent text-stone-900 selection:bg-stone-200 selection:text-stone-900">

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#F5F2EF]/90 backdrop-blur-md border-b border-stone-300/60 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-stone-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#f26b45]" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919917490721"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-800"
            >
              <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
              <span>9917490721</span>
            </a>
            <a
              href="tel:+916397295500"
              className="px-4 py-2 rounded-full bg-stone-900 text-[#F5F2EF] text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition"
            >
              Book Cab
            </a>
          </div>
        </div>
      </header>

      {/* Gallery Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-8 text-center">
        <div className="inline-block space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f26b45] font-mono">
            Birla Tour &amp; Travels
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-stone-950">
            Fleet &amp; Tour Photography
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
            High-resolution photographs of our Toyota Innova Crysta cabs, Himalayan highway routes, and passenger pickups across Haridwar, Dehradun &amp; Roorkee.
          </p>
          <div className="h-[2px] w-20 bg-[#f26b45] mx-auto mt-3 rounded-full" />
        </div>
      </div>

      {/* Gallery Grid: Smooth, Fast & Crisp */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-28">
        <Gallery>
          <GalleryGrid className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="mb-5 break-inside-avoid rounded-2xl overflow-hidden border border-stone-300/80 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <GalleryImage
                  id={`fleet-${item.id}`}
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  category={item.category}
                  className="w-full"
                />
              </div>
            ))}
          </GalleryGrid>
        </Gallery>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
