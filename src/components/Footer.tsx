import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Car } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-gold rounded-xl text-black">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-none">
                  HANU
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mt-0.5">
                  TOURIST
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500">
              {COMPANY.tagline}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="p-2 rounded-lg bg-zinc-900 text-amber-400">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs text-zinc-600 block">Available</span>
                <span className="text-sm font-semibold text-zinc-300">{COMPANY.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-zinc-500 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={service.href} 
                    className="text-sm text-zinc-500 hover:text-amber-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-zinc-500">
                  {COMPANY.address.full}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm">
                  {COMPANY.phone.map((phoneNum) => (
                    <a 
                      key={phoneNum}
                      href={`tel:${phoneNum.replace(/\s+/g, '')}`} 
                      className="hover:text-white transition-colors text-zinc-300 font-semibold"
                    >
                      {phoneNum}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${COMPANY.email}`} 
                  className="text-sm hover:text-white transition-colors text-zinc-300 font-semibold break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-zinc-950 border-t border-zinc-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Hanu Tourist. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Designed for premium comfort and reliable travels in Bengaluru.
          </p>
        </div>
      </div>
    </footer>
  );
}
