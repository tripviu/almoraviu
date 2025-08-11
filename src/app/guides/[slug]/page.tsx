import { GUIDES } from "@/data/guides";
import type { Guide } from "@/data/guides";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return GUIDES.map(g => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const g = GUIDES.find(x => x.slug === params.slug);
  return {
    title: g ? `${g.title} | Tripviu` : "Guide | Tripviu",
    description: g?.excerpt ?? "Halal-friendly travel guide",
  };
}

export default function GuideDetail({ params }: { params: { slug: string } }) {
  const g: Guide | undefined = GUIDES.find(x => x.slug === params.slug);
  if (!g) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{g.title}</h1>
      <p className="text-gray-600 mt-2">{g.excerpt}</p>

      <div className="mt-6 rounded-2xl overflow-hidden border">
        <img src={g.cover} alt={g.title} className="w-full h-auto object-cover" />
      </div>

      <article className="prose prose-gray mt-6">
        <p><strong>Category:</strong> {g.category}{g.city ? ` • ${g.city}` : ""} • {g.minutes} min read</p>
        <p>Coming soon: full editorial content, maps and halal-friendly tips per neighborhood.</p>
      </article>
    </main>
  );
}
