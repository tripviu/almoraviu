export default function LoadingHotel() {
  return (
    <main className="py-6">
      <div className="max-w-5xl mx-auto px-4 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-80" />
        <div className="mt-2 h-4 bg-gray-200 rounded w-48" />
        <div className="mt-4 w-full h-72 bg-gray-200 rounded-xl" />
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="h-24 bg-gray-200 rounded" />
          <div className="h-24 bg-gray-200 rounded" />
          <div className="h-24 bg-gray-200 rounded" />
        </div>
        <div className="mt-6 h-10 bg-gray-200 rounded w-64" />
      </div>
    </main>
  );
}
