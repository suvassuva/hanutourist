import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Travels taxi booking Bengaluru",
  description: "Get in touch with Travels in Bengaluru. Call +91 00000 00000 or send a WhatsApp message to book your cab instantly 24/7.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
