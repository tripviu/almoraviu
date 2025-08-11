"use client";
import DestinationCard from "./DestinationCard";

const ITEMS = [
  {
    title: "Dubai",
    subtitle: "UAE",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    href: "/search?city=Dubai",
    badge: "Trending",
    staysCount: 218,
  },
  {
    title: "Istanbul",
    subtitle: "Türkiye",
    img: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1600&auto=format&fit=crop",
    href: "/search?city=Istanbul",
    badge: "Top pick",
    staysCount: 173,
  },
  {
    title: "Makkah",
    subtitle: "Saudi Arabia",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    href: "/search?city=Makkah",
    badge: "Spiritual",
    staysCount: 142,
  },
  {
    title: "Kuala Lumpur",
    subtitle: "Malaysia",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    href: "/search?city=Kuala%20Lumpur",
    staysCount: 124,
  },
  {
    title: "Marrakesh",
    subtitle: "Morocco",
    img: "https://images.unsplash.com/photo-1549641096-43c0415f9b89?q=80&w=1600&auto=format&fit=crop",
    href: "/search?city=Marrakesh",
    staysCount: 88,
  },
  {
    title: "Doha",
    subtitle: "Qatar",
    img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1600&auto=format&fit=crop",
    href: "/search?city=Doha",
    staysCount: 61,
  },
];

export default function PopularNow() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 popular-fade-in">
      <div className="flex items-end justify-between mb-5">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Popular right now</h2>
        <a href="/explore" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
          Explore all →
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it) => (
          <DestinationCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
