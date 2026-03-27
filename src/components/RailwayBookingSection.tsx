"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Train, Clock, MapPin, Star } from "lucide-react"

export default function RailwayBookingSection() {
  const trains = [
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
    },
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
    }
  ]

  const handleRailwayBooking = (trainName: string) => {
    const phoneNumber = "918882000090"
    const message = `Hi, I would like to book railway tickets for ${trainName}. Please help me with availability, pricing, and booking process.`
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
          <Train className="w-16 h-16 mx-auto text-orange-500 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">RAILWAY TICKET BOOKING</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Book your railway tickets with ease. From luxury trains to express services, we help you travel comfortably across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        {/* General Railway Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Complete Railway Booking Services</h3>
            <p className="text-gray-600">
              We provide comprehensive railway ticket booking services for all trains across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="font-semibold mb-2">All Train Types</h4>
              <p className="text-sm text-gray-600">Express, Superfast, Rajdhani, Duronto, Local trains</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="font-semibold mb-2">Quick Booking</h4>
              <p className="text-sm text-gray-600">Fast and reliable ticket booking service</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="font-semibold mb-2">Pan India</h4>
              <p className="text-sm text-gray-600">Book tickets for any destination across India</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleGeneralRailwayEnquiry}
              size="lg"
              className="bg-green-600 hover:bg-green-700 px-8"
            >
              Book Railway Tickets on WhatsApp
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              Get instant assistance for all your railway booking needs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}