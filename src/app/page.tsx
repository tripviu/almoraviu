import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularNow from "@/components/PopularNow";
import OffersRail from "@/components/OffersRail";
import Testimonials from "@/components/Testimonials";
import GuidesGrid from "@/components/GuidesGrid";
import USPBar from "@/components/USPBar";
import PopularDestinations from "@/components/PopularDestinations";
import OffersCarousel from "@/components/OffersCarousel";
import WhyTripviu from "@/components/WhyTripviu";
import SiteFooter from "@/components/SiteFooter";

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
