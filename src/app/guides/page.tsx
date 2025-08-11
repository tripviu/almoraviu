import { GUIDES } from "@/data/guides";
import GuideCard from "@/components/GuideCard";

export const metadata = {
  title: "Guides & Inspiration | Tripviu",
  description: "Halal-friendly travel guides and short reads.",
};

export default function GuidesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Guides & inspiration</h1>
      <p className="text-gray-600 mt-1">Curated reads for halal-friendly travel—updated regularly.</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GUIDES.map(g => <GuideCard key={g.slug} g={g} />)}
      </div>
    </main>
  );
}
