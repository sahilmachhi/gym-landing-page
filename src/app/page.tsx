import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import TrainerSection from "@/components/TrainerSection";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutSection />
      <FeaturesSection/>
      <PlansSection/>
      <TrainerSection/>
    </>
  );
}
