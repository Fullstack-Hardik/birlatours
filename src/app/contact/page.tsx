'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Shield, Send, CheckCircle2 } from 'lucide-react';
import Footer from '@/components/Footer';

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
    <div className="relative min-h-screen bg-transparent text-stone-900 selection:bg-stone-200 selection:text-stone-900">

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        
        {/* Simple, Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-[11px] font-bold uppercase tracking-widest text-[#f26b45]">
            <Phone className="w-3.5 h-3.5" />
            <span>24x7 Customer Support</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-950 tracking-tight">
            Get in Touch with Us
          </h1>
          <p className="text-stone-600 text-sm sm:text-base">
            Fill the form below to connect directly on WhatsApp with our dispatch team, or call our direct numbers anytime.
          </p>
        </div>

        {/* 2-Column Clean Layout: Left Contact Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-300/80 shadow-xs space-y-6">
              <h2 className="text-xl font-serif font-bold text-stone-950">
                Direct Contact Details
              </h2>

              <div className="space-y-4">
                {/* Phone 1 */}
                <a
                  href="tel:+919917490721"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#EBE8E4] hover:bg-stone-300/50 transition group"
                >
                  <div className="w-10 h-10 rounded-full bg-stone-950 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#f26b45]" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 uppercase font-semibold">Primary Desk (Call / WhatsApp)</span>
                    <p className="text-sm sm:text-base font-mono font-bold text-stone-900 group-hover:text-[#f26b45] transition">
                      +91 99174 90721
                    </p>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href="tel:+916397295500"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#EBE8E4] hover:bg-stone-300/50 transition group"
                >
                  <div className="w-10 h-10 rounded-full bg-stone-950 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#f26b45]" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 uppercase font-semibold">Support Desk 2</span>
                    <p className="text-sm sm:text-base font-mono font-bold text-stone-900 group-hover:text-[#f26b45] transition">
                      +91 63972 95500
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:subhashbirla7051@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#EBE8E4] hover:bg-stone-300/50 transition group"
                >
                  <div className="w-10 h-10 rounded-full bg-stone-950 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#f26b45]" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 uppercase font-semibold">Official Email</span>
                    <p className="text-sm font-mono font-bold text-stone-900 group-hover:text-[#f26b45] transition">
                      subhashbirla7051@gmail.com
                    </p>
                  </div>
                </a>

                {/* Registered Office & GSTIN */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#EBE8E4]">
                  <div className="w-10 h-10 rounded-full bg-stone-950 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#f26b45]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs text-stone-500 uppercase font-semibold">Registered Office &amp; GSTIN</span>
                    <p className="text-xs text-stone-900 font-medium leading-relaxed">
                      Vill. Asaf Nagar, NH-334, Roorkee - 247656, Distt. Haridwar (U.K.)
                    </p>
                    <p className="text-[11px] font-mono font-bold text-[#f26b45]">
                      GSTIN: 05AUAPK2728D1Z5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Trigger */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Instant WhatsApp Chat</span>
              </div>
              <p className="text-xs text-emerald-950 leading-relaxed">
                Need immediate vehicle availability or photos? Message us directly anytime:
              </p>
              <a
                href="https://wa.me/919917490721?text=Hi%20Birla%20Tours,%20I%20would%20like%20to%20inquire%20about%20cab%20booking"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1ebd5b] transition shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Form Panel: Fills data and redirects to WhatsApp */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-300/80 shadow-xs">
            <div className="mb-6 space-y-1">
              <h2 className="text-2xl font-serif font-bold text-stone-950">
                Book a Cab / Send Enquiry
              </h2>
              <p className="text-xs text-stone-600">
                Fill this quick form. Upon submission, it will automatically open your WhatsApp with your details pre-formatted.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Amit Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9917490721"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. amit@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Pickup Location *
                  </label>
                  <select
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                  >
                    <option value="Haridwar Railway Station">Haridwar Railway Station</option>
                    <option value="Dehradun Airport (Jolly Grant)">Dehradun Airport (Jolly Grant)</option>
                    <option value="Dehradun City / ISBT">Dehradun City / ISBT</option>
                    <option value="Rishikesh">Rishikesh</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Other">Other Location</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Destination / Tour Route *
                  </label>
                  <input
                    type="text"
                    required
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Kedarnath & Badrinath, Mussoorie"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Requirements / Notes
                </label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Number of passengers, luggage, one-way or round-trip..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F2EF] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-stone-900 text-[#F5F2EF] hover:bg-stone-800 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition shadow-md"
              >
                <Send className="w-4 h-4 text-[#f26b45]" />
                <span>Submit &amp; Open in WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}
