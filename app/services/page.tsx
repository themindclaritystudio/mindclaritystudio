import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, TrendingUp, Users, Calculator, ArrowRight, CheckCircle, Target, PieChart } from "lucide-react"
import Link from "next/link"
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"
import Image from "next/image"

export default function ServicesPage() {
  
const services = [
  {
    slug: "psychological-coaching",
    title: "Psychological Coaching",
    description:
      "Personalized coaching sessions focused on emotional well-being, self-awareness, resilience, confidence, and personal growth.",
    icon: Target,
    color: "cyan",
    features: [
      "Emotional Wellness",
      "Confidence Building",
      "Self-Awareness Development",
      "Personal Growth Strategies",
    ],
    minInvestment: "By Consultation",
    managementFee: "Customized Plans",
  },
  {
    slug: "career-guidance",
    title: "Career Guidance & Mentorship",
    description:
      "Helping students and professionals make informed career decisions, identify strengths, and create meaningful career paths.",
    icon: TrendingUp,
    color: "amber",
    features: [
      "Career Planning",
      "Student Mentorship",
      "Professional Development",
      "Goal Setting",
    ],
    minInvestment: "By Consultation",
    managementFee: "Customized Plans",
  },
  {
    slug: "research-consulting",
    title: "Research & Academic Consulting",
    description:
      "Guidance for researchers, scholars, and students in academic writing, research methodology, publications, and professional growth.",
    icon: Calculator,
    color: "cyan",
    features: [
      "Research Guidance",
      "Academic Writing Support",
      "Publication Mentorship",
      "Research Methodology",
    ],
    minInvestment: "By Consultation",
    managementFee: "Customized Plans",
  },
  {
    slug: "workshops-training",
    title: "Workshops & Training Programs",
    description:
      "Interactive workshops, webinars, and training programs focused on psychology, leadership, entrepreneurship, career development, and mental wellness.",
    icon: Users,
    color: "amber",
    features: [
      "Corporate Workshops",
      "Student Development Programs",
      "Leadership Training",
      "Mental Wellness Sessions",
    ],
    minInvestment: "By Consultation",
    managementFee: "Customized Plans",
  },
]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Our <span className="text-cyan-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Transformative programs in psychology, coaching, career guidance, and personal development designed to help you achieve clarity, confidence, and lasting growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              const bgColor = service.color === "cyan" ? "bg-cyan-100" : "bg-amber-100"
              const textColor = service.color === "cyan" ? "text-cyan-600" : "text-amber-600"
              const borderColor = service.color === "cyan" ? "border-cyan-600" : "border-amber-600"

              return (
                <Card key={service.slug} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-8 w-8 ${textColor}`} />
                    </div>
                    <CardTitle className="text-2xl font-serif font-bold text-gray-900">{service.title}</CardTitle>
                    <p className="text-gray-600 font-sans leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-serif font-bold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center font-sans text-gray-600">
                            <CheckCircle className="h-4 w-4 text-cyan-600 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-500 font-sans">Starting From</p>
                        <p className="font-serif font-bold text-gray-900">{service.minInvestment}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-sans">Program Type</p>
                        <p className="font-serif font-bold text-gray-900">{service.managementFee}</p>
                      </div>
                    </div>

                    <Link href={`/services/${service.slug}`}>
                      <Button
                        className={`w-full ${borderColor} ${textColor} hover:bg-cyan-50 bg-transparent`}
                        variant="outline"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Why Choose The Mind Clarity Studio?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Evidence-based approaches combined with compassionate, personalized guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <Shield className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Evidence-Based Methods</h3>
                <p className="text-gray-600 font-sans">
                  Rooted in proven psychological principles and latest research in mental wellness
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <Users className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Personalized Support</h3>
                <p className="text-gray-600 font-sans">
                  Every journey is unique. We tailor our coaching and mentorship to your specific goals and life stage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <TrendingUp className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Real Transformation</h3>
                <p className="text-gray-600 font-sans">
                  Focus on sustainable change, emotional resilience, and measurable personal growth
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A supportive, step-by-step approach to help you achieve meaningful and lasting transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600 font-sans">
                Initial consultation to understand your goals, challenges, and aspirations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 font-sans">
                Personalized evaluation to identify strengths, patterns, and growth opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Coaching Plan</h3>
              <p className="text-gray-600 font-sans">
                Creation of a tailored roadmap with clear strategies and milestones.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                4
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600 font-sans">
                Continuous guidance, accountability, and adjustments throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Book a consultation and take the first step toward greater clarity and personal transformation.
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