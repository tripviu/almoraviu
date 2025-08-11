"use client";
import { useState } from "react";

export default function Hero() {
  const [city, setCity] = useState("");

  return (
    <section className="relative">
      {/* Achtergrondbeeld met overlay */}
      <div className="relative h-[48vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1800&auto=format&fit=crop"
          alt="Skyline and seafront"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,white/0,white/0,white/0,black/10)]" />
      </div>

      {/* Content bovenop */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="-mt-28 md:-mt-32 relative">
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              Halal-friendly stays. For everyone.
            </h1>
            <p className="mt-2 md:mt-3 text-white/90 max-w-2xl">
              Discover hotels with verified halal options, alcohol-free choices and prayer-friendly facilities—without excluding anyone.
            </p>
          </div>

          {/* Quick search bar */}
          <form
            action="/search"
            className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-3 bg-white/95 backdrop-blur rounded-2xl border shadow-sm p-3 md:p-4"
            aria-label="Quick search"
          >
            <div className="md:col-span-6">
              <label className="block text-xs font-medium text-gray-600 mb-1">📍 Destination</label>
              <input
                name="city"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                placeholder="Where do you want to wake up?"
                className="w-full border rounded-md px-3 py-2"
                aria-label="Destination"
              />
            </div>

            <div className="md:col-span-3">
              <label className="block text-xs font-medium text-gray-600 mb-1">⭐ Min stars</label>
              <select name="minStars" defaultValue="0" className="w-full border rounded-md px-3 py-2" aria-label="Minimum stars">
                <option value="0">Any</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5 only</option>
              </select>
            </div>

            <div className="md:col-span-3 flex items-end">
              <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white rounded-md px-4 py-2 font-semibold">
                Search
              </button>
            </div>

            {/* Hints onder de balk */}
            <div className="md:col-span-12 text-[12px] text-gray-500 mt-1">
              Tip: refine later by price, halal score and sort in the results page.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
