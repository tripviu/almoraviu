import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES } from "@/data/guides";
import ImageWithFallback from "@/components/ImageWithFallback";

type Guide = {
  slug: string;
  title: string;
  summary: string;
  category?: string;
  minutes?: number;
  image?: string;
  city?: string;
  country?: string;
};

export async function generateStaticParams() {
  return GUIDES.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const g = GUIDES.find(x => x.slug === params.slug);
  return {
    title: g ? `${g.title} | Guides | Almoraviu` : "Guide | Almoraviu",
    description: g?.summary || "Halal-friendly travel guide",
  };
}

export default function GuideDetail({ params }: { params: { slug: string } }) {
  const g = GUIDES.find(x => x.slug === params.slug) as Guide | undefined;
  if (!g) return notFound();

  const hero =
    g.image?.trim() ||
    `https://source.unsplash.com/1200x800/?${encodeURIComponent(g.city || g.title)},travel`;

  const metaParts = [
    g.category ? (g.category.charAt(0).toUpperCase() + g.category.slice(1)) : null,
    g.city || null,
    g.country || null,
    g.minutes ? `${g.minutes} min read` : null,
  ].filter(Boolean);

  const related = GUIDES.filter(x => x.slug !== g.slug && (g.category ? x.category === g.category : true)).slice(0,3);

  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-600">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/guides" className="hover:underline">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{g.title}</span>
      </nav>

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border shadow-sm">
          <ImageWithFallback
            src={hero}
            alt={g.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="flex flex-wrap gap-2 mb-3">
              {g.category && <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs">{g.category}</span>}
              {g.city && <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs">{g.city}</span>}
              {g.country && <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs">{g.country}</span>}
              {g.minutes && <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs">{g.minutes} min read</span>}
            </div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">{g.title}</h1>
            {metaParts.length > 0 && (
              <div className="mt-2 text-sm text-white/90">{metaParts.join(" · ")}</div>
            )}
          </div>
        </div>
      </header>

      {/* Content + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 mt-8 mb-16">
        <article className="md:col-span-8">
          <p className="text-lg text-gray-700">{g.summary}</p>

          <div className="mt-8 space-y-8 leading-7 text-gray-800">
            <div>
              <h2 className="text-xl font-semibold mb-2">Why this matters for halal-friendly travel</h2>
              <p>
                We highlight concrete, verifiable features: halal food options, privacy-friendly pools,
                alcohol-free zones, prayer spaces and nearby mosques. No vague claims — only what we can justify.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Top picks & areas</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Best neighborhoods to stay for {g.city || "your trip"}.</li>
                <li>Family-friendly areas and quiet options for privacy.</li>
                <li>Spots with reliable halal dining and quick access to prayer facilities.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Practical tips</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>How to filter hotels by halal features on Almoraviu.</li>
                <li>Timing & seasons to avoid crowds, keep costs low, and maintain comfort.</li>
                <li>Local etiquette and helpful phrases.</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href={g.city ? `/search?city=${encodeURIComponent(g.city)}` : "/search"}
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-md hover:opacity-90"
            >
              Find stays in {g.city || "destination"}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </article>

        <aside className="md:col-span-4">
          <h3 className="text-lg font-semibold mb-3">Related guides</h3>
          <div className="space-y-3">
            {related.map(r => (
              <Link
                key={r.slug}
                href={`/guides/${r.slug}`}
                className="block border rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
              >
                <div className="h-28 bg-gray-100 relative">
                  <ImageWithFallback
                    src={r.image?.trim() || `https://source.unsplash.com/600x400/?${encodeURIComponent(r.city || r.title)},travel`}
                    alt={r.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="text-sm text-gray-500">{r.category || "Guide"}</div>
                  <div className="font-medium">{r.title}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/guides" className="text-sm underline hover:opacity-80">All guides</Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
