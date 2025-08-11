"use client";

import type { Guide } from "@/data/guides";

export default function GuideCard({ g }: { g: Guide }) {
  const img = g.image || "https://source.unsplash.com/800x600/?travel,city";
  return (
    <a
      href={`/guides/${g.slug}`}
      className="group block rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all"
    >
      <div className="relative aspect-[16/11] bg-gray-100">
        <img
          src={img}
          alt={g.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://source.unsplash.com/800x600/?travel";
          }}
        />
        {g.category && (
          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-gray-800 shadow-sm border border-gray-200">
              {g.category}
            </span>
          </div>
        )}
        {g.minutes ? (
          <div className="absolute right-3 bottom-3">
            <span className="inline-flex items-center rounded-full bg-black/70 px-2.5 py-1 text-xs text-white">
              {g.minutes} min read
            </span>
          </div>
        ) : null}
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
          {g.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
          {g.summary}
        </p>
        <div className="mt-3 text-sm font-medium text-emerald-700 group-hover:text-emerald-800">
          Read more →
        </div>
      </div>
    </a>
  );
}
