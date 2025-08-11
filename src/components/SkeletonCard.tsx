export default function SkeletonCard() {
  return (
    <div className="card overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="flex gap-2 mt-2">
          <div className="h-6 bg-gray-200 rounded w-20" />
          <div className="h-6 bg-gray-200 rounded w-24" />
          <div className="h-6 bg-gray-200 rounded w-16" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 bg-gray-200 rounded w-28" />
          <div className="flex gap-2">
            <div className="h-9 bg-gray-200 rounded w-24" />
            <div className="h-9 bg-gray-200 rounded w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
