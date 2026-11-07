import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, MapPin, Phone, Car } from 'lucide-react';
import ChromaCurrent from '@/components/ui/chroma-current';
import DoodleCrewFooter from '@/components/ui/doodle-crew-footer';

export const metadata: Metadata = {
  title: 'Travel Guides & Pilgrimage Blogs | Birla Tour and Travels',
  description: 'Expert Uttarakhand travel guides: Char Dham Yatra planning tips, Jolly Grant Airport taxi guides, Mussoorie hill station routes, and Himalayan road safety advice.',
};

const blogPosts = [
  {
    slug: 'char-dham-yatra-complete-route-guide',
    title: 'Complete Char Dham Yatra 2026 Route & Cab Booking Guide',
    date: 'March 2026',
    readTime: '6 min read',
    excerpt: 'Detailed breakdown of the 10-day sacred circuit starting from Haridwar through Yamunotri, Gangotri, Kedarnath, and Badrinath. Essential tips for senior citizens and weather windows.',
    image: '/images/char-dham-tour.jpg',
    category: 'Pilgrimage Guide'
  },
  {
    slug: 'jolly-grant-airport-taxi-booking-tips',
    title: 'How to Book a Reliable Taxi at Jolly Grant Dehradun Airport',
    date: 'February 2026',
    readTime: '4 min read',
    excerpt: 'Avoid airport queue chaos and surge pricing. Learn how our pre-booked Toyota Innova Crysta service ensures zero wait time and direct transfers to Haridwar, Rishikesh, and Mussoorie.',
    image: '/images/hotel-pickup.jpg',
    category: 'Airport Transfer'
  },
  {
    slug: 'why-innova-crysta-is-best-for-uttarakhand-mountains',
    title: 'Why Toyota Innova Crysta is the #1 Vehicle for Mountain Roads',
    date: 'January 2026',
    readTime: '5 min read',
    excerpt: 'High ground clearance, independent suspension, rear climate control, and powerful torque make the Crysta the undisputed king of Uttarakhand steep mountain terrain.',
    image: '/images/innova-crysta-luxury.jpg',
    category: 'Vehicle Guide'
  },
  {
    slug: 'mussoorie-dhanaulti-kanatal-road-trip',
    title: 'The Ultimate Mussoorie, Dhanaulti & Kanatal Weekend Itinerary',
    date: 'December 2025',
    readTime: '5 min read',
    excerpt: 'From misty viewpoints of Gun Hill to quiet pine forests in Dhanaulti and eco-resorts of Kanatal. A complete 4-day roadmap starting from Dehradun or Haridwar.',
    image: '/images/luxury-resort-tour.jpg',
    category: 'Weekend Escapes'
  }
];

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen bg-[#F5F2EF] text-stone-900 selection:bg-stone-200 selection:text-stone-900">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <ChromaCurrent opacity={0.3} dotSize={1.8} gap={32} glowColor="rgba(242, 107, 69, 0.35)" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="space-y-4 max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-[11px] font-bold uppercase tracking-widest text-[#f26b45]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Birla Tour &amp; Travels · Mountain Travel Insights</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif tracking-tight text-stone-950">
            Uttarakhand Travel Blogs &amp; Guides
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Practical advice, road condition updates, pilgrimage timings, and insider tips from our Haridwar and Dehradun chauffeur teams.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-stone-300/70 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] w-full bg-stone-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-stone-900 text-white px-3 py-1 rounded-full shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-stone-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-stone-900 group-hover:text-[#f26b45] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between border-t border-stone-100 pt-4">
                <a
                  href="tel:+919917490721"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-[#f26b45] transition"
                >
                  <span>Book Cab for This Route</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs font-mono text-stone-400">Birla Tours</span>
              </div>
            </article>
          ))}
        </div>

        {/* Travel Help Banner */}
        <div className="bg-[#EBE8E4] rounded-3xl p-8 sm:p-12 border border-stone-300/80 text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Have Questions About Route Conditions?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
            Get live highway and monsoon road updates directly from our drivers stationed across Haridwar, Rishikesh, Rudraprayag, and Joshimath.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919917490721"
              className="px-6 py-3.5 rounded-full bg-stone-900 text-[#F5F2EF] font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition shadow-xs"
            >
              Call +91 99174 90721
            </a>
            <a
              href="tel:+916397295500"
              className="px-6 py-3.5 rounded-full bg-[#f26b45] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#e05a34] transition shadow-xs"
            >
              Call +91 63972 95500
            </a>
          </div>
        </div>
      </div>

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
