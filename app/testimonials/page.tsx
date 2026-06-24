import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, TrendingUp, Shield, Users,ArrowRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer";

import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"
import Image from "next/image"

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
      <section className="py-12 bg-white">
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
    "I have been working with Lavina for more than one and a half years and I am truly delighted with the results she has helped me achieve. Her unique approach and guidance have brought me remarkable clarity and growth. Her workshops are engaging, insightful, and highly impactful, while her one-on-one sessions have supported me through both professional and personal challenges. I wholeheartedly recommend her services to anyone seeking deeper self-understanding, confidence, and clarity in life."
  </p>

  <div className="flex items-center">
    <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center mr-4">
      <span className="font-bold text-cyan-600 text-lg">AS</span>
    </div>

    <div>
      <div className="font-serif font-bold text-gray-900 text-lg">
        Mr. Anuj Sharma
      </div>
      <div className="text-cyan-600 font-sans">
        Client & Workshop Participant
      </div>
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
    "At one stage in life, I felt stuck, confused about my goals, and constantly
    wondered where my time was going. After taking a few sessions with Lavina at
    The Mind Clarity Studio and sincerely following her guidance, I gradually
    gained focus and direction. The most amazing part was that I didn't even
    realize when I started achieving goals that once seemed so difficult.
    <br /><br />
    Lavina has a unique way of helping you understand yourself, prioritize what
    truly matters, and take consistent action. If you're looking for clarity in
    your personal or professional life, I highly recommend her sessions."
  </p>

  <div className="flex items-center">
    <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mr-4">
      <span className="font-bold text-amber-600 text-lg">NN</span>
    </div>

    <div>
      <div className="font-serif font-bold text-gray-900 text-lg">
        Neeta Nihalani
      </div>
      <div className="text-amber-600 font-sans">
       Mind Coaching Client
      </div>
    </div>
  </div>
</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      {/* <section className="py-20 bg-gray-50">
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
            {/* <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
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
        </div> */}
      {/* </section> */} 

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
                <div className="text-4xl font-serif font-black text-cyan-600 mb-2">100+</div>
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
   <Footer />
    </div>
  )
}