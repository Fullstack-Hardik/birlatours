'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Home,
  Compass,
  Images,
  HelpCircle,
  BookOpen,
  PhoneCall,
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  ChevronRight,
  Award
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Tours & Yatra', href: '/tours', icon: Compass },
    { name: 'Gallery', href: '/gallery', icon: Images },
    { name: 'Reviews', href: '/reviews', icon: Award },
    { name: 'FAQs', href: '/faqs', icon: HelpCircle },
    { name: 'Travel Blogs', href: '/blogs', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: PhoneCall },
  ];

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 bg-[#F5F2EF]/85 backdrop-blur-xl border-b border-orange-500/15 shadow-[0_4px_30px_rgba(242,107,69,0.06)] transition-all duration-300">
        {/* Subtle Prism Rainbow Line on top edge */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#f26b45] to-transparent opacity-75" />

        <div className="w-full flex items-center justify-between px-3 sm:px-6 h-20">
          
          {/* Brand Logo with User Uploaded Custom Logo - Shifted Left & Increased Size */}
          <Link href="/" className="inline-flex items-center gap-3 group pl-0 sm:pl-1">
            <div className="relative w-20 h-16 sm:w-24 sm:h-20 shrink-0">
              <Image
                src="/logo.png"
                alt="Birla Tour & Travels Logo"
                fill
                priority
                className="object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif tracking-widest text-2xl sm:text-3xl font-extrabold text-stone-950">
                BIRLA
              </span>
              <span className="text-[11px] font-bold tracking-widest text-[#f26b45] uppercase font-mono">
                Tour &amp; Travels
              </span>
            </div>
          </Link>

          {/* Desktop Links (Pill Bar with Icons) */}
          <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-white/70 backdrop-blur-md text-stone-800 border border-stone-300/60 shadow-xs">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-stone-950 text-[#F5F2EF] shadow-[0_2px_10px_rgba(0,0,0,0.15)]'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/50'
                  }`}
                >
                  <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#f26b45]' : 'text-stone-500'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Quick Phone CTAs with Rainbow Border Book Cab */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919917490721"
              className="hidden xl:flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-stone-300/80 bg-white/90 backdrop-blur-sm text-xs font-mono font-bold text-stone-800 hover:bg-white hover:border-[#f26b45]/40 transition shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
              <span>9917490721</span>
            </a>
            <a
              href="https://wa.me/919917490721?text=Hi%20Birla%20Tours,%20I%20would%20like%20to%20book%20a%20cab"
              target="_blank"
              rel="noreferrer"
              className="rainbow-border-btn"
            >
              <div className="rainbow-border-btn-inner !py-2 !px-4">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Book Cab</span>
              </div>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-sm text-stone-900 border border-stone-300/80 shadow-xs active:scale-95 transition-transform"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-5 h-5 text-stone-900" /> : <Menu className="w-5 h-5 text-stone-900" />}
          </button>
        </div>
      </nav>

      {/* Modern Slide-over Sidebar for Mobile View with Backdrop */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        {/* Slide-in Drawer Container */}
        <div 
          className={`fixed inset-y-0 right-0 w-[85%] max-w-sm bg-[#F5F2EF] h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto transform transition-transform duration-300 ease-out border-l border-stone-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-stone-300/80">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-10">
                  <Image
                    src="/logo.png"
                    alt="Birla Tour & Travels Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-serif font-bold text-base text-stone-950 block leading-tight">
                    BIRLA TOURS
                  </span>
                  <span className="text-[10px] font-mono text-[#f26b45] font-semibold uppercase">
                    Haridwar · Roorkee · Dehradun
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition active:scale-95"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="py-6 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-stone-950 text-white shadow-sm'
                        : 'text-stone-800 hover:bg-stone-200/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#f26b45]' : 'text-stone-500'}`} />
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#f26b45]' : 'text-stone-400'}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions & Office Info */}
          <div className="space-y-4 pt-6 border-t border-stone-300">
            <div className="p-3.5 rounded-2xl bg-white border border-stone-300 text-xs text-stone-700 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>GSTIN: 05AUAPK2728D1Z5</span>
              </div>
              <p className="text-[11px] text-stone-500">
                Vill. Asaf Nagar, NH-334, Roorkee, Haridwar
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+919917490721"
                className="flex items-center justify-center gap-1.5 py-3 rounded-full bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/919917490721?text=Hi%20Birla%20Tours,%20I%20would%20like%20to%20inquire%20about%20cab%20booking"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
