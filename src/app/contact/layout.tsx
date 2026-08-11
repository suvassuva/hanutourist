import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Hanu Tourist taxi booking Bengaluru",
  description: "Get in touch with Hanu Tourist in K.R. Puram, Bengaluru. Call +91 98806 01090 or send a WhatsApp message to book your cab instantly 24/7.",
  alternates: {
    canonical: "https://hanutourist.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
