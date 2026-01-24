"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "#services" },
    { name: "PACKAGES", href: "#packages" },
    { name: "CONTACT", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/head.png"
              alt="Dreamscape Travels"
              width={50}
              height={50}
              className="object-contain"
              style={{ width: 'auto', height: '50px' }}
            />
            <div className="text-white">
              <div className="text-2xl font-bold">DREAMSCAPE</div>
              <div className="text-xs tracking-wider">TRAVELS</div>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-orange-500 transition-colors text-sm font-medium px-4 py-2"
                  >
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-white hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
