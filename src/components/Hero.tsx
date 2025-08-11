"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Slide = { src:string; city:string; tagline:string; credit:string };

const SLIDES: Slide[] = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop",
    city: "Dubai",
    tagline: "Halal luxury by the sea",
    credit: "Unsplash",
  },
  {
    src: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1920&auto=format&fit=crop",
    city: "Istanbul",
    tagline: "Heritage, cuisine, serenity",
    credit: "Unsplash",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop",
    city: "Makkah",
    tagline: "A journey with purpose",
    credit: "Unsplash",
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop",
    city: "Kuala Lumpur",
    tagline: "Skyline & soulful stays",
    credit: "Unsplash",
  },
];

export default function Hero() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);

  // form state
  const [city, setCity] = useState("");
  const [minStars, setMinStars] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [halalScore, setHalalScore] = useState(0);

  // slideshow auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((v) => (v + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const active = useMemo(() => SLIDES[idx], [idx]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const p = new URLSearchParams();
    if (city.trim()) p.set("city", city.trim());
    if (minStars > 0) p.set("minStars", String(minStars));
    if (maxPrice > 0) p.set("maxPrice", String(maxPrice));
    if (halalScore > 0) p.set("halalScore", String(halalScore));
    router.push(`/search?${p.toString()}`);
  }

  return (
    <section className="relative h-[70vh] min-h-[540px] w-full overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 will-change-transform hero-slide ${
              i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url(${s.src})`,
            }}
            aria-hidden={i !== idx}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.35),rgba(0,0,0,0.65))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        {/* Halal USP badge */}
        <div className="absolute top-6 right-4 md:right-8">
          <div className="bg-emerald-500/90 backdrop-blur text-white text-xs md:text-sm font-medium px-3 py-1.5 rounded-full shadow">
            🌙 100% halal-friendly stays
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm animate-fade-up">
          Tripviu
        </h1>
        <p className="mt-3 text-base md:text-lg text-white/90 animate-fade-up [animation-delay:120ms]">
          Halal-friendly stays. For everyone.
        </p>

        {/* rotating city/tagline */}
        <p className="mt-1 text-sm text-white/70 animate-fade-up [animation-delay:200ms]">
          {active.city} • {active.tagline}
        </p>

        {/* Search card */}
        <form
          onSubmit={onSubmit}
          className="mt-8 w-full max-w-4xl bg-white/95 text-left rounded-2xl shadow-xl backdrop-blur animate-fade-up [animation-delay:260ms]"
          aria-label="Search stays"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {/* Destination */}
            <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 p-4 rounded-t-2xl md:rounded-tl-2xl md:rounded-tr-none">
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                📍 Destination
              </label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City or destination (e.g., Dubai)"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Destination"
              />
            </div>

            {/* Min stars */}
            <div className="border-b md:border-b-0 md:border-r border-gray-200 p-4">
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                ⭐ Min stars
              </label>
              <input
                type="number"
                min={0}
                max={5}
                value={minStars}
                onChange={(e) => setMinStars(parseInt(e.target.value || "0", 10))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Minimum stars"
              />
            </div>

            {/* Max price */}
            <div className="border-b md:border-b-0 md:border-r border-gray-200 p-4">
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                💶 Max price
              </label>
              <input
                type="number"
                min={0}
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value || "0", 10))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Maximum price"
              />
            </div>

            {/* Halal score */}
            <div className="border-b md:border-b-0 md:border-r border-gray-200 p-4">
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                🌙 Halal score
              </label>
              <select
                value={halalScore}
                onChange={(e) => setHalalScore(parseInt(e.target.value || "0", 10))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                aria-label="Minimum halal score"
              >
                <option value={0}>Any</option>
                <option value={1}>≥ 1/5</option>
                <option value={2}>≥ 2/5</option>
                <option value={3}>≥ 3/5</option>
                <option value={4}>≥ 4/5</option>
                <option value={5}>= 5/5</option>
              </select>
            </div>

            {/* CTA */}
            <div className="p-4 flex items-end">
              <button
                type="submit"
                className="w-full h-[42px] md:h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition"
                aria-label="Search"
              >
                Find stays
              </button>
            </div>
          </div>
        </form>

        {/* slide dots */}
        <div className="mt-6 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === idx ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
