"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Star, 
  Clock, 
  Calendar, 
  MapPin, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp,
  Phone,
  MessageCircle,
  ArrowLeft,
  Users,
  Award,
  Shield
} from "lucide-react"
import { TourPackage } from "@/lib/tourData"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

interface TourDetailClientProps {
  tour: TourPackage
}

export default function TourDetailClient({ tour }: TourDetailClientProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1)

  const handleWhatsAppBooking = () => {
    const phoneNumber = "918882000090"
    const message = `Hi, I'm interested in the ${tour.title} package (${tour.duration}). Please share pricing details and availability.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCallNow = () => {
    window.location.href = "tel:+918882000090"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <div className="container mx-auto">
            <Link href="/#packages" className="inline-flex items-center gap-2 mb-4 hover:text-orange-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Packages</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{tour.rating}</span>
                <span className="text-gray-300">({tour.reviews} reviews)</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{tour.duration}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="capitalize">{tour.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Booking Bar */}
      <div className="sticky top-0 z-40 bg-white border-b shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-2xl font-bold text-gray-900">{tour.title}</p>
              <p className="text-sm text-gray-600">{tour.duration} • {tour.difficulty}</p>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <Button 
                onClick={handleCallNow}
                variant="outline"
                className="flex-1 md:flex-none gap-2 border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              
              <Button 
                onClick={handleWhatsAppBooking}
                className="flex-1 md:flex-none gap-2 bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-4 h-4" />
                Get Pricing on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                <p className="text-gray-700 leading-relaxed">{tour.description}</p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="border rounded-lg overflow-hidden">
                      <button
                        onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                        className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-white hover:from-orange-100 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                            {day.day}
                          </div>
                          <div className="text-left">
                            <h3 className="font-bold text-lg">Day {day.day}: {day.title}</h3>
                            <p className="text-sm text-gray-600">{day.description}</p>
                          </div>
                        </div>
                        {expandedDay === day.day ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      
                      {expandedDay === day.day && (
                        <div className="p-4 bg-white border-t">
                          <h4 className="font-semibold mb-3 text-gray-700">Activities:</h4>
                          <ul className="space-y-2">
                            {day.activities.map((activity, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Inclusions
                  </h3>
                  <ul className="space-y-2">
                    {tour.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-600" />
                    Exclusions
                  </h3>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Booking Card */}
              <Card className="border-2 border-orange-200">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Best Pricing</h3>
                    <p className="text-sm text-gray-600">Contact us for customized packages and special offers</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold">{tour.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-gray-600">Best Time</span>
                      <span className="font-semibold text-sm">{tour.bestTime}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-600">Difficulty</span>
                      <span className="font-semibold capitalize">{tour.difficulty}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-green-600 hover:bg-green-700 gap-2 mb-3"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Pricing on WhatsApp
                  </Button>

                  <Button 
                    onClick={handleCallNow}
                    variant="outline"
                    className="w-full gap-2"
                    size="lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call: +91 888 200 0090
                  </Button>
                </CardContent>
              </Card>

              {/* Why Book With Us */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Why Book With Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="font-semibold">Best Price Guarantee</p>
                        <p className="text-sm text-gray-600">Competitive rates with no hidden charges</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="font-semibold">Expert Guides</p>
                        <p className="text-sm text-gray-600">Experienced and knowledgeable drivers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="font-semibold">24/7 Support</p>
                        <p className="text-sm text-gray-600">Round the clock customer assistance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Need Help */}
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Need Help Planning?</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Our travel experts are here to help you customize your perfect trip and provide best pricing
                  </p>
                  <Button 
                    onClick={handleWhatsAppBooking}
                    variant="outline"
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    Chat with Expert
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
