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
    { id: 2, src: "/dharam.jpg", alt: "Scenic mountain destination" },
    { id: 3, src: "/gt.jpg", alt: "Golden Temple" },
    { id: 4, src: "/kash.jpg", alt: "Kashmir paradise" },
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
        <CarouselPrevious className="left-2 md:left-4 hidden sm:flex" />
        <CarouselNext className="right-2 md:right-4 hidden sm:flex" />
      </Carousel>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight drop-shadow-lg leading-tight">
            EXPLORE INCREDIBLE NORTH INDIA
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 md:mb-4 max-w-2xl mx-auto drop-shadow-md">
            Discover breathtaking destinations from Kashmir to Kanyakumari
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 drop-shadow-md">
            Your journey to unforgettable memories starts here
          </p>
          <Button
            size="lg"
            onClick={handleFindTour}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            EXPLORE TOURS
          </Button>
        </div>
      </div>
    </section>
  )
}
