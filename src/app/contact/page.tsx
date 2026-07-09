"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import type { ContactFormData } from '@/types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    tripType: 'Outstation Trip',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in the required fields (Name, Phone, Message).");
      return;
    }

    setLoading(true);

    // Format WhatsApp message
    const messageLines = [
      `*✉️ Hanu Tourist — Website Enquiry*`,
      `-----------------------------------------`,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email || 'Not provided'}`,
      `*Trip Type:* ${formData.tripType}`,
      `*Message:* ${formData.message}`,
      `-----------------------------------------`
    ];

    const messageText = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${messageText}`;

    // Open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setLoading(false);
    }, 600);
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-16 py-8 sm:py-12 lg:py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col gap-2 sm:gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Contact <span className="text-gradient-gold">Hanu Tourist</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Have questions about fares, routes, or corporate bookings? Reach out to our 24/7 dispatcher team today.
          </p>
        </div>
      </section>

      {/* Main Grid: Form and Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
        
        {/* Form: Column Span 7 */}
        <div className="lg:col-span-7 w-full glass-panel rounded-3xl p-4 sm:p-8 border border-zinc-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold"></div>
          
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
            <MessageSquare className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-amber-400" />
            <span>Send Direct Message</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1 sm:space-y-1.5">
                <label htmlFor="name" className="block text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Anand Gowda"
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-zinc-950/60 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-xs sm:text-sm"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1 sm:space-y-1.5">
                <label htmlFor="phone" className="block text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98806 01090"
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-zinc-950/60 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-1 sm:space-y-1.5">
                <label htmlFor="email" className="block text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. anand@gmail.com"
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-zinc-950/60 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-xs sm:text-sm"
                />
              </div>

              {/* Subject/Trip Type */}
              <div className="space-y-1 sm:space-y-1.5">
                <label htmlFor="tripType" className="block text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Purpose of Query
                </label>
                <select
                  id="tripType"
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-zinc-950/60 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-xs sm:text-sm appearance-none cursor-pointer"
                >
                  <option value="Outstation Trip" className="bg-zinc-950">Outstation Trip Query</option>
                  <option value="Airport Pickup/Drop" className="bg-zinc-950">Airport Pickup/Drop</option>
                  <option value="Local Taxi Package" className="bg-zinc-950">Local Taxi Package</option>
                  <option value="Wedding / Event Rental" className="bg-zinc-950">Wedding / Event Rental</option>
                  <option value="Corporate / Monthly Contract" className="bg-zinc-950">Corporate / Monthly Lease</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1 sm:space-y-1.5">
              <label htmlFor="message" className="block text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Details of your trip schedule, preferred vehicle, passenger count..."
                className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-zinc-950/60 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-xs sm:text-sm resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-gold text-black font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>Send Message via WhatsApp</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Details: Column Span 5 */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Card 1: Details */}
          <div className="glass-panel border border-zinc-900 rounded-3xl p-5 sm:p-6 flex flex-col gap-4 sm:gap-6">
            <h3 className="text-base sm:text-lg font-bold text-white">Office Location</h3>
            <ul className="flex flex-col gap-4 sm:gap-5 text-xs sm:text-sm text-zinc-400">
              <li className="flex gap-3 sm:gap-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider font-semibold">Address</span>
                  <span className="mt-1 leading-relaxed text-xs sm:text-sm">{COMPANY.address.full}</span>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider font-semibold">Contact Numbers</span>
                  <div className="flex flex-col mt-1 font-semibold text-white text-xs sm:text-sm">
                    {COMPANY.phone.map(p => (
                      <a key={p} href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-amber-400 transition-colors">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider font-semibold">Email</span>
                  <a href={`mailto:${COMPANY.email}`} className="mt-1 font-semibold text-white hover:text-amber-400 transition-colors break-all text-xs sm:text-sm">
                    {COMPANY.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider font-semibold">Availability</span>
                  <span className="mt-1 font-semibold text-white text-xs sm:text-sm">{COMPANY.workingHours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </section>

      {/* Map Embed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-4 sm:gap-6">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-1.5 sm:gap-2">
          <MapPin className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-amber-400" />
          <span>Locate Our Office</span>
        </h2>
        <div className="glass-panel border border-zinc-900 rounded-3xl overflow-hidden h-[250px] sm:h-[400px] w-full relative">
          <iframe
            src={COMPANY.mapEmbed}
            className="w-full h-full border-none"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hanu Tourist Office Location Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
