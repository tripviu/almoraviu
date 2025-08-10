export default function Navbar(){
  return (
    <header className="bg-white border-b">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold text-gray-900">Tripviu</a>
        <ul className="flex items-center gap-6 text-sm">
          <li><a className="text-gray-700 hover:text-black" href="/">Home</a></li>
          <li><a className="text-gray-700 hover:text-black" href="/search?city=Dubai">Explore</a></li>
          <li><a className="text-gray-700 hover:text-black" href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
