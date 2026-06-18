import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Shield, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              About <span className="text-cyan-500">The Mind Clarity Studio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Empowering individuals through psychology, emotional wellness, coaching, education, and personal transformation. 
              We help people build clarity, confidence, resilience, and meaningful growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                The Mind Clarity Studio was founded by Lavina Pratap Bhambhani, an International Author, Psychologist, 
                Educator, Researcher, and Mental Wellness Expert. The vision behind the studio is to create a safe space 
                where individuals can gain clarity, strengthen emotional well-being, and unlock their true potential.
              </p>
              <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                Through a combination of psychology, coaching, mentoring, workshops, and educational initiatives, 
                The Mind Clarity Studio supports students, professionals, entrepreneurs, and individuals navigating 
                personal and professional challenges.
              </p>
              <p className="text-lg text-gray-600 mb-8 font-sans leading-relaxed">
                Our mission is to help people make better decisions, build emotional resilience, improve self-awareness, 
                and create a fulfilling life through practical and evidence-based approaches to personal growth and mental wellness.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/pms-img-1.jpg"
                alt="The Mind Clarity Studio"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              The principles that guide every interaction and every transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We create a safe, ethical, and supportive environment where individuals can openly explore their 
                  thoughts, emotions, and aspirations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We are committed to delivering high-quality guidance, evidence-based practices, and meaningful 
                  support that creates lasting positive change.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Client Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  Every individual is unique. We provide personalized guidance, mentorship, and support tailored to 
                  each person&apos;s goals and journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Founder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Meet the visionary behind The Mind Clarity Studio
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="border-0 shadow-lg text-center max-w-md">
              <CardContent className="pt-6">
                <img
                  src="/images/hero-lavina.jpg"
                  alt="Lavina Pratap Bhambhani"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Lavina Pratap Bhambhani
                </h3>
                <p className="text-cyan-600 font-sans mb-4">
                  Psychologist • Author • Educator • Researcher
                </p>
                <p className="text-gray-600 font-sans text-sm">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A holistic, evidence-based methodology focused on meaningful personal transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Psychological Understanding</h3>
                    <p className="text-gray-600 font-sans">
                      Understanding thoughts, emotions, and behaviors to create lasting positive change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Personalized Guidance</h3>
                    <p className="text-gray-600 font-sans">
                      Providing tailored support that aligns with each individual&apos;s goals, challenges, and aspirations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Practical Transformation</h3>
                    <p className="text-gray-600 font-sans">
                      Offering actionable tools and strategies that can be applied in everyday life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Lifelong Growth</h3>
                    <p className="text-gray-600 font-sans">
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
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Trusted by individuals across India for meaningful transformation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-black text-cyan-600 mb-2">10+</div>
              <div className="text-gray-600 font-sans">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-black text-cyan-600 mb-2">1000+</div>
              <div className="text-gray-600 font-sans">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-black text-cyan-600 mb-2">20+</div>
              <div className="text-gray-600 font-sans">Research &amp; Publication Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-black text-cyan-600 mb-2">100+</div>
              <div className="text-gray-600 font-sans">Workshops &amp; Sessions Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Begin Your Journey of Growth?</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Take the first step toward greater clarity, confidence, emotional well-being, and personal transformation.
          </p>
          <Link href="/consultation">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-sans">
              Book a Consultation
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
                <li>Career Guidance</li>
                <li>Workshops &amp; Training</li>
                <li>Research &amp; Publications</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 font-sans">
                <li>
                  <Link href="/about" className="hover:text-cyan-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-cyan-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="hover:text-cyan-400 transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
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