"use client";
import useCountdown from "@/hooks/useCountdown";
import { formatEUR } from "@/lib/currency";

type Offer = {
  id: string;
  title: string;
  city: string;
  img: string;
  price: number;      // nieuwe prijs
  oldPrice?: number;  // oude prijs voor strike
  endsAt: string;     // ISO
  href: string;
};

export default function OfferCard({ offer }: { offer: Offer }) {
  const { d, h, m, s, done } = useCountdown(offer.endsAt);
  const discount = offer.oldPrice && offer.oldPrice > offer.price
    ? Math.round((1 - offer.price / offer.oldPrice) * 100)
    : 0;

  return (
    <a href={offer.href} className="group block w-[280px] sm:w-[320px] shrink-0 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={offer.img}
          alt={offer.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = `https://source.unsplash.com/800x500/?hotel,${encodeURIComponent(offer.city)}`; }}
        />
        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-emerald-600 text-white text-xs font-semibold px-2 py-1 shadow-sm">
            -{discount}%
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="text-[15px] font-semibold text-gray-900">{offer.title}</div>
        <div className="text-sm text-gray-500">{offer.city}</div>

        <div className="mt-2 flex items-baseline gap-2">
          <div className="text-lg font-bold text-gray-900">{formatEUR(offer.price)}</div>
          {offer.oldPrice && offer.oldPrice > offer.price && (
            <div className="text-sm text-gray-500 line-through">{formatEUR(offer.oldPrice)}</div>
          )}
          <div className="text-[12px] text-gray-500">/ night</div>
        </div>

        <div className="mt-3 text-[12px] font-medium">
          {done ? (
            <span className="text-gray-400">Deal ended</span>
          ) : (
            <span className="text-emerald-700">
              Ends in {d}d {h}h {m}m {s}s
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
