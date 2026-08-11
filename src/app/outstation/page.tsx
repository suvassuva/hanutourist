import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, MapPin, CalendarRange, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Outstation Cabs & Intercity Travel | Hanu Tourist",
  description: "Book clean, comfortable intercity outstation cabs from Bengaluru to Mysuru, Coorg, Ooty, Chikmagalur, Tirupati, Goa, and more. Choose flat one-way drops or round-trips.",
  alternates: {
    canonical: "https://hanutourist.in/outstation",
  },
};

import { POPULAR_ROUTES, COMPANY } from '@/lib/constants';
import Marquee from '@/components/Marquee';

export default function Outstation() {
  return (
    <div className="flex flex-col gap-10 sm:gap-16 py-8 sm:py-12 lg:py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col gap-2 sm:gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Intercity Travel</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Premium <span className="text-gradient-gold">Outstation Trips</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Comfortable intercity cab rides from Bengaluru to anywhere in South India. Select from flat-rate one-way drop fares or customized round-trip packages.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          
          <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-zinc-900 flex gap-3 sm:gap-4">
            <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded-xl shrink-0 h-fit">
              <Compass className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white">Custom Tour Routes</h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                Design your itinerary with stops at scenic sights, local restaurants, or heritage spots. Our drivers will follow your lead.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-zinc-900 flex gap-3 sm:gap-4">
            <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded-xl shrink-0 h-fit">
              <Clock className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white">On-Time Dispatches</h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                We make sure your outstation vehicle shows up well before the scheduled departure time, fully fueled and prepped.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-zinc-900 flex gap-3 sm:gap-4">
            <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded-xl shrink-0 h-fit">
              <CalendarRange className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white">Multi-day Holidays</h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                Book a dedicated cab for 3, 5, or 7 days with transparent daily allowances, driver accommodation, and toll package support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Routes list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6 sm:gap-10">
        <div className="text-center md:text-left flex flex-col gap-2 sm:gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-semibold">Popular Getaways</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Popular Routes from Bengaluru</h2>
        </div>

        <Marquee duration={30}>
          {POPULAR_ROUTES.map((route) => (
            <div 
              key={route.id} 
              className="glass-panel rounded-3xl overflow-hidden border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex flex-col h-full group w-72 sm:w-80 shrink-0"
            >
              {/* Image Route */}
              <div className="relative h-36 sm:h-44 bg-gradient-to-tr from-zinc-950 to-zinc-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image 
                  src={route.image} 
                  alt={route.to}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
              </div>

              {/* Info Details */}
              <div className="p-5 sm:p-6 flex flex-col gap-4 sm:gap-5 flex-grow justify-between">
                <div className="flex flex-col gap-1.5 sm:gap-2.5">
                  <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-white">
                    <span>{route.from}</span>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400 mx-1" />
                    <span>{route.to}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-zinc-600" />
                      {route.distance}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-zinc-600" />
                      {route.duration}
                    </span>
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-zinc-600 uppercase tracking-wider block font-semibold">Starting Fares</span>
                    <span className="text-sm sm:text-base font-extrabold text-amber-400">₹{route.startingPrice.toLocaleString()}</span>
                  </div>
                  <Link 
                    href="/contact" 
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-400 text-[10px] sm:text-xs font-bold transition-all duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Booking CTA outstation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="glass-panel border border-zinc-900 rounded-3xl p-5 sm:p-8 flex flex-col items-center gap-4 sm:gap-5">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Plan Your Journey Today</h2>
          <p className="text-zinc-500 text-xs sm:text-sm max-w-lg leading-relaxed">
            Get an instant custom quote for your outstation travel. Connect with our dispatch team on WhatsApp or over a direct phone call.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mt-1 sm:mt-2">
            <Link 
              href="/" 
              className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-gold text-black rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] text-center"
            >
              Book Cab Now
            </Link>
            <a 
              href={`tel:${COMPANY.phone[0].replace(/\s+/g, '')}`} 
              className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm tracking-wide uppercase hover:border-amber-400 hover:text-amber-400 transition-colors text-center"
            >
              Call Chauffeur Desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
