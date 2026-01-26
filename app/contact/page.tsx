import ContactHero from "@/components/ContactHero";
import QuickContact from "@/components/QuickContact";
import BusinessDetails from "@/components/BusinessDetails";
import ContactMap from "@/components/ContactMap";
import ContactMiniGallery from "@/components/ContactMiniGallery";
import ContactFinalCTA from "@/components/ContactFinalCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <QuickContact />
      <BusinessDetails />
      <ContactMap />
      <ContactMiniGallery />
      <ContactFinalCTA />
    </>
  );
}
