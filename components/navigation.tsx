"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white border-b sticky top-0 z-50 antialiased selection:bg-[#0D9488] selection:text-white" style={{ borderColor: '#E2E8F0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="The Mind Clarity Studio"
                width={240}
                height={90}
                className="h-10 md:h-11 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 mx-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-xs lg:text-sm font-sans font-medium tracking-tight rounded-xl transition-all duration-200"
                  style={{ 
                    color: isActive ? '#0D9488' : '#0B0F19',
                    backgroundColor: isActive ? '#F8FAFC' : 'transparent'
                  }}
                >
                  <span className="hover:text-[#0D9488] transition-colors duration-150">
                    {link.name}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center">
            <Link href="/consultation">
              <Button 
                variant="outline" 
                className="text-xs font-sans font-medium px-4 py-4 rounded-xl border transition-all duration-200 bg-transparent hover:bg-[#0D9488] hover:text-white group"
                style={{ borderColor: '#E2E8F0', color: '#0B0F19' }}
              >
                Book Consultation
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2.5 rounded-xl transition-colors hover:bg-[#F8FAFC]"
              style={{ color: '#0B0F19' }}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t pb-6 pt-3 animate-in fade-in slide-in-from-top-2 duration-200" style={{ borderColor: '#E2E8F0' }}>
            <div className="space-y-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-sm font-sans font-medium rounded-xl transition-colors"
                    style={{ 
                      color: isActive ? '#0D9488' : '#0B0F19',
                      backgroundColor: isActive ? '#F8FAFC' : 'transparent' 
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              })}

              <div className="pt-4 px-1">
                <Link href="/consultation" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="w-full text-sm font-sans font-medium py-5 rounded-xl text-white shadow-sm transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: '#0D9488' }}
                  >
                    Book Consultation
                    <ArrowUpRight className="ml-1.5 h-4 w-4 opacity-90" />
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