"use client";

import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

interface GoogleReviewButtonProps {
  variant?: 'pill' | 'card' | 'footer' | 'compact';
  className?: string;
}

// Custom SVG Google "G" logo
export function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function GoogleReviewButton({ variant = 'pill', className = '' }: GoogleReviewButtonProps) {
  const reviewUrl = COMPANY.googleReviewUrl;

  if (variant === 'compact') {
    return (
      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-400 text-xs font-semibold text-zinc-300 hover:text-white transition-all duration-300 group ${className}`}
      >
        <GoogleIcon className="h-4 w-4" />
        <div className="flex items-center gap-1">
          <span className="text-amber-400 font-bold">{COMPANY.googleRating.score}</span>
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
          </div>
        </div>
        <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400">({COMPANY.googleRating.reviewsCount})</span>
      </a>
    );
  }

  if (variant === 'pill') {
    return (
      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400/60 text-xs font-bold text-white transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-amber-400/10 group ${className}`}
      >
        <GoogleIcon className="h-4.5 w-4.5 shrink-0" />
        <span>Review Us on Google</span>
        <div className="flex items-center gap-0.5 text-amber-400 ml-1">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs font-extrabold">{COMPANY.googleRating.score}</span>
        </div>
      </a>
    );
  }

  if (variant === 'footer') {
    return (
      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-400 text-xs font-semibold text-zinc-300 hover:text-white transition-colors duration-300 group ${className}`}
      >
        <GoogleIcon className="h-4.5 w-4.5 shrink-0" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Google Reviews</span>
          <span className="text-xs font-bold text-white group-hover:text-amber-400 flex items-center gap-1">
            Rate Us 5 Stars <ExternalLink className="h-3 w-3 text-zinc-500 group-hover:text-amber-400" />
          </span>
        </div>
      </a>
    );
  }

  // Default: 'card' variant
  return (
    <div className={`glass-panel border border-zinc-800/80 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 ${className}`}>
      {/* Subtle Google colored accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 via-amber-400 to-green-500"></div>

      <div className="flex items-center gap-4 sm:gap-6 text-center sm:text-left">
        <div className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl shrink-0 shadow-inner">
          <GoogleIcon className="h-8 w-8 sm:h-10 sm:w-10" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-white">{COMPANY.googleRating.score}</span>
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-zinc-400 font-medium">({COMPANY.googleRating.reviewsCount} Reviews)</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white">Traveled with Hanu Tourist?</h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Your feedback helps us serve you better and helps fellow travelers find safe, reliable cab services in Bengaluru.
          </p>
        </div>
      </div>

      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-gold text-black font-extrabold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:scale-105 flex items-center justify-center gap-2.5 shrink-0"
      >
        <GoogleIcon className="h-4.5 w-4.5" />
        <span>Write a Google Review</span>
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
