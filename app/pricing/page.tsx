import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"
import Image from "next/image"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Transparent <span className="text-cyan-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Invest in your mental clarity, emotional wellness, and personal growth with flexible, value-driven packages. 
              No hidden fees. Complete transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-2 border-gray-200 hover:border-cyan-600 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-serif font-bold">Clarity Starter</CardTitle>
                <CardDescription className="font-sans text-lg">Great for beginners seeking self-awareness</CardDescription>
                <div className="text-5xl font-serif font-black text-cyan-600 mt-6">₹4,500</div>
                <div className="text-gray-600 font-sans">per month</div>
                <div className="text-sm text-gray-500 font-sans mt-2">Billed monthly • Cancel anytime</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-gray-900 mb-2">4 Sessions</div>
                  <div className="text-gray-600 font-sans">per month</div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-gray-900">What's Included:</h4>
                  <ul className="space-y-3 font-sans">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      45-min coaching sessions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Self-awareness exercises
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Goal setting support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Email support (48-hour response)
                    </li>
                    <li className="flex items-center text-gray-400">
                      <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      Career or academic mentorship
                    </li>
                  </ul>
                </div>

                <Link href="/consultation" className="block">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Most Popular */}
            <Card className="border-2 border-cyan-600 relative shadow-xl">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-serif font-bold">Growth Accelerator</CardTitle>
                <CardDescription className="font-sans text-lg">Ideal for meaningful transformation</CardDescription>
                <div className="text-5xl font-serif font-black text-cyan-600 mt-6">₹7,500</div>
                <div className="text-gray-600 font-sans">per month</div>
                <div className="text-sm text-gray-500 font-sans mt-2">Most recommended • 6 sessions/month</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-gray-900 mb-2">6 Sessions</div>
                  <div className="text-gray-600 font-sans">per month</div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-gray-900">What's Included:</h4>
                  <ul className="space-y-3 font-sans">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      60-min personalized sessions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Emotional wellness tools
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Career or life coaching
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Weekly progress check-ins
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Resource library access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Priority email &amp; voice support
                    </li>
                  </ul>
                </div>

                <Link href="/consultation" className="block">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-gray-200 hover:border-cyan-600 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-serif font-bold">Transformation Mastery</CardTitle>
                <CardDescription className="font-sans text-lg">For deep, intensive support</CardDescription>
                <div className="text-5xl font-serif font-black text-cyan-600 mt-6">₹12,000</div>
                <div className="text-gray-600 font-sans">per month</div>
                <div className="text-sm text-gray-500 font-sans mt-2">8 sessions + premium benefits</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-gray-900 mb-2">8 Sessions</div>
                  <div className="text-gray-600 font-sans">per month</div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-gray-900">What's Included:</h4>
                  <ul className="space-y-3 font-sans">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      60-min deep coaching sessions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Career &amp; leadership mentorship
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Research/academic guidance (if needed)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Unlimited voice notes &amp; support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Custom tools &amp; workbooks
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Monthly progress review with Lavina
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                      Priority scheduling
                    </li>
                  </ul>
                </div>

                <Link href="/consultation" className="block">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-black text-gray-900 mb-4">Flexible &amp; Transparent</h2>
            <p className="text-lg text-gray-600 font-sans">All packages include a complimentary discovery call.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold text-gray-900">Session Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-sans">
                <div className="flex justify-between py-3 border-b">
                  <span>Single Session</span>
                  <span className="font-semibold">₹2,500</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span>3-Session Package</span>
                  <span className="font-semibold">₹6,750</span>
                </div>
                <div className="flex justify-between py-3">
                  <span>Workshops &amp; Group Programs</span>
                  <span className="font-semibold">Varies</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold text-gray-900">Payment Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-sans">
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-3" /> Monthly subscription</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-3" /> Quarterly packages (save 10%)</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-3" /> One-time intensive programs</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-3" /> Easy cancellation anytime</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Invest in Yourself?</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Book a free discovery call and find the perfect package for your growth journey.
          </p>
          <Link href="/consultation">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-sans">
              Book Discovery Call
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
              href="mailto:contact@themindclaritystudio.com"
              className="hover:text-cyan-400 transition-colors"
            >
              contact@themindclaritystudio.com
            </a>
          </p>
          <p> +91 79902 02179</p>
          <p> E-1206, PNTC (Times of India Press Road), Vejalpur, Ahmedabad - 380015</p>
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