// ============================================
// Hanu Tourist — TypeScript Interfaces
// ============================================

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface Car {
  id: string;
  name: string;
  image: string;
  passengers: number;
  luggage: number;
  ac: boolean;
  fuelType: string;
  pricePerKm: number;
  category: 'sedan' | 'suv' | 'luxury' | 'mini' | 'tempo';
  popular?: boolean;
}

export interface Route {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  startingPrice: number;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  location: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  image: string;
  duration: string;
  highlights: string[];
  price: number;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'cars' | 'tours' | 'customers' | 'events';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  tripType: string;
  message: string;
}

export interface BookingFormData {
  pickup: string;
  drop: string;
  tripType: 'one-way' | 'round-trip' | 'local';
  travelDate: string;
  carType: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface TariffRow {
  carType: string;
  localRate: string;
  outstationRate: string;
  airportRate: string;
  passengers: number;
}
