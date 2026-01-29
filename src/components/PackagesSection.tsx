"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Check, ArrowRight } from "lucide-react"

export default function PackagesSection() {
  const packages = [
    {
      id: "shimla-kufri-tour",
      image: "/shimla.jpg",
      title: "Shimla Kufri Tour",
      rating: 4.8,
      reviews: 312,
      description: "Experience the queen of hills with scenic beauty and adventure activities",
      features: [
        "Shimla Mall Road",
        "Kufri Adventure Park",
        "Jakhu Temple Visit",
        "Ridge & Scandal Point"
      ],
    },
    {
      id: "manali-special",
      image: "/c5.webp",
      title: "Manali Special",
      rating: 4.9,
      reviews: 285,
      description: "Explore the valley of gods with stunning landscapes and ancient temples",
      features: [
        "Hadimba Temple",
        "Vashisht Hot Springs",
        "Atal Tunnel Experience",
        "Sissu & Koksar Valley"
      ],
    },
    {
      id: "kashmir-complete",
      image: "/dal.webp",
      title: "Kashmir Complete",
      rating: 4.9,
      reviews: 328,
      description: "Experience paradise on earth with valleys, lakes and snow-capped mountains",
      features: [
        "Gulmarg Gondola Ride",
        "Sonmarg Glacier Visit",
        "Pahalgam Valley Tour",
        "Doodhpathri Meadows",
        "Dal Lake Visit"
      ],
    },
    {
      id: "delhi-agra-heritage",
      image: "/delhi.jpg",
      title: "Delhi Agra Heritage",
      rating: 4.7,
      reviews: 245,
      description: "Discover India's rich heritage with iconic monuments and spiritual sites",
      features: [
        "Taj Mahal Visit",
        "Red Fort Delhi",
        "Qutub Minar",
        "India Gate"
      ],
    },
    {
      id: "golden-temple-amritsar",
      image: "/gt.jpg",
      title: "Golden Temple Amritsar",
      rating: 4.9,
      reviews: 456,
      description: "Experience spiritual bliss and patriotic fervor in the holy city of Amritsar",
      features: [
        "Golden Temple Darshan",
        "Wagah Border Ceremony",
        "Jallianwala Bagh",
        "Durgiana Temple"
      ],
    },
    {
      id: "dharamshala-retreat",
      image: "/dharam.jpg",
      title: "Dharamshala Retreat",
      rating: 4.8,
      reviews: 198,
      description: "Find peace in the Himalayan foothills with Tibetan culture and cricket heritage",
      features: [
        "Triund Trek",
        "Bhagsu Waterfall",
        "Buddha Temple Visit",
        "HPCA Cricket Stadium"
      ],
    },
    {
      id: "amarnath-yatra",
      image: "/amarnath.jpg",
      title: "Amarnath Yatra",
      rating: 4.9,
      reviews: 567,
      description: "Sacred pilgrimage to holy Amarnath Cave with divine ice Shiva Lingam",
      features: [
        "Holy Cave Darshan",
        "Baltal/Pahalgam Route",
        "Helicopter Services",
        "Spiritual Experience"
      ],
    },
    {
      id: "vaishno-devi-yatra",
      image: "/devii.jpg",
      title: "Mata Vaishno Devi",
      rating: 4.9,
      reviews: 892,
      description: "Seek blessings at the sacred shrine of Mata Vaishno Devi in Trikuta Mountains",
      features: [
        "Holy Darshan",
        "Bhairon Temple",
        "Ardhkuwari Cave",
        "Ropeway Available"
      ],
    },
    {
      id: "rajasthan-royal-tour",
      image: "/rajas.jpg",
      title: "Rajasthan Royal Tour",
      rating: 4.8,
      reviews: 445,
      description: "Explore royal heritage of Jaipur, Jodhpur & Jaisalmer with desert safari",
      features: [
        "Jaipur Pink City",
        "Jodhpur Blue City",
        "Jaisalmer Desert Safari",
        "Royal Forts & Palaces"
      ],
    },
    {
      id: "nainital-retreat",
      image: "/nanital.jpg",
      title: "Nainital Lake Paradise",
      rating: 4.7,
      reviews: 334,
      description: "Beautiful lake town in Kumaon hills with boating and scenic viewpoints",
      features: [
        "Naini Lake Boating",
        "Snow View Point",
        "Mall Road Shopping",
        "Tiffin Top Views"
      ],
    },
    {
      id: "char-dham-yatra",
      image: "/dham.jpg",
      title: "Char Dham Yatra",
      rating: 4.9,
      reviews: 678,
      description: "Sacred pilgrimage to Yamunotri, Gangotri, Kedarnath & Badrinath",
      features: [
        "Four Sacred Dhams",
        "Himalayan Spirituality",
        "Kedarnath Jyotirlinga",
        "Divine Experience"
      ],
    },
    {
      id: "ladakh-adventure",
      image: "/ladakh.jpg",
      title: "Ladakh Adventure",
      rating: 4.9,
      reviews: 523,
      description: "Experience high-altitude passes, Pangong Lake, Nubra Valley & monasteries",
      features: [
        "Pangong Lake",
        "Nubra Valley Safari",
        "Khardung La Pass",
        "Buddhist Monasteries"
      ],
    },
  ]

  const handleWhatsAppEnquiry = (packageTitle: string) => {
    const phoneNumber = "918882000090"
    const message = `Hi, I would like to enquire about the ${packageTitle} package. Please share more details.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="packages" className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">TOUR PACKAGES</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our carefully curated travel packages designed to give you the best experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2 bg-white"
            >
              <Link href={`/tours/${pkg.id}`}>
                <div className="relative h-48 overflow-hidden cursor-pointer">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3">
                      <ArrowRight className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                </div>
              </Link>
              
              <CardContent className="pt-4 space-y-3">
                <div>
                  <Link href={`/tours/${pkg.id}`}>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors cursor-pointer">
                      {pkg.title}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3.5 h-3.5 ${i < Math.floor(pkg.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold">{pkg.rating}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-1.5">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-2 border-t pt-3">
                <Link href={`/tours/${pkg.id}`} className="w-full">
                  <Button 
                    className="w-full bg-orange-500 hover:bg-orange-600 h-9"
                  >
                    View Details
                  </Button>
                </Link>
                <Button 
                  onClick={() => handleWhatsAppEnquiry(pkg.title)}
                  variant="outline"
                  className="w-full border-gray-300 hover:bg-gray-50 hover:border-gray-400 h-9"
                >
                  Quick Enquiry
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            onClick={() => handleWhatsAppEnquiry("all packages")}
          >
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
