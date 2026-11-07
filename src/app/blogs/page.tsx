'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, MapPin, Phone, Car, MessageCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const blogPosts = [
  {
    slug: 'char-dham-yatra-2026-complete-route-guide',
    title: 'Char Dham Yatra 2026: Complete Route, Weather & Taxi Booking Guide',
    date: 'March 2026',
    readTime: '8 min read',
    excerpt: 'Complete 10-day roadmap from Haridwar & Rishikesh to Yamunotri, Gangotri, Kedarnath, and Badrinath. In-depth itinerary, mountain driving tips, senior citizen care, and registration procedures.',
    image: '/images/blogs/blog_chardham.jpg',
    category: 'Pilgrimage Guide',
    content: [
      {
        heading: "1. The Sacred 10-Day Char Dham Route from Haridwar",
        text: "The traditional pilgrimage follows clockwise circumambulation (Parikrama): Yamunotri -> Gangotri -> Kedarnath -> Badrinath. Starting from Haridwar Junction or Dehradun Airport, the recommended schedule spans 9 nights and 10 days to allow gradual acclimatization across high Himalayan altitudes."
      },
      {
        heading: "2. Why Toyota Innova Crysta is Essential for the Circuit",
        text: "With high ground clearance, rear double-wishbone suspension, independent climate controls, and robust hill torque, the Innova Crysta minimizes motion sickness on winding Himalayan ghats. Our veteran mountain chauffeurs maintain strict safety speeds on all bypasses."
      },
      {
        heading: "3. Best Time to Travel & Yatra Registration",
        text: "May to June and September to October offer the clearest weather and lowest landslide risks. Mandatory biometric and portal registration can be completed online before embarking from Haridwar or Rishikesh."
      }
    ]
  },
  {
    slug: 'jolly-grant-airport-to-mussoorie-taxi-guide',
    title: 'Jolly Grant Airport Dehradun to Mussoorie & Rishikesh: 2026 Taxi Guide',
    date: 'February 2026',
    readTime: '6 min read',
    excerpt: 'Avoid airport queue delays and unpredictable surge pricing. Learn how our pre-scheduled Toyota Innova Crysta taxi pickup ensures guaranteed on-time doorstep transfers to Mussoorie and Rishikesh.',
    image: '/images/blogs/blog_airport.jpg',
    category: 'Airport Transfer',
    content: [
      {
        heading: "1. Distance and Travel Times from Dehradun Airport",
        text: "Jolly Grant Airport is located 34 km from Haridwar (approx. 50 mins), 21 km from Rishikesh (approx. 35 mins), and 58 km from Mussoorie Mall Road (approx. 2 hours via Rajpur Road / Mussoorie Diversion). Pre-booking your chauffeur ensures immediate terminal meet-and-greet."
      },
      {
        heading: "2. Transparent Flat Rates vs. Airport Taxi Queues",
        text: "Standard airport taxi counters often charge premium night surcharges and waiting fees. Birla Tour & Travels offers locked all-inclusive pricing including toll taxes and parking permits with no hidden costs."
      },
      {
        heading: "3. Direct Transfers to Boutique Hill Resorts",
        text: "Whether your stay is at JW Marriott Mussoorie, Rokeby Manor Landour, or Ananda in the Himalayas near Rishikesh, our chauffeurs assist with heavy luggage and navigate narrow resort access roads effortlessly."
      }
    ]
  },
  {
    slug: 'why-innova-crysta-is-the-best-cab-for-uttarakhand',
    title: 'Why Toyota Innova Crysta is the #1 Vehicle for Uttarakhand Mountain Roads',
    date: 'January 2026',
    readTime: '7 min read',
    excerpt: 'Detailed comparison of Toyota Innova Crysta vs sedans and standard hatchbacks on steep mountain hairpin bends, high-altitude oxygen reduction, passenger safety, and family luggage capacity.',
    image: '/images/blogs/blog_innova.jpg',
    category: 'Fleet & Safety',
    content: [
      {
        heading: "1. Superior Hill Climbing Power & Ground Clearance",
        text: "The 2.4L diesel engine in the Innova Crysta delivers instantaneous low-end torque, essential for climbing steep slopes between Joshimath, Badrinath, and Chopta without engine strain or cabin vibration."
      },
      {
        heading: "2. Mountain Motion Sickness Prevention",
        text: "Sedans and lightweight cars tend to pitch and roll heavily on mountain curves, triggering dizziness and nausea. The Crysta's ladder-frame chassis and specialized dampening keep the vehicle stable and upright."
      },
      {
        heading: "3. 7-Passenger Ergonomics & Luggage Carrier",
        text: "Char Dham yatras require warm thermal clothing, heavy jackets, and puja essentials. The spacious boot combined with secure rooftop luggage racks ensures the cabin stays uncluttered and restful for elderly passengers."
      }
    ]
  },
  {
    slug: 'kedarnath-badrinath-helipad-and-trek-taxi-planning',
    title: 'Kedarnath & Badrinath: Complete Helipad & Trek Taxi Planning 2026',
    date: 'January 2026',
    readTime: '6 min read',
    excerpt: 'How to coordinate your cab timings with Guptkashi, Phata, and Sersi helipads for Kedarnath darshan, and seamless onward transit to Badrinath Ji via Pipalkoti and Joshimath.',
    image: '/images/blogs/blog_helipad.jpg',
    category: 'Do Dham Guide',
    content: [
      {
        heading: "1. Helipad Coordination at Guptkashi, Phata & Sersi",
        text: "Helicopter shuttle departures for Kedarnath depend heavily on early morning weather windows. Having a dedicated chauffeur waiting at your helipad base guarantees zero delays when transitioning back to the road."
      },
      {
        heading: "2. The Onward Route from Kedarnath Base to Badrinath",
        text: "Connecting Sonprayag/Guptkashi to Badrinath takes approximately 7-8 hours via Chopta and Mandal or via Rudraprayag and Chamoli. Our mountain drivers choose the safest, quickest path based on live road clearance updates."
      },
      {
        heading: "3. Essential Rest Stops & Meal Points",
        text: "We stop only at verified, clean hygienic restaurants with sanitized restrooms across the route, keeping family members refreshed throughout the spiritual journey."
      }
    ]
  }
];

