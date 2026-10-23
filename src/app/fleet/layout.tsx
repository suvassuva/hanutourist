import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Car Fleet Selection | Travels Bengaluru",
  description: "Browse our premium vehicle fleet: Swift Dzire, Toyota Etios, Innova Crysta, Innova Hycross, Fortuner, and 12-seater Tempo Travellers for hire in Bengaluru.",
};

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
