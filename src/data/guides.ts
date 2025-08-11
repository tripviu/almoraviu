export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  category: "City" | "Food" | "Family" | "Umrah" | "Beach";
  city?: string;
  cover: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "istanbul-halal-weekend",
    title: "Istanbul in 48 uur: halal-friendly highlights",
    excerpt: "Van Sultanahmet tot hippe koffiebarretjes: zo plan je een zorgeloos halal-weekend.",
    minutes: 6,
    category: "City",
    city: "Istanbul",
    cover: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop"
  },
  {
    slug: "dubai-family-stays",
    title: "Dubai met kids: beste familievriendelijke stays",
    excerpt: "Glijbanen, kinderclubs en alcoholvrije alternatieven—onze topkeuzes.",
    minutes: 5,
    category: "Family",
    city: "Dubai",
    cover: "https://images.unsplash.com/photo-1501117716987-c8e2a4d8d72f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    slug: "umrah-first-timers",
    title: "Umrah voor beginners: praktische hotelkeuzes",
    excerpt: "Dichtbij Haram of iets rustiger? Wat je moet weten over kamers & faciliteiten.",
    minutes: 7,
    category: "Umrah",
    city: "Makkah",
    cover: "https://images.unsplash.com/photo-1558980664-10eaaffc86de?q=80&w=1600&auto=format&fit=crop"
  },
  {
    slug: "kuala-lumpur-eats",
    title: "Kuala Lumpur: halal food map",
    excerpt: "Van nasi lemak tot fine dining—adressen om te onthouden.",
    minutes: 4,
    category: "Food",
    city: "Kuala Lumpur",
    cover: "https://images.unsplash.com/photo-1518544887871-80f7fb19c47a?q=80&w=1600&auto=format&fit=crop"
  },
  {
    slug: "doha-beach-escape",
    title: "Doha beach escape: rustige luxe",
    excerpt: "Strand, spa en alcoholvrije opties: onze topresorts.",
    minutes: 5,
    category: "Beach",
    city: "Doha",
    cover: "https://images.unsplash.com/photo-1586075041138-934d2c4383d0?q=80&w=1600&auto=format&fit=crop"
  }
];
