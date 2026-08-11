import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Car Fleet Selection | Hanu Tourist Bengaluru",
  description: "Browse our premium vehicle fleet: Swift Dzire, Toyota Etios, Innova Crysta, Innova Hycross, Fortuner, and 12-seater Tempo Travellers for hire in Bengaluru.",
  alternates: {
    canonical: "https://hanutourist.in/fleet",
  },
};

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
