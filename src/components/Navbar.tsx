'use client';

import React, { useState } from 'react';
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
  Phone
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Tours & Yatra', href: '/tours', icon: Compass },
    { name: 'Gallery', href: '/gallery', icon: Images },
    { name: 'FAQs', href: '/faqs', icon: HelpCircle },
    { name: 'Travel Blogs', href: '/blogs', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: PhoneCall },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#F5F2EF]/85 backdrop-blur-md border-b border-stone-300/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-20">
        {/* Brand Logo with User Uploaded Custom Logo */}
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="relative w-12 h-10 sm:w-14 sm:h-11">
            <Image
              src="/logo.png"
              alt="Birla Tour & Travels Logo"
              fill
              priority
              className="object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif tracking-widest text-lg sm:text-xl font-bold text-stone-950">
              BIRLA
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-[#f26b45] uppercase font-mono">
              Tour &amp; Travels
            </span>
          </div>
        </Link>

        {/* Desktop Links (Pill Bar with Icons) */}
        <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-[#EBE8E4] text-stone-800 border border-stone-300/50 shadow-xs">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const IconComponent = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-stone-950 text-[#F5F2EF] shadow-sm'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/40'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#f26b45]' : 'text-stone-500'}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Quick Phone CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+919917490721"
            className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full border border-stone-300 bg-white/80 text-xs font-mono font-bold text-stone-800 hover:bg-white transition shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
            <span>9917490721</span>
          </a>
          <a
            href="tel:+916397295500"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-[#F5F2EF] text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
            <span>Book Cab</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#EBE8E4] text-stone-900 font-medium border border-stone-300/60"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-50 flex flex-col justify-between p-6 bg-[#F5F2EF] text-stone-900 border-t border-stone-300/60 lg:hidden shadow-2xl">
          <div className="flex flex-col gap-2 my-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3.5 text-xl font-serif font-medium p-3.5 rounded-2xl transition-colors ${
                    isActive ? 'bg-stone-900 text-[#F5F2EF]' : 'text-stone-800 hover:bg-stone-200'
                  }`}
                >
                  <IconComponent className={`w-5 h-5 ${isActive ? 'text-[#f26b45]' : 'text-stone-500'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-stone-300 flex flex-col gap-3">
            <a
              href="tel:+919917490721"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-stone-900 text-[#F5F2EF] font-bold text-xs uppercase tracking-widest shadow-md"
            >
              <Phone className="w-4 h-4 text-[#f26b45]" />
              <span>Call +91 99174 90721</span>
            </a>
            <a
              href="tel:+916397295500"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#f26b45] text-white font-bold text-xs uppercase tracking-widest shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 63972 95500</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
