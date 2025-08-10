export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Tripviu. Halal-friendly stays for everyone.</div>
          <div className="flex gap-6">
            <a className="hover:text-black" href="/about">About</a>
            <a className="hover:text-black" href="/terms">Terms</a>
            <a className="hover:text-black" href="/privacy">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
