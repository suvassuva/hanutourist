import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, ArrowRight, ShieldCheck, FileText, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: "Standard Taxi Fares & Tariff Rates | Hanu Tourist",
  description: "Check transparent taxi rates per km in Bengaluru. View flat outstation fees, local package rentals (8hr/80km), and airport transfer rates for Swift Dzire, Innova, and Tempo Traveller.",
  alternates: {
    canonical: "https://hanutourist.in/tariff",
  },
};

import { TARIFF } from '@/lib/constants';

export default function Tariff() {
  return (
    <div className="flex flex-col gap-10 sm:gap-16 py-8 sm:py-12 lg:py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col gap-2 sm:gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Transparent Rates</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Standard <span className="text-gradient-gold">Tariff Rates</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Hanu Tourist maintains complete transparency. No surge rates, zero hidden extras. Review our standard pricing structures for different travel scopes.
          </p>
        </div>
      </section>

      {/* Tariff Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-4 sm:gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-1.5 sm:gap-2">
            <FileText className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-amber-400" />
            <span>Vehicles Pricing Sheet</span>
          </h2>
          <span className="text-[10px] sm:text-xs text-zinc-500 font-medium">*Updated rates for this year</span>
        </div>

        <div className="glass-panel border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900/80 text-zinc-400 font-bold border-b border-zinc-800 text-[10px] sm:text-xs uppercase tracking-wider">
                  <th className="p-3.5 sm:p-5 font-bold">Car Type</th>
                  <th className="p-3.5 sm:p-5 font-bold text-center">Passengers</th>
                  <th className="p-3.5 sm:p-5 font-bold text-center">Local Rate (8h/80km)</th>
                  <th className="p-3.5 sm:p-5 font-bold text-center">Airport Rate (One-Way)</th>
                  <th className="p-3.5 sm:p-5 font-bold text-right">Outstation Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/60 text-xs sm:text-sm">
                {TARIFF.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/20 text-zinc-300 transition-colors">
                    <td className="p-3.5 sm:p-5 font-semibold text-white">{row.carType}</td>
                    <td className="p-3.5 sm:p-5 text-center text-zinc-500 text-xs">{row.passengers} pax</td>
                    <td className="p-3.5 sm:p-5 text-center text-zinc-400">{row.localRate}</td>
                    <td className="p-3.5 sm:p-5 text-center font-semibold text-zinc-400">{row.airportRate}</td>
                    <td className="p-3.5 sm:p-5 text-right font-extrabold text-amber-400">{row.outstationRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Terms and Conditions (Very Important for local taxi services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
        
        {/* Left: General Rules */}
        <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1.5 sm:gap-2">
            <Info className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-rose-500" />
            <span>Pricing Terms & Conditions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <div className="glass-panel border border-zinc-900/60 p-4 sm:p-6 rounded-2xl flex flex-col gap-2 sm:gap-3">
              <h3 className="font-bold text-white text-sm sm:text-base">Outstation Guidelines</h3>
              <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-zinc-500 text-xs">
                <li>Minimum running of 250 km per day is applicable for outstation rentals.</li>
                <li>Driver beta/allowance is charged per calendar day basis.</li>
                <li>Toll gate taxes, parking charges, and state permit fees are paid extra as actuals.</li>
                <li>Night driving allowance is applicable if traveling between 10:00 PM and 6:00 AM.</li>
              </ul>
            </div>

            <div className="glass-panel border border-zinc-900/60 p-4 sm:p-6 rounded-2xl flex flex-col gap-2 sm:gap-3">
              <h3 className="font-bold text-white text-sm sm:text-base">Local Rental Guidelines</h3>
              <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-zinc-500 text-xs">
                <li>Local packages are structured under 8 Hours / 80 Km limit.</li>
                <li>Extra mileage (km) and extra hours will be charged at vehicle-specific rates.</li>
                <li>Time and distance calculations begin and end at the driver dispatch office location.</li>
                <li>Parking tickets and entry charges at venues must be paid by the customer.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Guarantee card */}
        <div className="lg:col-span-4 glass-panel border border-zinc-800 rounded-3xl p-5 sm:p-8 flex flex-col gap-4 sm:gap-5 justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-amber-400/10 text-amber-400 rounded-xl w-fit">
              <ShieldCheck className="h-5 w-5 sm:h-6 w-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">Price Transparency Guarantee</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              We never add hidden costs. All toll receipts, parking tickets, and permit bills will be presented as physical or digital receipts. What you agree with our booking desk is what you pay.
            </p>
          </div>

          <Link 
            href="/"
            className="w-full py-2.5 sm:py-3 bg-gradient-gold text-black font-bold text-xs uppercase tracking-wider rounded-xl text-center hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all duration-300"
          >
            Go to Bookings
          </Link>
        </div>

      </section>

    </div>
  );
}
