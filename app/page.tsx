import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle, Star } from "lucide-react"
import Navigation from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Transform Your <span className="text-cyan-600">Mind. Transform Your Life.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              The Mind Clarity Studio empowers individuals through psychology, coaching, emotional wellness, career guidance, and personal growth programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg bg-transparent"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                At The Mind Clarity Studio, we believe that mental clarity is the foundation of personal and professional success. 
                Founded by Lavina Pratap Bhambhani, the studio integrates psychology, coaching, education, research, and mentorship 
                to help individuals navigate challenges, build resilience, and achieve meaningful transformation.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-serif font-black text-cyan-600">10+</div>
                  <div className="text-sm text-gray-600 font-sans">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-black text-cyan-600">1000+</div>
                  <div className="text-sm text-gray-600 font-sans">Individuals Guided</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-black text-cyan-600">20+</div>
                  <div className="text-sm text-gray-600 font-sans">Research &amp; Publication Contributions</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero-lavina.jpg"
                alt="Mind Clarity Studio session"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose The Mind Clarity Studio */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Why Choose The Mind Clarity Studio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              We combine scientific insight with compassionate guidance to help you achieve lasting transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Evidence-Based Psychological Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  Proven psychological frameworks and therapeutic approaches tailored to your unique needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Personalized Coaching &amp; Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  One-on-one support designed around your goals, challenges, and life stage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Research-Driven Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  Integration of latest research in psychology, emotional wellness, and human development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section id="philosophy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Our Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              We believe in the power of the mind to create meaningful, lasting change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Self-awareness creates lasting growth</h3>
                    <p className="text-gray-600 font-sans">
                      True transformation begins with deep understanding of yourself.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Mental wellness fuels success</h3>
                    <p className="text-gray-600 font-sans">
                      A clear and balanced mind unlocks greater potential in every area of life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Lifelong learning drives transformation</h3>
                    <p className="text-gray-600 font-sans">
                      Continuous growth and learning are essential for personal evolution.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Every individual has untapped potential</h3>
                    <p className="text-gray-600 font-sans">
                      We help you discover and harness the strengths within you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/pms-img-1.jpg"
                alt="Mindfulness and personal growth"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Our structured approach ensures meaningful progress and sustainable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Discovery Session</h3>
              <p className="text-gray-600 font-sans">
                We begin by understanding your goals, challenges, and aspirations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Personalized Assessment</h3>
              <p className="text-gray-600 font-sans">
                In-depth evaluation to identify strengths, patterns, and growth areas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Coaching / Mentorship Plan</h3>
              <p className="text-gray-600 font-sans">
                Creation of a tailored roadmap aligned with your unique needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                4
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Continuous Growth &amp; Support</h3>
              <p className="text-gray-600 font-sans">
                Ongoing guidance, check-ins, and adjustments as you progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Real transformations from individuals who found clarity and growth with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "The career guidance sessions helped me transition into a role that truly aligns with my values and strengths. I feel confident and fulfilled."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/avatar-1.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Neha Gupta</div>
                    <div className="text-sm text-gray-600 font-sans">Marketing Professional</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "Working with Lavina transformed how I manage stress and relationships. My personal growth journey has been life-changing."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/avatar-4.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Arjun Rao</div>
                    <div className="text-sm text-gray-600 font-sans">Entrepreneur</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "The mentorship program gave me clarity during my PhD journey. The research guidance and emotional support were invaluable."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/avatar-5.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Dr. Meera Sharma</div>
                    <div className="text-sm text-gray-600 font-sans">Research Scholar</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs & Services */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Programs &amp; Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Comprehensive offerings designed to support your mental clarity and personal growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold">Psychological Coaching</CardTitle>
                <CardDescription className="font-sans">Deep therapeutic support for emotional wellness</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-sans text-sm">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /> Anxiety &amp; stress management</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /> Emotional regulation</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /> Self-esteem building</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-600 shadow-xl relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500">Recommended</Badge>
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold">Career Guidance &amp; Mentorship</CardTitle>
                <CardDescription className="font-sans">Strategic support for professional growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-sans text-sm">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /> Career transition planning</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /> Leadership development</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /> Interview &amp; negotiation skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold">Personal Development Programs</CardTitle>
                <CardDescription className="font-sans">Group workshops and self-paced journeys</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-sans text-sm">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /> Mindfulness &amp; resilience</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /> Goal setting &amp; habit building</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /> Research &amp; Academic Consulting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 font-sans">
              Common questions about our approach and services.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                Who can benefit from coaching?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                Anyone seeking greater self-awareness, emotional balance, career clarity, or personal growth. Our clients range from students and young professionals to mid-career leaders and researchers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                Are sessions available online?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                Yes, all coaching and mentorship sessions are available both online and in-person (in select cities in India), giving you flexibility and convenience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                What topics are covered?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                Topics include emotional wellness, stress &amp; anxiety management, career transitions, leadership skills, relationship dynamics, research productivity, and personal goal achievement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                How do I schedule a consultation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                You can book a discovery call directly through our website or by emailing us. We typically respond within 24 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                Do you provide mentorship for students and researchers?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                Yes. We offer specialized academic and research mentorship, including thesis guidance, publication support, and career planning for scholars and students.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Create Lasting Change?</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Take the first step toward greater clarity, confidence, and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-sans">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
<Link href="/" className="flex items-center">
  <Image
    src="images/logo.png"
    alt="The Mind Clarity Studio"
    width={220}
    height={70}
    className="h-10 md:h-12 lg:h-14 w-auto object-contain"
    priority
  />
</Link>              <p className="text-gray-400 font-sans mb-4">
                For Stronger Minds, Think Lavina.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 font-sans">
                <li>Psychological Coaching</li>
                <li>Career Guidance &amp; Mentorship</li>
                <li>Personal Development Programs</li>
                <li>Workshops &amp; Speaking</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 font-sans">
                <li>
                  <Link href="/about" className="hover:text-cyan-400 transition-colors">
                    About Us
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
                <p>📍 India</p>
              </div>
              <div className="mt-4 flex gap-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-sans">
              © 2026 The Mind Clarity Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}