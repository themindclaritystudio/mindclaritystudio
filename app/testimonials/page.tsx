"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, TrendingUp, Shield, Users, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen antialiased selection:bg-[#0D9488] selection:text-white" style={{ backgroundColor: '#F8FAFC' }}>
      <Navigation />

      {/* Hero Section */}
   
{/* Intern Testimonials Hero */}
<section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-white border-b border-[#E2E8F0]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* Left */}
      <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">First Internship Cohort</span>

      

        <h1 className="font-sans tracking-tight text-4xl md:text-6xl leading-tight text-[#0B0F19]">

          Hear From Our{" "}

          <span className="font-serif italic font-light text-[#0D9488]">
            First Batch
          </span>

          {" "}of Interns

        </h1>

        <p
          className="mt-6 text-lg font-light leading-relaxed max-w-xl"
          style={{ color: "#0B0F19", opacity: .75 }}
        >
          Our internship goes beyond learning skills. It develops
          confidence, professional thinking, research ability, and real
          workplace experience through mentorship and hands-on projects.
        </p>

      
       <div className="flex flex-wrap gap-8 mt-10">


  <div>
    <div className="text-3xl font-normal text-[#0D9488]">50+</div>
    <div className="text-sm mt-1" style={{ color: "#0B0F19", opacity: 0.65 }}>
      Mentorship Hours
    </div>
  </div>
    <div> <div className="text-3xl font-normal text-[#0D9488]">5★</div> <div className="text-sm mt-1" style={{ color: "#0B0F19", opacity: .65 }} > Mentor Rating </div> </div>


  <div>
    <div className="text-3xl font-normal text-[#0D9488]">100%</div>
    <div className="text-sm mt-1" style={{ color: "#0B0F19", opacity: 0.65 }}>
      Practical Learning
    </div>
  </div>

</div>

      </div>

      {/* Featured Video */}

      <div>

        <div className="rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-[#F8FAFC]">

          <div className="aspect-video">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Intern Testimonial"
              allowFullScreen
            />

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
   <section className="pt-20 pb-12 md:pt-24 md:pb-20 relative bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-sans font-normal tracking-tight text-4xl md:text-6xl leading-tight mb-6 text-balance" style={{ color: '#0B0F19' }}>
              Real{" "}
              <span className="font-serif italic font-light text-[#0D9488] inline-block">
                Transformations
              </span>
            </h1>
            <p className="text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed text-balance" style={{ color: '#0B0F19', opacity: 0.75 }}>
              Hear from individuals whose lives have changed through greater clarity, emotional resilience, 
              career breakthroughs, and personal growth with The Mind Clarity Studio.
            </p>
          </div>
        </div>
      </section>
      {/* Featured Testimonials */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Testimonial 1 */}
            <Card className="border border-[#E2E8F0] bg-white rounded-2xl shadow-sm p-6 md:p-8 flex flex-col justify-between group">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#0D9488] border border-[#E2E8F0]">
                    <Quote className="h-4 w-4" />
                  </div>
                  <div className="flex items-center space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#0D9488] fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm md:text-base font-light leading-relaxed italic" style={{ color: '#0B0F19', opacity: 0.85 }}>
                  "I have been working with Lavina for more than one and a half years and I am truly delighted with the results she has helped me achieve. Her unique approach and guidance have brought me remarkable clarity and growth. 
                  <br /><br />Her workshops are engaging, insightful, and highly impactful, while her one-on-one sessions have supported me through both professional and personal challenges. I wholeheartedly recommend her services to anyone seeking deeper self-understanding, confidence, and clarity in life."
                </p>

                <div className="flex items-center pt-4 border-t border-[#E2E8F0]">
                  <div className="w-11 h-11 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center mr-3.5 flex-shrink-0 font-sans text-xs font-medium text-[#0D9488]">
                    AS
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>
                      Mr. Anuj Sharma
                    </div>
                    <div className="text-xs font-light mt-0.5" style={{ color: '#0B0F19', opacity: 0.6 }}>
                      Client & Workshop Participant
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border border-[#E2E8F0] bg-white rounded-2xl shadow-sm p-6 md:p-8 flex flex-col justify-between group">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#0D9488] border border-[#E2E8F0]">
                    <Quote className="h-4 w-4" />
                  </div>
                  <div className="flex items-center space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#0D9488] fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm md:text-base font-light leading-relaxed italic" style={{ color: '#0B0F19', opacity: 0.85 }}>
                  "At one stage in life, I felt stuck, confused about my goals, and constantly wondered where my time was going. After taking a few sessions with Lavina at The Mind Clarity Studio and sincerely following her guidance, I gradually gained focus and direction. The most amazing part was that I didn't even realize when I started achieving goals that once seemed so difficult.
                  <br /><br />
                  Lavina has a unique way of helping you understand yourself, prioritize what truly matters, and take consistent action. If you're looking for clarity in your personal or professional life, I highly recommend her sessions."
                </p>

                <div className="flex items-center pt-4 border-t border-[#E2E8F0]">
                  <div className="w-11 h-11 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center mr-3.5 flex-shrink-0 font-sans text-xs font-medium text-[#0D9488]">
                    NN
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>
                      Neeta Nihalani
                    </div>
                    <div className="text-xs font-light mt-0.5" style={{ color: '#0B0F19', opacity: 0.6 }}>
                      Mind Coaching Client
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Success Metrics / Impact */}
      <section id="impact-metrics" className="py-12 md:py-20 border-t border-[#E2E8F0]" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-4xl font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>
              Our Impact
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
              Lives transformed through clarity, growth, and resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl p-6 text-center group">
              <CardContent className="p-0 space-y-4 pt-4">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-sans font-normal tracking-tight text-[#0D9488]">92%</div>
                  <h3 className="text-base font-sans font-normal tracking-tight mt-1" style={{ color: '#0B0F19' }}>Reported Significant Growth</h3>
                </div>
                <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.65 }}>
                  In self-awareness and emotional well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl p-6 text-center group">
              <CardContent className="p-0 space-y-4 pt-4">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-sans font-normal tracking-tight text-[#0D9488]">98%</div>
                  <h3 className="text-base font-sans font-normal tracking-tight mt-1" style={{ color: '#0B0F19' }}>Client Satisfaction</h3>
                </div>
                <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.65 }}>
                  Would highly recommend our studio services.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl p-6 text-center group">
              <CardContent className="p-0 space-y-4 pt-4">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-sans font-normal tracking-tight text-[#0D9488]">100+</div>
                  <h3 className="text-base font-sans font-normal tracking-tight mt-1" style={{ color: '#0B0F19' }}>Lives Impacted</h3>
                </div>
                <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.65 }}>
                  Through coaching, mentorship, and workshops.
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
            Ready to Write Your Own{" "}
            <span className="font-serif italic font-light text-[#0D9488]">Success Story?</span>
          </h2>
          <p className="text-sm md:text-base font-light max-w-xl mx-auto opacity-80 leading-relaxed text-balance">
            Begin your journey toward clarity, confidence, and meaningful transformation today.
          </p>
          <div className="pt-2">
            <Link href="/consultation">
              <Button size="lg" className="bg-[#0D9488] text-white rounded-xl text-sm font-medium px-6 py-5 border-none transition-all shadow-sm">
                Book Your Discovery Call
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