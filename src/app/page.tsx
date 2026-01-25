import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import WhyChooseSection from "@/components/WhyChooseSection"
import VehicleFleetSection from "@/components/VehicleFleetSection"
import PackagesSection from "@/components/PackagesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <VehicleFleetSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
