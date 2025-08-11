import Stars from "./Stars";
import Badge from "./Badge";
import HeartButton from "./HeartButton";

type Hotel = {
  id: string;
  name: string;
  city: string;
  country: string;
  stars?: number;
  priceFrom?: number;
  halalScore?: number;
  images?: string[];
  partnerUrl?: string;
  features?: {
    halalFood?: boolean;
    noAlcohol?: boolean;
    prayerRoom?: boolean;
    mosqueNearby?: boolean;
    genderedPool?: boolean;
  };
  verified?: boolean;
};

function formatPrice(eur?: number) {
  if (!eur && eur !== 0) return "—";
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(eur);
}

export default function HotelCard({ hotel: h }: { hotel: Hotel }) {
  const img = (h.images && h.images[0]) || `https://source.unsplash.com/640x420/?hotel,resort,${encodeURIComponent(h.city||"")}`;
  const price = formatPrice(h.priceFrom);
  const location = [h.city, h.country].filter(Boolean).join(", ");

  return (
    <article className="card overflow-hidden relative">
      {/* Foto */}
      <div className="relative">
        <img
          src={img}
          alt={h.name}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {h.verified && <span className="text-xs px-2 py-1 rounded-full bg-emerald-600 text-white">Verified</span>}
          {h.halalScore ? <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">🌙 {h.halalScore}/5</span> : null}
        </div>
        <div className="absolute top-2 right-2">
          <HeartButton hotelId={h.id} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <a href={`/hotels/${h.id}`} className="text-lg font-semibold hover:underline">{h.name}</a>
            <div className="text-sm text-gray-500">{location}</div>
          </div>
          <Stars value={h.stars ?? 0} />
        </div>

        {/* Features badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {h.features?.halalFood && <Badge>Halal food</Badge>}
          {h.features?.noAlcohol && <Badge>No alcohol</Badge>}
          {h.features?.prayerRoom && <Badge>Prayer room</Badge>}
          {h.features?.mosqueNearby && <Badge>Mosque nearby</Badge>}
          {h.features?.genderedPool && <Badge>Women-only facilities</Badge>}
        </div>

        {/* Footer: prijs + CTA's */}
        <div className="mt-4 flex items-end justify-between">
          <div className="text-sm text-gray-600">
            From <span className="text-lg font-semibold text-gray-900">{price}</span> / night
          </div>
          <div className="flex gap-2">
            <a
              href={`/hotels/${h.id}`}
              className="btn btn-outline"
            >
              Details
            </a>
            {h.partnerUrl && (
              <a
                href={h.partnerUrl}
                rel="nofollow noopener"
                className="btn btn-primary"
              >
                Check availability
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
