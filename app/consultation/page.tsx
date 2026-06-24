'use client';

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, Phone, Mail, MapPin, CheckCircle, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/footer";

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
              Thank <span className="font-serif italic font-light text-[#0D9488]">You!</span>
            </h2>
            <p className="text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
              We've received your consultation request. We will contact you within 24 hours to schedule your discovery call.
            </p>
            <div className="space-y-3 pt-2">
              <Link href="/">
                <Button 
                  className="w-full text-base font-medium px-6 py-5 rounded-xl hover:opacity-90 transition-all border-none"
                  style={{ backgroundColor: '#0B0F19', color: '#F8FAFC' }}
                >
                  Return to Homepage
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="w-full text-base font-medium px-6 py-5 rounded-xl transition-all border border-[#E2E8F0] hover:bg-[#F8FAFC]"
                style={{ color: '#0B0F19' }}
              >
                Book Another Consultation
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen antialiased selection:bg-[#0D9488] selection:text-white" style={{ backgroundColor: '#F8FAFC' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-20 relative bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-sans font-normal tracking-tight text-4xl md:text-6xl leading-tight mb-6 text-balance" style={{ color: '#0B0F19' }}>
              Book Your{" "}
              <span className="font-serif italic font-light text-[#0D9488] inline-block">
                Consultation
              </span>
            </h1>
            <p className="text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed text-balance" style={{ color: '#0B0F19', opacity: 0.75 }}>
              Take the first step toward greater clarity, emotional well-being, and personal transformation. 
              Schedule a discovery call with Lavina Pratap Bhambhani.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Consultation Form */}
            <div className="lg:col-span-7">
              <Card className="border border-[#E2E8F0] shadow-[0_10px_30px_rgba(11,15,25,0.02)] bg-white rounded-2xl overflow-hidden">
                <CardHeader className="p-6 md:p-8 pb-4">
                  <CardTitle className="text-2xl md:text-3xl font-sans font-normal tracking-tight mb-2" style={{ color: '#0B0F19' }}>
                    Book Your Discovery Call
                  </CardTitle>
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.65 }}>
                    Fill out the form below and we will get back to you within 24 hours to schedule your personalized consultation.
                  </p>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <form
                    action="https://formsubmit.co/contact@themindclaritystudio.com"
                    method="POST"
                    onSubmit={() => setTimeout(() => setIsSubmitted(true), 800)}
                    className="space-y-5"
                  >
                    {/* Hidden Fields */}
                    <input type="hidden" name="_subject" value="New Consultation Request - Mind Clarity Studio" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="firstName" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>First Name *</Label>
                        <Input name="firstName" id="firstName" placeholder="Enter your first name" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0D9488]" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lastName" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Last Name *</Label>
                        <Input name="lastName" id="lastName" placeholder="Enter your last name" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0D9488]" required />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Email Address *</Label>
                      <Input name="email" id="email" type="email" placeholder="Enter your email address" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0D9488]" required />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Phone Number *</Label>
                      <Input name="phone" id="phone" type="tel" placeholder="+91 79902 02179" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0D9488]" required />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="interest" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Area of Interest</Label>
                      <Select name="interest" required>
                        <SelectTrigger className="rounded-xl border-[#E2E8F0] focus:ring-[#0D9488]">
                          <SelectValue placeholder="What would you like support with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emotional-wellness">Emotional Wellness & Stress</SelectItem>
                          <SelectItem value="career-guidance">Career Guidance & Mentorship</SelectItem>
                          <SelectItem value="personal-growth">Personal Growth & Self-Awareness</SelectItem>
                          <SelectItem value="research-academic">Research & Academic Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="preferredTime" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Preferred Meeting Time</Label>
                      <Select name="preferredTime">
                        <SelectTrigger className="rounded-xl border-[#E2E8F0] focus:ring-[#0D9488]">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="meetingType" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Meeting Preference</Label>
                      <Select name="meetingType">
                        <SelectTrigger className="rounded-xl border-[#E2E8F0] focus:ring-[#0D9488]">
                          <SelectValue placeholder="Select meeting type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video-call">Video Call (Online)</SelectItem>
                          <SelectItem value="in-person">In-Person (Gujarat)</SelectItem>
                          <SelectItem value="phone-call">Phone Call</SelectItem>
                          <SelectItem value="no-preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="font-sans text-sm font-normal" style={{ color: '#0B0F19' }}>Tell Us More About Your Goals</Label>
                      <Textarea
                        name="message"
                        id="message"
                        placeholder="Share your current challenges, goals, or what you hope to achieve..."
                        rows={4}
                        className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0D9488]"
                      />
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <Checkbox id="terms" className="mt-1 flex-shrink-0 border-[#E2E8F0] data-[state=checked]:bg-[#0D9488] data-[state=checked]:border-[#0D9488]" required />
                      <label htmlFor="terms" className="text-xs font-light leading-normal cursor-pointer" style={{ color: '#0B0F19', opacity: 0.75 }}>
                        I agree to the{" "}
                        <Link href="/privacy" className="text-[#0D9488] hover:underline font-normal">
                          Privacy Policy
                        </Link>{" "}
                        and consent to being contacted by The Mind Clarity Studio.
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full text-base font-medium px-8 py-5 rounded-xl hover:opacity-90 transition-all border-none shadow-md"
                      style={{ backgroundColor: '#0B0F19', color: '#F8FAFC' }}
                    >
                      Book My Consultation
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* What to Expect */}
              <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl overflow-hidden">
                <CardHeader className="p-5 pb-3">
                  <CardTitle className="text-lg font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-4">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0D9488] border border-[#E2E8F0]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-normal mb-0.5" style={{ color: '#0B0F19' }}>Discovery & Understanding</h3>
                      <p className="font-light text-xs leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                        We’ll explore your goals, challenges, and aspirations in a supportive, zero-judgment environment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0D9488] border border-[#E2E8F0]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-normal mb-0.5" style={{ color: '#0B0F19' }}>Personalized Guidance</h3>
                      <p className="font-light text-xs leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                        Receive clear insights and frameworks tailored directly to your unique timeline and personal journey.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0D9488] border border-[#E2E8F0]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-normal mb-0.5" style={{ color: '#0B0F19' }}>No Obligation</h3>
                      <p className="font-light text-xs leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                        The initial discovery session is completely confidential with no dynamic commitments required.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl overflow-hidden">
                <CardHeader className="p-5 pb-3">
                  <CardTitle className="text-lg font-sans font-normal tracking-tight" style={{ color: '#0B0F19' }}>
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0B0F19] border border-[#E2E8F0]">
                      <Phone className="h-4 w-4 text-[#0D9488]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider opacity-60" style={{ color: '#0B0F19' }}>Phone</p>
                      <p className="text-sm font-light" style={{ color: '#0B0F19' }}>+91 79902 02179</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0B0F19] border border-[#E2E8F0]">
                      <Mail className="h-4 w-4 text-[#0D9488]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider opacity-60" style={{ color: '#0B0F19' }}>Email</p>
                      <p className="text-sm font-light break-all" style={{ color: '#0B0F19' }}>contact@themindclaritystudio.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0B0F19] border border-[#E2E8F0] mt-0.5">
                      <MapPin className="h-4 w-4 text-[#0D9488]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider opacity-60" style={{ color: '#0B0F19' }}>Location</p>
                      <p className="text-sm font-light leading-relaxed" style={{ color: '#0B0F19' }}>
                        E-1206, PNTC (Times of India Press Road), Vejalpur, Ahmedabad - 380015
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F8FAFC] text-[#0B0F19] border border-[#E2E8F0]">
                      <Clock className="h-4 w-4 text-[#0D9488]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider opacity-60" style={{ color: '#0B0F19' }}>Studio Hours</p>
                      <p className="text-sm font-light" style={{ color: '#0B0F19' }}>Mon - Fri: 9 AM - 7 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Soft Insight Card */}
              

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}