import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle, Star } from "lucide-react"
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa"

import Navigation from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

    {/* Hero Section */}

<section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="font-serif font-black text-gray-900 mb-6 leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Build Clarity,
        <br />
        Strengthen Resilience,
        <br />
       
        <span className="text-cyan-600">
           Create{" "}Meaningful Growth.
        </span>
      </h1>

  <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto font-sans leading-relaxed px-2">
    The Mind Clarity Studio supports individuals through psychology,
    emotional wellness, education, mentorship, and personal development
    programs designed to foster resilience, self-awareness, and meaningful
    growth.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Link href="/consultation">
      <Button
        size="lg"
        className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg"
      >
        Book a Consultation
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Link>

    <Link href="/services">
      <Button
        size="lg"
        variant="outline"
        className="w-full sm:w-auto border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg bg-transparent"
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">
          Who We Are
        </h2>

        <p className="text-lg text-gray-600 mb-8 font-sans leading-relaxed">
          At The Mind Clarity Studio, we believe that mental clarity is the foundation of personal and professional well-being. Founded by  Lavina Pratap Bhambhani, the studio brings together psychology, education, research, mentorship, and personal development to help individuals navigate challenges, build resilience, and achieve meaningful growth. Our mission is to empower people with evidence-based guidance, practical tools, and deeper self-awareness to support lasting mental wellness and personal development.
        </p>

        <div className="grid grid-cols-3 gap-6 pt-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600">4+</div>
            <p className="mt-2 text-sm text-gray-600">
              Years of Experience
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600">100+</div>
            <p className="mt-2 text-sm text-gray-600">
              Individuals Guided
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600">10+</div>
            <p className="mt-2 text-sm text-gray-600">
              Research & Publications
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/images/hero-lavina.jpg"
          alt="Mind Clarity Studio session"
          className="h-[280px] md:h-[320px] lg:h-[600px] w-full rounded-2xl object-cover shadow-xl"
        />
      </div>
    </div>
  </div>
</section>

      {/* Why Choose The Mind Clarity Studio */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Why Individuals Trust The Mind Clarity Studio</h2>
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
                Evidence-based psychological principles and practical strategies tailored to individual goals and challenges.
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
                  Integrating contemporary research in psychology, emotional well-being, learning, and human development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
     <section id="philosophy" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
        Our Philosophy
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
        We believe in the power of the mind to create meaningful, lasting change.
      </p>
    </div>

    {/* Philosophy Points */}
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-10 w-10 text-cyan-600" />
        </div>
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
          Self-Awareness Creates Lasting Growth
        </h3>
        <p className="text-gray-600 font-sans leading-relaxed">
          Meaningful growth begins with understanding yourself, your strengths,
          and your patterns.
        </p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-10 w-10 text-cyan-600" />
        </div>
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
          Mental Wellness Fuels Success
        </h3>
        <p className="text-gray-600 font-sans leading-relaxed">
          A healthy and balanced mind supports success, fulfillment, and
          resilience in everyday life.
        </p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-10 w-10 text-cyan-600" />
        </div>
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
          Lifelong Learning Drives Transformation
        </h3>
        <p className="text-gray-600 font-sans leading-relaxed">
          Continuous learning and reflection are essential for personal and
          professional development.
        </p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-10 w-10 text-cyan-600" />
        </div>
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
          Every Individual Has Untapped Potential
        </h3>
        <p className="text-gray-600 font-sans leading-relaxed">
          Every individual possesses unique strengths that can be nurtured
          through awareness, learning, and purposeful action.
        </p>
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
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Personalized Growth Plan</h3>
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
      <CardTitle className="text-2xl font-serif font-bold">
        Mind Coaching
      </CardTitle>
      <CardDescription className="font-sans">
        Supporting emotional resilience, self-awareness, and personal growth.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3 font-sans text-sm">
        <li className="flex items-center">
          <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
          Emotional Clarity
        </li>
        <li className="flex items-center">
          <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
          Personal Development
        </li>
        <li className="flex items-center">
          <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
          Emotional Resilience Building
        </li>
      </ul>
    </CardContent>
  </Card>

  <Card className="border-2 border-cyan-600 shadow-xl relative">
    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500">
      Featured
    </Badge>

    <CardHeader>
      <CardTitle className="text-2xl font-serif font-bold">
        Education & Mentorship
      </CardTitle>
      <CardDescription className="font-sans">
        Academic guidance, research support, and lifelong learning.
      </CardDescription>
    </CardHeader>

    <CardContent>
      <ul className="space-y-3 font-sans text-sm">
        <li className="flex items-center">
          <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
          Research Guidance
        </li>
        <li className="flex items-center">
          <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
          Publications & Academic Writing
        </li>
        <li className="flex items-center">
          <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
          Mentorship & Professional Development
        </li>
      </ul>
    </CardContent>
  </Card>

  <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
    <CardHeader>
      <CardTitle className="text-2xl font-serif font-bold">
        Professional Consultation
      </CardTitle>
      <CardDescription className="font-sans">
        Personalized one-on-one coaching designed around individual goals.
      </CardDescription>
    </CardHeader>

    <CardContent>
      <ul className="space-y-3 font-sans text-sm">
        <li className="flex items-center">
          <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
          1-on-1 Coaching Sessions
        </li>
        <li className="flex items-center">
          <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
          Personal & Professional Growth
        </li>
        <li className="flex items-center">
          <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
          Goal-Oriented Guidance
        </li>
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
             <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                 Is coaching different from therapy or counseling?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
               Yes. Coaching focuses on personal growth, goal achievement, and self-development. Therapy and counseling address mental health concerns and emotional difficulties through clinical approaches              </AccordionContent>
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
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Begin Your Journey Toward Greater Clarity and Growth?</h2>
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