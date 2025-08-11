"use client";
import Star from "@/components/icons/Star";

type Review = {
  id: string;
  name: string;
  country: string;  // bv. "Netherlands"
  city?: string;    // bv. "Istanbul"
  avatar: string;
  rating: number;   // 1..5
  text: string;
  date: string;     // "2025-08-10"
  verified?: boolean;
};

function CountryPill({ country }: { country:string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[11px]">
      <span aria-hidden>🌍</span>
      {country}
    </span>
  );
}

export default function ReviewCard({ r }: { r: Review }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(r.rating));
  const when = new Date(r.date);
  const dateStr = isNaN(+when) ? r.date : when.toLocaleDateString();

  return (
    <article
      className="w-[300px] sm:w-[360px] shrink-0 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition transform hover:-translate-y-[2px]"
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img
            src={r.avatar}
            alt={r.name}
            className="h-10 w-10 rounded-full object-cover border"
            onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = `https://i.pravatar.cc/100?u=${encodeURIComponent(r.name)}`; }}
          />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="text-sm font-semibold text-gray-900 truncate">{r.name}</div>
              {r.verified && (
                <span className="px-1.5 py-0.5 rounded bg-emerald-600/10 text-emerald-700 text-[10px] font-semibold border border-emerald-600/20">
                  Verified stay
                </span>
              )}
            </div>
            <div className="mt-0.5 flex flex-wrap items-center gap-2">
              <CountryPill country={r.country} />
              {r.city && <span className="text-xs text-gray-500">• {r.city}</span>}
              <span className="text-xs text-gray-400 ml-auto">{dateStr}</span>
            </div>
          </div>
        </div>

        {/* Stars */}
        <div className="mt-3 flex items-center gap-1 text-amber-500">
          {stars.map((f, i) => (
            <Star key={i} filled={f} className="h-4 w-4" />
          ))}
          <span className="ml-1 text-xs text-gray-600">{r.rating.toFixed(1)}</span>
        </div>

        {/* Body */}
        <p className="mt-3 text-[15px] leading-relaxed text-gray-800 line-clamp-5">
          {r.text}
        </p>
      </div>
    </article>
  );
}
