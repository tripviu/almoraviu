import HeroSearchPro from "@/components/HeroSearchPro";
import PopularDestinations from "@/components/PopularDestinations";
import OffersCarousel from "@/components/OffersCarousel";
import WhyTripviu from "@/components/WhyTripviu"; // bestaat al bij jou, naam laten staan
import Testimonials from "@/components/Testimonials";
import GuidesGrid from "@/components/GuidesGrid";
import SiteFooter from "@/components/SiteFooter";
import HeroHeader from "@/components/HeroHeader";
import USPBar from "@/components/USPBar";



export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroHeader />
<div className="-mt-6 mb-8"><USPBar /></div>

      {/* USP / secties (bestaand) */}
      <main className="max-w-7xl mx-auto px-4">
        <section className="mt-10">
          <PopularDestinations />
        </section>

        <section className="mt-14">
          <OffersCarousel />
        </section>

        <section className="mt-16">
          <WhyTripviu />
        </section>

        <section className="mt-16">
          <Testimonials />
        </section>

        <section className="mt-16">
          <GuidesGrid />
        </section>

        <footer className="mt-24">
          <SiteFooter />
        </footer>
      </main>
    </>
  );
}
