import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularNow from "@/components/PopularNow";
import OffersRail from "@/components/OffersRail";
import Testimonials from "@/components/Testimonials";
import GuidesGrid from "@/components/GuidesGrid";
import USPBar from "@/components/USPBar";
        <HeroSearchPro />
import PopularDestinations from "@/components/PopularDestinations";
import OffersCarousel from "@/components/OffersCarousel";
import WhyTripviu from "@/components/WhyTripviu";
import SiteFooter from "@/components/SiteFooter";
import HeroSearchPro from "@/components/HeroSearchPro";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <USPBar />
        <PopularDestinations />
        <OffersCarousel />
        <WhyTripviu />
        <Testimonials />
      <GuidesGrid />
        <SiteFooter />
      </main>
    </>
  );
}
