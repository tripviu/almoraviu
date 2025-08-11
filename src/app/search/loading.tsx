import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <main className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-7 bg-gray-200 rounded w-64" />
        <div className="mt-2 h-4 bg-gray-200 rounded w-40" />

        <div className="mt-4 flex flex-wrap gap-2">
          <div className="h-8 bg-gray-200 rounded-full w-28" />
          <div className="h-8 bg-gray-200 rounded-full w-32" />
          <div className="h-8 bg-gray-200 rounded-full w-24" />
          <div className="h-8 bg-gray-200 rounded-full w-36" />
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
