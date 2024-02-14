import HeroSection from "../components/HeroSection/HeroSection";
import ModpacksSection from "../components/ModpacksSection/ModpacksSection";
import WhyUsSection from "../components/WhyUsSection/WhyUsSection";

export default function Home() {
  function HomeContent() {
    return (
      <>
        <HeroSection />
        <WhyUsSection />
        <ModpacksSection />
      </>
    )
  }
  
  return <HomeContent />
}
