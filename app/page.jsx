import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import PropertyListings from "@/components/PropertyListings"
import NeighborhoodSection from "@/components/NeighborhoodSection"
import AboutSection from "@/components/AboutSection"
import TeamSection from "@/components/TeamSection"
import AwardsSection from "@/components/AwardsSection"
import BlogSection from "@/components/BlogSection"
import ExpertiseSection from "@/components/ExpertiseSection"
import CtaSection from "@/components/CtaSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertyListings />
      <NeighborhoodSection />
      <AboutSection />
  <TeamSection />
  <AwardsSection />
  <BlogSection />
      <ExpertiseSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
