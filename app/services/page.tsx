"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, ArrowUpRight, CheckCircle, Target } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      slug: "mind-coaching",
      title: "Mind Coaching",
      description:
        "Helping individuals strengthen emotional resilience, develop healthy thought patterns, and navigate life's challenges with confidence.",
      icon: Target,
      features: [
        "Emotional Clarity",
        "Personal Development",
        "Emotional Resilience",
        "Self-Awareness Growth",
      ],
    },
    {
      slug: "education-mentorship",
      title: "Education & Mentorship",
      description:
        "Guidance, mentorship, and learning experiences designed to foster lifelong growth, academic excellence, and professional development.",
      icon: Users,
      features: [
        "Research Guidance",
        "Publications & Writing",
        "Academic Mentorship",
        "Professional Development",
      ],
    },
    {
      slug: "professional-consultation",
      title: "Professional Consultation",
      description:
        "One-on-one coaching and consultation specifically designed for individual personal, academic, and professional growth.",
      icon: TrendingUp,
      features: [
        "1-on-1 Coaching",
        "Personal Growth Planning",
        "Career & Academic Support",
        "Goal-Oriented Guidance",
      ],
    },
  ]

  return (
    <div className="min-h-screen antialiased selection:bg-[#0D9488] selection:text-white" style={{ backgroundColor: '#F8FAFC' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-20 relative bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-sans font-normal tracking-tight text-4xl md:text-6xl leading-tight mb-6 text-balance" style={{ color: '#0B0F19' }}>
              Our{" "}
              <span className="font-serif italic font-light text-[#0D9488] inline-block">
                Services
              </span>
            </h1>
            <p className="text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed text-balance" style={{ color: '#0B0F19', opacity: 0.75 }}>
              Transformative programs in psychology, coaching, career guidance, and personal development designed to help you achieve clarity, confidence, and lasting growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Changed md:grid-cols-2 xl:grid-cols-3 to lg:grid-cols-3 to force a uniform row on all desktops */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {services.map((service) => {
        const IconComponent = service.icon

        return (
          <Link key={service.slug} href="/contact" className="block group h-full">
            <Card className="border border-[#E2E8F0] bg-white rounded-2xl shadow-sm hover:shadow-[0_10px_30px_rgba(11,15,25,0.02)] transition-all duration-300 h-full flex flex-col justify-between p-6">
              <div>
                <CardHeader className="p-0 pb-4 space-y-4">
                  <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>
                    {service.title}
                  </CardTitle>
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="p-0 pt-2">
                  <div className="space-y-3">
                    <h4 className="text-xs font-medium uppercase tracking-wider opacity-60" style={{ color: '#0B0F19' }}>
                      Key Features:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm font-light" style={{ color: '#0B0F19' }}>
                          <CheckCircle className="h-4 w-4 text-[#0D9488] mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>

              <div className="pt-6 w-full">
                <Button className="w-full text-xs font-medium px-4 py-5 rounded-xl border border-[#E2E8F0] bg-[#0B0F19] text-[#F8FAFC] group-hover:opacity-90 transition-all shadow-sm">
                  Get Started
                  <ArrowUpRight className="ml-1.5 h-3 w-3" />
                </Button>
              </div>
            </Card>
          </Link>
        )
      })}
    </div>
  </div>
</section>

      {/* Why Choose Our Services */}
      <section id="why-choose" className="py-12 md:py-20 border-t border-[#E2E8F0]" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-4xl font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>
              Why Individuals Trust The Mind Clarity Studio
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
              We combine scientific insight with compassionate guidance to help you achieve lasting transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl p-6 text-center group">
              <CardHeader className="p-0 pb-4 space-y-4">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg md:text-xl font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>
                  Evidence-Based Principles
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                  Scientific insights and practical strategies custom-tailored precisely to your unique growth roadblocks and personal goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl p-6 text-center group">
              <CardHeader className="p-0 pb-4 space-y-4">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg md:text-xl font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>
                  Personalized Mentorship
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                  Focused one-on-one sessions designed entirely around the specific rhythm, life choices, and milestones of your path.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl p-6 text-center group">
              <CardHeader className="p-0 pb-4 space-y-4">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg md:text-xl font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>
                  Research-Driven Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                  Integrating contemporary findings in mental well-being, psychology, development, and effective long-term learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 bg-[#0B0F19] text-center text-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-sans font-normal tracking-tight text-balance">
            Ready to Begin Your{" "}
            <span className="font-serif italic font-light text-[#0D9488]">Journey?</span>
          </h2>
          <p className="text-sm md:text-base font-light max-w-xl mx-auto opacity-80 leading-relaxed text-balance">
            Book a consultation and take the first step toward greater clarity and personal transformation.
          </p>
          <div className="pt-2">
            <Link href="/consultation">
              <Button size="lg" className="bg-[#0D9488] hover:bg-[#0D9488] text-white rounded-xl text-sm font-medium px-6 py-5 border-none transition-all shadow-sm">
                Book a Consultation
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Minimal Footer */}
      <Footer />
    </div>
  )
}