"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, Check, Sparkles, ShoppingBag, Eye, ExternalLink } from 'lucide-react';

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  currency?: string;
  badge?: string;
  format: string;
  gumroadUrl: string;
  previewUrl?: string;
  image: string;
  thumbnail?: string;
  features: string[];
}

interface ProductCardProps {
  product: ProductItem;
}

export default function GumroadProductCard({ product }: ProductCardProps) {
  const currencySymbol = product.currency || '$';

  return (
    <div className="glass-panel border border-zinc-800/80 hover:border-amber-400/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_10px_35px_rgba(251,191,36,0.15)] bg-zinc-900/40">
      <div>
        {/* Cover Image */}
        <div className="relative h-56 w-full overflow-hidden bg-zinc-950">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-black shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {product.badge}
            </span>
          )}

          {/* Format badge */}
          <span className="absolute bottom-3 right-3 px-3 py-1 rounded-lg text-[11px] font-medium bg-zinc-900/90 text-zinc-300 backdrop-blur-md border border-zinc-700/50 flex items-center gap-1.5 shadow-md">
            <Download className="w-3 h-3 text-amber-400" />
            {product.format}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-3.5">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
              {product.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              {product.subtitle}
            </p>
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-900">
            {product.features.map((feature, i) => (
              <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="p-6 pt-0">
        <div className="flex items-center justify-between pt-4 border-t border-zinc-900 mb-4">
          <div>
            <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-semibold">Price</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-white">{currencySymbol}{product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-zinc-500 line-through">{currencySymbol}{product.originalPrice}</span>
              )}
            </div>
          </div>
          <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            Instant Download
          </span>
        </div>

        {/* Action Buttons: Live Preview + Gumroad Buy */}
        <div className="grid grid-cols-2 gap-2.5">
          {product.previewUrl && (
            <Link
              href={product.previewUrl}
              className="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:text-amber-400 hover:border-amber-400 transition-all duration-200 flex items-center justify-center gap-1.5 text-center"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Preview</span>
            </Link>
          )}

          <a
            className="gumroad-button px-3.5 py-2.5 rounded-xl text-xs font-bold bg-amber-400 text-black hover:bg-amber-500 transition-all duration-200 shadow-[0_0_20px_rgba(251,191,36,0.25)] flex items-center justify-center gap-1.5 text-center"
            href={product.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Buy Guide</span>
          </a>
        </div>
      </div>
    </div>
  );
}
