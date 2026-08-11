// ============================================
// Hanu Tourist — Constants & Data
// ============================================

import type { NavLink, Service, Car, Route, Testimonial, TravelPackage, FAQ, Stat, Step, TariffRow } from '@/types';

// ── Company Info ────────────────────────────
export const COMPANY = {
  name: 'Hanu Tourist',
  tagline: 'Your Trusted Taxi & Travel Partner in Bengaluru',
  phone: ['+91 98806 01090', '+91 98456 47799'],
  email: 'hanutourist@gmail.com',
  address: {
    line1: 'Rajeshwari Nilay, 578/1, 1st Main',
    line2: '4th Cross, K.R. Puram',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560036',
    full: 'Rajeshwari Nilay, 578/1, 1st Main, 4th Cross, K.R. Puram, Bengaluru – 560036',
  },
  whatsapp: '919880601090',
  googleReviewUrl: 'https://www.google.com/search?q=Hanu+Tourist+K.R.+Puram+Bengaluru+reviews',
  googleRating: {
    score: 4.9,
    reviewsCount: '150+',
  },
  workingHours: '24/7 Available',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://www.instagram.com/hanutouristblr?igsh=MTlkOHNoNmE4dXUwOQ==',
    youtube: 'https://youtube.com',
    twitter: 'https://twitter.com',
    whatsapp: 'https://wa.me/919880601090',
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.7!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1',
} as const;

// ── Navigation ──────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Outstation', href: '/outstation' },
  { label: 'Airport Transfer', href: '/airport' },
  { label: 'Tariff', href: '/tariff' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

// ── Services ────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: 'airport-pickup',
    icon: 'PlaneLanding',
    title: 'Airport Pickup',
    description: 'Reliable and timely airport pickup service. Our drivers track your flight and wait for you at the arrival gate.',
    href: '/airport',
  },
  {
    id: 'airport-drop',
    icon: 'PlaneTakeoff',
    title: 'Airport Drop',
    description: 'Stress-free airport drop service with on-time guarantee. We ensure you never miss a flight.',
    href: '/airport',
  },
  {
    id: 'outstation',
    icon: 'MapPin',
    title: 'Outstation Trips',
    description: 'Comfortable outstation rides to popular destinations like Mysuru, Ooty, Coorg, and more.',
    href: '/outstation',
  },
  {
    id: 'local-taxi',
    icon: 'Car',
    title: 'Local Taxi',
    description: 'Hourly and full-day local taxi rentals within Bengaluru for meetings, shopping, or sightseeing.',
    href: '/services',
  },
  {
    id: 'corporate',
    icon: 'Briefcase',
    title: 'Corporate Travel',
    description: 'Dedicated corporate travel solutions with monthly billing, assigned drivers, and priority service.',
    href: '/services',
  },
  {
    id: 'wedding',
    icon: 'Heart',
    title: 'Wedding Cars',
    description: 'Premium decorated wedding cars to make your special day even more memorable.',
    href: '/services',
  },
  {
    id: 'temple-tours',
    icon: 'Landmark',
    title: 'Temple Tours',
    description: 'Curated temple tour packages covering Tirupati, Dharmasthala, Mantralayam, and more.',
    href: '/services',
  },
  {
    id: 'monthly-rental',
    icon: 'CalendarDays',
    title: 'Monthly Rental',
    description: 'Affordable monthly car rental plans for businesses and individuals with dedicated drivers.',
    href: '/services',
  },
];

// ── Fleet ───────────────────────────────────
export const FLEET: Car[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    image: '/images/cars/sedan.jpg',
    passengers: 4,
    luggage: 2,
    ac: true,
    fuelType: 'Petrol/Diesel',
    pricePerKm: 12,
    category: 'sedan',
    popular: true,
  },
  {
    id: 'toyota-etios',
    name: 'Toyota Etios',
    image: '/images/cars/etios.jpg',
    passengers: 4,
    luggage: 3,
    ac: true,
    fuelType: 'Diesel',
    pricePerKm: 13,
    category: 'sedan',
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    image: '/images/cars/innova.jpg',
    passengers: 7,
    luggage: 4,
    ac: true,
    fuelType: 'Diesel',
    pricePerKm: 18,
    category: 'suv',
    popular: true,
  },
  {
    id: 'innova-hycross',
    name: 'Innova Hycross',
    image: '/images/cars/hycross.jpg',
    passengers: 7,
    luggage: 4,
    ac: true,
    fuelType: 'Hybrid',
    pricePerKm: 20,
    category: 'suv',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    image: '/images/cars/tempo.jpg',
    passengers: 12,
    luggage: 8,
    ac: true,
    fuelType: 'Diesel',
    pricePerKm: 25,
    category: 'tempo',
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    image: '/images/cars/fortuner.jpg',
    passengers: 6,
    luggage: 3,
    ac: true,
    fuelType: 'Diesel',
    pricePerKm: 30,
    category: 'luxury',
    popular: true,
  },
];

