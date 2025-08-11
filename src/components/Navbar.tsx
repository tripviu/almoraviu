"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/search?city=Dubai", label: "Explore" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          <span className="text-gray-900">Almoraviu</span>
          <span className="text-emerald-600">.com</span>
        </Link>

        <ul className="flex items-center gap-6 text-sm">
          {links.map(l => {
            const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href.replace(/\?.*$/,""));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`hover:text-black ${
                    active ? "text-black underline underline-offset-4" : "text-gray-700"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
