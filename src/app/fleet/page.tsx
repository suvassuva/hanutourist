"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Info } from 'lucide-react';
import { FLEET } from '@/lib/constants';

export default function Fleet() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sedan' | 'suv' | 'luxury' | 'tempo'>('all');

  const categories: { label: string; value: typeof selectedCategory }[] = [
    { label: 'All Fleet', value: 'all' },
    { label: 'Sedans', value: 'sedan' },
    { label: 'SUVs', value: 'suv' },
    { label: 'Luxury', value: 'luxury' },
    { label: 'Tempo Travellers', value: 'tempo' },
  ];

  const filteredCars = selectedCategory === 'all' 
    ? FLEET 
    : FLEET.filter(car => car.category === selectedCategory);

  return (
    <div className="flex flex-col gap-8 sm:gap-12 py-8 sm:py-12 lg:py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col gap-2 sm:gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Fleet</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Choose Your <span className="text-gradient-gold">Perfect Ride</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            All our vehicles are modern, air-conditioned, regularly serviced, and driven by well-mannered chauffeurs.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 bg-zinc-900/60 p-1.5 rounded-2xl border border-zinc-800/80">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-gradient-gold text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Cars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCars.map((car) => (
              <div 
                key={car.id} 
                className="glass-panel rounded-3xl overflow-hidden border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image of the car */}
                <div className="relative h-40 sm:h-52 bg-gradient-to-tr from-zinc-950 to-zinc-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image 
                    src={car.image} 
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-7xl) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                  
                  {car.popular && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold bg-amber-400 text-black uppercase tracking-wider rounded z-10">
                      POPULAR CHOICE
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 flex flex-col gap-4 sm:gap-6 flex-grow justify-between">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-bold text-white">{car.name}</h3>
                      <span className="text-[10px] sm:text-xs font-semibold uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {car.category}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-2 sm:py-3 border-y border-zinc-900/60 text-center">
                      <div className="flex flex-col">
                        <span className="text-zinc-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide">Capacity</span>
                        <span className="text-zinc-300 font-semibold text-xs sm:text-sm mt-0.5">{car.passengers} seats</span>
                      </div>
                      <div className="flex flex-col border-x border-zinc-900/60">
                        <span className="text-zinc-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide">Luggage</span>
                        <span className="text-zinc-300 font-semibold text-xs sm:text-sm mt-0.5">{car.luggage} bags</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-zinc-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide">Fuel Type</span>
                        <span className="text-emerald-400 font-semibold text-xs sm:text-sm mt-0.5">{car.fuelType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 sm:pt-2">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-zinc-600 uppercase tracking-wider block font-semibold">Price per km</span>
                      <span className="text-lg sm:text-xl font-extrabold text-amber-400">₹{car.pricePerKm} <span className="text-[10px] sm:text-xs font-normal text-zinc-500">/ km</span></span>
                    </div>
                    <Link 
                      href="/contact" 
                      className="px-4 py-2 sm:px-5 sm:py-3 bg-gradient-gold text-black rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold hover:shadow-[0_0_15px_rgba(251,191,36,0.35)] transition-all duration-300"
                    >
                      Enquire Ride
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-500 text-sm sm:text-base">No vehicles found in this category.</p>
          </div>
        )}
      </section>

      {/* Fleet Advisory */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-8">
        <div className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
          <Info className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <h4 className="text-xs sm:text-sm font-bold text-white">Ride Advisory Note</h4>
            <p className="text-zinc-500 text-[11px] sm:text-xs md:text-sm leading-relaxed">
              Price values shown denote the basic running rate per kilometer. Local trips, airport transits, and overnight stays feature unique tariff profiles, which include driver allowances and base packages. Please refer to our <Link href="/tariff" className="text-amber-400 hover:underline">Tariff details</Link> or get a custom quotation directly from support.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
