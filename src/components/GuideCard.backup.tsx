"use client";
import type { Guide } from "@/data/guides";

export default function GuideCard({ g }: { g: Guide }) {
  return (
    <a href={`/guides/${g.slug}`} className="group block rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={g.cover}
          alt={g.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = `https://source.unsplash.com/1200x750/?${encodeURIComponent(g.city||"travel")}`; }}
        />
        <span className="absolute left-3 top-3 text-[11px] font-semibold bg-white/90 backdrop-blur px-2 py-1 rounded-full border">
          {g.category}
        </span>
        <span className="absolute right-3 bottom-3 text-[11px] font-semibold bg-black/80 text-white px-2 py-1 rounded-full">
          {g.minutes} min read
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-[15px] md:text-base font-semibold text-gray-900 line-clamp-2">{g.title}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{g.excerpt}</p>
      </div>
    </a>
  );
}
