'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Car,
  Star,
  ArrowUpRight,
  Shield,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Navigation,
  Send
} from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import Footer from '@/components/Footer';
import ChromaCurrent from '@/components/ui/chroma-current';
import BookingModal from '@/components/BookingModal';

export default function CraftWoodApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourForModal, setSelectedTourForModal] = useState('');

  // WhatsApp form handler for the homepage quick form
  const [homeForm, setHomeForm] = useState({
    name: '',
    phone: '',
    pickup: 'Haridwar',
    destination: '',
    details: ''
  });

  const handleOpenBooking = (tourName: string = '') => {
    setSelectedTourForModal(tourName);
    setIsModalOpen(true);
  };

  const handleHomeFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = 
`*Cab Booking Inquiry - Birla Tour & Travels*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${homeForm.name || 'Guest'}
📞 *Phone:* ${homeForm.phone}
📍 *Pickup:* ${homeForm.pickup}
🎯 *Destination / Tour:* ${homeForm.destination}
${homeForm.details ? `📝 *Details:* ${homeForm.details}\n` : ''}━━━━━━━━━━━━━━━━━━━━━━
_Sent via Birla Tour & Travels Home Form_`;

    window.open(`https://wa.me/919917490721?text=${encodeURIComponent(waText)}`, '_blank');
  };

  const services = [
    {
      title: "Char Dham Yatra & Himalayan Expeditions",
      desc: "Sacred pilgrimage packages for Kedarnath, Badrinath, Gangotri & Yamunotri with mountain chauffeurs.",
      image: "/images/tours/tour_kedarnath.jpg",
      badge: "Most Popular",
      features: ["Haridwar / Rishikesh Pickup", "Experienced Alpine Drivers", "Zero Mountain Sickness Delays"]
    },
    {
      title: "Do Dham & High Alpine Pilgrimage",
      desc: "Dedicated holy journey to Baba Kedar and Lord Badri Vishal with certified chauffeurs.",
      image: "/images/tours/tour_badrinath.jpg",
      badge: "Govt. Certified",
      features: ["Helipad & Trek Transfers", "Haridwar Station Reception", "Alpine Terrain Clearance"]
    },
    {
      title: "Jolly Grant Dehradun Airport Express",
      desc: "24x7 executive pickups and drops connecting Dehradun Airport to Haridwar, Rishikesh, and Mussoorie.",
      image: "/images/tours/tour_rishikesh.jpg",
      badge: "24x7 Available",
      features: ["Live Flight Tracking", "Uniformed Chauffeur & Placard", "Fixed Transparent Pricing"]
    },
    {
      title: "Mussoorie, Dhanaulti & Hill Tours",
      desc: "Bespoke leisure journeys to Mussoorie, Dhanaulti, Auli, Chopta & Nainital in clean Toyota Innova Crysta cars.",
      image: "/images/tours/tour_mussoorie.jpg",
      badge: "Hill Station",
      features: ["Door-to-door Resort Drop", "Luggage Assistance", "Flexible Sightseeing Itineraries"]
    }
  ];

  const fleetLineup = [
    {
      title: "Toyota Innova Crysta Luxury (7-Seater)",
      desc: "Plush captain seats, rear climate control, USB charging, and quiet suspension for winding mountain roads.",
      image: "/images/innova-crysta-luxury.jpg",
      specs: ["7 Passenger Capacity", "Triple AC Vents", "Large Luggage Boot"]
    },
    {
      title: "VIP Executive Escort Cruiser",
      desc: "Government protocol-fitted pilot vehicle, high ground clearance, fog lights, and verified navigators.",
      image: "/images/vip-escort.jpg",
      specs: ["VIP Protocol Beacon", "Haridwar / Dehradun Base", "Executive Uniformed Crew"]
    },
    {
      title: "Spacious Multi-Luggage Boot Carrier",
      desc: "Designed for multi-day family pilgrimage Yatras with oversized boot capacity and rooftop all-weather carrier.",
      image: "/images/spacious-boot.jpg",
      specs: ["5 Large Suitcases", "Rainproof Luggage Cover", "Clean Odour-free Cabin"]
    }
  ];

  const reviews = [
    {
      name: "Dr. Arvind Sharma",
      city: "New Delhi",
      role: "Char Dham Yatra Family Group",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      text: "Booked Birla Tour & Travels for our 10-day Char Dham Yatra. Driver Rajesh ji was extraordinarily calm and skilled across steep Kedarnath ghats. The Innova Crysta was spotless!"
    },
    {
      name: "Pooja Malhotra",
      city: "Mumbai",
      role: "Jolly Grant Airport to Mussoorie",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      text: "Our flight landed late at Dehradun airport, yet Birla Tours chauffeur was already waiting with name placard. Transparent pricing and no hidden hill charges."
    },
    {
      name: "Sanjay Singhal",
      city: "Chandigarh",
      role: "Haridwar & Rishikesh Corporate Visit",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      text: "Prompt communication from Haridwar office. 9917490721 answered immediately and provided clean invoice and punctuality throughout our pilgrimage."
    }
  ];

  const faqs = [
    {
      q: "How do I book a cab with Birla Tour & Travels?",
      a: "You can click 'Book Tour on WhatsApp' or call our 24x7 desks directly at +91 99174 90721 or +91 63972 95500. We will instantly confirm availability."
    },
    {
      q: "Where are your operational hubs located?",
      a: "We have dedicated dispatch centers in Haridwar (near Haridwar Junction Railway Station) and Dehradun (serving Jolly Grant Airport, Rajpur Road & ISBT Dehradun)."
    },
    {
      q: "Are your drivers trained for high-altitude mountain routes?",
      a: "Yes. All our chauffeurs are Uttarakhand locals with 10+ years of mountain highway driving experience across Kedarnath, Badrinath, Gangotri, Yamunotri, Auli, and Mussoorie."
    },
    {
      q: "Are toll taxes, parking, and driver allowances included?",
      a: "Yes, our written quotation clearly outlines complete package inclusions with no hidden costs or surprise surcharges."
    }
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-stone-900 font-sans selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden">
      
      {/* Background Chroma Currents Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-300/20 via-amber-100/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-orange-200/20 via-stone-200/25 to-transparent rounded-full blur-3xl" />
      </div>

      {/* HERO SECTION - Rock Solid Layout without Layout Shifts */}
      <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Stable Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-stone-300/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#f26b45] animate-pulse" />
              <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-stone-800">
                Haridwar &amp; Dehradun 24x7 Cab Service
              </span>
            </div>

            {/* Clean, Stable, Non-Jittery Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-950 tracking-tight leading-[1.12]">
                Birla Tour &amp; Travels
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#f26b45] italic">
                Luxury Cabs &amp; Char Dham Yatra
              </p>
            </div>

            <p className="text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed">
              Uttarakhand’s trusted chauffeur service. Immaculate Toyota Innova Crysta cabs, Char Dham pilgrimages, VIP escort pilots, and Jolly Grant Airport transfers with veteran mountain drivers.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => handleOpenBooking('General Tour / Cab Booking')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Cab on WhatsApp</span>
              </button>

              <a
                href="tel:+919917490721"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-900 text-[#F5F2EF] text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-[#f26b45]" />
                <span>Call 9917490721</span>
              </a>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>View Gallery</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
              </Link>
            </div>

            {/* Quick Contact & Verification Badges */}
            <div className="pt-6 border-t border-stone-300/70 grid grid-cols-2 gap-6 max-w-md">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-700 flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Verified Cabs
                </span>
                <p className="text-xs text-stone-600 font-sans">
                  Toyota Innova Crysta &amp; Veteran Mountain Chauffeurs
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-stone-900 flex items-center gap-1.5 font-mono">
                  <Phone className="w-4 h-4 text-[#f26b45]" />
                  24x7 Helpdesk
                </span>
                <p className="text-xs font-mono font-bold text-stone-900">
                  9917490721 / 6397295500
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Carousel - Self-contained, perfectly balanced */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <HeroCarousel />
          </div>

        </div>
      </section>

      {/* SERVICES & TOUR PACKAGES SECTION */}
      <section id="services" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 tracking-tight">
              Uttarakhand Travel Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md">
            Clean cars and courteous chauffeurs for pilgrimages, airport transfers, and hill vacations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-stone-300/70 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950 group-hover:text-[#f26b45] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-1.5 text-xs text-stone-700 pt-2">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenBooking(service.title)}
                  className="flex-1 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-xs hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </button>
                <a
                  href="tel:+919917490721"
                  className="py-3 px-5 rounded-full bg-[#EBE8E4] hover:bg-stone-300 text-stone-900 font-bold text-xs uppercase tracking-wider transition flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEDICATED FLEET HIGHLIGHT SECTION */}
      <section id="fleet" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500">
              Our Vehicles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 tracking-tight">
              Toyota Innova Crysta Fleet
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-[#F5F2EF] text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition"
          >
            <span>View All Photos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetLineup.map((car, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-300/70 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-serif font-bold text-stone-950">
                    {car.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {car.desc}
                  </p>
                  <div className="pt-2 border-t border-stone-200 space-y-1">
                    {car.specs.map((sp, i) => (
                      <div key={i} className="text-xs text-stone-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f26b45]" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => handleOpenBooking(`Vehicle Booking: ${car.title}`)}
                  className="w-full py-2.5 rounded-full bg-[#EBE8E4] hover:bg-emerald-600 hover:text-white text-stone-900 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS SECTION REMOVED TO ADHERE TO NO UNVERIFIED / FAKE TESTIMONIALS */}

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="faq" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/60">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#f26b45] font-mono">
              Help &amp; Clarifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Direct information on vehicle bookings, billing, mountain drivers, and flight tracking.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border border-stone-300/80 p-5 sm:p-6 cursor-pointer shadow-xs hover:border-stone-400/80 transition-all duration-200"
              >
                <summary className="flex items-center justify-between font-serif text-base sm:text-lg font-bold text-stone-950 select-none list-none">
                  <span>{faq.q}</span>
                  <div className="w-7 h-7 rounded-full bg-stone-100 group-open:bg-[#f26b45] group-open:text-white flex items-center justify-center shrink-0 transition-all duration-200 ml-4">
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
                  </div>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800 hover:text-[#f26b45] transition"
            >
              <span>View All Detailed FAQs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* INSTANT CAB ENQUIRY & CONTACT SECTION */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-stone-300/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#f26b45] font-mono">
                Direct Contact
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-950">
                Haridwar, Roorkee &amp; Dehradun Hubs
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Pickups available anywhere in Uttarakhand. Reach out directly or send trip details via WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-300/80 space-y-4 shadow-xs">
              <a
                href="tel:+919917490721"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EBE8E4] hover:bg-stone-300/60 transition group"
              >
                <div className="w-10 h-10 rounded-full bg-stone-950 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#f26b45]" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 font-semibold uppercase">Primary Booking Desk</span>
                  <p className="text-sm font-mono font-bold text-stone-950 group-hover:text-[#f26b45] transition">+91 99174 90721</p>
                </div>
              </a>

              <a
                href="tel:+916397295500"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EBE8E4] hover:bg-stone-300/60 transition group"
              >
                <div className="w-10 h-10 rounded-full bg-stone-950 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#f26b45]" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 font-semibold uppercase">Fleet Dispatch</span>
                  <p className="text-sm font-mono font-bold text-stone-950 group-hover:text-[#f26b45] transition">+91 63972 95500</p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#EBE8E4]">
                <div className="w-10 h-10 rounded-full bg-stone-950 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#f26b45]" />
                </div>
                <div className="text-xs text-stone-700 space-y-0.5">
                  <span className="font-bold block text-stone-900">Head Office &amp; GSTIN:</span>
                  <span>Vill. Asaf Nagar, NH-334, Roorkee, Distt. Haridwar (U.K.)</span>
                  <span className="block font-mono text-[11px] text-[#f26b45] font-bold">GSTIN: 05AUAPK2728D1Z5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form: Submits directly to WhatsApp */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300/80 shadow-xs">
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                <MessageCircle className="w-3 h-3" />
                <span>Instant WhatsApp Confirmation</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-950">
                Instant Cab &amp; Tour Enquiry
              </h3>
              <p className="text-xs text-stone-600">
                Submit trip details below to immediately open WhatsApp with your pre-formatted enquiry.
              </p>
            </div>

            <form onSubmit={handleHomeFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={homeForm.name}
                    onChange={(e) => setHomeForm({ ...homeForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9917490721"
                    value={homeForm.phone}
                    onChange={(e) => setHomeForm({ ...homeForm, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Pickup Location *</label>
                  <select
                    value={homeForm.pickup}
                    onChange={(e) => setHomeForm({ ...homeForm, pickup: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                  >
                    <option value="Haridwar Railway Station">Haridwar Railway Station</option>
                    <option value="Dehradun Jolly Grant Airport">Dehradun Jolly Grant Airport</option>
                    <option value="Roorkee NH-334">Roorkee NH-334</option>
                    <option value="Dehradun City / ISBT">Dehradun City / ISBT</option>
                    <option value="Rishikesh">Rishikesh</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Destination *</label>
                  <input
                    type="text"
                    required
                    placeholder="Char Dham, Kedarnath, Mussoorie, etc."
                    value={homeForm.destination}
                    onChange={(e) => setHomeForm({ ...homeForm, destination: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Travel Date &amp; Passenger Count</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Travel on 15th, 5 passengers in Innova Crysta..."
                  value={homeForm.details}
                  onChange={(e) => setHomeForm({ ...homeForm, details: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTour={selectedTourForModal}
      />

      {/* REFINED MODERN PROFESSIONAL FOOTER */}
      <Footer />

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed right-6 bottom-6 z-50 group flex flex-col items-end">
        <div className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mb-3 flex flex-col items-end gap-2">
          <button
            onClick={() => handleOpenBooking('Instant Booking Request')}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow-lg hover:bg-emerald-700 transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Booking</span>
          </button>
          <a
            href="tel:+919917490721"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold shadow-lg hover:bg-stone-800 transition"
          >
            <span>Call 9917490721</span>
            <Phone className="w-4 h-4 text-[#f26b45]" />
          </a>
          <a
            href="tel:+916397295500"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold shadow-lg hover:bg-stone-800 transition"
          >
            <span>Call 6397295500</span>
            <Phone className="w-4 h-4 text-[#f26b45]" />
          </a>
        </div>

        <div className="relative">
          <span className="absolute -inset-1 rounded-full bg-emerald-500 animate-ping opacity-40" />
          <button
            onClick={() => handleOpenBooking('Floating Button Quick Booking')}
            className="relative w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-200"
            aria-label="Direct WhatsApp Booking Birla Tours"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
