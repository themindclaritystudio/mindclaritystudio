import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, UserCheck, Target, Briefcase, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"

export default function ProfessionalConsultationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-600 text-white mb-4">Our Flagship Service</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
                Professional <span className="text-cyan-600">Consultation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed">
                One-on-one coaching and consultation specifically designed for individual personal, academic, and professional growth. Receive expert guidance tailored to your unique goals and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/pms-img-1.jpg"
                alt="Professional consultation session"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Why Choose Professional Consultation?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Personalized one-on-one support to help you achieve clarity, growth, and success in all areas of life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <UserCheck className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">1-on-1 Coaching</h3>
                <p className="text-gray-600 font-sans text-sm">
                  Dedicated personal sessions focused entirely on your needs, challenges, and aspirations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <MapPin className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Personal Growth Planning</h3>
                <p className="text-gray-600 font-sans text-sm">
                  Create a clear roadmap for self-improvement, mindset shifts, and long-term personal development.
                </p>
              </CardContent>
            </Card>

            

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow md:col-span-2 xl:col-span-1">
              <CardContent className="pt-8 pb-8">
                <Target className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Goal-Oriented Guidance</h3>
                <p className="text-gray-600 font-sans text-sm">
                  Structured support to set meaningful goals, overcome obstacles, and track consistent progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">Our Consultation Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Holistic Assessment</h3>
                    <p className="text-gray-600 font-sans">
                      In-depth understanding of your current situation, strengths, challenges, and aspirations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Customized Strategy</h3>
                    <p className="text-gray-600 font-sans">
                      Tailored action plans designed specifically for your personal, academic, and professional goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Practical Implementation</h3>
                    <p className="text-gray-600 font-sans">
                      Actionable tools, techniques, and strategies you can apply immediately in real life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Regular Progress Review</h3>
                    <p className="text-gray-600 font-sans">
                      Ongoing accountability and adjustments to ensure steady growth and goal achievement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/pms-img-2.jpg"
                alt="Professional consultation session"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Comprehensive professional consultation designed to support your complete growth journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif font-bold text-gray-900">Personalized Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    One-on-one consultation sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    In-depth goal exploration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Mindset &amp; confidence coaching
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Action plan development
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif font-bold text-gray-900">Growth Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Career &amp; academic strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Personal development roadmap
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Progress tracking &amp; reviews
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Resource recommendations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif font-bold text-gray-900">Ongoing Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Between-session support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Accountability check-ins
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Customized worksheets &amp; tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Long-term success planning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Professional Consultation Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Starting from consultation • Fully Customized Plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-cyan-600 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif font-bold">Essential</CardTitle>
                <div className="text-4xl font-serif font-black text-cyan-600 mt-4">Custom</div>
                <div className="text-sm text-gray-600 font-sans">Starting from ₹6,999/month</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-lg font-serif font-bold text-gray-900">4 sessions/month</div>
                </div>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    45-minute sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Personalized guidance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Email support
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-600 relative shadow-xl">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500">Most Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif font-bold">Premium</CardTitle>
                <div className="text-4xl font-serif font-black text-cyan-600 mt-4">Custom</div>
                <div className="text-sm text-gray-600 font-sans">Starting from ₹9,999/month</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-lg font-serif font-bold text-gray-900">8 sessions/month</div>
                </div>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    60-minute sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Dedicated consultant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Resources &amp; follow-up
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-cyan-600 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif font-bold">Elite</CardTitle>
                <div className="text-4xl font-serif font-black text-cyan-600 mt-4">Custom</div>
                <div className="text-sm text-gray-600 font-sans">Starting from ₹15,999/month</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-lg font-serif font-bold text-gray-900">12 sessions/month</div>
                </div>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    60-minute sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Unlimited messaging
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Priority scheduling
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Book your consultation today and begin your personalized journey toward growth and success.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-sans">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
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
                <li>Education &amp; Mentorship</li>
                <li>Professional Consultation</li>
                <li>Career Guidance</li>
                <li>Workshops &amp; Training</li>
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