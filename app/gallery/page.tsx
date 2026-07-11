"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Play, 
  Image as ImageIcon, 
  ArrowUpRight, 
  Download,
  Calendar,
  MapPin
} from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Image from "next/image"

export default function OfficeGalleryPage() {
  return (
    <div className="min-h-screen antialiased selection:bg-[#0D9488] selection:text-white" style={{ backgroundColor: '#F8FAFC' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">Our Studio</span>
              <h1 className="font-sans tracking-tight text-4xl md:text-6xl leading-tight text-[#0B0F19]">
                Inside{" "}
                <span className="font-serif italic font-light text-[#0D9488]">
                  The Mind Clarity Studio
                </span>
              </h1>
              <p
                className="mt-6 text-lg font-light leading-relaxed max-w-xl"
                style={{ color: "#0B0F19", opacity: .75 }}
              >
                A serene, thoughtfully designed space where clarity is cultivated. 
                Our studio is crafted to support deep reflection, meaningful conversations, and transformative growth.
              </p>

            
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xl relative">
                <Image 
                  src="/images/hero-studio.jpeg" 
                  alt="The Mind Clarity Studio Interior" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Ahmedabad • India</span>
                  </div>
                  <p className="text-xl font-light mt-1">Where Clarity Takes Shape</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="photos" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488]">Visual Journey</span>
              <h2 className="font-sans font-normal tracking-tight text-3xl md:text-5xl text-[#0B0F19] mt-2">
                Studio Photo Gallery
              </h2>
            </div>
        
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/stdimg1.jpeg", title: "Reception & Waiting Lounge", desc: "Warm welcome area" },
              { src: "/images/stdimg5.jpeg", title: "Coaching Suite", desc: "Private one-on-one sessions" },
              { src: "/images/stdimg2.jpeg", title: "Resource Library", desc: "Books & research materials" },
              { src: "/images/stdimg4.jpeg", title: "Discussion Lounge", desc: "Intimate group conversations" },
              { src: "/images/stdimg3.jpeg", title: "Work & Reflection Area", desc: "Focused individual space" },
              { src: "/images/stdimg6.jpeg", title: "Refreshment Corner", desc: "Casual conversations over tea" },
           
            ].map((photo, idx) => (
              <Card 
                key={idx} 
                className="group overflow-hidden border border-[#E2E8F0] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={photo.src} 
                    alt={photo.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="text-white">
                      <h3 className="font-medium text-lg">{photo.title}</h3>
                      <p className="text-sm opacity-90 mt-1">{photo.desc}</p>
                    </div>
                  </div>

                  
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tours Section */}
      {/* <section className="py-16 md:py-24" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488]">Walk With Us</span>
            <h2 className="font-sans font-normal tracking-tight text-3xl md:text-5xl text-[#0B0F19] mt-2">
              Studio Tours &amp; Highlights
            </h2>
            <p className="mt-4 text-lg font-light opacity-75">
              Experience the calm and intentional atmosphere of The Mind Clarity Studio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-[#E2E8F0] overflow-hidden rounded-3xl group">
              <div className="relative aspect-video bg-black">
                <Image 
                  src="/images/video-thumbnail-1.jpeg" 
                  alt="Studio Tour" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group-hover:bg-[#0D9488] group-hover:text-white"
                    onClick={() => alert("Video player will open here")}
                  >
                    <Play className="h-8 w-8 ml-0.5" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <Calendar className="h-3 w-3" /> 4K • 6:15
                  </div>
                  <h3 className="text-white text-xl font-medium mt-1">Full Studio Tour</h3>
                </div>
              </div>
            </Card>

            <Card className="border border-[#E2E8F0] overflow-hidden rounded-3xl group">
              <div className="relative aspect-video bg-black">
                <Image 
                  src="/images/video-thumbnail-2.jpeg" 
                  alt="A Day at The Mind Clarity Studio" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group-hover:bg-[#0D9488] group-hover:text-white"
                    onClick={() => alert("Video player will open here")}
                  >
                    <Play className="h-8 w-8 ml-0.5" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <Calendar className="h-3 w-3" /> 4K • 4:50
                  </div>
                  <h3 className="text-white text-xl font-medium mt-1">A Day at The Studio</h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section> */}

    

      <Footer />
    </div>
  )
}