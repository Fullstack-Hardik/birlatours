'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle2, Car, MessageCircle, Calendar } from 'lucide-react';
import ChromaCurrent from '@/components/ui/chroma-current';
import DoodleCrewFooter from '@/components/ui/doodle-crew-footer';
import BookingModal from '@/components/BookingModal';

const tourPackages = [
  {
    id: 'char-dham',
    title: 'Complete Char Dham Yatra',
    duration: '9 Nights / 10 Days',
    route: 'Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath',
    desc: 'Sacred pilgrimage in air-conditioned Toyota Innova Crysta with hill-tested drivers.',
    image: '/images/tours/tour_kedarnath.jpg',
    badge: 'Char Dham',
    inclusions: ['Clean Innova Crysta', 'Fuel, Toll & State Taxes', 'Experienced Mountain Driver']
  },
  {
    id: 'do-dham',
    title: 'Do Dham: Kedarnath & Badrinath',
    duration: '5 Nights / 6 Days',
    route: 'Haridwar / Dehradun → Guptkashi → Kedarnath → Badrinath',
    desc: 'Direct holy tour to Kedarnath and Badrinath with helipad and trek point support.',
    image: '/images/tours/tour_badrinath.jpg',
    badge: 'Do Dham',
    inclusions: ['Helipad / Trek Point Drop', 'Early Morning Starts', 'Safe Night Halts']
  },
  {
    id: 'mussoorie-dhanaulti',
    title: 'Mussoorie & Dhanaulti Hills',
    duration: '3 Nights / 4 Days',
    route: 'Dehradun Airport → Mussoorie → Kempty Falls → Dhanaulti',
    desc: 'Scenic mountain holiday with visits to Kempty Falls, Mall Road and Dhanaulti.',
    image: '/images/tours/tour_mussoorie.jpg',
    badge: 'Hill Station',
    inclusions: ['Resort Pick & Drop', 'Local Sightseeing', 'No Waiting Charges']
  },
  {
    id: 'rishikesh-heritage',
    title: 'Rishikesh & Haridwar Darshan',
    duration: '2 Nights / 3 Days',
    route: 'Haridwar Station → Ram Jhula → Ganga Aarti → Neelkanth',
    desc: 'Evening Ganga Aarti at Har Ki Pauri and Parmarth Niketan with temple visits.',
    image: '/images/tours/tour_rishikesh.jpg',
    badge: 'Spiritual',
    inclusions: ['Ganga Aarti Timings Sync', 'Neelkanth Temple Trip', 'Comfortable AC Ride']
  },
  {
    id: 'nainital-jim-corbett',
    title: 'Jim Corbett Safari & Nainital',
    duration: '4 Nights / 5 Days',
    route: 'Haridwar / Dehradun → Jim Corbett → Naini Lake → Bhimtal',
    desc: 'Jungle safari amidst Sal forests followed by boating in scenic Nainital lake district.',
    image: '/images/tours/tour_corbett.jpg',
    badge: 'Wildlife & Safari',
    inclusions: ['Corbett Safari Gate Drop', 'Nainital Lakes Tour', 'All Tolls Handled']
  },
  {
    id: 'auli-chopta',
    title: 'Chopta, Tungnath & Auli Snow',
    duration: '5 Nights / 6 Days',
    route: 'Haridwar → Devprayag → Chopta → Joshimath → Auli Ropeway',
    desc: 'Visit highest Shiva shrine at Tungnath and enjoy snow slopes and alpine meadows in Auli.',
    image: '/images/tours/tour_auli.jpg',
    badge: 'Snow & Alpine',
    inclusions: ['High Clearance Vehicle', 'Experienced Snow Driver', 'Flexible Stops']
  }
];

export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenBooking = (tourTitle: string) => {
    setSelectedTour(tourTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#F5F2EF] text-stone-900 selection:bg-stone-200 selection:text-stone-900">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <ChromaCurrent opacity={0.3} dotSize={1.8} gap={32} glowColor="rgba(242, 107, 69, 0.35)" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-[11px] font-bold uppercase tracking-widest text-[#f26b45]">
            <Car className="w-3.5 h-3.5" />
            <span>Uttarakhand Tour Packages</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-stone-950">
            Char Dham Yatra &amp; Hill Tours
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Reliable cabs with courteous, experienced local drivers. Select a tour to book instantly on WhatsApp.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tourPackages.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl border border-stone-300/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Full Image Presentation */}
                <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-stone-900/90 text-white px-3 py-1 rounded-full backdrop-blur-xs">
                    {tour.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[11px] font-mono font-bold bg-white/95 text-stone-900 px-2.5 py-1 rounded-lg shadow-xs">
                    {tour.duration}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-stone-950">
                    {tour.title}
                  </h3>

                  <div className="text-xs font-medium text-[#f26b45] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{tour.route}</span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {tour.desc}
                  </p>

                  <div className="pt-3 border-t border-stone-200 space-y-1.5">
                    {tour.inclusions.map((inc, i) => (
                      <div key={i} className="text-xs text-stone-700 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Book Tour (WhatsApp) & Call */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => handleOpenBooking(`${tour.title} (${tour.duration})`)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Tour on WhatsApp</span>
                </button>

                <a
                  href="tel:+919917490721"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#EBE8E4] hover:bg-stone-300/60 text-stone-900 font-bold text-xs uppercase tracking-wider transition"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
                  <span>Call 9917490721</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour Banner */}
        <div className="bg-[#EBE8E4] rounded-3xl p-8 sm:p-10 border border-stone-300/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-stone-950">
              Need a Custom Tour Route?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Tell us your itinerary and dates. We will give you a fair, all-inclusive price.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleOpenBooking('Custom Uttarakhand Itinerary')}
              className="px-6 py-3.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition shadow-xs flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>
            <a
              href="tel:+919917490721"
              className="px-6 py-3.5 rounded-full bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition"
            >
              Call 9917490721
            </a>
          </div>
        </div>

      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTour={selectedTour}
      />

      <DoodleCrewFooter
        wordmark="BIRLA"
        brand="BIRLA TOUR AND TRAVELS"
        blurb="Uttarakhand's trusted taxi and tour service. Haridwar & Dehradun."
        tagline="Clean cars, fair prices, safe mountain travel."
        preset="paper"
        palette={{ background: "#F5F2EF", ink: "#1c1917", accent: "#f26b45" }}
      />
    </div>
  );
}
