import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Phone, Mail, MapPin, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"
import Image from "next/image"


export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Book Your <span className="text-cyan-600">Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Take the first step toward greater clarity, emotional well-being, and personal transformation. 
              Schedule a discovery call with Lavina Pratap Bhambhani.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultation Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif font-bold text-gray-900">Book Your Discovery Call</CardTitle>
                <p className="text-gray-600 font-sans">
                  Fill out the form below and we will get back to you within 24 hours to schedule your personalized consultation.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-sans">
                        First Name *
                      </Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-sans">
                        Last Name *
                      </Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-sans">
                      Email Address *
                    </Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-sans">
                      Phone Number *
                    </Label>
                    <Input id="phone" type="tel" placeholder="+91 79902 02179" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest" className="font-sans">
                      Area of Interest
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What would you like support with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emotional-wellness">Emotional Wellness &amp; Stress</SelectItem>
                        <SelectItem value="career-guidance">Career Guidance &amp; Mentorship</SelectItem>
                        <SelectItem value="personal-growth">Personal Growth &amp; Self-Awareness</SelectItem>
                        <SelectItem value="research-academic">Research &amp; Academic Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="font-sans">
                      Preferred Meeting Time
                    </Label>
                    <Select>
                      <SelectTrigger>
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

                  <div className="space-y-2">
                    <Label htmlFor="meetingType" className="font-sans">
                      Meeting Preference
                    </Label>
                    <Select>
                      <SelectTrigger>
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

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-sans">
                      Tell Us More About Your Goals
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Share your current challenges, goals, or what you hope to achieve..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm font-sans text-gray-600">
                      I agree to the{" "}
                      <Link href="/privacy" className="text-cyan-600 hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and consent to being contacted by The Mind Clarity Studio.
                    </Label>
                  </div>

                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg font-sans">
                    Book My Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Consultation Information */}
            <div className="space-y-8">
              {/* What to Expect */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-gray-900 mb-1">Discovery &amp; Understanding</h3>
                      <p className="text-gray-600 font-sans text-sm">
                        We’ll explore your goals, challenges, and aspirations in a supportive environment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-gray-900 mb-1">Personalized Guidance</h3>
                      <p className="text-gray-600 font-sans text-sm">
                        Receive clear insights and recommendations tailored to your unique journey.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-gray-900 mb-1">No Obligation</h3>
                      <p className="text-gray-600 font-sans text-sm">
                        The discovery call is completely free with no commitment required.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-gray-900">Phone</p>
                      <p className="text-gray-600 font-sans">+91 79902 02179</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-gray-900">Email</p>
                      <p className="text-gray-600 font-sans">info@themindclaritystudio.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-gray-900">Location</p>
                      <p className="text-gray-600 font-sans">Gujarat, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-gray-900">Hours</p>
                      <p className="text-gray-600 font-sans">Mon-Fri: 9 AM - 7 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-amber-50">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <TrendingUp className="h-12 w-12 text-cyan-600 mx-auto" />
                    <h3 className="text-xl font-serif font-bold text-gray-900">Our Impact</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-serif font-black text-cyan-600">10+</div>
                        <div className="text-sm text-gray-600 font-sans">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-serif font-black text-cyan-600">1000+</div>
                        <div className="text-sm text-gray-600 font-sans">Lives Impacted</div>
                      </div>
                      <div>
                        <div className="text-2xl font-serif font-black text-cyan-600">20+</div>
                        <div className="text-sm text-gray-600 font-sans">Research Contributions</div>
                      </div>
                      <div>
                        <div className="text-2xl font-serif font-black text-cyan-600">100+</div>
                        <div className="text-sm text-gray-600 font-sans">Workshops Delivered</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-black text-gray-900 mb-4">Consultation FAQs</h2>
            <p className="text-lg text-gray-600 font-sans">Common questions about our discovery calls.</p>
          </div>
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">How long is the consultation?</h3>
                <p className="text-gray-600 font-sans">
                  Discovery calls typically last 45-60 minutes, providing enough time to understand your needs and explore how we can support you.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  What should I prepare before the call?
                </h3>
                <p className="text-gray-600 font-sans">
                  Just come as you are. It helps to reflect on your current challenges and what you hope to achieve through coaching or mentorship.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Is there any cost for the consultation?
                </h3>
                <p className="text-gray-600 font-sans">
                  The initial discovery call is completely free and comes with no obligation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  What happens after the consultation?
                </h3>
                <p className="text-gray-600 font-sans">
                  We’ll discuss the best way forward — whether it’s a coaching program, mentorship, workshop, or customized support plan.
                </p>
              </CardContent>
            </Card>
          </div>
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
          <li>
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:text-cyan-400 transition-colors">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-xl font-bold text-white mb-6">Contact Info</h4>
        <div className="space-y-3 text-gray-400 font-sans">
          <p>
            {" "}
            <a
              href="mailto:info@themindclaritystudio.com"
              className="hover:text-cyan-400 transition-colors"
            >
              info@themindclaritystudio.com
            </a>
          </p>
          <p> +91 79902 02179</p>
          <p> Gujarat, India</p>
        </div>

        <div className="mt-8">
          <h5 className="text-white font-medium mb-3">Follow Us</h5>
          
          <div className="mt-6 flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/lavina-pratap-bhambhani-0176051a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.instagram.com/lavina_bhambhani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.facebook.com/lavina.bhambhani.77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
            >
              <FaFacebook size={24} />
            </a>

          </div>


        </div>
      </div>
    </div>

    {/* Copyright */}
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