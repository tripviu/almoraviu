"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeroSearchPro() {
  const router = useRouter();

  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const p = new URLSearchParams();
    if (city.trim()) p.set("city", city.trim());
    if (checkIn) p.set("checkIn", checkIn);
    if (checkOut) p.set("checkOut", checkOut);
    if (adults) p.set("adults", String(adults));
    if (children) p.set("children", String(children));
    if (rooms) p.set("rooms", String(rooms));
    router.push(`/search?${p.toString()}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full"
      aria-label="Find halal-friendly stays"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
        {/* Destination */}
        <div className="md:col-span-4">
          <label className="block text-xs font-medium text-gray-600 mb-1">Destination</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City or destination (e.g. Dubai)"
            aria-label="Destination"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Check-in */}
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-gray-600 mb-1">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            aria-label="Check-in date"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Check-out */}
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-gray-600 mb-1">Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            aria-label="Check-out date"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Adults */}
        <div className="md:col-span-1">
          <label className="block text-xs font-medium text-gray-600 mb-1">Adults</label>
          <input
            type="number"
            min={1}
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value || "0", 10))}
            aria-label="Number of adults"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-3 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Children */}
        <div className="md:col-span-1">
          <label className="block text-xs font-medium text-gray-600 mb-1">Children</label>
          <input
            type="number"
            min={0}
            value={children}
            onChange={(e) => setChildren(parseInt(e.target.value || "0", 10))}
            aria-label="Number of children"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-3 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Rooms */}
        <div className="md:col-span-1">
          <label className="block text-xs font-medium text-gray-600 mb-1">Rooms</label>
          <input
            type="number"
            min={1}
            value={rooms}
            onChange={(e) => setRooms(parseInt(e.target.value || "1", 10))}
            aria-label="Number of rooms"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-3 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Search button */}
        <div className="md:col-span-1 flex">
          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-black px-5 text-sm font-medium text-white shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            aria-label="Search stays"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
