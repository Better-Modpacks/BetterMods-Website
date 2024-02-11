import HeroSection from "../components/Navbar/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  function HomeContent() {
    return (
      <HeroSection />
    )
  }
  
  return (
    <>
      <Navbar />
      <HomeContent />
    </>
  )
}
