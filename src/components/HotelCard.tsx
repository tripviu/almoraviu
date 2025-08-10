import Stars from "./Stars";
import Badge from "./Badge";

export default function HotelCard({hotel: h}:{hotel:any}){
  return (
    <a href={`/hotels/${h.id}`} className="tv-card tv-card-hover block overflow-hidden">
      {/* Header image */}
      <div className="h-44 bg-center bg-cover" style={{ backgroundImage: `url(${(h.images && h.images[0]) || "https://source.unsplash.com/960x640/?hotel,resort"})` }} />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">{h.name}</div>
            <div className="text-sm" style={{color:'var(--tv-muted)'}}>{h.city}, {h.country}</div>
          </div>
          <Stars value={h.stars ?? 0} />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Badge>Halal {h.halalScore}/5</Badge>
          {h.amenities?.halalFood && <span className="tv-chip">Halal food</span>}
          {h.amenities?.noAlcohol && <span className="tv-chip">No alcohol</span>}
          {h.amenities?.prayerRoom && <span className="tv-chip">Prayer room</span>}
          {h.amenities?.mosqueNearby && <span className="tv-chip">Mosque nearby</span>}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm" style={{color:'var(--tv-muted)'}}>From</div>
          <div className="text-xl font-semibold" style={{color:'var(--tv-gold)'}}>€{h.priceFrom ?? "-"}</div>
        </div>
      </div>
    </a>
  )
}
