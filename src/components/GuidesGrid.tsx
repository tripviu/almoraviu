import GuideCard from "@/components/GuideCard";
import { GUIDES } from "@/data/guides";

export default function GuidesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Guides & inspiration
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Short, practical reads tailored to halal-friendly travel.
          </p>
        </div>
        <a
          href="/guides"
          className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
        >
          View all →
        </a>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((g) => (
          <GuideCard key={g.slug} g={g} />
        ))}
      </div>
    </section>
  );
}
