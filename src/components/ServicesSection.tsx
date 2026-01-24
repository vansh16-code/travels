import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      image: "/flight.jpg",
      title: "Flight Booking",
      description: "Book your flights with the best deals and competitive prices worldwide",
    },
    {
      image: "/hotel.webp",
      title: "Hotel Reservation",
      description: "Find and book the perfect accommodation for your stay",
    },
    {
      image: "/tour.png",
      title: "Tour Guide",
      description: "Expert local guides for unforgettable travel experiences",
    },
    {
      image: "/photo.jpeg",
      title: "Photography",
      description: "Professional photography to capture your memorable moments",
    },
    {
      image: "/food.webp",
      title: "Food & Dining",
      description: "Experience authentic local cuisine and fine dining",
    },
    {
      image: "/transport.jpg",
      title: "Transportation",
      description: "Comfortable and reliable transport services throughout your journey",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive travel solutions tailored to make your journey seamless and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 text-center border-0 hover:-translate-y-2 cursor-pointer"
            >
              <CardContent className="pt-8">
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-orange-50 px-6 sm:px-8 py-6 rounded-2xl w-full max-w-2xl">
            <div className="text-center flex-1">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500">2500+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-12 bg-orange-200"></div>
            <div className="text-center flex-1">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500">52+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Destinations</div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-12 bg-orange-200"></div>
            <div className="text-center flex-1">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
