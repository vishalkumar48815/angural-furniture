import AboutHero from "@/components/AboutHero";
import OwnerStory from "@/components/OwnerStory";
import WorkProcess from "@/components/WorkProcess";
import AboutTrust from "@/components/AboutTrust";
import AboutCTA from "@/components/AboutCTA";

export const metadata = {
    title: "About Angural Furniture | Custom Furniture in Pathankot",
    description:
        "Learn about Angural Furniture, led by Sat Pal, delivering premium custom furniture.",
};


export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <OwnerStory />
            <WorkProcess />
            <AboutTrust />
            <AboutCTA />
        </>
    );
}
