import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ChevronDown, Phone, MapPin, Car, Shield, CheckCircle2 } from 'lucide-react';
import ChromaCurrent from '@/components/ui/chroma-current';
import DoodleCrewFooter from '@/components/ui/doodle-crew-footer';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Birla Tour and Travels',
  description: 'Common questions about booking cabs, Char Dham Yatra, Toyota Innova Crysta rental, Haridwar & Dehradun offices, rates, and policies with Birla Tour and Travels.',
};

const faqList = [
  {
    category: 'Booking & Dispatch',
    items: [
      {
        q: 'How can I book a cab with Birla Tour and Travels?',
        a: 'Booking is immediate. Call or WhatsApp our dispatch desks directly at +91 99174 90721 or +91 63972 95500. Tell us your date, pickup location (Haridwar, Dehradun, Jolly Grant Airport, etc.), and destination. You will receive vehicle details and confirmed quote in 15 minutes.'
      },
      {
        q: 'What are the addresses of your Haridwar and Dehradun offices?',
        a: '1) Haridwar Office: Near Haridwar Junction Railway Station, Sharvan Nath Nagar, Haridwar, Uttarakhand 249401. 2) Dehradun Office: Rajpur Road & Jolly Grant Airport Terminal Road, Dehradun, Uttarakhand 248001.'
      },
      {
        q: 'How far in advance should I book for Char Dham Yatra?',
        a: 'We recommend booking 2 to 4 weeks in advance during the peak pilgrimage season (May, June, September, October) to guarantee vehicle choice and prime chauffeur allocation.'
      }
    ]
  },
  {
    category: 'Fleet & Safety',
    items: [
      {
        q: 'Which vehicles are available in your fleet?',
        a: 'Our flagship fleet consists of pristine Toyota Innova Crysta 7-seater luxury cabs, executive VIP pilot escort units, and multi-luggage long-distance cruisers. All vehicles feature dual AC, captain seats, and high ground clearance.'
      },
      {
        q: 'Are your mountain drivers certified?',
        a: 'Yes. Every chauffeur in our team is a certified mountain veteran with over 10 years of alpine driving experience across Kedarnath, Badrinath, Gangotri, Yamunotri, and high Himalayan passes.'
      },
      {
        q: 'Are the vehicles sanitized and inspected before every trip?',
        a: 'Absolutely. Every vehicle undergoes a 25-point mechanical inspection (brakes, tyres, fluids, wiper blades) and deep interior detailing before each passenger boarding.'
      }
    ]
  },
  {
    category: 'Pricing, Inclusions & Cancellations',
    items: [
      {
        q: 'What is included in the quoted tour price?',
        a: 'Our written quotations include vehicle rental, fuel charges, inter-state / hill permits, highway tolls, parking fees, and chauffeur allowances. There are zero hidden fees.'
      },
      {
        q: 'Do you track flights for Jolly Grant Dehradun Airport pickups?',
        a: 'Yes! We monitor your flight schedule in real-time. Even if your flight is delayed, your designated chauffeur will be waiting outside the arrivals terminal with your name placard.'
      },
      {
        q: 'What is your cancellation or date modification policy?',
        a: 'We understand travel plans can shift in the mountains due to weather. Date adjustments are free of charge subject to vehicle availability. Cancellations made 48 hours prior to trip start receive hassle-free refunds.'
      }
    ]
  }
];

export default function FaqsPage() {
  return (
    <div className="relative min-h-screen bg-[#F5F2EF] text-stone-900 selection:bg-stone-200 selection:text-stone-900">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <ChromaCurrent opacity={0.3} dotSize={1.8} gap={32} glowColor="rgba(242, 107, 69, 0.35)" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <div className="space-y-4 max-w-3xl mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-[11px] font-bold uppercase tracking-widest text-[#f26b45]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Birla Tour &amp; Travels · Clear Answers</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif tracking-tight text-stone-950">
            Frequently Asked Questions
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our chauffeur network, booking process, safety standards, and pricing across Uttarakhand.
          </p>
        </div>

        {/* FAQ Groups */}
        <div className="space-y-12 mb-20">
          {faqList.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#f26b45] font-mono border-b border-stone-300 pb-2">
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.items.map((item, iIdx) => (
                  <details
                    key={iIdx}
                    className="group bg-white rounded-2xl border border-stone-300/70 p-6 cursor-pointer open:shadow-xs transition-all duration-200"
                  >
                    <summary className="flex items-center justify-between font-serif text-lg text-stone-900 select-none list-none font-medium">
                      <span>{item.q}</span>
                      <ChevronDown className="w-5 h-5 text-stone-400 transition-transform duration-300 group-open:rotate-180 shrink-0 ml-4" />
                    </summary>
                    <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-4">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-[#EBE8E4] rounded-3xl p-8 sm:p-10 border border-stone-300/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Have a specific question not covered here?
            </h3>
            <p className="text-xs text-stone-600">
              Our travel specialists in Haridwar and Dehradun are available 24 hours a day.
            </p>
          </div>
          <a
            href="tel:+919917490721"
            className="px-6 py-3.5 rounded-full bg-stone-900 text-[#F5F2EF] font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition shadow-xs whitespace-nowrap"
          >
            Call +91 99174 90721
          </a>
        </div>
      </div>

      <DoodleCrewFooter
        wordmark="BIRLA"
        brand="BIRLA TOUR AND TRAVELS"
        blurb="Uttarakhand's leading luxury chauffeur network. Offices in Haridwar and Dehradun. 24x7 bookings."
        tagline="Pristine, Punctual, Safe. Luxury travel across Uttarakhand."
        preset="paper"
        palette={{ background: "#F5F2EF", ink: "#1c1917", accent: "#f26b45" }}
      />
    </div>
  );
}
