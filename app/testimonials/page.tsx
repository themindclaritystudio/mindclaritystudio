import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, TrendingUp, Shield, Users,ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Real <span className="text-cyan-600">Transformations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Hear from individuals whose lives have changed through greater clarity, emotional resilience, 
              career breakthroughs, and personal growth with The Mind Clarity Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-white">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-cyan-600 mb-6" />
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 font-sans mb-6 italic leading-relaxed">
                  "Working with Lavina completely transformed how I handle stress and make decisions. After just a few months, 
                  I gained clarity on my career path and finally made the transition I've been dreaming about for years. 
                  I feel more confident and balanced than ever."
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/avatar/avatar-1.jpg"
                    alt="Neha Gupta"
                    className="w-15 h-15 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-serif font-bold text-gray-900 text-lg">Neha Gupta</div>
                    <div className="text-cyan-600 font-sans">Marketing Professional</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-white">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-amber-600 mb-6" />
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 font-sans mb-6 italic leading-relaxed">
                  "The mentorship and emotional support I received during my PhD journey was invaluable. Lavina helped me 
                  overcome imposter syndrome, improve my research productivity, and successfully publish my first paper. 
                  I can't recommend her enough."
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/avatar/avatar-4.jpg"
                    alt="Dr. Meera Sharma"
                    className="w-15 h-15 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-serif font-bold text-gray-900 text-lg">Dr. Meera Sharma</div>
                    <div className="text-amber-600 font-sans">Research Scholar</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Real people. Real growth. Real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "The career guidance sessions helped me transition from a stagnant job to a leadership role that aligns 
                  with my values. I finally feel fulfilled and purposeful in my work."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/avatar-2.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Arjun Rao</div>
                    <div className="text-sm text-gray-600 font-sans">Software Engineer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "I learned how to manage anxiety and build emotional resilience. The tools and techniques I gained 
                  have improved every area of my life — relationships, work, and self-confidence."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/avatar-3.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Priya Malhotra</div>
                    <div className="text-sm text-gray-600 font-sans">Homemaker & Entrepreneur</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "The workshop on leadership and communication helped me step up as a team leader. My colleagues have 
                  noticed a positive change in my approach and confidence."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/avatar-5.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Rahul Sharma</div>
                    <div className="text-sm text-gray-600 font-sans">Team Lead, IT Company</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Testimonials */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "As a student, the academic and research mentorship helped me clarify my thesis direction and 
                  significantly improve my writing and presentation skills."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/avatar-6.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Ananya Patel</div>
                    <div className="text-sm text-gray-600 font-sans">M.Sc. Student</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "I regained control over my emotions and built healthier relationships. The journey has been life-changing."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/avatar-7.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Siddharth Rao</div>
                    <div className="text-sm text-gray-600 font-sans">Business Owner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "The personal development program helped me discover my true potential and set meaningful goals for the future."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/avatar-8.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Kiran Desai</div>
                    <div className="text-sm text-gray-600 font-sans">Corporate Professional</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Lives transformed through clarity, growth, and resilience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <TrendingUp className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                <div className="text-4xl font-serif font-black text-cyan-600 mb-2">92%</div>
                <div className="text-lg font-serif font-bold text-gray-900 mb-2">Reported Significant Growth</div>
                <div className="text-gray-600 font-sans">
                  In self-awareness and emotional well-being
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <Shield className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <div className="text-4xl font-serif font-black text-amber-600 mb-2">98%</div>
                <div className="text-lg font-serif font-bold text-gray-900 mb-2">Client Satisfaction</div>
                <div className="text-gray-600 font-sans">
                  Would highly recommend our services
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <Users className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                <div className="text-4xl font-serif font-black text-cyan-600 mb-2">1000+</div>
                <div className="text-lg font-serif font-bold text-gray-900 mb-2">Lives Impacted</div>
                <div className="text-gray-600 font-sans">
                  Through coaching, mentorship, and workshops
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Begin your journey toward clarity, confidence, and meaningful transformation today.
          </p>
          <Link href="/consultation">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-sans">
              Book Your Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-black text-cyan-400 mb-4">The Mind Clarity Studio</h3>
              <p className="text-gray-400 font-sans mb-4">
                For Stronger Minds, Think Lavina.
              </p>
              <p className="text-sm text-gray-400 font-sans">
                Psychology • Coaching • Emotional Wellness • Personal Growth
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 font-sans">
                <li>Psychological Coaching</li>
                <li>Career Guidance & Mentorship</li>
                <li>Research & Academic Consulting</li>
                <li>Workshops & Training</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 font-sans">
                <li><Link href="/about" className="hover:text-cyan-400">About</Link></li>
                <li><Link href="/services" className="hover:text-cyan-400">Services</Link></li>
                <li><Link href="/testimonials" className="hover:text-cyan-400">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400 font-sans">
                <p>📧 <a href="mailto:info@themindclaritystudio.com" className="hover:text-cyan-400">info@themindclaritystudio.com</a></p>
                <p>📞 +91 79902 02179</p>
                <p>📍 Gujarat, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-sans">
              © 2026 The Mind Clarity Studio. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}