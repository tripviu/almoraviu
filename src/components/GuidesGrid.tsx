"use client";
import { useMemo, useState } from "react";
import { GUIDES, type Guide } from "@/data/guides";
import GuideCard from "./GuideCard";

const CATS: Array<Guide["category"]| "All"> = ["All","City","Food","Family","Umrah","Beach"];

export default function GuidesGrid() {
  const [cat, setCat] = useState<Guide["category"] | "All">("All");

  const list = useMemo(() => {
    return cat === "All" ? GUIDES : GUIDES.filter(g => g.category === cat);
  }, [cat]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Guides & inspiration</h2>
          <p className="text-sm text-gray-500 mt-1">Short, practical reads tailored to halal-friendly travel.</p>
        </div>
        <a href="/guides" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">View all →</a>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {CATS.map(c => (
          <button
            key={c}
            onClick={()=>setCat(c==="All" ? "All" : c)}
            className={[
              "px-3 py-1.5 rounded-full text-sm border",
              cat===c ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-gray-700 hover:bg-gray-50"
            ].join(" ")}
            aria-pressed={cat===c}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(g => <GuideCard key={g.slug} g={g} />)}
      </div>
    </section>
  );
}
