"use client"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function HeroSection() {
  const carouselImages = [
    { id: 1, src: "/car1.jpg", alt: "Beautiful Kashmir valley" },
    { id: 2, src: "/gt.jpg", alt: "Golden Temple Asr" },
    { id: 3, src: "/kash.jpg", alt: "Himalayan adventure" },
    { id: 4, src: "/c5.webp", alt: "Kashmir paradise" },
  ]

  const handleFindTour = () => {
    const packagesSection = document.getElementById('packages')
    packagesSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="h-full w-full"
      >
        <CarouselContent className="h-screen">
          {carouselImages.map((image) => (
            <CarouselItem key={image.id} className="h-screen">
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image.src})`,
                }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            EXPLORE INCREDIBLE INDIA
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto drop-shadow-md">
            Discover breathtaking destinations from Kashmir to Kanyakumari
          </p>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Your journey to unforgettable memories starts here
          </p>
          <Button
            size="lg"
            onClick={handleFindTour}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            EXPLORE TOURS
          </Button>
        </div>
      </div>
    </section>
  )
}
