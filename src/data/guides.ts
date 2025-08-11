export type Guide = {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  minutes?: number;
  category?: string;
  city?: string;
  country?: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "istanbul-halal-weekend",
    title: "Istanbul halal-weekend: 48 uur highlights",
    summary: "Van Sultanahmet tot hippe koffiebars: zo plan je een zorgeloos halal-weekend.",
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=1200&auto=format&fit=crop",
    minutes: 6,
    category: "City",
    city: "Istanbul",
    country: "Türkiye",
  },
  {
    slug: "dubai-family-stays",
    title: "Dubai met kids: de beste familievriendelijke stays",
    summary: "Glijbanen, kinderclubs en alcoholvrije alternatieven—onze topkeuzes.",
    image: "https://images.unsplash.com/photo-1505892538035-9857e7e36718?q=80&w=1200&auto=format&fit=crop",
    minutes: 5,
    category: "Family",
    city: "Dubai",
    country: "UAE",
  },
  {
    slug: "umrah-first-timers",
    title: "Umrah voor beginners: praktische hotelkeuzes",
    summary: "Dichtbij Haram of juist rustiger? Wat je moet weten over kamers & faciliteiten.",
    image: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=80&w=1200&auto=format&fit=crop",
    minutes: 7,
    category: "Umrah",
    city: "Makkah",
    country: "Saudi Arabia",
  },
  {
    slug: "kuala-lumpur-eats",
    title: "Kuala Lumpur: halal food map",
    summary: "Van nasi lemak tot fine dining—adressen om te onthouden.",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1200&auto=format&fit=crop",
    minutes: 4,
    category: "Food",
    city: "Kuala Lumpur",
    country: "Malaysia",
  },
  {
    slug: "doha-beach-escape",
    title: "Doha beach escape: rustige luxe",
    summary: "Strand, spa en alcoholvrije opties: onze topresorts.",
    image: "https://images.unsplash.com/photo-1544551763-7ef4200d2a9d?q=80&w=1200&auto=format&fit=crop",
    minutes: 5,
    category: "Beach",
    city: "Doha",
    country: "Qatar",
  },
];
