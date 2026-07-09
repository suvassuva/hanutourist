"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, Car, Receipt, Phone } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const tabs = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Services', href: '/services', icon: Layers },
    { label: 'Fleet', href: '/fleet', icon: Car },
    { label: 'Tariff', href: '/tariff', icon: Receipt },
    { label: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800/80 px-4 py-1.5 shadow-[0_-5px_25px_-5px_rgba(0,0,0,0.8)]">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center gap-0.5 py-0.5 px-2 relative group transition-colors duration-200 select-none flex-1"
            >
              {/* Active glow top bar */}
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-amber-400 rounded-full animate-in fade-in duration-300"></span>
              )}
              
              <Icon 
                className={`h-4.5 w-4.5 transition-transform duration-200 ${
                  isActive 
                    ? 'text-amber-400 scale-105' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`} 
              />
              
              <span 
                className={`text-[9px] font-semibold tracking-wide uppercase transition-colors duration-200 ${
                  isActive 
                    ? 'text-amber-400' 
                    : 'text-zinc-600'
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
