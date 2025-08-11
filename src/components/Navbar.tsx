"use client";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition",
        "bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/65",
        scrolled ? "shadow-sm" : "shadow-none",
      ].join(" ")}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between" aria-label="Primary">
        {/* Brand (tekstlogo; vervang later door je SVG/PNG als je wilt) */}
        <a href="/" className="font-bold text-lg tracking-tight text-gray-900 hover:opacity-90" aria-label="Almoraviu home">
          Almoraviu<span className="text-emerald-700">.com</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-[15px]">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href.split("?")[0]);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={[
                    "hover:text-gray-900 transition",
                    active ? "text-gray-900 font-semibold border-b-2 border-emerald-600 pb-0.5" : "text-gray-600",
                  ].join(" ")}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu placeholder (optioneel later) */}
        <a
          href="/search"
          className="md:hidden rounded-md border px-3 py-1.5 text-sm text-gray-700 bg-white"
          aria-label="Open search"
        >
          Search
        </a>
      </nav>
    </header>
  );
}