// ── Popular Routes ──────────────────────────
export const POPULAR_ROUTES: Route[] = [
  {
    id: 'blr-mysuru',
    from: 'Bengaluru',
    to: 'Mysuru',
    distance: '150 km',
    duration: '3 hrs',
    startingPrice: 2499,
    image: '/images/routes/mysuru.jpg',
  },
  {
    id: 'blr-coorg',
    from: 'Bengaluru',
    to: 'Coorg',
    distance: '265 km',
    duration: '5 hrs',
    startingPrice: 3999,
    image: '/images/routes/coorg.jpg',
  },
  {
    id: 'blr-ooty',
    from: 'Bengaluru',
    to: 'Ooty',
    distance: '280 km',
    duration: '6 hrs',
    startingPrice: 4499,
    image: '/images/routes/ooty.jpg',
  },
  {
    id: 'blr-goa',
    from: 'Bengaluru',
    to: 'Goa',
    distance: '560 km',
    duration: '9 hrs',
    startingPrice: 7499,
    image: '/images/routes/goa.jpg',
  },
  {
    id: 'blr-chikmagalur',
    from: 'Bengaluru',
    to: 'Chikmagalur',
    distance: '250 km',
    duration: '4.5 hrs',
    startingPrice: 3799,
    image: '/images/routes/chikmagalur.jpg',
  },
  {
    id: 'blr-tirupati',
    from: 'Bengaluru',
    to: 'Tirupati',
    distance: '260 km',
    duration: '5 hrs',
    startingPrice: 3999,
    image: '/images/routes/tirupati.jpg',
  },
];

// ── Testimonials ────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    avatar: '/images/avatars/avatar1.jpg',
    rating: 5,
    review: 'Exceptional service! The driver was punctual, professional, and the car was spotlessly clean. Our family trip to Mysuru was made memorable by Hanu Tourist.',
    location: 'Bengaluru',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    avatar: '/images/avatars/avatar2.jpg',
    rating: 5,
    review: 'I use Hanu Tourist for all my airport transfers. They have never been late, and their pricing is very transparent. Highly recommended!',
    location: 'Whitefield',
  },
  {
    id: '3',
    name: 'Mohammed Asif',
    avatar: '/images/avatars/avatar3.jpg',
    rating: 5,
    review: 'Booked an Innova for our Coorg trip. The vehicle was well-maintained and the driver knew the best routes. Will definitely book again.',
    location: 'Electronic City',
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    avatar: '/images/avatars/avatar4.jpg',
    rating: 5,
    review: 'Our wedding car was absolutely stunning! The team went above and beyond to make our special day even more perfect. Thank you Hanu Tourist!',
    location: 'Jayanagar',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    avatar: '/images/avatars/avatar5.jpg',
    rating: 4,
    review: 'Great corporate cab service. Our company has been using Hanu Tourist for the past year and the service quality has been consistently excellent.',
    location: 'Koramangala',
  },
];

// ── Travel Packages ─────────────────────────
export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: 'weekend-getaway',
    title: 'Weekend Getaway',
    image: '/images/packages/weekend.jpg',
    duration: '2 Days / 1 Night',
    highlights: ['Coorg or Chikmagalur', 'Hotel + Cab', 'Sightseeing Included', 'Breakfast'],
    price: 5999,
    href: '/contact',
  },
  {
    id: 'temple-circuit',
    title: 'Temple Circuit',
    image: '/images/packages/temple.jpg',
    duration: '3 Days / 2 Nights',
    highlights: ['Tirupati & Mantralayam', 'Darshan Assistance', 'AC Vehicle', 'Meals'],
    price: 8499,
    href: '/contact',
  },
  {
    id: 'hill-station',
    title: 'Hill Station Escape',
    image: '/images/packages/hills.jpg',
    duration: '3 Days / 2 Nights',
    highlights: ['Ooty & Coonoor', 'Scenic Routes', 'Hotel Stay', 'Sightseeing'],
    price: 9999,
    href: '/contact',
  },
  {
    id: 'beach-paradise',
    title: 'Beach Paradise',
    image: '/images/packages/beach.jpg',
    duration: '4 Days / 3 Nights',
    highlights: ['Goa Beaches', 'North & South Goa', 'Hotel + Transfers', 'Water Sports'],
    price: 14999,
    href: '/contact',
  },
];

