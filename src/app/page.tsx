import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactUsSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallarySection from "@/components/GallarySection";
import Hero from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import TestimonialSection from "@/components/TestimonialSection";
import TrainerSection from "@/components/TrainerSection";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutSection />
      <FeaturesSection/>
      <PlansSection/>
      <TrainerSection/>
      {/* <GallarySection/> */}
      <TestimonialSection/>
      <ContactSection />
    </>
  );
}
