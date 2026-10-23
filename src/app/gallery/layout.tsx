import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Service Gallery & Customer Logs | Travels Bengaluru",
  description: "Browse pictures of our clean fleet, customer holiday tours, temple visits, and decorated wedding cars in action across South India.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
