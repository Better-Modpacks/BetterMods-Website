import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import ModpacksSection from "../components/ModpacksSection/ModpacksSection";
import Navbar from "../components/Navbar/Navbar";
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
  
  return (
    <>
      <Navbar />
      <HomeContent />
      <Footer />
    </>
  )
}
