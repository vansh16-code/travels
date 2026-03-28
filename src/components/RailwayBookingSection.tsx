"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Train, Plane, Clock, MapPin, Star } from "lucide-react"

export default function RailwayBookingSection() {
  const trains = [
    {
      name: "Shatabdi Express",
      image: "/Shatabdi.webp", 
      description: "Premium day train service connecting major cities with comfort",
      features: [
        "AC Chair Car",
        "Complimentary Meals",
        "Fast Connectivity",
        "Business Class Available"
      ],
      routes: "Delhi - Chandigarh - Amritsar"
    },
    {
      name: "Vande Bharat",
      image: "/vande.webp",
      description: "India's fastest semi-high speed train with world-class amenities",
      features: [
        "Semi-High Speed",
        "Modern Interiors",
        "WiFi & Entertainment",
        "Executive Class"
      ],
      routes: "Delhi - Katra - Jammu"
    },
    {
      name: "Golden Chariot",
      image: "/goldenChariot.jpg",
      description: "Luxury train experience through South India's heritage destinations",
      features: [
        "Luxury Accommodation",
        "Fine Dining Experience", 
        "Heritage Route Coverage",
        "Premium Service"
      ],
      routes: "Bangalore - Mysore - Hampi - Goa"
    }
  ]

  const airlines = [
    {
      name: "Air India",
      image: "/airindia.jpeg",
      description: "India's national carrier offering domestic and international flights",
      features: [
        "Wide Network Coverage",
        "Premium Services",
        "International Routes",
        "Business Class"
      ],
      routes: "Pan India & International"
    },
    {
      name: "IndiGo Airlines",
      image: "/indigo.jpg",
      description: "India's largest airline with punctual and affordable flights",
      features: [
        "On-Time Performance",
        "Affordable Fares",
        "Modern Fleet",
        "Extensive Network"
      ],
      routes: "Domestic & International"
    },
    {
      name: "Vistara",
      image: "/vistara.jpg",
      description: "Full-service carrier with premium experience and hospitality",
      features: [
        "Premium Economy",
        "Fine Dining",
        "Entertainment System",
        "Luxury Service"
      ],
      routes: "Domestic & International"
    }
  ]

  const handleRailwayBooking = (trainName: string) => {
    const phoneNumber = "918882000090"
    const message = `Hi, I would like to book railway tickets for ${trainName}. Please help me with availability, pricing, and booking process.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleFlightBooking = (airlineName: string) => {
    const phoneNumber = "918882000090"
    const message = `Hi, I would like to book flight tickets with ${airlineName}. Please help me with flight schedules, pricing, and booking process.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleGeneralRailwayEnquiry = () => {
    const phoneNumber = "918882000090"
    const message = `Hi, I need assistance with railway ticket booking. Please help me with train schedules, availability, and booking for my travel dates.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">RAILWAY & FLIGHT BOOKING</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Book your railway and flight tickets with ease. From luxury trains to premium airlines, we help you travel comfortably across India and beyond.
          </p>
        </div>

        {/* Railway Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-orange-600">Railway Booking</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trains.map((train, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${train.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{train.name}</h3>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {train.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{train.routes}</span>
                  </div>

                  <div className="space-y-2">
                    {train.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Star className="w-3 h-3 text-orange-500 fill-current" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handleRailwayBooking(train.name)}
                    className="w-full bg-orange-500 hover:bg-orange-600 mt-4"
                  >
                    Book {train.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              onClick={() => handleRailwayBooking("General Railway Booking")}
            >
              View All Train Options
            </Button>
          </div>
        </div>

        {/* Flight Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-orange-600">Flight Booking</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {airlines.map((airline, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${airline.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{airline.name}</h3>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {airline.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{airline.routes}</span>
                  </div>

                  <div className="space-y-2">
                    {airline.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Star className="w-3 h-3 text-orange-500 fill-current" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handleFlightBooking(airline.name)}
                    className="w-full bg-orange-500 hover:bg-orange-600 mt-4"
                  >
                    Book {airline.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              onClick={() => handleFlightBooking("General Flight Booking")}
            >
              View All Flight Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}