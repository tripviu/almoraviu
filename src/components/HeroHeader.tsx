"use client";

import HeroSearchPro from "./HeroSearchPro";

/**
 * HeroHeader
 * - Full-bleed hero met achtergrondfoto + subtiele overlay
 * - Merkheading + subtitel gecentreerd
 * - Zoombare “kaart”-container voor de zoekbalk (HeroSearchPro)
 * Niets anders in de app wordt aangepast.
 */
export default function HeroHeader() {
  // Eén vaste hero-afbeelding (bewust geen random om hydration issues te voorkomen)
  const bg =
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop";

  return (
    <header className="relative">
      <div className="relative min-h-[48vh] md:min-h-[56vh] isolate overflow-hidden">
        {/* Achtergrond */}
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {/* Overlay voor leesbaarheid */}
        <div className="absolute inset-0 bg-neutral-900/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-16 md:pt-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
              Almoraviu
            </h1>
            <p className="mt-3 text-base md:text-lg text-white/90">
              Halal-friendly stays. For everyone.
            </p>
          </div>

          {/* Zoekkaart */}
          <div className="mx-auto mt-6 md:mt-10 max-w-5xl">
            <div
              className="
                rounded-2xl bg-white/95 backdrop-blur
                shadow-[0_10px_30px_rgba(0,0,0,0.20)]
                ring-1 ring-black/5
              "
            >
              {/* Binnenmarge zodat de Search-knop nooit buiten de kaart valt */}
              <div className="p-3 sm:p-4 md:p-5">
                <HeroSearchPro />
              </div>
            </div>
          </div>
        </div>

        {/* Onderrand gradient zodat de hero mooi blendt met de sectie eronder */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
      </div>
    </header>
  );
}
