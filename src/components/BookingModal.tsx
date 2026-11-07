'use client';

import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, MapPin, Users, Phone, User, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTour?: string;
}

export default function BookingModal({ isOpen, onClose, initialTour = '' }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState('Haridwar');
  const [destination, setDestination] = useState(initialTour || 'Char Dham Yatra');
  const [passengers, setPassengers] = useState('4-6 Persons (Innova Crysta)');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialTour) {
      setDestination(initialTour);
    }
  }, [initialTour]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = 
`*New Booking Request - Birla Tour & Travels*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${name || 'Guest'}
📞 *Phone:* ${phone}
📍 *Pickup Location:* ${pickup}
🎯 *Destination / Tour:* ${destination}
👥 *Passengers / Vehicle:* ${passengers}
📅 *Travel Date:* ${date || 'Flexible / Immediately'}
${notes ? `📝 *Notes:* ${notes}\n` : ''}━━━━━━━━━━━━━━━━━━━━━━
_Sent via Birla Tour & Travels Website_`;

    const encoded = encodeURIComponent(message);
    // WhatsApp redirect to primary desk 9917490721
    const whatsappUrl = `https://wa.me/919917490721?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#F5F2EF] rounded-3xl p-6 sm:p-8 border border-stone-300 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Instant WhatsApp Booking</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-stone-950">
            Book Your Cab / Tour
          </h3>
          <p className="text-xs text-stone-600">
            Fill your trip details below. It opens directly in WhatsApp with our booking team.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700">Your Name *</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                />
                <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700">Phone Number *</label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9917490721"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                />
                <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700">Pickup Location *</label>
              <div className="relative">
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                >
                  <option value="Haridwar Railway Station">Haridwar Railway Station</option>
                  <option value="Dehradun Airport (Jolly Grant)">Dehradun Airport (Jolly Grant)</option>
                  <option value="Dehradun City / ISBT">Dehradun City / ISBT</option>
                  <option value="Rishikesh">Rishikesh</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Other Location">Other Location</option>
                </select>
                <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700">Destination / Tour *</label>
              <input
                type="text"
                required
                placeholder="Char Dham, Kedarnath, Mussoorie, etc."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700">Travel Date</label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                />
                <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700">Passengers / Cab</label>
              <div className="relative">
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
                >
                  <option value="Innova Crysta (6-7 Seater)">Innova Crysta (6-7 Seater)</option>
                  <option value="Sedan / Swift Dzire (4 Seater)">Sedan / Swift Dzire (4 Seater)</option>
                  <option value="Tempo Traveller (12-17 Seater)">Tempo Traveller (12-17 Seater)</option>
                  <option value="VIP Protocol Escort Unit">VIP Protocol Escort Unit</option>
                </select>
                <Users className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700">Any Special Notes (Optional)</label>
            <textarea
              rows={2}
              placeholder="e.g. Flight number, elderly passengers, luggage count..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f26b45]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Details via WhatsApp</span>
          </button>
        </form>

        <p className="mt-3 text-center text-[10px] text-stone-500 font-mono">
          Or Call directly: <a href="tel:+919917490721" className="text-stone-900 font-bold hover:underline">9917490721</a> / <a href="tel:+916397295500" className="text-stone-900 font-bold hover:underline">6397295500</a>
        </p>
      </div>
    </div>
  );
}