export default function BlogsPage() {
  const [selectedTour, setSelectedTour] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedBlog, setExpandedBlog] = useState<string | null>(null);

  const handleOpenBooking = (tourName: string) => {
    setSelectedTour(tourName);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-transparent text-stone-900 selection:bg-stone-200 selection:text-stone-900">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-[11px] font-bold uppercase tracking-widest text-[#f26b45]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Birla Tour &amp; Travels · Himalayan Travel Guides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-950">
            Uttarakhand Travel Blogs &amp; Cab Guides
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            In-depth SEO travel guides, road updates, Char Dham Yatra planning tips, and airport transfer insights from Haridwar and Dehradun chauffeurs.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post) => {
            const isExpanded = expandedBlog === post.slug;

            return (
              <article
                key={post.slug}
                className="bg-white rounded-3xl border border-stone-300/80 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* High Quality Thumbnail Image */}
                  <div className="relative aspect-[16/9] w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold tracking-wider uppercase bg-stone-950 text-white px-3 py-1 rounded-full shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-4 text-xs font-mono text-stone-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-950 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Detailed Content Expandable View */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-stone-200 space-y-4 animate-fadeIn">
                        {post.content.map((sec, idx) => (
                          <div key={idx} className="space-y-1.5 bg-[#F5F2EF] p-4 rounded-2xl">
                            <h3 className="text-sm font-bold text-stone-900 font-serif">
                              {sec.heading}
                            </h3>
                            <p className="text-xs text-stone-600 leading-relaxed">
                              {sec.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100">
                  <button
                    onClick={() => setExpandedBlog(isExpanded ? null : post.slug)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-[#f26b45] transition"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Read Full Guide'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  <button
                    onClick={() => handleOpenBooking(`Inquiry from blog: ${post.title}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Book Route Taxi</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call-to-action assistance banner */}
        <div className="bg-[#EBE8E4] rounded-3xl p-8 sm:p-12 border border-stone-300/80 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-950">
              Have Questions About Road Conditions or Permits?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Talk directly with our Haridwar &amp; Dehradun dispatch managers for live mountain weather and reliable cab bookings.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+919917490721"
              className="px-6 py-3.5 rounded-full bg-stone-900 text-[#F5F2EF] text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition"
            >
              Call +91 99174 90721
            </a>
            <button
              onClick={() => handleOpenBooking('Custom Travel Route Inquiry')}
              className="px-6 py-3.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTour={selectedTour}
      />

      <Footer />
    </div>
  );
}
