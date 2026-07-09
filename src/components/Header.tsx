"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Car } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/constants';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to apply glassmorphism style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="p-1.5 sm:p-2 bg-gradient-gold rounded-lg sm:rounded-xl text-black group-hover:scale-105 transition-transform duration-300">
              <Car className="h-5 w-5 sm:h-6 w-6" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white block leading-none">
                HANU
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 block mt-0.5">
                TOURIST
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-amber-400 bg-amber-400/10'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Contact */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone[0].replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-zinc-300 hover:text-amber-400 transition-colors text-sm font-semibold"
            >
              <div className="p-2 rounded-lg bg-zinc-800 text-amber-400">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="text-xs text-zinc-500 block">Call 24/7</span>
                <span className="text-sm">{COMPANY.phone[0]}</span>
              </div>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-gold text-black hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300 hover:scale-[1.02]"
            >
              Book Cab
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

