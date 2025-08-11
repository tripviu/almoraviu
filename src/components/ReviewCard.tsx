"use client";
import Star from "@/components/icons/Star";

type Review = {
  id: string;
  name: string;
  country: string;
  avatar: string;
  rating: number;   // 1..5
  text: string;
  date: string;     // "2025-08-10"
  city?: string;
};

export default function ReviewCard({ r }: { r: Review }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < r.rating);
  return (
    <article className="w-[300px] sm:w-[360px] shrink-0 rounded-2xl border border-gray-200 bg-white/95 shadow-sm hover:shadow-md transition backdrop-blur">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <img
            src={r.avatar}
            alt={r.name}
            className="h-10 w-10 rounded-full object-cover border"
            onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = `https://i.pravatar.cc/100?u=${encodeURIComponent(r.name)}`; }}
          />
          <div>
            <div className="text-sm font-semibold text-gray-900">{r.name}</div>
            <div className="text-xs text-gray-500">{r.country}{r.city ? ` • ${r.city}` : ""}</div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1 text-amber-500">
          {stars.map((f, i) => (
            <Star key={i} filled={f} className="h-4 w-4" />
          ))}
          <span className="ml-1 text-xs text-gray-600">{r.rating.toFixed(1)}</span>
          <span className="ml-auto text-xs text-gray-500">{new Date(r.date).toLocaleDateString()}</span>
        </div>

        <p className="mt-3 text-[15px] leading-relaxed text-gray-800 line-clamp-5">{r.text}</p>
      </div>
    </article>
  );
}
