import AboutHeroSection from "./about";
import DifferentSection from "./different";
import FeaturesSection from "./features";
import MissionVision from "./missionvision";

export default function About() {
    return (
        <main className="w-[80%]  mx-auto">
            <AboutHeroSection />
            <FeaturesSection />
            <MissionVision />
            <DifferentSection />
        </main>
    );
}