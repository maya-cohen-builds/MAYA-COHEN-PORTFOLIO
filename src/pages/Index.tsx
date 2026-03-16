import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ActivationGrid from "@/components/ActivationGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <main className="bg-background min-h-screen">
    <NavBar />
    <HeroSection />
    <ActivationGrid />
    <AboutSection />
    <ContactSection />
  </main>
);

export default Index;
