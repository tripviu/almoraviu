import HotelCard from "@/components/HotelCard";
import { HOTELS, filterHotels } from "@/lib/data";
import Link from "next/link";

type SP = { [k: string]: string | string[] | undefined };

function s(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v || "";
}
function i(v: string | string[] | undefined, d = 0) {
  const raw = s(v);
  const n = parseInt(raw || "", 10);
  return Number.isFinite(n) ? n : d;
}
function hrefWithout(params: URLSearchParams, keys: string[]) {
  const p = new URLSearchParams(params);
  keys.forEach((k) => p.delete(k));
  const q = p.toString();
  return q ? `/search?${q}` : `/search`;
}
function currentParams(searchParams: SP) {
  const p = new URLSearchParams();
  for (const key of Object.keys(searchParams)) {
    const v = searchParams[key];
    if (typeof v === "string" && v) p.set(key, v);
    if (Array.isArray(v) && v.length > 0) p.set(key, v[0]);
  }
  return p;
}

export default async function SearchOriginal({ searchParams }: { searchParams: SP }) {
  const city = s(searchParams.city);
  const minStars = i(searchParams.minStars, 0);
  const maxPrice = i(searchParams.maxPrice, 0);
  const halalScore = i(searchParams.halalScore, 0);
  const sort = s(searchParams.sort) || "relevance";

  let items = filterHotels(HOTELS, { city, minStars, maxPrice, halalScore });

  // Sorting
  if (sort === "price-asc") items = [...items].sort((a,b)=>(a.priceFrom??0)-(b.priceFrom??0));
  if (sort === "price-desc") items = [...items].sort((a,b)=>(b.priceFrom??0)-(a.priceFrom??0));
  if (sort === "stars-desc") items = [...items].sort((a,b)=>(b.stars??0)-(a.stars??0));
  if (sort === "halal-desc") items = [...items].sort((a,b)=>(b.halalScore??0)-(a.halalScore??0));

  const baseParams = currentParams(searchParams);

  const chips:{label:string; removeKeys:string[]}[] = [];
  if (city) chips.push({ label:`📍 ${city}`, removeKeys:["city"] });
  if (minStars>0) chips.push({ label:`⭐ ≥ ${minStars}`, removeKeys:["minStars"] });
  if (maxPrice>0) chips.push({ label:`💶 ≤ €${maxPrice}`, removeKeys:["maxPrice"] });
  if (halalScore>0) chips.push({ label:`🌙 ≥ ${halalScore}/5`, removeKeys:["halalScore"] });

  const anyFilter = city || minStars>0 || maxPrice>0 || halalScore>0;

  return (
    <main className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold">
          Zoekresultaten voor “{city || "All destinations"}”
        </h1>
        <div className="mt-2 text-sm text-gray-600">{items.length} result{items.length===1?"":"s"}</div>

        {/* Klikbare chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip, idx)=> {
            const href = hrefWithout(baseParams, chip.removeKeys);
            return (
              <Link
                key={idx}
                href={href}
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white shadow-sm hover:bg-gray-50"
                aria-label={`Remove filter ${chip.label}`}
              >
                <span>{chip.label}</span>
                <span className="text-gray-400">✕</span>
              </Link>
            );
          })}
          {/* Sorteer-chip (niet verwijderbaar, wel informatief) */}
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white shadow-sm">
            {`Sort: ${{
              "relevance":"Relevance",
              "price-asc":"Price ↑",
              "price-desc":"Price ↓",
              "stars-desc":"Stars ↓",
              "halal-desc":"Halal ↓",
            }[sort]}`}
          </span>

          {/* Clear all */}
          {anyFilter && (
            <Link
              href="/search"
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white shadow-sm hover:bg-gray-50"
              aria-label="Clear all filters"
            >
              Clear all
            </Link>
          )}
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.length===0 && (
            <p className="text-gray-600">Geen resultaten. Probeer andere filters.</p>
          )}
          {items.map(h => <HotelCard key={h.id} hotel={h} />)}
        </div>
      </div>
    </main>
  );
}
