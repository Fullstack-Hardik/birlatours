'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gallery, GalleryGrid, GalleryImage } from '@/components/ui/shared-element-gallery';
import galleryData from '../../../public/gallery/metadata.json';
import { ArrowLeft, Phone } from 'lucide-react';
import ChromaCurrent from '@/components/ui/chroma-current';
import DoodleCrewFooter from '@/components/ui/doodle-crew-footer';
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
    <div ref={containerRef} className="relative min-h-screen bg-[#F5F2EF] text-stone-900 selection:bg-stone-200 selection:text-stone-900">
      {/* Background glowing currents */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <ChromaCurrent opacity={0.3} dotSize={1.8} gap={32} glowColor="rgba(242, 107, 69, 0.35)" />
      </div>

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

      {/* Hero Header: Just "Gallery" with animated text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-14 pb-10 text-center">
        <div className="inline-block">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-stone-950"
          >
            <GhostType
              phrases={[
                { typed: "Gallery", ghost: " — Birla Tour & Travels" },
                { typed: "Gallery", ghost: " — Toyota Innova Crysta" },
                { typed: "Gallery", ghost: " — Uttarakhand Fleet" },
              ]}
              typingSpeed={85}
              pauseDuration={2800}
            />
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="h-[2px] w-24 bg-[#f26b45] mx-auto mt-4 rounded-full"
          />
        </div>
      </div>

      {/* Gallery Grid with Scrolling Blurry Effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-28">
        <Gallery>
          <GalleryGrid className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, filter: "blur(8px)", y: 24 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.65, delay: (index % 4) * 0.08, ease: "easeOut" }}
                className="transition-all duration-300"
              >
                <GalleryImage
                  id={`fleet-${item.id}`}
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  category={item.category}
                  className="w-full"
                />
              </motion.div>
            ))}
          </GalleryGrid>
        </Gallery>
      </div>

      {/* Footer */}
      <DoodleCrewFooter
        wordmark="BIRLA"
        brand="BIRLA TOUR AND TRAVELS"
        blurb="Uttarakhand's leading luxury chauffeur network. Offices in Haridwar and Dehradun. 24x7 bookings."
        tagline="Pristine, Punctual, Safe. Luxury travel across Uttarakhand."
        preset="paper"
        palette={{ background: "#F5F2EF", ink: "#1c1917", accent: "#f26b45" }}
      />
    </div>
  );
}
