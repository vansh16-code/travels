import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/head.png"
                alt="Dreamscape Travels"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <div className="text-2xl font-bold">DREAMSCAPE</div>
                <div className="text-xs tracking-wider">TRAVELS</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner for unforgettable travel experiences around India.
            </p>
            <p className="text-gray-400 text-xs">
              GST: 03CWAPS5455F3ZJ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-orange-500">Services</Link></li>
              <li><Link href="#packages" className="text-gray-400 hover:text-orange-500">Packages</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>#4528 Street No 2</li>
              <li>Guru Nanak Pura</li>
              <li>Sultanwind Road</li>
              <li>Amritsar, Punjab 143001</li>
              <li className="pt-2">+91 88820 00090</li>
              <li>+91 84377 97777</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1Bf2isjmZA/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/dreamscape.amritsar" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <a 
                href="mailto:dreamscapetravals2025@gmail.com"
                className="text-sm text-gray-400 hover:text-orange-500"
              >
                dreamscapetravals2025@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Dreamscape Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
