import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedGallery from "@/components/FeaturedGallery";
import TrustSection from "@/components/TrustSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedGallery />
      <TrustSection />
      <ContactCTA />
    </>
  );
}
