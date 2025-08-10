import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Stars from "@/components/Stars";
import Badge from "@/components/Badge";
import { HOTELS } from "@/lib/data";
import { notFound } from "next/navigation";
import ClientHotelDetail from "./ClientHotelDetail";

export default function HotelDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const h = HOTELS.find((x) => x.id === id);
  if (!h) return notFound();

  const images = h.images && h.images.length > 0 ? h.images : ["https://source.unsplash.com/1200x800/?hotel,resort"];

  return (
    <>
      <Navbar />
      <main className="py-8">
        <Container>
          {/* Gallery */}
          <div className="grid gap-3 md:grid-cols-3 rounded-2xl overflow-hidden">
            <div className="md:col-span-2 h-64 md:h-96 bg-center bg-cover" style={{ backgroundImage: `url(${images[0]})` }} />
            <div className="grid gap-3">
              <div className="h-46 md:h-46 bg-center bg-cover" style={{ backgroundImage: `url(${images[1] || images[0]})` }} />
              <div className="h-46 md:h-46 bg-center bg-cover" style={{ backgroundImage: `url(${images[2] || images[0]})` }} />
            </div>
          </div>

          {/* Info card */}
          <div className="mt-6 tv-card">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">{h.name}</h1>
                <Stars value={h.stars ?? 0} />
              </div>
              <p className="mt-1" style={{color:'var(--tv-muted)'}}>{h.city}, {h.country}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Halal score: <strong>{h.halalScore}/5</strong></Badge>
                {h.amenities?.halalFood && <span className="tv-chip">Halal food</span>}
                {h.amenities?.noAlcohol && <span className="tv-chip">No alcohol</span>}
                {h.amenities?.prayerRoom && <span className="tv-chip">Prayer room</span>}
                {h.amenities?.mosqueNearby && <span className="tv-chip">Mosque nearby</span>}
                {h.amenities?.genderedPool && <span className="tv-chip">Gendered pool</span>}
                {h.amenities?.privateBeachZones && <span className="tv-chip">Private beach zones</span>}
              </div>

              {/* Why halal-friendly */}
              {h.evidence && h.evidence.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold">Why halal-friendly</h2>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    {h.evidence.map((e, i) => (
                      <li key={i}>
                        <a className="underline" href={e.url} target="_blank" rel="noopener noreferrer">{e.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-5 flex items-center justify-between">
                <div className="text-lg">From <span style={{color:'var(--tv-gold)'}} className="font-semibold">€{h.priceFrom ?? "-"}</span></div>
                <ClientHotelDetail hotelId={h.id} />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
