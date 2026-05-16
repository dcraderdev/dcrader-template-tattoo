export interface Artist {
  name: string;
  handle: string;
  specialty: string;
  bio: string;
  yearsExp: number;
  image: string;
  styles: string[];
}

export interface GalleryItem {
  image: string;
  alt: string;
  artist: string;
  style: string;
  size?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface StudioData {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  mapUrl: string;
  hours: { day: string; open: string; close: string }[];
  depositAmount: number;
  minimumCharge: number;
  hourlyRate: number;
  artists: Artist[];
  gallery: GalleryItem[];
  faqs: FAQ[];
  instagram: string;
  igPosts: { image: string; alt: string; link: string }[];
  aftercare: { step: number; title: string; body: string }[];
  heroImage: string;
  heroAlt: string;
}
