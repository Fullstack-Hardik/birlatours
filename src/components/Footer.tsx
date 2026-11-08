'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Award,
  Clock,
  ArrowUpRight,
  Car,
  Compass,
  FileCheck
} from 'lucide-react';
import { InstagramIcon } from '@/components/icons/SocialIcons';

export default function Footer() {
  return (
    <footer className="relative bg-[#121110] text-stone-300 pt-20 pb-12 overflow-hidden border-t border-stone-800/80">
      {/* 3D Isometric / Cyber-Heritage Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(242, 107, 69, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(242, 107, 69, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)'
        }}
      />

      {/* Subtle warm orange lighting prism */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#f26b45]/20 via-orange-600/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top GST & Registration Trust Bar */}
        <div className="p-6 rounded-2xl bg-stone-900/90 border border-stone-800 shadow-xl mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-800/80 border border-stone-700/80">
              <FileCheck className="w-4 h-4 text-[#f26b45]" />
              <span className="text-stone-400">GSTIN:</span>
              <span className="font-mono font-bold text-white tracking-wider">05AUAPK2728D1Z5</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-800/80 border border-stone-700/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-medium">Govt. Tax Invoice Provided</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-800/80 border border-stone-700/80">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-white font-medium">Uttarakhand Certified Transport Network</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/subhash.birla/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs font-semibold transition border border-stone-700"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="https://wa.me/919917490721?text=Hi%20Birla%20Tours,%20I%20would%20like%20to%20inquire%20about%20a%20cab%20booking"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Booking</span>
            </a>
            <a
              href="tel:+919917490721"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white text-xs font-mono font-bold transition border border-stone-700"
            >
              <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
              <span>9917490721</span>
            </a>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Col 1: Brand & Official Address Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative w-20 h-16 sm:w-24 sm:h-20 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Birla Tour & Travels Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-2xl font-bold text-white">
                  BIRLA
                </span>
                <span className="text-[11px] font-bold tracking-wider text-[#f26b45] uppercase font-mono">
                  Tour &amp; Travels
                </span>
              </div>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Uttarakhand’s verified chauffeur and luxury transport agency. Operating clean Toyota Innova Crysta fleets with veteran mountain drivers for Char Dham, airport transfers, and hill stations.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f26b45] shrink-0 mt-0.5" />
                <span>
                  <strong>Registered Office:</strong> Vill. Asaf Nagar, NH-334, Roorkee - 247656, Distt. Haridwar (Uttarakhand)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f26b45] shrink-0" />
                <a href="mailto:subhashbirla7051@gmail.com" className="hover:text-white transition font-mono">
                  subhashbirla7051@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href="https://www.instagram.com/subhash.birla/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  Instagram: @subhash.birla
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-stone-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#f26b45] transition flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-[#f26b45] transition flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  <span>Tours &amp; Yatra</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#f26b45] transition flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  <span>Fleet Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#f26b45] transition flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#f26b45] transition flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  <span>Client Reviews &amp; Reels</span>
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#f26b45] transition flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  <span>FAQs</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f26b45] transition flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  <span>Contact &amp; Offices</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Tour Circuits */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-stone-800 pb-2">
              Yatra &amp; Routes
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tours" className="hover:text-[#f26b45] transition">
                  Complete Char Dham Yatra (10 Days)
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-[#f26b45] transition">
                  Do Dham: Kedarnath &amp; Badrinath
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-[#f26b45] transition">
                  Jolly Grant Dehradun Airport Transfer
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-[#f26b45] transition">
                  Haridwar Junction Station Pickup
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-[#f26b45] transition">
                  Mussoorie, Dhanaulti &amp; Kanatal
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-[#f26b45] transition">
                  Chopta, Tungnath &amp; Auli Ski Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: 24x7 Helpdesks */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-stone-800 pb-2">
              24x7 Direct Helpdesk
            </h4>
            <div className="space-y-2.5">
              <a
                href="tel:+919917490721"
                className="p-3 rounded-xl bg-stone-900 border border-stone-800 hover:border-[#f26b45]/50 transition flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] text-stone-500 uppercase block font-semibold">Primary Booking</span>
                  <span className="text-xs font-mono font-bold text-white group-hover:text-[#f26b45] transition">
                    +91 99174 90721
                  </span>
                </div>
                <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
              </a>

              <a
                href="tel:+916397295500"
                className="p-3 rounded-xl bg-stone-900 border border-stone-800 hover:border-[#f26b45]/50 transition flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] text-stone-500 uppercase block font-semibold">Support &amp; Dispatch</span>
                  <span className="text-xs font-mono font-bold text-white group-hover:text-[#f26b45] transition">
                    +91 63972 95500
                  </span>
                </div>
                <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
              </a>

              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800/80 text-[11px] text-stone-400">
                <span className="text-white font-medium block">Key Operational Hubs:</span>
                Haridwar Junction, Jolly Grant Airport, Dehradun ISBT, Roorkee NH-334.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <p>© 2026 Birla Tour &amp; Travels. GSTIN: 05AUAPK2728D1Z5. All rights reserved.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Vill. Asaf Nagar, NH-334, Roorkee, Haridwar (U.K.)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
