import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Heart, Eye, Award, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"

export default function MindCoachingPage() {
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
                Mind <span className="text-cyan-600">Coaching</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed">
                Helping individuals strengthen emotional resilience, develop healthy thought patterns, and navigate life's challenges with confidence. Through personalized guidance, practical strategies, and compassionate support, we help you unlock your full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                {/* <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg bg-transparent"
                  >
                    View Pricing
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/pms-img-1.jpg"
                alt="Mind coaching session"
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
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Why Choose Mind Coaching?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A supportive and structured approach to mental clarity, emotional wellness, and personal growth.
            </p>
          </div>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto">
           
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Award className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Emotional Clarity</h3>
                <p className="text-gray-600 font-sans text-sm">
                 Develop greater self-awareness, strengthen emotional intelligence, and navigate life with clarity, balance, and confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Target className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Personal Development</h3>
                <p className="text-gray-600 font-sans text-sm">
                 Discover your strengths, overcome personal barriers, and cultivate the skills needed for meaningful personal and professional growth.
                </p>
              </CardContent>
            </Card>
             <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Heart className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Emotional Resilience</h3>
                <p className="text-gray-600 font-sans text-sm">
                  Build inner strength to handle stress, setbacks, and life's uncertainties.
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
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">Our Coaching Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Evidence-Based Methods</h3>
                    <p className="text-gray-600 font-sans">
                      Drawing from cognitive behavioral techniques, mindfulness, and positive psychology to support lasting change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Personalized Guidance</h3>
                    <p className="text-gray-600 font-sans">
                      Every coaching plan is tailored to your unique challenges, goals, and life circumstances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Practical Tools &amp; Strategies</h3>
                    <p className="text-gray-600 font-sans">
                      Learn actionable techniques you can apply immediately to improve your daily thoughts and behaviors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Ongoing Support &amp; Accountability</h3>
                    <p className="text-gray-600 font-sans">
                      Regular sessions and check-ins to help you stay on track and celebrate your progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/pms-img-2.jpg"
                alt="Mind coaching session"
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
              Comprehensive mind coaching services designed to support your personal growth journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif font-bold text-gray-900">Core Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Personalized 1:1 sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Goal setting &amp; clarity work
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Cognitive reframing tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Mindfulness practices
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif font-bold text-gray-900">Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Weekly or bi-weekly sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Progress tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Between-session resources
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Email &amp; voice note support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif font-bold text-gray-900">Growth Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Self-reflection exercises
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Habit building frameworks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Emotional regulation techniques
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Long-term maintenance plan
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
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Mind Coaching Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Choose the plan that best fits your growth journey and schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-cyan-600 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif font-bold">Essential</CardTitle>
                <div className="text-4xl font-serif font-black text-cyan-600 mt-4">₹4,999</div>
                <div className="text-sm text-gray-600 font-sans">Per month</div>
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
                    Goal setting support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Email follow-up
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
                <div className="text-4xl font-serif font-black text-cyan-600 mt-4">₹7,999</div>
                <div className="text-sm text-gray-600 font-sans">Per month</div>
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
                    Dedicated coach
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Resources &amp; worksheets
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
                <div className="text-4xl font-serif font-black text-cyan-600 mt-4">₹12,999</div>
                <div className="text-sm text-gray-600 font-sans">Per month</div>
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
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Transform Your Mindset?</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Book a consultation today and take the first step toward greater clarity, confidence, and emotional well-being.
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