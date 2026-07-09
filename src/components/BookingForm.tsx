"use client";

import React, { useState } from 'react';
import { MapPin, Calendar, Car as CarIcon, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { FLEET, COMPANY } from '@/lib/constants';
import type { BookingFormData } from '@/types';

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    pickup: '',
    drop: '',
    tripType: 'one-way',
    travelDate: '',
    carType: FLEET[0].id,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTripTypeChange = (type: 'one-way' | 'round-trip' | 'local') => {
    setFormData((prev) => ({
      ...prev,
      tripType: type,
      // Clear drop if local trip
      drop: type === 'local' ? 'Local Bangalore Rental (8hrs/80km)' : prev.drop === 'Local Bangalore Rental (8hrs/80km)' ? '' : prev.drop,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.pickup || (!formData.drop && formData.tripType !== 'local') || !formData.travelDate) {
      alert("Please fill in all the required fields.");
      return;
    }

    setLoading(true);

    const selectedCar = FLEET.find(c => c.id === formData.carType);
    const carName = selectedCar ? selectedCar.name : formData.carType;
    const rateInfo = selectedCar ? `₹${selectedCar.pricePerKm}/km` : '';

    // Format WhatsApp message
    const messageLines = [
      `*🚖 Hanu Tourist — Cab Booking Enquiry*`,
      `-----------------------------------------`,
      `*Trip Type:* ${formData.tripType.toUpperCase()}`,
      `*Pickup Location:* ${formData.pickup}`,
      `*Drop Location:* ${formData.drop || 'N/A (Local Bangalore Rental)'}`,
      `*Travel Date & Time:* ${formData.travelDate}`,
      `*Selected Vehicle:* ${carName} (${rateInfo})`,
      `-----------------------------------------`,
      `Please confirm the booking availability and share the final quotation. Thank you!`
    ];

    const messageText = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${messageText}`;

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setLoading(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-xl mx-auto glass-panel rounded-3xl p-4 sm:p-8 border border-zinc-800 shadow-2xl relative overflow-hidden">
      
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold"></div>

      {/* Tabs */}
      <div className="flex bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 mb-4 sm:mb-6">
        {(['one-way', 'round-trip', 'local'] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => handleTripTypeChange(type)}
            className={`flex-1 py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold capitalize transition-all duration-300 ${
              formData.tripType === type
                ? 'bg-gradient-gold text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {type === 'local' ? 'Local Rental' : type.replace('-', ' ')}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-5">
        
        {/* Pickup Location */}
        <div className="space-y-1.5">
          <label htmlFor="pickup" className="block text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Pickup Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-400">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <input
              type="text"
              id="pickup"
              name="pickup"
              required
              value={formData.pickup}
              onChange={handleChange}
              placeholder="e.g. Majestic Railway Station or K.R. Puram"
              className="w-full pl-9 pr-3 py-2.5 sm:py-3 bg-zinc-950/60 border border-zinc-800 rounded-lg sm:rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Drop Location - Hide/Disable if Local */}
        {formData.tripType !== 'local' && (
          <div className="space-y-1.5 animate-in fade-in duration-300">
            <label htmlFor="drop" className="block text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Drop Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-rose-500">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <input
                type="text"
                id="drop"
                name="drop"
                required
                value={formData.drop}
                onChange={handleChange}
                placeholder="e.g. Kempegowda Airport or Mysuru Palace"
                className="w-full pl-9 pr-3 py-2.5 sm:py-3 bg-zinc-950/60 border border-zinc-800 rounded-lg sm:rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-xs sm:text-sm"
              />
            </div>
          </div>
        )}

        {/* Date and Car Selection Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {/* Travel Date & Time */}
          <div className="space-y-1.5">
            <label htmlFor="travelDate" className="block text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Date & Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-400">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <input
                type="datetime-local"
                id="travelDate"
                name="travelDate"
                required
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2.5 sm:py-3 bg-zinc-950/60 border border-zinc-800 rounded-lg sm:rounded-xl text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-xs sm:text-sm [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Car Type */}
          <div className="space-y-1.5">
            <label htmlFor="carType" className="block text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Select Fleet
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-400">
                <CarIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <select
                id="carType"
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                className="w-full pl-9 pr-8 py-2.5 sm:py-3 bg-zinc-950/60 border border-zinc-800 rounded-lg sm:rounded-xl text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-xs sm:text-sm appearance-none cursor-pointer"
              >
                {FLEET.map((car) => (
                  <option key={car.id} value={car.id} className="bg-zinc-950 text-white">
                    {car.name} (₹{car.pricePerKm}/km)
                  </option>
                ))}
              </select>
              {/* Custom Down Arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-500">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Price/Fleet Quick Details */}
        {formData.carType && (
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center justify-between animate-in fade-in duration-300">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-amber-400/10 text-amber-400">
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-zinc-500 font-medium">Pricing Model</p>
                <p className="text-xs sm:text-sm text-zinc-200 font-semibold">
                  {FLEET.find(c => c.id === formData.carType)?.name}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] sm:text-xs text-zinc-500 font-medium">Starting from</p>
              <p className="text-sm sm:text-base text-amber-400 font-bold">
                ₹{FLEET.find(c => c.id === formData.carType)?.pricePerKm} / km
              </p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-gold text-black font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <span>Redirecting...</span>
          ) : (
            <>
              <MessageSquare className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              <span>Book on WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </>
          )}
        </button>

        <p className="text-[9px] sm:text-[11px] text-center text-zinc-600 leading-normal">
          *No advance payment required. Clicking will open WhatsApp to coordinate the trip schedule & dispatch the cab details.
        </p>
      </form>
    </div>
  );
}
