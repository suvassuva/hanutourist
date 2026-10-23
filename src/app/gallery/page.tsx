"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Image as ImageIcon } from 'lucide-react';
import type { GalleryImage } from '@/types';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cars' | 'tours' | 'customers' | 'events'>('all');

  // Hardcoded premium gallery image entries representing our service portfolio
  const galleryItems: GalleryImage[] = [
    { id: 'g1', src: '/images/cars/innova.jpg', alt: 'Premium Innova Crysta ready for trip', category: 'cars' },
    { id: 'g2', src: '/images/routes/mysuru.jpg', alt: 'Mysuru Palace Tour Group departure', category: 'tours' },
    { id: 'g3', src: '/images/routes/coorg.jpg', alt: 'Happy family passenger boarding Dzire', category: 'customers' },
    { id: 'g4', src: '/images/cars/fortuner.jpg', alt: 'Luxury Fortuner wedding car', category: 'events' },
    { id: 'g5', src: '/images/cars/sedan.jpg', alt: 'Sleek Sedan fleet line-up', category: 'cars' },
    { id: 'g6', src: '/images/routes/ooty.jpg', alt: 'Ooty hill station travel scenic route', category: 'tours' },
    { id: 'g7', src: '/images/packages/weekend.jpg', alt: 'Corporate executives transfer pickup', category: 'customers' },
    { id: 'g8', src: '/images/cars/tempo.jpg', alt: 'Tempo Traveller booked for corporate retreat', category: 'events' },
  ];

  const categories: { label: string; value: typeof selectedFilter }[] = [
    { label: 'All Photos', value: 'all' },
    { label: 'Our Fleet', value: 'cars' },
    { label: 'Scenic Tours', value: 'tours' },
    { label: 'Happy Customers', value: 'customers' },
    { label: 'Events & Weddings', value: 'events' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="flex flex-col gap-8 sm:gap-12 py-8 sm:py-12 lg:py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col gap-2 sm:gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Fleet & Journeys</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Travels <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Peek inside our collection of premium vehicles, passenger logs, outstation vacation tours, and corporate transit moments.
          </p>
        </div>
      </section>

      {/* Filter categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 bg-zinc-900/60 p-1.5 rounded-2xl border border-zinc-800/80">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 capitalize ${
                selectedFilter === cat.value
                  ? 'bg-gradient-gold text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Photos Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="glass-panel rounded-3xl overflow-hidden border border-zinc-900 hover:border-zinc-800 transition-all duration-500 group relative h-48 sm:h-64 cursor-pointer"
              >
                <Image 
                  src={item.src} 
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-w-7xl) 33vw, 100vw"
                />
                
                {/* Hover details overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent flex flex-col justify-end p-3 sm:p-4 transition-all duration-300">
                  <div className="flex flex-col gap-0.5 sm:gap-1 translation-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[9px] sm:text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {item.alt}
                    </h3>
                  </div>
                </div>

                {/* Hover camera zoom indicator badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-zinc-950/80 border border-zinc-800/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                  <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </section>

    </div>
  );
}
