"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Users, ArrowUpRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"
import Image from "next/image"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isSubmitted) {
    return (
      <div className="min-h-screen antialiased selection:bg-[#0D9488] selection:text-white" style={{ backgroundColor: '#F8FAFC' }}>
        <Navigation />
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
            <div className="mx-auto h-16 w-16 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#0D9488]">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h2 className="font-sans font-normal tracking-tight text-3xl" style={{ color: '#0B0F19' }}>
              Message <span className="font-serif italic font-light text-[#0D9488]">Sent!</span>
            </h2>
            <p className="text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
              Thank you for reaching out. We have received your inquiry and will respond within 24 hours.
            </p>
            <div className="pt-2">
              <Link href="/">
                <Button 
                  className="w-full text-base font-medium px-6 py-5 rounded-xl hover:opacity-90 transition-all border-none"
                  style={{ backgroundColor: '#0B0F19', color: '#F8FAFC' }}
                >
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen antialiased selection:bg-[#0D9488] selection:text-white" style={{ backgroundColor: '#F8FAFC' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-20 relative bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-sans font-normal tracking-tight text-4xl md:text-6xl leading-tight mb-6 text-balance" style={{ color: '#0B0F19' }}>
              Get In{" "}
              <span className="font-serif italic font-light text-[#0D9488] inline-block">
                Touch
              </span>
            </h1>
            <p className="text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed text-balance" style={{ color: '#0B0F19', opacity: 0.75 }}>
              Ready to begin your journey toward greater clarity, confidence, and personal transformation? 
              We're here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-[#E2E8F0] bg-white rounded-2xl shadow-sm text-center p-5 flex flex-col justify-between items-center group">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                  <Phone className="h-4 w-4" />
                </div>
                <h3 className="text-base font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>Call Us</h3>
                <p className="text-xs font-light" style={{ color: '#0B0F19', opacity: 0.75 }}></p>
              </div>
              <div className="mt-4">
                <a href="tel:+917990202179" className="text-base font-medium transition-colors hover:opacity-80 block" style={{ color: '#0B0F19' }}>
                  +91 79902 02179
                </a>
                <p className="text-xs font-light mt-0.5" style={{ color: '#0B0F19', opacity: 0.5 }}>Mon-Fri: 9:00 AM - 7:00 PM</p>
              </div>
            </Card>

            <Card className="border border-[#E2E8F0] bg-white rounded-2xl shadow-sm text-center p-5 flex flex-col justify-between items-center group">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                  <Mail className="h-4 w-4" />
                </div>
                <h3 className="text-base font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>Email Us</h3>
                <p className="text-xs font-light" style={{ color: '#0B0F19', opacity: 0.75 }}>Send us your questions anytime</p>
              </div>
              <div className="mt-4">
                <a href="mailto:contact@themindclaritystudio.com" className="text-base font-medium text-[#0D9488] hover:underline block break-all">
                  contact@themindclaritystudio.com
                </a>
                <p className="text-xs font-light mt-0.5" style={{ color: '#0B0F19', opacity: 0.5 }}>We respond within 24 hours</p>
              </div>
            </Card>

            <Card className="border border-[#E2E8F0] bg-white rounded-2xl shadow-sm text-center p-5 flex flex-col justify-between items-center group">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                  <Calendar className="h-4 w-4" />
                </div>
                <h3 className="text-base font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>Book a Call</h3>
                <p className="text-xs font-light" style={{ color: '#0B0F19', opacity: 0.75 }}>Schedule a discovery consultation</p>
              </div>
              <div className="mt-4 w-full">
                <Link href="/consultation" className="block w-full">
                  <Button className="w-full text-xs font-medium px-3 py-3 rounded-xl border border-[#E2E8F0] bg-[#0B0F19] text-[#F8FAFC] hover:opacity-90 transition-all shadow-sm">
                    Book Consultation
                    <ArrowUpRight className="ml-1.5 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Form and Info Layout */}
      <section className="py-12 md:py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Card className="border border-[#E2E8F0] shadow-[0_10px_30px_rgba(11,15,25,0.02)] bg-white rounded-2xl overflow-hidden">
                <CardHeader className="p-6 md:p-8 pb-4">
                  <CardTitle className="text-2xl md:text-3xl font-sans font-normal tracking-tight mb-2 text-gray-900 flex items-center gap-3" style={{ color: '#0B0F19' }}>
                    <MessageSquare className="h-6 w-6 text-[#0D9488]" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.65 }}>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <form
                    action="https://formsubmit.co/contact@themindclaritystudio.com"
                    method="POST"
                    onSubmit={() => setTimeout(() => setIsSubmitted(true), 800)}
                    className="space-y-5"
                  >
                    <input type="hidden" name="_subject" value="New Contact Form Submission - Mind Clarity Studio" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="firstName" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>First Name *</Label>
                        <Input name="firstName" id="firstName" placeholder="Your first name" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0D9488]" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lastName" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Last Name *</Label>
                        <Input name="lastName" id="lastName" placeholder="Your last name" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0D9488]" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Email Address *</Label>
                        <Input name="email" id="email" type="email" placeholder="your.email@example.com" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0D9488]" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Phone Number *</Label>
                        <Input name="phone" id="phone" type="tel" placeholder="+91 79902 02179" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0D9488]" required />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="interest" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Area of Interest *</Label>
                      <Select name="interest" required>
                        <SelectTrigger className="rounded-xl border-[#E2E8F0] focus:ring-[#0D9488]">
                          <SelectValue placeholder="What would you like support with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="psychological-coaching">Psychological Coaching</SelectItem>
                          <SelectItem value="career-guidance">Career Guidance & Mentorship</SelectItem>
                          <SelectItem value="personal-growth">Personal Growth</SelectItem>
                          <SelectItem value="research">Research & Academic Support</SelectItem>
                          <SelectItem value="workshops">Workshops & Training</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="preferredContact" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Preferred Contact Method</Label>
                      <Select name="preferredContact">
                        <SelectTrigger className="rounded-xl border-[#E2E8F0] focus:ring-[#0D9488]">
                          <SelectValue placeholder="How would you like us to contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="video">Video Call</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Message *</Label>
                      <Textarea
                        name="message"
                        id="message"
                        required
                        placeholder="Tell us about your goals, challenges, or how we can support your journey..."
                        rows={5}
                        className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0D9488]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full text-base font-medium px-8 py-5 rounded-xl hover:opacity-90 transition-all border-none shadow-md mt-2"
                      style={{ backgroundColor: '#0B0F19', color: '#F8FAFC' }}
                    >
                      Send Message
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Location & Details Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-sans font-normal tracking-tight mb-6" style={{ color: '#0B0F19' }}>Our Location</h2>
                
                <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl overflow-hidden">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-sans font-normal tracking-tight mb-2" style={{ color: '#0B0F19' }}>The Mind Clarity Studio</h3>
                    
                    <div className="flex items-start space-x-3.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0D9488] border border-[#E2E8F0] mt-0.5">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider opacity-60" style={{ color: '#0B0F19' }}>Address</p>
                        <p className="text-sm font-light leading-relaxed mt-0.5" style={{ color: '#0B0F19' }}>
                          E-1206, PNTC (Times of India Press Road), Vejalpur, Ahmedabad - 380015
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0D9488] border border-[#E2E8F0]">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider opacity-60" style={{ color: '#0B0F19' }}>Phone</p>
                        <p className="text-sm font-light mt-0.5" style={{ color: '#0B0F19' }}>+91 79902 02179</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0D9488] border border-[#E2E8F0]">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider opacity-60" style={{ color: '#0B0F19' }}>Email</p>
                        <p className="text-sm font-light break-all mt-0.5" style={{ color: '#0B0F19' }}>contact@themindclaritystudio.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0D9488] border border-[#E2E8F0]">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider opacity-60" style={{ color: '#0B0F19' }}>Hours</p>
                        <p className="text-sm font-light mt-0.5" style={{ color: '#0B0F19' }}>Mon-Fri: 9:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border border-[#E2E8F0] shadow-sm rounded-2xl overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[#0D9488]">
                    <Users className="h-5 w-5" />
                    <h3 className="font-sans text-base font-normal tracking-tight" style={{ color: '#0B0F19' }}>
                      We're Here to Help
                    </h3>
                  </div>
                  <p className="text-xs font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                    Whether you're seeking emotional clarity, career direction, academic guidance, or personal growth — we're just a message away.
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 bg-[#0B0F19] text-center text-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-sans font-normal tracking-tight text-balance">
            Ready to Create Lasting{" "}
            <span className="font-serif italic font-light text-[#0D9488]">Change?</span>
          </h2>
          <p className="text-sm md:text-base font-light max-w-xl mx-auto opacity-80 leading-relaxed text-balance">
            Take the first step toward a clearer, stronger, and more fulfilling life.
          </p>
          <div className="pt-2">
            <Link href="/consultation">
              <Button size="lg" className="bg-[#0D9488] hover:opacity-90 text-white rounded-xl text-sm font-medium px-6 py-5 border-none transition-all shadow-sm">
                Book a Discovery Call
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