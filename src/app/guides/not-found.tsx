import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold mb-2">Guide not found</h1>
      <p className="text-gray-600 mb-6">The guide you’re looking for does not exist.</p>
      <Link href="/guides" className="underline">Back to guides</Link>
    </main>
  );
}
