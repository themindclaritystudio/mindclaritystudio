"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b sticky top-0 z-50" style={{ borderColor: '#EAF3F0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="The Mind Clarity Studio"
                  width={240}
                  height={90}
                  className="h-10 md:h-12 lg:h-10 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block ml-64">
              <div className="flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-[#2F3437] hover:text-[#6E8F88] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-[#2F3437] hover:text-[#6E8F88] px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-[#2F3437] hover:text-[#6E8F88] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/testimonials"
                  className="text-[#2F3437] hover:text-[#6E8F88] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact"
                  className="text-[#2F3437] hover:text-[#6E8F88] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/consultation">
              <Button 
                variant="outline" 
                className="border-[#6E8F88] text-[#6E8F88] hover:bg-[#EAF3F0] hover:text-[#6E8F88] bg-transparent"
              >
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-[#2F3437] hover:text-[#6E8F88] p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: '#EAF3F0' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-[#2F3437] hover:text-[#6E8F88]"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-[#2F3437] hover:text-[#6E8F88]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-[#2F3437] hover:text-[#6E8F88]"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/testimonials"
                className="block px-3 py-2 text-base font-medium text-[#2F3437] hover:text-[#6E8F88]"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-[#2F3437] hover:text-[#6E8F88]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 space-y-2">
                <Link href="/consultation" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="w-full text-white"
                    style={{ backgroundColor: '#6E8F88' }}
                  >
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}