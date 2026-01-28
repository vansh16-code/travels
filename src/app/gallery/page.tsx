import GalleryClient from "@/components/GalleryClient"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Gallery - Our Travel Memories",
  description: "Explore beautiful moments captured during our tours and travels"
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <GalleryClient />
      <Footer />
    </div>
  )
}
