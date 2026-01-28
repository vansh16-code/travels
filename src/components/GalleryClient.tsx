"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  src: string
  title: string
  description: string
  category: string
}

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const images: GalleryImage[] = [
    {
      src: "/gallery1.jpeg",
      title: "Mountain Paradise",
      description: "Breathtaking views from the Himalayas",
      category: "landscapes"
    },
    {
      src: "/gallery2.jpeg",
      title: "Cultural Heritage",
      description: "Exploring ancient temples and monuments",
      category: "culture"
    },
    {
      src: "/gallery3.jpeg",
      title: "Popular Tourist Spots",
      description: "Famous destinations on our tours",
      category: "destinations"
    },
    {
      src: "/gallery4.jpeg",
      title: "Scenic Beauty",
      description: "Nature's masterpiece captured",
      category: "landscapes"
    },
    {
      src: "/gallery5.jpeg",
      title: "Travel Memories",
      description: "Happy moments with our travelers",
      category: "people"
    },
    {
      src: "/gallery6.jpeg",
      title: "Destination Highlights",
      description: "Must-visit spots on our tours",
      category: "destinations"
    },
    {
      src: "/gallery8.jpeg",
      title: "Traditional Architecture",
      description: "Beautiful cultural landmarks",
      category: "culture"
    },
    {
      src: "/gallery9.jpeg",
      title: "Historic Monuments",
      description: "Architectural wonders of India",
      category: "culture"
    },
    {
      src: "/gallery10.jpeg",
      title: "Famous Landmarks",
      description: "Iconic places worth visiting",
      category: "destinations"
    },
    {
      src: "/gallery11.jpeg",
      title: "Joyful Travelers",
      description: "Smiles and memories on the road",
      category: "people"
    },
    {
      src: "/gallery12.jpeg",
      title: "Group Travel Fun",
      description: "Creating memories together",
      category: "people"
    },
    {
      src: "/gallery13.jpeg",
      title: "Hidden Gems",
      description: "Off-beat destinations worth exploring",
      category: "destinations"
    },
    {
      src: "/gallery14.jpeg",
      title: "Scenic Landscapes",
      description: "Beautiful natural vistas",
      category: "landscapes"
    }
  ]

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "landscapes", label: "Landscapes" },
    { id: "culture", label: "Culture" },
    { id: "people", label: "People" },
    { id: "destinations", label: "Destinations" }
  ]

  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/gallerybg.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Explore the beautiful moments and breathtaking destinations from our tours
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={`${
                filter === category.id
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "border-orange-500 text-orange-500 hover:bg-orange-50"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">No images found in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 text-white hover:text-orange-500 transition-colors z-10"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 text-white hover:text-orange-500 transition-colors z-10"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Image */}
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-lg opacity-90">{filteredImages[selectedImage].description}</p>
              <p className="text-sm mt-2 opacity-75">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
