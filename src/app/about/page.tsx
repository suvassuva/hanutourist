import React from 'react';
import type { Metadata } from 'next';
import { Shield, Clock, Award, Users, HeartHandshake } from 'lucide-react';
import { STATS, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: "About Us | Travels Bengaluru",
  description: "Learn more about Travels, a premier taxi and travel agency based in K.R. Puram, Bengaluru. Over a decade of providing reliable, safe, and premium cab services.",
};


export default function About() {
  return (
    <div className="flex flex-col gap-10 sm:gap-16 py-8 sm:py-12 lg:py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col gap-2 sm:gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Story</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            About <span className="text-gradient-gold">Travels</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Travels is a premier taxi and travel agency based in K.R. Puram, Bengaluru. For over a decade, we have been delivering reliable, safe, and premium cab services to our clients, ensuring that every destination is reached comfortably and on schedule.
          </p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, index) => (
            <div 
              key={index}
              className="glass-panel border border-zinc-900 rounded-2xl p-4 sm:p-8 flex flex-col items-center justify-center text-center gap-1 sm:gap-2"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                {stat.value.toLocaleString()}{stat.suffix}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-zinc-900/10 py-10 sm:py-16 border-y border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          
          <div className="glass-panel rounded-2xl p-5 sm:p-8 border border-zinc-900 flex flex-col gap-3 sm:gap-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Award className="h-5 w-5 sm:h-6 w-6" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">Our Mission</h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              To provide the highest standard of transportation services in Bengaluru by combining premium, clean vehicles with certified, courteous, and professional drivers. We aim to make travel stress-free, cost-effective, and enjoyable.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-5 sm:p-8 border border-zinc-900 flex flex-col gap-3 sm:gap-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <HeartHandshake className="h-5 w-5 sm:h-6 w-6" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">Our Vision</h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              To become the first-choice travel partner in Karnataka for outstation vacations, corporate transits, and airport runs. We continually adapt our fleet and customer support to build lifelong relations with our patrons.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6 sm:gap-12">
        <div className="text-center flex flex-col gap-2 sm:gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Guidelines</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Why Choose Travels</h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto">
            We hold ourselves to strict operating principles to maintain a superior level of ride satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Item 1 */}
          <div className="flex flex-col gap-2.5 sm:gap-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 text-amber-400 flex items-center justify-center shrink-0">
              <Shield className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white">100% Safe & Secure</h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                All vehicles are strictly cleaned, GPS tracked, and operated by professional, verified chauffeurs.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col gap-2.5 sm:gap-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white">Always On Time</h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                Punctuality is our guarantee. We monitor flight schedules and traffic alerts to ensure we show up ahead of time.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-2.5 sm:gap-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 text-amber-400 flex items-center justify-center shrink-0">
              <Users className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white">24/7 Dedicated Support</h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                Our support desk is operational day and night to coordinate custom routes, billing issues, or last-minute modifications.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
