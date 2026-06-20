"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"
import Image from "next/image"

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Get In <span className="text-cyan-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Ready to begin your journey toward greater clarity, confidence, and personal transformation? 
              We're here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 font-sans mb-4">Speak directly with Lavina</p>
                <a href="tel:+917990202179" className="text-cyan-600 hover:text-cyan-700 font-sans font-medium text-lg">
                  +91 79902 02179
                </a>
                <p className="text-sm text-gray-500 font-sans mt-2">Mon-Fri: 9:00 AM - 7:00 PM</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 font-sans mb-4">Send us your questions anytime</p>
                <a
                  href="mailto:info@themindclaritystudio.com"
                  className="text-cyan-600 hover:text-cyan-700 font-sans font-medium"
                >
                  info@themindclaritystudio.com
                </a>
                <p className="text-sm text-gray-500 font-sans mt-2">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Book a Call</h3>
                <p className="text-gray-600 font-sans mb-4">Schedule a discovery consultation</p>
                <Link href="/consultation">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900 flex items-center">
                    <MessageSquare className="h-6 w-6 text-cyan-600 mr-3" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600 font-sans">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://formsubmit.co/themindclaritystudiobylavina@gmail.com"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* Hidden Fields for FormSubmit */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission - Mind Clarity Studio" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 font-sans">
                          First Name *
                        </Label>
                        <Input
                          name="firstName"
                          id="firstName"
                          type="text"
                          required
                          placeholder="Your first name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 font-sans">
                          Last Name *
                        </Label>
                        <Input
                          name="lastName"
                          id="lastName"
                          type="text"
                          required
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 font-sans">
                          Email Address *
                        </Label>
                        <Input
                          name="email"
                          id="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700 font-sans">
                          Phone Number *
                        </Label>
                        <Input
                          name="phone"
                          id="phone"
                          type="tel"
                          required
                          placeholder="+91 79902 02179"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-sm font-medium text-gray-700 font-sans">
                        Area of Interest *
                      </Label>
                      <Select name="interest" required>
                        <SelectTrigger>
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

                    <div className="space-y-2">
                      <Label htmlFor="preferredContact" className="text-sm font-medium text-gray-700 font-sans">
                        Preferred Contact Method
                      </Label>
                      <Select name="preferredContact">
                        <SelectTrigger>
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

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 font-sans">
                        Message *
                      </Label>
                      <Textarea
                        name="message"
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us about your goals, challenges, or how we can support your journey..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 font-sans"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Location */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-black text-gray-900 mb-8">Our Location</h2>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">The Mind Clarity Studio</h3>
                        <div className="space-y-2 text-gray-600 font-sans">
                          <p className="flex items-start">
                            <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                            E-1206, PNTC (Times of India Press Road), Vejalpur, Ahmedabad - 380015
                          </p>
                          <p className="flex items-center">
                            <Phone className="h-4 w-4 text-gray-400 mr-2" />
                            +91 79902 02179
                          </p>
                          <p className="flex items-center">
                            <Mail className="h-4 w-4 text-gray-400 mr-2" />
                            info@themindclaritystudio.com
                          </p>
                          <p className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-400 mr-2" />
                            Mon-Fri: 9:00 AM - 7:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg bg-cyan-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="h-6 w-6 text-cyan-600 mr-3" />
                    We're Here to Help
                  </h3>
                  <p className="text-gray-700 font-sans leading-relaxed">
                    Whether you're seeking emotional clarity, career direction, academic guidance, or personal growth — 
                    we're just a message away.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Create Lasting Change?</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Take the first step toward a clearer, stronger, and more fulfilling life.
          </p>
          <Link href="/consultation">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-sans">
              Book a Discovery Call
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-start">
              <Link href="/" className="mb-6">
                <Image
                  src="/images/logo.png"
                  alt="The Mind Clarity Studio"
                  width={320}
                  height={120}
                  priority
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </Link>
              <p className="max-w-xs text-gray-400 text-lg leading-relaxed font-sans">
                For Stronger Minds, Think Lavina.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400 font-sans">
                <li>Psychological Coaching</li>
                <li>Career Guidance &amp; Mentorship</li>
                <li>Research &amp; Academic Consulting</li>
                <li>Workshops &amp; Training</li>
                <li>Personal Development Programs</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400 font-sans">
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
                <li><Link href="/testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</Link></li>
                <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-400 font-sans">
                <p>
                  <a href="mailto:info@themindclaritystudio.com" className="hover:text-cyan-400 transition-colors">
                    info@themindclaritystudio.com
                  </a>
                </p>
                <p>+91 79902 02179</p>
                <p>E-1206, PNTC (Times of India Press Road), Vejalpur, Ahmedabad - 380015</p>
              </div>

              <div className="mt-8">
                <h5 className="text-white font-medium mb-3">Follow Us</h5>
                <div className="mt-6 flex items-center gap-5">
                  <a href="https://www.linkedin.com/in/lavina-pratap-bhambhani-0176051a9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://www.instagram.com/lavina_bhambhani/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://www.facebook.com/lavina.bhambhani.77" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110">
                    <FaFacebook size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-400 font-sans">
              © 2026 The Mind Clarity Studio. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}