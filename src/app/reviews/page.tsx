'use client';

import React from 'react';
import Link from 'next/link';
import { Award, ArrowLeft, Star, Phone, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '@/components/icons/SocialIcons';
import Footer from '@/components/Footer';

// Verified reels from user
const reels = [
  {
    title: "Welcome to Uttarakhand - Chauffeur Highlights",
    url: "https://www.instagram.com/reel/DMMtm3jNQ_V/",
    embedUrl: "https://www.instagram.com/reel/DMMtm3jNQ_V/embed/",
    desc: "Experience scenic valley drives with our luxury Innova Crysta cabs."
  },
  {
    title: "Uttarakhand Scenic Highway Escort",
    url: "https://www.instagram.com/reel/C6g0ng1PYW_/",
    embedUrl: "https://www.instagram.com/reel/C6g0ng1PYW_/embed/",
    desc: "Smooth mountain highway transit with veteran hill drivers."
  },
  {
    title: "Welcome to Uttarakhand Char Dham Yatra",
    url: "https://www.instagram.com/reel/Cyuq5TQPenc/",
    embedUrl: "https://www.instagram.com/reel/Cyuq5TQPenc/embed/",
    desc: "Gangotri, Yamunotri, Kedarnath Ji and Badrinath Ji pilgrimage coordination. Contact: 9917 490 721."
  },
  {
    title: "Uttarakhand Char Dham Yatra Dispatch",
    url: "https://www.instagram.com/reel/CxUNi4wPu11/",
    embedUrl: "https://www.instagram.com/reel/CxUNi4wPu11/embed/",
    desc: "On-route family pilgrimage journey with certified mountain chauffeurs."
  },
  {
    title: "Kedarnath & Badrinath Mountain Drive",
    url: "https://www.instagram.com/reel/CxUNcbAPErX/",
    embedUrl: "https://www.instagram.com/reel/CxUNcbAPErX/embed/",
    desc: "Reliable hill ascents and seamless transit to sacred shrines."
  },
  {
    title: "Char Dham Yatra Route Highlights",
    url: "https://www.instagram.com/reel/CxUNXd1PmMY/",
    embedUrl: "https://www.instagram.com/reel/CxUNXd1PmMY/embed/",
    desc: "Family tours across high altitude Himalayan passes."
  },
  {
    title: "Spiritual Yatra Journey",
    url: "https://www.instagram.com/reel/CxUNSxbvorZ/",
    embedUrl: "https://www.instagram.com/reel/CxUNSxbvorZ/embed/",
    desc: "Doorstep pickup from Haridwar and Dehradun Airport."
  },
  {
    title: "Uttarakhand Pilgrimage Moments",
    url: "https://www.instagram.com/reel/CxTJM3WIrB4/",
    embedUrl: "https://www.instagram.com/reel/CxTJM3WIrB4/embed/",
    desc: "Safe mountain journeys with 10+ years experienced local drivers."
  },
  {
    title: "Himalayan Chauffeur Experience",
    url: "https://www.instagram.com/reel/CxS-QUyoqAh/",
    embedUrl: "https://www.instagram.com/reel/CxS-QUyoqAh/embed/",
    desc: "Comfort, safety, and punctual service on Uttarakhand roads."
  }
];

export default function ReviewsPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-stone-900 selection:bg-orange-200 selection:text-stone-900">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-300/60">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-stone-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#f26b45]" />
            <span>Back to Home</span>
          </Link>

          <a
            href="https://www.instagram.com/subhash.birla/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:opacity-95 transition"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @subhash.birla on Instagram</span>
          </a>
        </div>

        <div className="max-w-3xl space-y-4 my-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-orange-500/30 text-[11px] font-bold uppercase tracking-widest text-[#f26b45]">
            <Award className="w-3.5 h-3.5" />
            <span>Real Video Reviews &amp; Tour Reels</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-950 tracking-tight">
            Customer Journeys &amp; Tour Highlights
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Watch real tour footage, mountain road updates, and pilgrim feedback recorded live during our Char Dham Yatra and Uttarakhand road expeditions.
          </p>
        </div>
      </div>

      {/* Video Reels Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reels.map((reel, index) => (
            <div 
              key={index}
              className="relative rounded-3xl bg-stone-900/95 text-white border border-stone-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between group hover:border-orange-500/40 transition-all duration-300"
            >
              {/* Instagram Reel Iframe Container */}
              <div className="relative w-full aspect-[9/16] bg-stone-950 overflow-hidden">
                <iframe
                  src={reel.embedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  scrolling="no"
                  loading="lazy"
                  title={reel.title}
                />
              </div>

              {/* Reel Card Footer Details */}
              <div className="p-5 space-y-2 bg-stone-900 border-t border-stone-800/80">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-[11px] text-stone-400 font-mono ml-1.5">Verified Trip</span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#f26b45] transition">
                  {reel.title}
                </h3>
                <p className="text-xs text-stone-400 line-clamp-2">
                  {reel.desc}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#f26b45] hover:underline font-semibold"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>View on Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/919917490721?text=Hi%20Birla%20Tours,%20I%20saw%20your%20reels%20and%20want%20to%20book%20a%20cab"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-mono font-bold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
