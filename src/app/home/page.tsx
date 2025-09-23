import AppDownloadSection from "@/components/homePage/AppStore";
import { FAQSection } from "@/components/homePage/FAQSection";
import HappyClients from "@/components/homePage/HappyClients";
import { HeroSection } from "@/components/homePage/heroSection";
import PopularCategories from "@/components/homePage/PopularCategories";
import { Section2 } from "@/components/homePage/section2";
import TransformativeBenefits from "@/components/homePage/TransformativeBenifits";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";

// src/app/home/page.tsx
export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Section2 />
            <PopularCategories />
            <WhyChooseUs />
            <TransformativeBenefits />
            <AppDownloadSection />
            <FAQSection />
            <HappyClients />
        </>
    );
}
