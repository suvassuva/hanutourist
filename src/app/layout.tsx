import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "Travels | Premium Taxi & Travel Partner in Bengaluru",
  description: "Book comfortable outstation trips, reliable 24/7 airport pickups & drops, and local taxi rentals in Bengaluru with Travels. Premium fleet of Swift Dzire, Innova, Tempo Traveller, and Fortuner.",
  keywords: "taxi service bengaluru, airport drop bangalore, outstation cab bangalore, rent innova bangalore, travels, taxi booking kr puram",
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <Header />
        <main className="flex-grow pt-20 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomNav />
        <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}


