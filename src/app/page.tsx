"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronDown, ChevronUp, Star, Phone, Shield, ThumbsUp, Compass, ArrowRight, CheckCircle2 
} from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import LucideIcon from '@/components/LucideIcon';
import Marquee from '@/components/Marquee';
import GoogleReviewButton from '@/components/GoogleReviewButton';
import { 
  SERVICES, FLEET, TESTIMONIALS, FAQS, STATS, BOOKING_STEPS, COMPANY, POPULAR_ROUTES 
} from '@/lib/constants';

export default function Home() {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Only show popular fleet or first 3
  const popularFleet = FLEET.filter(car => car.popular).slice(0, 3);
  const mainServices = SERVICES.slice(0, 3);

  return (
    <div className="flex flex-col gap-10 sm:gap-16 lg:gap-20 pb-10 sm:pb-16 lg:pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center bg-gradient-dark py-8 sm:py-16 lg:py-20 overflow-hidden">
        {/* Auto-playing Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-25 z-0"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 bg-amber-400/10 border border-amber-400/20 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-amber-400 uppercase">24/7 Cab Service in Bengaluru</span>
              </div>
              <GoogleReviewButton variant="compact" />
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Premium Taxi & <br />
              <span className="text-gradient-gold">Travel Services</span>
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience comfortable outstation trips, on-time airport transfers, and reliable local taxi rentals with Bengaluru's most trusted travel partner.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-1 sm:mt-2">
              <Link 
                href="/fleet" 
                className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold bg-zinc-900 border border-zinc-800 text-white hover:border-amber-400 hover:text-amber-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Fleet
              </Link>
              <a 
                href={`tel:${COMPANY.phone[0].replace(/\s+/g, '')}`} 
                className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold bg-amber-400 text-black hover:bg-amber-500 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(251,191,36,0.25)]"
              >
                <Phone className="h-3.5 w-3.5" />
                Call: {COMPANY.phone[0]}
              </a>
            </div>

            {/* Features badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-zinc-900 text-left">
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-xs sm:text-sm">Professional</span>
                <span className="text-[10px] text-zinc-500">Verified Drivers</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-xs sm:text-sm">No Surges</span>
                <span className="text-[10px] text-zinc-500">Fixed & Flat Rates</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-xs sm:text-sm">Sanitized</span>
                <span className="text-[10px] text-zinc-500">Clean Vehicles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Widget */}
          <div className="lg:col-span-6 w-full">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-zinc-900/40 border border-zinc-900 rounded-3xl p-4 sm:p-8 backdrop-blur-sm">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center flex flex-col gap-0.5 sm:gap-1">
              <span className="text-2xl sm:text-4xl font-extrabold text-amber-400">
                {stat.value.toLocaleString()}{stat.suffix}
              </span>
              <span className="text-[10px] sm:text-sm text-zinc-500 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6 sm:gap-10">
        <div className="text-center flex flex-col gap-2 sm:gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">What We Offer</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Our Premium Services</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-base">
            From short city hops to multi-day outstation packages, we provide tailored transport solutions in Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {mainServices.map((service) => (
            <div 
              key={service.id} 
              className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 flex flex-col justify-between group h-full"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-amber-400/10 text-amber-400 rounded-xl w-fit group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300">
                  <LucideIcon name={service.icon} className="h-5 w-5 sm:h-6 w-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-900/50">
                <Link 
                  href={service.href} 
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-amber-400 hover:text-white transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-1 sm:mt-2">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-amber-400 transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="bg-zinc-950 py-10 sm:py-16 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-8 sm:gap-12">
          <div className="text-center flex flex-col gap-2 sm:gap-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Seamless Booking</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">How To Book Your Cab</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-sm">
              We have simplified the ride booking process down to a few clicks. No accounts required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 relative">
            {BOOKING_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-2.5 sm:gap-4 relative">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 text-amber-400 font-extrabold text-base sm:text-lg flex items-center justify-center shrink-0">
                    {step.number}
                  </div>
                  <div className="h-px bg-zinc-800 flex-grow hidden lg:block"></div>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white">{step.title}</h3>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Service Reels (Promotional Videos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6 sm:gap-10">
        <div className="text-center flex flex-col gap-2 sm:gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-semibold">Hanu Tourist in Action</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Experience Our Rides</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Take a quick look at our daily operations, premium cars, and on-time transit services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: "Premium Fleet Showcase",
              desc: "Explore our collection of clean, well-maintained sedans, SUVs, and luxury coaches.",
              video: "/videos/fleet_showcase.mp4"
            },
            {
              title: "On-Time Airport Transit",
              desc: "Count on our 24/7 doorstep pickup and flight-tracked drop services at KIA Bengaluru.",
              video: "/videos/airport_transit.mp4"
            },
            {
              title: "Scenic Outstation Travel",
              desc: "Travel comfortably across South India with certified, long-route chauffeur experts.",
              video: "/videos/outstation_travel.mp4"
            },
            {
              title: "Trusted Passenger Safety",
              desc: "Experience sanitized cabins, GPS tracking, and friendly drivers for absolute peace of mind.",
              video: "/videos/trust_safety.mp4"
            }
          ].map((reel, idx) => (
            <div 
              key={idx} 
              className="glass-panel rounded-3xl overflow-hidden border border-zinc-900 group hover:border-zinc-800 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-44 sm:h-60 w-full bg-zinc-950 overflow-hidden">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                >
                  <source src={reel.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-1 bg-zinc-900/40 flex-grow">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {reel.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {reel.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Popular Fleet Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div className="flex flex-col gap-1.5 sm:gap-3 text-center sm:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Modern Vehicles</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Featured Fleet</h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto sm:mx-0">
              Choose from our wide selection of clean, spacious sedans, luxurious SUVs, and high-capacity Tempo Travellers.
            </p>
          </div>
          <Link 
            href="/fleet" 
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-zinc-800 hover:border-amber-400 text-zinc-300 hover:text-amber-400 text-xs sm:text-sm font-semibold transition-all duration-300 self-center sm:self-start shrink-0"
          >
            View Full Fleet
          </Link>
        </div>

        <Marquee duration={35}>
          {FLEET.map((car) => (
            <div 
              key={car.id} 
              className="glass-panel rounded-3xl overflow-hidden border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex flex-col h-full group w-72 sm:w-80"
            >
              {/* Image of the car */}
              <div className="relative h-40 sm:h-48 bg-gradient-to-tr from-zinc-950 to-zinc-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>

                {/* Popular badge */}
                {car.popular && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold bg-amber-400 text-black uppercase tracking-wider rounded z-10">
                    POPULAR CHOICE
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="p-5 sm:p-6 flex flex-col gap-4 sm:gap-5 flex-grow justify-between">
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">{car.name}</h3>
                  <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-zinc-500 font-medium">
                    <span>{car.passengers} Passengers</span>
                    <span>•</span>
                    <span>{car.luggage} Bags</span>
                    <span>•</span>
                    <span className="text-emerald-500 font-semibold">{car.fuelType}</span>
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-zinc-900 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-zinc-600 uppercase tracking-wider block font-semibold">Tariff Starts At</span>
                    <span className="text-base sm:text-lg font-extrabold text-amber-400">₹{car.pricePerKm} <span className="text-[10px] sm:text-xs font-normal text-zinc-500">/ km</span></span>
                  </div>
                  <Link 
                    href="/contact" 
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-zinc-900 border border-zinc-800 text-white rounded-xl text-[10px] sm:text-xs font-bold hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-colors duration-300"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* 6. Testimonials */}
      <section className="bg-zinc-900/20 py-10 sm:py-16 border-y border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-8 sm:gap-12">
          <div className="text-center flex flex-col gap-2 sm:gap-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Testimonials</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Client Feedback</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-sm">
              We take pride in our service. Hear from our happy customers who traveled with us.
            </p>
          </div>

          <Marquee duration={30}>
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-zinc-900 w-72 sm:w-80 h-56 sm:h-64 shrink-0"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm italic text-zinc-400 leading-relaxed font-medium line-clamp-3 sm:line-clamp-4">
                    "{testimonial.review}"
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-900/50">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-zinc-800 border border-zinc-800 text-white flex items-center justify-center font-bold text-xs">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{testimonial.name}</h4>
                    <span className="text-[10px] sm:text-xs text-zinc-600">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>

          {/* Google Business Review CTA Card */}
          <div className="mt-4">
            <GoogleReviewButton variant="card" />
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6 sm:gap-10">
        <div className="text-center flex flex-col gap-2 sm:gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">FAQ</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto">
            Find answers to commonly asked questions about booking, fleets, and pricing.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-3">
          {FAQS.slice(0, 5).map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index} 
                className="glass-panel border border-zinc-900 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-3.5 sm:px-6 sm:py-4.5 text-left flex items-center justify-between text-white hover:text-amber-400 font-semibold text-xs sm:text-base cursor-pointer focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-amber-400" />
                  ) : (
                    <ChevronDown className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-zinc-500" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-0.5 sm:px-6 sm:pb-5 sm:pt-1 text-zinc-500 text-xs sm:text-sm leading-relaxed border-t border-zinc-900/30 animate-in fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
