import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1f0b08] text-[#f7efe2] pt-20 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-8 bg-[#f26b45] rounded-t-full block" />
              <span className="text-2xl font-bold tracking-tight">BIRLA TOUR & TRAVELS</span>
            </div>
            <p className="text-sm text-[#ebe2d3]/80 max-w-md leading-relaxed">
              Uttarakhand’s premier transport & pilgrimage network. Providing immaculate Toyota Innova Crystas, official government protocol escort pilot cars, and customized Himalayan Char Dham yatras with veteran mountain chauffeurs.
            </p>
            <p className="text-xs text-[#dcb155] font-medium">
              Registered Commercial Tourist Operator • Haridwar & Dehradun
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-sm">
            <div className="font-bold text-white uppercase tracking-wider text-xs">Pages</div>
            <ul className="space-y-2 text-[#ebe2d3]/80">
              <li><Link href="/" className="hover:text-[#f26b45] transition">Home</Link></li>
              <li><Link href="/tours" className="hover:text-[#f26b45] transition">Tours & Pilgrimage</Link></li>
              <li><Link href="/gallery" className="hover:text-[#f26b45] transition">Fleet & Gallery</Link></li>
              <li><Link href="/faqs" className="hover:text-[#f26b45] transition">Pricing & FAQs</Link></li>
              <li><Link href="/blogs" className="hover:text-[#f26b45] transition">Travel Guides</Link></li>
              <li><Link href="/contact" className="hover:text-[#f26b45] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-sm">
            <div className="font-bold text-white uppercase tracking-wider text-xs">Reach Us 24x7</div>
            <div className="space-y-2 text-[#ebe2d3]/80">
              <p>Haridwar Railway Station Road & Jolly Grant Airport Terminal, Uttarakhand</p>
              <p><a href="tel:+919870772715" className="text-[#f26b45] font-semibold hover:underline">+91 98707 72715</a></p>
              <p><a href="mailto:booking@birlatourtravels.com" className="hover:underline">booking@birlatourtravels.com</a></p>
              <p className="text-xs text-[#ebe2d3]/60">Mon–Sun: 24 Hours Cab Dispatch</p>
            </div>
          </div>
        </div>

        {/* Bottom Rule */}
        <div className="border-t border-[#6a5c53]/40 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#ebe2d3]/60">
          <p>© 2026 Birla Tour and Travels. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Punctual • Sanitized • Mountain Expert</span>
            <span>Terms of Travel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