// ── Stats ───────────────────────────────────
export const STATS: Stat[] = [
  { label: 'Happy Customers', value: 15000, suffix: '+' },
  { label: 'Trips Completed', value: 50000, suffix: '+' },
  { label: 'Cities Covered', value: 100, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
];

// ── How It Works ────────────────────────────
export const BOOKING_STEPS: Step[] = [
  {
    number: 1,
    title: 'Choose Destination',
    description: 'Enter your pickup and drop-off location with travel date.',
    icon: 'MapPin',
  },
  {
    number: 2,
    title: 'Select Your Car',
    description: 'Browse our fleet and pick the perfect vehicle for your trip.',
    icon: 'Car',
  },
  {
    number: 3,
    title: 'Confirm Booking',
    description: 'Review your trip details and confirm with a simple click.',
    icon: 'CheckCircle',
  },
  {
    number: 4,
    title: 'Enjoy Your Trip',
    description: 'Sit back, relax, and enjoy a comfortable journey with us.',
    icon: 'Smile',
  },
];

// ── FAQs ────────────────────────────────────
export const FAQS: FAQ[] = [
  {
    question: 'How do I book a taxi with Hanu Tourist?',
    answer: 'You can book a taxi by calling us at +91 98806 01090, sending a WhatsApp message, or filling out the booking form on our website. We will confirm your booking within minutes.',
  },
  {
    question: 'What types of cars are available?',
    answer: 'We offer a wide range of vehicles including Swift Dzire, Toyota Etios, Innova Crysta, Innova Hycross, Tempo Traveller, and Toyota Fortuner. All cars are well-maintained and AC-equipped.',
  },
  {
    question: 'Do you provide airport pickup and drop services?',
    answer: 'Yes! We offer 24/7 airport pickup and drop services at Kempegowda International Airport (KIA). Our drivers track your flight status and wait for you at the arrival gate.',
  },
  {
    question: 'What are your outstation trip charges?',
    answer: 'Outstation charges start from ₹12/km for a sedan. The fare includes driver charges, fuel, and tolls. Visit our Tariff page for detailed pricing or call us for a custom quote.',
  },
  {
    question: 'Is it safe to travel with Hanu Tourist?',
    answer: 'Absolutely! All our drivers are verified, experienced professionals. Our vehicles are GPS-enabled, regularly serviced, and sanitized. Your safety is our top priority.',
  },
  {
    question: 'Do you offer corporate travel services?',
    answer: 'Yes, we provide dedicated corporate travel solutions including monthly packages, assigned drivers, priority booking, and monthly billing for companies in Bengaluru.',
  },
  {
    question: 'Can I cancel or modify my booking?',
    answer: 'Yes, you can cancel or modify your booking up to 4 hours before the trip by calling us or sending a WhatsApp message. Cancellation charges may apply for last-minute cancellations.',
  },
  {
    question: 'Do you provide wedding car services?',
    answer: 'Yes! We offer premium decorated wedding cars with flowers and ribbons. Book early to ensure availability for your special day.',
  },
];

// ── Tariff ──────────────────────────────────
export const TARIFF: TariffRow[] = [
  { carType: 'Swift Dzire', localRate: '₹1,800 / 8hrs-80km', outstationRate: '₹12 / km', airportRate: '₹999', passengers: 4 },
  { carType: 'Toyota Etios', localRate: '₹2,000 / 8hrs-80km', outstationRate: '₹13 / km', airportRate: '₹1,099', passengers: 4 },
  { carType: 'Innova Crysta', localRate: '₹3,200 / 8hrs-80km', outstationRate: '₹18 / km', airportRate: '₹1,599', passengers: 7 },
  { carType: 'Innova Hycross', localRate: '₹3,500 / 8hrs-80km', outstationRate: '₹20 / km', airportRate: '₹1,799', passengers: 7 },
  { carType: 'Tempo Traveller', localRate: '₹5,500 / 8hrs-80km', outstationRate: '₹25 / km', airportRate: '₹2,999', passengers: 12 },
  { carType: 'Toyota Fortuner', localRate: '₹6,000 / 8hrs-80km', outstationRate: '₹30 / km', airportRate: '₹3,499', passengers: 6 },
];
