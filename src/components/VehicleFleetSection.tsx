"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Luggage, Wind, Shield } from "lucide-react"

export default function VehicleFleetSection() {
  const handleWhatsAppEnquiry = (vehicleName: string) => {
    const phoneNumber = "918882000090"
    const message = `Hi, I would like to enquire about ${vehicleName} rental service. Please share more details.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const vehicles = [
    {
      name: "Tempo Traveller",
      subtitle: "(9 to 26 Seater)",
      image: "/tempo.jpg",
      description: "Ideal for group travel. Spacious & comfortable seats. AC/Non-AC options. Large luggage space. Best for family trips, group tours & corporate events.",
      features: [
        { icon: Users, text: "9-26 Seater Options" },
        { icon: Wind, text: "AC/Non-AC Available" },
        { icon: Luggage, text: "Large Luggage Space" },
        { icon: Shield, text: "Safe & Comfortable" }
      ]
    },
    {
      name: "Urbania Traveller",
      subtitle: "Premium Luxury",
      image: "/urbania.png",
      description: "A new-age travel experience. Premium interiors. Smooth & safe ride. Ideal for VIP travel and long tours.",
      features: [
        { icon: Users, text: "Luxury Seating" },
        { icon: Wind, text: "Premium AC" },
        { icon: Luggage, text: "Ample Storage" },
        { icon: Shield, text: "VIP Experience" }
      ]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR VEHICLE FLEET</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our premium fleet of well-maintained vehicles for a comfortable journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                  style={{ backgroundImage: `url(${vehicle.image})` }}
                />
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {vehicle.name}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-3">
                    {vehicle.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {vehicle.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-xs text-gray-700 font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => handleWhatsAppEnquiry(vehicle.name)}
                  className="w-full bg-orange-500 hover:bg-orange-600 mt-4 h-11"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Need a custom vehicle solution? We have more options available!
          </p>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => handleWhatsAppEnquiry("vehicle rental")}
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          >
            Contact Us for More Options
          </Button>
        </div>
      </div>
    </section>
  )
}
