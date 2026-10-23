import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PlaneTakeoff, PlaneLanding, ShieldAlert, Check, Clock, ShieldCheck } from 'lucide-react';
import { TARIFF, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Bengaluru Airport Taxi & Transfer Services | Travels",
  description: "Book reliable 24/7 airport pickups & drops to Kempegowda International Airport (KIA) with zero surge prices and guaranteed on-time schedules.",
};


export default function Airport() {
  // Filter out airport rates from TariffRow
  const airportTariffs = TARIFF.map(t => ({
    carType: t.carType,
    rate: t.airportRate,
    passengers: t.passengers
  }));

  return (
    <div className="flex flex-col gap-10 sm:gap-16 py-8 sm:py-12 lg:py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col gap-2 sm:gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Airport Transit</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Bengaluru Airport <span className="text-gradient-gold">Transfer Services</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Reliable, 24/7 airport pick-ups and drop-offs to Kempegowda International Airport (KIA) with zero surge prices and guaranteed on-time schedules.
          </p>
        </div>
      </section>

      {/* Two-Way Service Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        
        {/* Drop Box */}
        <div className="glass-panel rounded-3xl p-5 sm:p-8 border border-zinc-900 flex flex-col gap-4 sm:gap-5">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
            <PlaneTakeoff className="h-5 w-5 sm:h-6 w-6" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">Airport Drop-Off</h2>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
            Enjoy a stress-free trip to Bengaluru airport. We schedule pickup times depending on your location and traffic updates, ensuring you arrive well before check-in starts.
          </p>
          <ul className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-400">
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
              <span>Doorstep pickup anywhere in Bengaluru</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
              <span>Luggage handling assistance by drivers</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
              <span>Toll charges pre-included options</span>
            </li>
          </ul>
        </div>

        {/* Pickup Box */}
        <div className="glass-panel rounded-3xl p-5 sm:p-8 border border-zinc-900 flex flex-col gap-4 sm:gap-5">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
            <PlaneLanding className="h-5 w-5 sm:h-6 w-6" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">Airport Pick-Up</h2>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
            Our chauffeurs monitor your flight schedule in real-time. In case of delays, your cab reservation shifts accordingly, and our driver greets you at the arrival terminal gate.
          </p>
          <ul className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-400">
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
              <span>Flight delay monitoring for smooth pickups</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
              <span>Warm reception at arrival gates</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
              <span>Up to 45 mins complimentary waiting time</span>
            </li>
          </ul>
        </div>

      </section>

      {/* Rates Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6 sm:gap-8">
        <div className="text-center flex flex-col gap-2 sm:gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-semibold">Flat Pricing</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Flat Airport Tariffs</h2>
          <p className="text-zinc-500 text-xs sm:text-sm max-w-lg mx-auto">
            Review our competitive flat rates for Bengaluru airport transits. No surge pricing, no hidden costs.
          </p>
        </div>

        <div className="glass-panel border border-zinc-900 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900/80 text-zinc-400 font-bold border-b border-zinc-800 text-[10px] sm:text-xs uppercase tracking-wider">
                  <th className="p-3.5 sm:p-5 font-bold">Vehicle Type</th>
                  <th className="p-3.5 sm:p-5 font-bold text-center">Passenger Capacity</th>
                  <th className="p-3.5 sm:p-5 font-bold text-right">One-Way Airport Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/60 text-xs sm:text-sm">
                {airportTariffs.map((t, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/20 text-zinc-300">
                    <td className="p-3.5 sm:p-5 font-semibold text-white">{t.carType}</td>
                    <td className="p-3.5 sm:p-5 text-center text-zinc-400">{t.passengers} Adults</td>
                    <td className="p-3.5 sm:p-5 text-right font-extrabold text-amber-400">{t.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety & Service commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center bg-zinc-900/20 border border-zinc-900 rounded-3xl p-5 sm:p-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Transit Reliability Commitments</h3>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              We understand that airport transits leave no room for delay. At Travels, we guarantee:
            </p>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-center gap-3">
                <Clock className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-amber-400 shrink-0" />
                <span>Driver details shared 2 hours before the trip</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-amber-400 shrink-0" />
                <span>GPS tracking on all airport cabs</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldAlert className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-amber-400 shrink-0" />
                <span>Emergency customer support hotlines</span>
              </li>
            </ul>
          </div>
          <div className="glass-panel border border-zinc-800 rounded-2xl p-5 sm:p-6 text-center flex flex-col gap-4 sm:gap-5 justify-center items-center h-full">
            <h4 className="text-base sm:text-lg font-bold text-white">Need an Instant Airport Ride?</h4>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Our taxi reservation desk is available 24/7. Click below to start a booking request directly on WhatsApp.
            </p>
            <Link 
              href="/"
              className="w-full py-2.5 sm:py-3 bg-gradient-gold text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]"
            >
              Book Airport Ride
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
