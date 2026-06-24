'use client';

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Target, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen antialiased selection:bg-[#0D9488] selection:text-white" style={{ backgroundColor: '#F8FAFC' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-20 relative bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-sans font-normal tracking-tight text-4xl md:text-6xl leading-tight mb-6 text-balance" style={{ color: '#0B0F19' }}>
              About{" "}
              <span className="font-serif italic font-light text-[#0D9488] inline-block">
                The Mind Clarity Studio
              </span>
            </h1>
            <p className="text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed text-balance" style={{ color: '#0B0F19', opacity: 0.75 }}>
              Empowering individuals through psychology, emotional wellness, coaching, education, and personal transformation. 
              We help people build clarity, confidence, resilience, and meaningful growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight" style={{ color: '#0B0F19' }}>
                Our <span className="font-serif italic font-light">Story</span>
              </h2>
              <p className="text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.85 }}>
                The Mind Clarity Studio was founded by Lavina Pratap Bhambhani, an International Author, Psychologist, 
                Educator, Researcher, and Mental Wellness Expert. The vision behind the studio is to create a safe space 
                where individuals can gain clarity, strengthen emotional well-being, and unlock their true potential.
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.85 }}>
                Through a combination of psychology, coaching, mentoring, workshops, and educational initiatives, 
                The Mind Clarity Studio supports students, professionals, entrepreneurs, and individuals navigating 
                personal and professional challenges.
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.85 }}>
                Our mission is to help people make better decisions, build emotional resilience, improve self-awareness, 
                and create a fulfilling life through practical and evidence-based approaches to personal growth and mental wellness.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative aspect-[4/3] w-full max-w-md p-3 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_30px_rgba(11,15,25,0.02)]" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="relative w-full h-full min-h-[250px]">
                  <Image
                    src="/images/pms-img-1.jpg"
                    alt="The Mind Clarity Studio"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-20 border-t border-b border-[#E2E8F0]" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">Core Foundations</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-light tracking-tight mb-3" style={{ color: '#0B0F19' }}>
              Our Core Values
            </h2>
            <p className="text-base font-light max-w-2xl mx-auto" style={{ color: '#0B0F19', opacity: 0.65 }}>
              The principles that guide every interaction and every transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl overflow-hidden h-full flex flex-col justify-between group hover:border-[#0D9488] transition-all duration-300">
              <CardHeader className="p-5 pb-2 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#F8FAFC] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300" style={{ color: '#0B0F19' }}>
                  <Shield className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-sans font-normal tracking-tight transition-colors duration-300 group-hover:text-[#0D9488]" style={{ color: '#0B0F19' }}>
                  Integrity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 pb-5 text-sm font-light text-center leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                We create a safe, ethical, and supportive environment where individuals can openly explore their 
                thoughts, emotions, and aspirations.
              </CardContent>
            </Card>

            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl overflow-hidden h-full flex flex-col justify-between group hover:border-[#0D9488] transition-all duration-300">
              <CardHeader className="p-5 pb-2 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#F8FAFC] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300" style={{ color: '#0B0F19' }}>
                  <Award className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-sans font-normal tracking-tight transition-colors duration-300 group-hover:text-[#0D9488]" style={{ color: '#0B0F19' }}>
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 pb-5 text-sm font-light text-center leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                We are committed to delivering high-quality guidance, evidence-based practices, and meaningful 
                support that creates lasting positive change.
              </CardContent>
            </Card>

            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl overflow-hidden h-full flex flex-col justify-between group hover:border-[#0D9488] transition-all duration-300">
              <CardHeader className="p-5 pb-2 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#F8FAFC] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300" style={{ color: '#0B0F19' }}>
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-sans font-normal tracking-tight transition-colors duration-300 group-hover:text-[#0D9488]" style={{ color: '#0B0F19' }}>
                  Client Focus
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 pb-5 text-sm font-light text-center leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                Every individual is unique. We provide personalized guidance, mentorship, and support tailored to 
                each person&apos;s goals and journey.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="team" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">The Leadership</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-light tracking-tight mb-3" style={{ color: '#0B0F19' }}>
              Founder
            </h2>
            <p className="text-base font-light max-w-2xl mx-auto" style={{ color: '#0B0F19', opacity: 0.65 }}>
              Meet the visionary behind The Mind Clarity Studio
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl p-6 max-w-md text-center group hover:border-[#0D9488] transition-all duration-300">
              <CardContent className="p-0 pt-2">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden border border-[#E2E8F0] p-1 bg-white">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/hero-lavina.jpg"
                      alt="Lavina Pratap Bhambhani"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-sans font-normal tracking-tight mb-1" style={{ color: '#0B0F19' }}>
                  Lavina Pratap Bhambhani
                </h3>
                <p className="text-sm font-medium uppercase tracking-wider mb-4 text-[#0D9488]">
                  Psychologist • Author • Educator • Researcher
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                  Founder of The Mind Clarity Studio, dedicated to helping individuals achieve emotional clarity, 
                  personal growth, career direction, and mental well-being through coaching, education, and 
                  psychology-based interventions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      {/* <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-light tracking-tight mb-4" style={{ color: '#0B0F19' }}>Our Approach</h2>
            <p className="text-xl font-light max-w-3xl mx-auto" style={{ color: '#0B0F19', opacity: 0.65 }}>
              A holistic, evidence-based methodology focused on meaningful personal transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#0D9488] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-sans font-normal mb-2" style={{ color: '#0B0F19' }}>Psychological Understanding</h3>
                    <p className="font-light text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>
                      Understanding thoughts, emotions, and behaviors to create lasting positive change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#0D9488] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-sans font-normal mb-2" style={{ color: '#0B0F19' }}>Personalized Guidance</h3>
                    <p className="font-light text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>
                      Providing tailored support that aligns with each individual&apos;s goals, challenges, and aspirations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#0D9488] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-sans font-normal mb-2" style={{ color: '#0B0F19' }}>Practical Transformation</h3>
                    <p className="font-light text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>
                      Offering actionable tools and strategies that can be applied in everyday life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#0D9488] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-sans font-normal mb-2" style={{ color: '#0B0F19' }}>Lifelong Growth</h3>
                    <p className="font-light text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>
                      Encouraging continuous self-awareness, learning, and personal development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/pms-img-1.jpg"
                alt="Our Approach"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Key Statistics */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-light tracking-tight mb-4" style={{ color: '#0B0F19' }}>Our Impact</h2>
            <p className="text-xl font-light max-w-3xl mx-auto" style={{ color: '#0B0F19', opacity: 0.65 }}>
              Trusted by individuals across India for meaningful transformation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-sans font-medium text-[#0D9488] mb-2">10+</div>
              <div className="font-light text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-sans font-medium text-[#0D9488] mb-2">100+</div>
              <div className="font-light text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-sans font-medium text-[#0D9488] mb-2">20+</div>
              <div className="font-light text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>Research &amp; Publication Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-sans font-medium text-[#0D9488] mb-2">100+</div>
              <div className="font-light text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>Workshops &amp; Sessions Delivered</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-[#0B0F19] text-center text-[#F8FAFC]">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
    <h2 className="text-3xl md:text-4xl font-sans font-normal tracking-tight text-balance">
      Ready to Begin Your Journey of{" "}
      <span className="font-serif italic font-light text-[#0D9488]">Growth?</span>
    </h2>
    <p className="text-sm md:text-base font-light max-w-xl mx-auto opacity-80 leading-relaxed text-balance">
      Take the first step toward greater clarity, confidence, emotional well-being, and personal transformation.
    </p>
    <div className="pt-2">
      <Link href="/consultation">
        <Button 
          size="lg" 
          className="bg-[#0D9488] text-white rounded-xl text-sm font-medium px-6 py-5 border-none transition-all shadow-sm hover:opacity-90"
        >
          Book Your Discovery Call
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
}