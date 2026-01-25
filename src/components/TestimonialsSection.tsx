"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Excellent service! The driver was professional and the vehicle was spotless. Made our Kashmir trip absolutely memorable.",
    trip: "Kashmir Valley Tour"
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Best travel experience ever! Everything was well-organized from start to finish. Highly recommend for family trips.",
    trip: "Shimla-Manali Package"
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Professional service and great value for money. The Golden Triangle tour was perfectly planned and executed.",
    trip: "Golden Triangle Tour"
  },
  {
    name: "Sneha Reddy",
    location: "Bangalore",
    rating: 5,
    text: "Amazing experience! The tempo traveller was comfortable and the driver knew all the best spots. Will definitely book again.",
    trip: "Dharamshala Trip"
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    text: "Punctual, reliable, and courteous service. Made our corporate trip hassle-free. Highly professional team!",
    trip: "Corporate Event Transfer"
  },
  {
    name: "Meera Iyer",
    location: "Chennai",
    rating: 5,
    text: "Wonderful service! The vehicle was luxurious and well-maintained. Perfect for our honeymoon trip to Gulmarg.",
    trip: "Gulmarg Honeymoon Package"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who have experienced our exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-blue-600 mt-1">{testimonial.trip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
