import { GUIDES } from "@/data/guides";
import GuideCard from "@/components/GuideCard";

export default function GuidesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">Guides</h1>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map(g => <GuideCard key={g.slug} g={g} />)}
      </div>
    </main>
  );
}
