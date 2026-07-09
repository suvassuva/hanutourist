import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import LucideIcon from '@/components/LucideIcon';

export const metadata: Metadata = {
  title: "Our Services | Hanu Tourist Bengaluru",
  description: "Explore our professional travel offerings: Airport Pickups/Drops, local city rentals, outstation multi-day trips, corporate employee travel, and decorated wedding car hires in Bengaluru.",
  alternates: {
    canonical: "https://hanutoorist.in/services",
  },
};


export default function Services() {
  return (
    <div className="flex flex-col gap-10 sm:gap-16 py-8 sm:py-12 lg:py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col gap-2 sm:gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Offerings</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Professional <span className="text-gradient-gold">Travel Services</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Hanu Tourist provides flat-rate airport pick-drops, custom-crafted outstation holidays, corporate vehicle programs, and hourly local commutes across Bengaluru.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-8 flex flex-col justify-between group h-full border border-zinc-900"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded-xl w-fit group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300">
                  <LucideIcon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-900/50 flex items-center justify-between">
                <Link 
                  href={service.href} 
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-white transition-colors"
                >
                  <span>Request Details</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate/Custom Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass-panel rounded-3xl p-5 sm:p-8 md:p-10 border border-zinc-900 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col gap-2 sm:gap-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs sm:text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>Tailored Travel Solutions</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Need a Customized Booking Plan?</h2>
            <p className="text-zinc-500 text-xs sm:text-sm max-w-lg leading-relaxed">
              We specialize in custom billing, corporate pick-up routines, monthly vehicle leases, and long-term travel plans. Contact our desk to design a solution.
            </p>
          </div>

          <Link 
            href="/contact" 
            className="w-full md:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl text-center bg-gradient-gold text-black font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] shrink-0"
          >
            Contact Desk
          </Link>
        </div>
      </section>

    </div>
  );
}
