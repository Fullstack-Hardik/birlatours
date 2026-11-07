'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';

const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'booking', label: 'Booking & Dispatch' },
  { id: 'fleet', label: 'Fleet & Drivers' },
  { id: 'pricing', label: 'Pricing & Tolls' },
];

const faqs = [
  {
    category: 'booking',
    q: 'How do I book a cab with Birla Tour & Travels?',
    a: 'You can instantly book by calling +91 99174 90721 / +91 63972 95500 or by clicking "Book on WhatsApp" on any tour card. Share your travel dates, pickup point (Haridwar, Dehradun, Jolly Grant Airport, Roorkee), and destination for an immediate confirmed quote.'
  },
  {
    category: 'booking',
    q: 'Where are your physical operational offices located?',
    a: 'Our registered headquarters is located at Vill. Asaf Nagar, NH-334, Roorkee, Distt. Haridwar, Uttarakhand (GSTIN: 05AUAPK2728D1Z5). We have dedicated 24x7 fleet dispatch desks near Haridwar Junction Railway Station and Jolly Grant Dehradun Airport.'
  },
  {
    category: 'booking',
    q: 'Do you provide airport meet-and-greet at Jolly Grant Dehradun Airport?',
    a: 'Yes. We track your flight arrival in real-time. Even if your flight is delayed or rescheduled, your chauffeur will be waiting outside the terminal with your name placard and assistance for your luggage.'
  },
  {
    category: 'booking',
    q: 'How far in advance should I book for Char Dham Yatra?',
    a: 'We recommend reserving 2 to 4 weeks prior to your planned start date during the peak pilgrimage windows (May-June and September-October) to ensure guaranteed vehicle assignment.'
  },
  {
    category: 'fleet',
    q: 'Which vehicles are available in your fleet?',
    a: 'Our primary fleet consists of immaculate Toyota Innova Crysta luxury 7-seater vehicles equipped with dual-zone climate control, plush captain seats, and high ground clearance for mountain curves. We also offer executive VIP convoy pilot vehicles and Tempo Travellers for larger families.'
  },
  {
    category: 'fleet',
    q: 'Are your chauffeurs experienced with steep Himalayan terrain?',
    a: 'Yes. Every chauffeur in our team is a certified mountain driver with a minimum of 10 years of alpine experience across Kedarnath, Badrinath, Gangotri, Yamunotri, Auli, and high mountain passes.'
  },
  {
    category: 'fleet',
    q: 'How is luggage handled for long family pilgrimages?',
    a: 'Our Innova Crystas feature spacious rear luggage boots capable of holding 4-5 large suitcases, plus optional rainproof rooftop luggage carriers for family pilgrimage gear.'
  },
  {
    category: 'pricing',
    q: 'Are highway tolls, state taxes, and driver allowances included?',
    a: 'Yes. Every booking quotation from Birla Tour & Travels includes vehicle hire, fuel, Uttarakhand state tax permits, highway tolls, parking fees, and driver allowances. There are zero surprise surcharges.'
  },
  {
    category: 'pricing',
    q: 'Do you issue a formal GST bill/tax invoice for corporate or personal travel?',
    a: 'Yes. As a registered travel firm (GSTIN: 05AUAPK2728D1Z5), we provide full GST tax invoices and payment receipts upon request.'
  },
  {
    category: 'pricing',
    q: 'What is your date adjustment or cancellation policy?',
    a: 'We understand mountain weather conditions can necessitate changes. Date modifications are accommodated without penalty subject to car availability. Cancellations made 48 hours prior to the journey receive a prompt refund.'
  }
];

export default function FaqsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = activeTab === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === activeTab);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-[#F5F2EF] text-stone-900 selection:bg-stone-200 selection:text-stone-900">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f26b45] font-mono">
            Help &amp; Answers
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-950 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Clear, honest information about our Toyota Innova Crysta cabs, Char Dham booking, pricing inclusions, and driver credentials.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {faqCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-stone-950 text-white shadow-sm'
                  : 'bg-white hover:bg-stone-200/80 text-stone-700 border border-stone-300/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-3 mb-16">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-300/80 overflow-hidden shadow-xs hover:border-stone-400/80 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-stone-950 select-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#f26b45] text-white rotate-180' : 'bg-stone-100 text-stone-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Card */}
        <div className="bg-[#EBE8E4] rounded-3xl p-8 sm:p-10 border border-stone-300/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-serif font-bold text-stone-950">
              Have a question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Our Haridwar &amp; Roorkee dispatch team answers calls and WhatsApp queries 24 hours a day.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919917490721?text=Hi%20Birla%20Tours,%20I%20have%20a%20question"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+919917490721"
              className="px-5 py-3 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#f26b45]" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
