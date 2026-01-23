"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const phoneNumber = "918882000090"
    const whatsappMessage = `Hi, I'm ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">GET IN TOUCH</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500 transition-colors">
                  <MapPin className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Address</h4>
                  <p className="text-gray-400">#4528 Street No 2, Guru Nanak Pura</p>
                  <p className="text-gray-400">Sultanwind Road, Amritsar</p>
                  <p className="text-gray-400">Punjab 143001</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500 transition-colors">
                  <Phone className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Phone</h4>
                  <p className="text-gray-400">+91 88820 00090</p>
                  <p className="text-gray-400">+91 84377 97777</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500 transition-colors">
                  <Mail className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Email</h4>
                  <p className="text-gray-400">dreamscapetravals2025@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500 transition-colors">
                  <Clock className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Working Hours</h4>
                  <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Sat - Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">First Name</label>
                    <Input
                      type="text"
                      placeholder="Amit"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 h-12 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Last Name</label>
                    <Input
                      type="text"
                      placeholder="Sharma"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 h-12 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                  <Input
                    type="email"
                    placeholder="AmitSharma@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 h-12 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+91 88820 00090"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 h-12 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your travel plans..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 h-12 text-base font-semibold group">
                  Send Message
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
