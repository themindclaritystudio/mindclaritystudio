"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
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
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">Our Studio</span>
              <h1 className="font-sans tracking-tight text-4xl md:text-6xl leading-tight text-[#0B0F19]">
                Inside{" "}
                <span className="font-serif italic font-light text-[#0D9488]">
                  The Mind Clarity Studio
                </span>
              </h1>
              <p className="mt-6 text-lg font-light leading-relaxed max-w-xl" style={{ color: "#0B0F19", opacity: .75 }}>
                A serene, thoughtfully designed space where clarity is cultivated. 
                Our studio is crafted to support deep reflection, meaningful conversations, and transformative growth.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-video w-full rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xl relative bg-slate-50">
                <Image 
                  src="/images/logo.png" 
                  alt="The Mind Clarity Studio Interior" 
                  fill 
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain p-6" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - IMPROVED */}
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
              { src: "/images/stdimg8.jpeg", title: "Work & Reflection Area", desc: "Focused individual space" },
              { src: "/images/stdimg7.jpeg", title: "Positive Affirmation Wall", desc: "A comforting space filled with motivational messages..." }          
            ].map((photo, idx) => (
              <Card 
                key={idx} 
                className="group overflow-hidden border border-[#E2E8F0] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-[4/3] flex items-center justify-center">
  <Image
    src={photo.src}
    alt={photo.title}
    fill
    className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
  />
</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}