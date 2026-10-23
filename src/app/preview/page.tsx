"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, ShoppingBag, Sparkles, MapPin, Calendar, DollarSign, CheckSquare, 
  Download, Compass, Globe, Check, ShieldCheck, ExternalLink, Bookmark
} from 'lucide-react';
import { DIGITAL_PRODUCTS } from '@/lib/constants';

export default function PreviewPage() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'maps' | 'budget' | 'packing'>('itinerary');
  const [selectedRoute, setSelectedRoute] = useState<number>(0);
  
  // Interactive checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'doc-1': true,
    'doc-2': true,
    'tech-1': true,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const product = DIGITAL_PRODUCTS[0];

  const sampleRoutes = [
    {
      title: "Swiss Alps & Glacial Valleys (5 Days)",
      region: "Europe",
      days: [
        { day: "Day 1", title: "Zurich to Lucerne & Lake Cruise", desc: "Arrival, scenic golden pass train, Mount Pilatus cogwheel ascent, and lakefront sunset walk." },
        { day: "Day 2", title: "Interlaken & Lauterbrunnen Waterfalls", desc: "Valley of 72 waterfalls, Staubbach Falls viewpoint, and cliffside walk in Mürren." },
        { day: "Day 3", title: "Grindelwald First & Cliff Walk by Tissot", desc: "Suspension bridge thrill walk, Bachalpsee alpine lake hike, and traditional cheese fondue dinner." },
        { day: "Day 4", title: "Zermatt & Matterhorn Glacier Paradise", desc: "Gornergrat railway to 3,135m, reflecting Matterhorn photo spot at Riffelsee." },
        { day: "Day 5", title: "Geneva & Old Town Hidden Alleys", desc: "Scenic regional train transit, Jet d'Eau lakeside promenade, and local chocolate tasting tour." },
      ]
    },
    {
      title: "Japan Golden Route: Tokyo to Kyoto (7 Days)",
      region: "Asia",
      days: [
        { day: "Day 1-2", title: "Tokyo Neon & Heritage Fusion", desc: "Shinjuku rooftop views, Senso-ji early morning walk, Akihabara tech culture, and Shibuya Sky sunset." },
        { day: "Day 3", title: "Mount Fuji & Five Lakes Scenic Drive", desc: "Chureito Pagoda sunrise angle, Lake Kawaguchiko scenic cycling, and traditional Ryokan onsen." },
        { day: "Day 4-5", title: "Kyoto Bamboo Groves & Torii Gates", desc: "Arashiyama monkey park, Fushimi Inari 10,000 gates at dawn (crowd-free), and Gion evening walk." },
        { day: "Day 6-7", title: "Osaka Street Food & Dotonbori", desc: "Takoyaki & Wagyu tasting trail, Osaka Castle historical park, and Shinsekai retro district." },
      ]
    },
    {
      title: "Amalfi Coast & Tuscan Hills (6 Days)",
      region: "Mediterranean",
      days: [
        { day: "Day 1-2", title: "Positano & Ravello Cliffside Villas", desc: "Path of the Gods hike, sunset aperitivo in Positano, and Villa Cimbrone panoramic terrace in Ravello." },
        { day: "Day 3", title: "Capri Island Boat & Blue Grotto", desc: "Private gozzo boat charter around Faraglioni rocks, chairlift to Monte Solaro." },
        { day: "Day 4-6", title: "Florence & Val d'Orcia Wine Country", desc: "Duomo early climb, scenic cypress-lined roads of Tuscany, Pienza pecorino cheese tasting." },
      ]
    }
  ];

  const mapPins = [
    { category: "Hidden Viewpoint", name: "Oeschinensee Secret Panoramic Ridge", country: "Switzerland", note: "Skip the main crowded beach; hike 20 mins up the left trail for zero tourists and turquoise views." },
    { category: "Photography Spot", name: "Riffelsee Matterhorn Reflection Point", country: "Switzerland", note: "Arrive before 9:00 AM before the wind creates ripples on the water for a mirror reflection." },
    { category: "Secret Cafe", name: "Traditional Machiya Espresso House", country: "Kyoto, Japan", note: "Hidden down an alleyway in Higashiyama. Exceptional pour-over coffee in a 120-year-old courtyard." },
    { category: "Sunset Vista", name: "San Miniato al Monte Overlook", country: "Florence, Italy", note: "Better and far less crowded than Piazzale Michelangelo with live acoustic guitar in the evenings." },
    { category: "Road Trip Lookout", name: "Passo Giau 360° Dolomite Vista", country: "Italy", note: "Spectacular winding mountain pass with easy pull-off parking and alpine flower fields in summer." },
    { category: "Budget Dining", name: "Mercado de San Telmo Local Empanadas", country: "Buenos Aires, Argentina", note: "Authentic handmade chimichurri empanadas for less than $1.50 each." },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col py-8 sm:py-12">
      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-900">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Travels</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500 hidden sm:inline">Live Product Sample</span>
            <a
              className="gumroad-button inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 text-black hover:bg-amber-500 transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-105"
              href={product.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Get Full Guide (${product.price})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Preview Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/30 border border-zinc-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Interactive Live Preview</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ultimate World Travel Planner <br />
              <span className="text-gradient-gold">& Global Itinerary Guide</span>
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
              Browse an interactive sample of what is included in the full digital package: turn-by-turn country itineraries, 300+ saved Google Maps pins, budget templates, and travel checklists.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>300+ Saved Pins</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant Offline Access</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <Image
              src="/images/gumroad/cover.jpg"
              alt="Ultimate World Travel Planner Cover"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300 bg-zinc-950/80 p-3 rounded-xl backdrop-blur-md border border-zinc-800">
              <span className="font-semibold text-white">Full Digital Bundle (ZIP)</span>
              <span className="text-amber-400 font-bold">$9 USD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2 border-b border-zinc-900 pb-4">
          {[
            { id: 'itinerary', label: '1. Curated Itineraries', icon: Calendar },
            { id: 'maps', label: '2. Secret Maps Pinpack', icon: MapPin },
            { id: 'budget', label: '3. Budget Spreadsheet', icon: DollarSign },
            { id: 'packing', label: '4. Essential Checklist', icon: CheckSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                    : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Sample Itineraries */}
        {activeTab === 'itinerary' && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            {/* Route selector buttons */}
            <div className="flex flex-wrap gap-2">
              {sampleRoutes.map((route, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRoute(idx)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedRoute === idx
                      ? 'bg-zinc-800 text-amber-400 border border-amber-400/40'
                      : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:text-white'
                  }`}
                >
                  {route.title}
                </button>
              ))}
            </div>

            {/* Days list */}
            <div className="glass-panel border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 bg-zinc-900/30">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                    {sampleRoutes[selectedRoute].region} Route Preview
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    {sampleRoutes[selectedRoute].title}
                  </h3>
                </div>
                <span className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">
                  Sample Excerpt (1 of 50 Guides)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleRoutes[selectedRoute].days.map((dayItem, i) => (
                  <div key={i} className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 flex flex-col gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded w-fit">
                      {dayItem.day}
                    </span>
                    <h4 className="text-sm font-bold text-white">{dayItem.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{dayItem.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-400/10 border border-amber-400/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <p className="text-xs text-zinc-300">
                  <strong className="text-amber-400">Unlock all 50+ country itineraries</strong> with turn-by-turn road routes, daily driving times, and hotel recommendations in the full download.
                </p>
                <a
                  className="gumroad-button px-4 py-2 bg-amber-400 text-black font-bold text-xs rounded-xl hover:bg-amber-500 shrink-0"
                  href={product.gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Guide for $9
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Maps Pinpack */}
        {activeTab === 'maps' && (
          <div className="glass-panel border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 bg-zinc-900/30 animate-in fade-in duration-300">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                Curated Coordinates
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                300+ Secret Locations & Google Maps Drops
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Directly importable into Google Maps on iPhone & Android with 1 click. Here are 6 sample coordinates included in the pack:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mapPins.map((pin, i) => (
                <div key={i} className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between gap-3">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                        {pin.category}
                      </span>
                      <span className="text-[10px] text-zinc-500">{pin.country}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{pin.name}</h4>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{pin.note}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-semibold pt-2 border-t border-zinc-900">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Included in Map Pack</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Budget Spreadsheet */}
        {activeTab === 'budget' && (
          <div className="glass-panel border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 bg-zinc-900/30 animate-in fade-in duration-300">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                Spreadsheet Template Preview
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                Automated Travel Budget Calculator
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Pre-configured formulas for flight trackers, daily accommodation limits, currency conversions, and expense splitters.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-zinc-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-900 text-zinc-400 font-semibold uppercase text-[10px] tracking-wider border-b border-zinc-800">
                  <tr>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Item Description</th>
                    <th className="p-3.5">Estimated ($)</th>
                    <th className="p-3.5">Actual ($)</th>
                    <th className="p-3.5">Difference</th>
                    <th className="p-3.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900 bg-zinc-950/60 text-zinc-300">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Flights</td>
                    <td className="p-3.5">Roundtrip International Flights</td>
                    <td className="p-3.5 text-zinc-400">$850</td>
                    <td className="p-3.5 text-white font-semibold">$780</td>
                    <td className="p-3.5 text-emerald-400">+$70 Saved</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] rounded font-semibold">Booked</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Stays</td>
                    <td className="p-3.5">Boutique Airbnb & Scenic Lodges (7 nights)</td>
                    <td className="p-3.5 text-zinc-400">$600</td>
                    <td className="p-3.5 text-white font-semibold">$550</td>
                    <td className="p-3.5 text-emerald-400">+$50 Saved</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] rounded font-semibold">Booked</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Transit</td>
                    <td className="p-3.5">Swiss Travel Pass / Eurail Pass</td>
                    <td className="p-3.5 text-zinc-400">$180</td>
                    <td className="p-3.5 text-white font-semibold">$180</td>
                    <td className="p-3.5 text-zinc-500">$0</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 bg-amber-400/10 text-amber-400 text-[10px] rounded font-semibold">Planned</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Daily Food</td>
                    <td className="p-3.5">Bistros, Cafes & Street Food ($40/day)</td>
                    <td className="p-3.5 text-zinc-400">$280</td>
                    <td className="p-3.5 text-white font-semibold">$245</td>
                    <td className="p-3.5 text-emerald-400">+$35 Saved</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 text-[10px] rounded font-semibold">Estimated</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Packing Checklist */}
        {activeTab === 'packing' && (
          <div className="glass-panel border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 bg-zinc-900/30 animate-in fade-in duration-300">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                Interactive Checklist Preview
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                Universal Travel Packing Checklist
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Click items to test checking them off. The full Notion template syncs across all your devices:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'doc-1', label: 'Passport with 6+ months validity & backup photocopies' },
                { id: 'doc-2', label: 'International credit card with 0% foreign transaction fees' },
                { id: 'tech-1', label: 'Universal power plug adapter with dual USB-C PD charging' },
                { id: 'tech-2', label: 'Airline-approved 10,000mAh compact external battery bank' },
                { id: 'cloth-1', label: 'Lightweight packable waterproof rain jacket' },
                { id: 'cloth-2', label: 'Merino wool breathable walking socks (3 pairs)' },
                { id: 'med-1', label: 'Personal travel medical pouch + electrolyte hydration packs' },
                { id: 'app-1', label: 'Downloaded offline Google Maps & offline translation dictionaries' },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 select-none ${
                    checkedItems[item.id]
                      ? 'bg-amber-400/10 border-amber-400/40 text-white'
                      : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                    checkedItems[item.id]
                      ? 'bg-amber-400 border-amber-400 text-black'
                      : 'border-zinc-700 bg-zinc-900'
                  }`}>
                    {checkedItems[item.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className={`text-xs ${checkedItems[item.id] ? 'line-through text-zinc-400' : 'text-zinc-200'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Floating Bottom Purchase Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800 py-3.5 px-4 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-400/10 text-amber-400 rounded-xl hidden sm:block">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">Ultimate World Travel Planner Bundle</p>
              <p className="text-[10px] text-zinc-400">Instant PDF download + Notion Hub access + Google Maps pinpack</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-base sm:text-xl font-extrabold text-white">${product.price}</span>
            <a
              className="gumroad-button inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 text-black hover:bg-amber-500 transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-105"
              href={product.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Buy on Gumroad</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
