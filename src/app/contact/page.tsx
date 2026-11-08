'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowLeft } from 'lucide-react';
import { InstagramIcon } from '@/components/icons/SocialIcons';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Grainient from '@/components/ui/Grainient';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: 'Haridwar',
    destination: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waText = 
`*Contact & Cab Booking Inquiry - Birla Tour & Travels*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name || 'Guest'}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
📍 *Pickup:* ${formData.pickup}
🎯 *Destination / Route:* ${formData.destination || 'Not specified'}
📅 *Date of Travel:* ${formData.date || 'To be decided'}
💬 *Message:* ${formData.message || 'Please send available cars and quote.'}
━━━━━━━━━━━━━━━━━━━━━━
_Sent via Birla Tour & Travels Contact Form_`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/919917490721?text=${encoded}`, '_blank');
  };

  return (
    <div className="relative min-h-screen text-white selection:bg-orange-500 selection:text-white">
      {/* Grainient Animated Wave Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Grainient
          colors={['#120f17', '#2a0f0a', '#9a3412', '#f97316', '#fed7aa']}
          angle={55}
          flow={0.8}
          silk={0.35}
          grainAmount={0.08}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#f26b45]" />
            <span>Back to Home</span>
          </Link>
          <a
            href="https://www.instagram.com/subhash.birla/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-stone-300 hover:text-white transition"
          >
            <InstagramIcon className="w-4 h-4 text-[#f26b45]" />
            <span>@subhash.birla</span>
          </a>
        </div>

        {/* Minimalist 21st.dev Style Contact Card (Image 1 reference) */}
        <div className="rounded-3xl bg-[#141414]/90 backdrop-blur-2xl border border-stone-800 shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Get in touch */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-800/80">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
                    Get in touch
                  </h1>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    If you have any questions regarding our Services or need help booking your pilgrimage or airport cab, please fill out the form here. We respond immediately via WhatsApp.
                  </p>
                </div>

                <div className="space-y-5 pt-4">
                  {/* Email */}
                  <a href="mailto:subhashbirla7051@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition">
                      <Mail className="w-4 h-4 text-stone-300 group-hover:text-[#f26b45] transition" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block font-medium">Email</span>
                      <span className="text-sm font-sans font-semibold text-white group-hover:text-[#f26b45] transition">
                        subhashbirla7051@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+919917490721" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition">
                      <Phone className="w-4 h-4 text-stone-300 group-hover:text-[#f26b45] transition" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block font-medium">Phone</span>
                      <span className="text-sm font-sans font-semibold text-white group-hover:text-[#f26b45] transition">
                        +91 99174 90721 / 63972 95500
                      </span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-stone-300" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block font-medium">Address</span>
                      <span className="text-sm font-sans font-medium text-stone-200 block leading-relaxed">
                        Vill. Asaf Nagar, NH-334, Roorkee - 247656, Distt. Haridwar (Uttarakhand)
                      </span>
                      <span className="text-[11px] font-mono text-[#f26b45] font-bold">
                        GSTIN: 05AUAPK2728D1Z5
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram footer link */}
              <div className="pt-8 mt-8 border-t border-stone-800/80">
                <a
                  href="https://www.instagram.com/subhash.birla/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-stone-400 hover:text-[#f26b45] transition"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram: @subhash.birla</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Dark Form (Exact Image 1 layout) */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-stone-300">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-stone-800 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-stone-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-stone-300">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-stone-800 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-stone-500 transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-semibold text-stone-300">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99174 90721"
                      className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-stone-800 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-stone-500 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-pickup" className="text-xs font-semibold text-stone-300">
                      Pickup
                    </label>
                    <select
                      id="contact-pickup"
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-stone-800 text-sm text-white focus:outline-none focus:border-stone-500 transition"
                    >
                      <option value="Haridwar Railway Station">Haridwar Railway Station</option>
                      <option value="Dehradun Airport (Jolly Grant)">Dehradun Airport (Jolly Grant)</option>
                      <option value="Roorkee NH-334">Roorkee NH-334</option>
                      <option value="Dehradun City / ISBT">Dehradun City / ISBT</option>
                      <option value="Rishikesh">Rishikesh</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Other">Other Location</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-destination" className="text-xs font-semibold text-stone-300">
                    Destination / Tour
                  </label>
                  <input
                    id="contact-destination"
                    type="text"
                    required
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Char Dham, Kedarnath, Badrinath, Mussoorie, etc."
                    className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-stone-800 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-stone-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-stone-300">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel dates, passenger count, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-stone-800 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-stone-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Submit contact and booking inquiry"
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-stone-200 text-stone-950 font-bold text-sm tracking-wide transition shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-stone-950" />
                  <span>Submit</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
