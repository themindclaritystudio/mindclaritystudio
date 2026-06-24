'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUpRight, Shield, TrendingUp, Users, CheckCircle, Star, Sparkles } from "lucide-react";

import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen antialiased selection:bg-[#0D9488] selection:text-white" style={{ backgroundColor: '#F8FAFC' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-12 md:pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 py-1.5 bg-white rounded-full px-4 shadow-[0_2px_8px_rgba(11,15,25,0.04)] mb-6 border border-[#E2E8F0]">
              <Sparkles className="h-4 w-4 text-[#0D9488]" />
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#0B0F19', opacity: 0.8 }}>For Stronger Minds, Think Lavina</span>
            </div>

            <h1 className="font-sans font-normal tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-balance" style={{ color: '#0B0F19' }}>
              Build Clarity, Strengthen Resilience,{" "}
              <span className="font-serif italic font-light text-[#0D9488] inline-block">
                Create Meaningful Growth.
              </span>
            </h1>

            <p className="text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-8 text-balance" style={{ color: '#0B0F19', opacity: 0.75 }}>
              The Mind Clarity Studio supports individuals through psychology,
              emotional wellness, education, mentorship, and personal development
              programs designed to foster resilience, self-awareness, and meaningful
              growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
              <Link href="/consultation" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base font-medium px-8 py-5 rounded-xl hover:opacity-90 transition-all shadow-md border-none"
                  style={{ backgroundColor: '#0B0F19', color: '#F8FAFC' }}
                >
                  Book a Consultation
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base font-medium px-8 py-5 rounded-xl bg-transparent transition-all"
                  style={{ borderColor: '#0B0F19', color: '#0B0F19' }}
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-12 md:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-4 md:space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block">Studio Identity</span>
              <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight" style={{ color: '#0B0F19' }}>
                Who We <span className="font-serif italic font-light">Are</span>
              </h2>

              <p className="text-base font-light leading-relaxed max-w-2xl" style={{ color: '#0B0F19', opacity: 0.85 }}>
                At The Mind Clarity Studio, we believe that mental clarity is the foundation of personal and professional well-being. Founded by <span className="font-normal" style={{ color: '#0B0F19' }}>Lavina Pratap Bhambhani</span>, the studio brings together psychology, education, research, mentorship, and personal development to help individuals navigate challenges, build resilience, and achieve meaningful growth. Our mission is to empower people with evidence-based guidance, practical tools, and deeper self-awareness to support lasting mental wellness and personal development.
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-[#E2E8F0]">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-4xl font-sans font-medium tracking-tight" style={{ color: '#0B0F19' }}>4+</div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase" style={{ color: '#0B0F19', opacity: 0.5 }}>Years Experience</div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-4xl font-sans font-medium tracking-tight" style={{ color: '#0B0F19' }}>100+</div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase" style={{ color: '#0B0F19', opacity: 0.5 }}>Individuals Guided</div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-4xl font-sans font-medium tracking-tight" style={{ color: '#0B0F19' }}>10+</div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase" style={{ color: '#0B0F19', opacity: 0.5 }}>Publications</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative aspect-[4/5] w-full max-w-sm p-3 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_30px_rgba(11,15,25,0.02)]" style={{ backgroundColor: '#F8FAFC' }}>
                <Image
                  src="/images/hero-lavina.jpg"
                  alt="Mind Clarity Studio session"
                  fill
                  className="rounded-xl object-cover hover:scale-[1.01] transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose The Mind Clarity Studio (Core Foundations) */}
      <section id="services" className="py-12 md:py-16" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">Core Foundations</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-light tracking-tight mb-3" style={{ color: '#0B0F19' }}>
              Why Individuals Trust The Mind Clarity Studio
            </h2>
            <p className="text-base font-light max-w-2xl mx-auto" style={{ color: '#0B0F19', opacity: 0.65 }}>
              We combine scientific insight with compassionate guidance to help you achieve lasting transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl overflow-hidden h-full flex flex-col justify-between group hover:border-[#0D9488] transition-all duration-300">
              <CardHeader className="p-5 pb-2 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#F8FAFC] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300" style={{ color: '#0B0F19' }}>
                  <Shield className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-sans font-normal tracking-tight transition-colors duration-300 group-hover:text-[#0D9488]" style={{ color: '#0B0F19' }}>
                  Evidence-Based Psychological Guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 pb-5 text-sm font-light text-center leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                Evidence-based psychological principles and practical strategies tailored to individual goals and challenges.
              </CardContent>
            </Card>

            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl overflow-hidden h-full flex flex-col justify-between group hover:border-[#0D9488] transition-all duration-300">
              <CardHeader className="p-5 pb-2 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#F8FAFC] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300" style={{ color: '#0B0F19' }}>
                  <TrendingUp className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-sans font-normal tracking-tight transition-colors duration-300 group-hover:text-[#0D9488]" style={{ color: '#0B0F19' }}>
                  Personalized Coaching &amp; Mentorship
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 pb-5 text-sm font-light text-center leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                One-on-one support designed around your goals, challenges, and life stage.
              </CardContent>
            </Card>

            <Card className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl overflow-hidden h-full flex flex-col justify-between group hover:border-[#0D9488] transition-all duration-300">
              <CardHeader className="p-5 pb-2 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#F8FAFC] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300" style={{ color: '#0B0F19' }}>
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-sans font-normal tracking-tight transition-colors duration-300 group-hover:text-[#0D9488]" style={{ color: '#0B0F19' }}>
                  Research-Driven Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 pb-5 text-sm font-light text-center leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                Integrating contemporary research in psychology, emotional well-being, learning, and human development.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section id="philosophy" className="py-12 md:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">Core Beliefs</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-light tracking-tight mb-3" style={{ color: '#0B0F19' }}>
              Our Philosophy
            </h2>
            <p className="text-base font-light max-w-2xl mx-auto" style={{ color: '#0B0F19', opacity: 0.65 }}>
              We believe in the power of the mind to create meaningful, lasting change.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#0D9488]">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-sans font-normal mb-1.5" style={{ color: '#0B0F19' }}>
                  Self-Awareness Creates Lasting Growth
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                  Meaningful growth begins with understanding yourself, your strengths, and your patterns.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#0D9488]">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-sans font-normal mb-1.5" style={{ color: '#0B0F19' }}>
                  Mental Wellness Fuels Success
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                  A healthy and balanced mind supports success, fulfillment, and resilience in everyday life.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#0D9488]">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-sans font-normal mb-1.5" style={{ color: '#0B0F19' }}>
                  Lifelong Learning Drives Transformation
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                  Continuous learning and reflection are essential for personal and professional development.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#0D9488]">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-sans font-normal mb-1.5" style={{ color: '#0B0F19' }}>
                  Every Individual Has Untapped Potential
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                  Every individual possesses unique strengths that can be nurtured through awareness, learning, and purposeful action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">The Methodology</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-light tracking-tight mb-3" style={{ color: '#0B0F19' }}>
              How It Works
            </h2>
            <p className="text-base font-light max-w-2xl mx-auto" style={{ color: '#0B0F19', opacity: 0.65 }}>
              Our structured approach ensures meaningful progress and sustainable results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            <div className="text-center space-y-3">
              <div className="w-10 h-10 text-[#F8FAFC] rounded-xl flex items-center justify-center mx-auto text-base font-medium shadow-sm" style={{ backgroundColor: '#0D9488' }}>
                1
              </div>
              <h3 className="text-base font-sans font-normal" style={{ color: '#0B0F19' }}>Discovery Session</h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                We begin by understanding your goals, challenges, and aspirations.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-10 h-10 text-[#F8FAFC] rounded-xl flex items-center justify-center mx-auto text-base font-medium shadow-sm" style={{ backgroundColor: '#0D9488' }}>
                2
              </div>
              <h3 className="text-base font-sans font-normal" style={{ color: '#0B0F19' }}>Personalized Assessment</h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                In-depth evaluation to identify strengths, patterns, and growth areas.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-10 h-10 text-[#F8FAFC] rounded-xl flex items-center justify-center mx-auto text-base font-medium shadow-sm" style={{ backgroundColor: '#0D9488' }}>
                3
              </div>
              <h3 className="text-base font-sans font-normal" style={{ color: '#0B0F19' }}>Growth Plan</h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                Creation of a tailored roadmap aligned with your unique needs.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-10 h-10 text-[#F8FAFC] rounded-xl flex items-center justify-center mx-auto text-base font-medium shadow-sm" style={{ backgroundColor: '#0D9488' }}>
                4
              </div>
              <h3 className="text-base font-sans font-normal" style={{ color: '#0B0F19' }}>Continuous Growth</h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                Ongoing guidance, check-ins, and adjustments as you progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-12 md:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">Validation</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-light tracking-tight mb-3" style={{ color: '#0B0F19' }}>
              Success Stories
            </h2>
            <p className="text-base font-light max-w-2xl mx-auto" style={{ color: '#0B0F19', opacity: 0.65 }}>
              Real transformations from individuals who found clarity and growth with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="border border-[#E2E8F0] bg-[#F8FAFC]/60 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <CardContent className="p-0">
                <div className="flex items-center mb-4 md:mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#0D9488] fill-current" />
                  ))}
                </div>

                <p className="font-light text-xs sm:text-sm leading-relaxed italic mb-6 md:mb-8" style={{ color: '#0B0F19', opacity: 0.85 }}>
                  "I have been working with Lavina for more than one and a half years and
                  I am truly delighted with the results she has helped me achieve. Her
                  Pencil Sketch technique is incredibly unique and remarkably accurate.
                  I've never experienced anything like it before.
                  <br /><br />
                  I have also attended her workshops and found her to be a phenomenal
                  trainer. Her sessions are engaging, insightful, and never boring.
                  Additionally, her one-on-one guidance has helped me immensely in both my
                  career and personal life.
                  <br /><br />
                  I trust Lavina wholeheartedly and highly recommend her services to
                  anyone seeking deeper self-understanding, clarity, and personal growth."
                </p>
              </CardContent>

              <div className="flex items-center gap-4 pt-4 border-t border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl text-[#F8FAFC] flex items-center justify-center font-medium text-sm flex-shrink-0" style={{ backgroundColor: '#0B0F19' }}>
                  AS
                </div>
                <div>
                  <div className="font-sans font-normal text-sm" style={{ color: '#0B0F19' }}>Mr. Anuj Sharma</div>
                  <div className="text-xs tracking-wide" style={{ color: '#0D9488' }}>Client & Workshop Participant</div>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border border-[#E2E8F0] bg-[#F8FAFC]/60 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <CardContent className="p-0">
                <div className="flex items-center mb-4 md:mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#0D9488] fill-current" />
                  ))}
                </div>

                <p className="font-light text-xs sm:text-sm leading-relaxed italic mb-6 md:mb-8" style={{ color: '#0B0F19', opacity: 0.85 }}>
                  "At a stage in life, I felt stuck, confused about my goals, and unsure
                  where my time was going. After taking sessions with Lavina at The Mind
                  Clarity Studio and sincerely following her guidance, I gradually gained
                  focus and direction.
                  <br /><br />
                  The most amazing part is that I didn't even realize when I started
                  achieving goals that once felt difficult. Lavina has a unique way of
                  helping you understand yourself, prioritize what truly matters, and take
                  consistent action.
                  <br /><br />
                  If you're looking for clarity in your personal or professional life, I
                  highly recommend her sessions. Thank you, Lavina, for helping me gain
                  clarity and confidence in my journey."
                </p>
              </CardContent>

              <div className="flex items-center gap-4 pt-4 border-t border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl text-white flex items-center justify-center font-medium text-sm flex-shrink-0" style={{ backgroundColor: '#0D9488' }}>
                  NN
                </div>
                <div>
                  <div className="font-sans font-normal text-sm" style={{ color: '#0B0F19' }}>Neeta Nihalani</div>
                  <div className="text-xs tracking-wide" style={{ color: '#0D9488' }}>Mind Coaching Client</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs & Services (Available Frameworks) */}
      <section id="pricing" className="py-12 md:py-16" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">Available Frameworks</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-light tracking-tight mb-3" style={{ color: '#0B0F19' }}>
              Programs &amp; Services
            </h2>
            <p className="text-base font-light max-w-2xl mx-auto" style={{ color: '#0B0F19', opacity: 0.65 }}>
              Comprehensive offerings designed to support your mental clarity and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border border-[#E2E8F0] bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#0D9488] transition-all duration-300">
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl font-sans font-normal tracking-tight transition-colors duration-300 group-hover:text-[#0D9488]" style={{ color: '#0B0F19' }}>
                  Mind Coaching
                </CardTitle>
                <CardDescription className="font-light text-sm pt-1" style={{ color: '#0B0F19', opacity: 0.65 }}>
                  Supporting emotional resilience, self-awareness, and personal growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-3 pb-5 border-t border-[#F8FAFC]">
                <ul className="space-y-2.5 font-light text-sm" style={{ color: '#0B0F19' }}>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#0D9488] flex-shrink-0" />
                    Emotional Clarity
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#0D9488] flex-shrink-0" />
                    Personal Development
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#0D9488] flex-shrink-0" />
                    Emotional Resilience Building
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 bg-white rounded-2xl overflow-hidden shadow-md flex flex-col justify-between relative group hover:border-[#0D9488] transition-all duration-300" style={{ borderColor: '#0B0F19' }}>
              <Badge className="absolute top-4 right-4 text-white uppercase tracking-wider text-[10px] font-bold border-none px-2.5 py-0.5 transition-colors duration-300 group-hover:bg-[#0D9488]" style={{ backgroundColor: '#0B0F19' }}>
                Featured
              </Badge>
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl font-sans font-normal tracking-tight transition-colors duration-300 group-hover:text-[#0D9488]" style={{ color: '#0B0F19' }}>
                  Education & Mentorship
                </CardTitle>
                <CardDescription className="font-light text-sm pt-1" style={{ color: '#0B0F19', opacity: 0.65 }}>
                  Academic guidance, research support, and lifelong learning.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-3 pb-5 border-t border-[#F8FAFC]">
                <ul className="space-y-2.5 font-light text-sm" style={{ color: '#0B0F19' }}>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#0B0F19] group-hover:text-[#0D9488] transition-colors duration-300" />
                    Research Guidance
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#0B0F19] group-hover:text-[#0D9488] transition-colors duration-300" />
                    Publications & Academic Writing
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#0B0F19] group-hover:text-[#0D9488] transition-colors duration-300" />
                    Mentorship & Professional Development
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-[#E2E8F0] bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#0D9488] transition-all duration-300">
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl font-sans font-normal tracking-tight transition-colors duration-300 group-hover:text-[#0D9488]" style={{ color: '#0B0F19' }}>
                  Professional Consultation
                </CardTitle>
                <CardDescription className="font-light text-sm pt-1" style={{ color: '#0B0F19', opacity: 0.65 }}>
                  Personalized one-on-one coaching designed around individual goals.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-3 pb-5 border-t border-[#F8FAFC]">
                <ul className="space-y-2.5 font-light text-sm" style={{ color: '#0B0F19' }}>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#0D9488] flex-shrink-0" />
                    1-on-1 Coaching Sessions
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#0D9488] flex-shrink-0" />
                    Personal & Professional Growth
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[#0D9488] flex-shrink-0" />
                    Goal-Oriented Guidance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">FAQ</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-light tracking-tight mb-3" style={{ color: '#0B0F19' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-base font-light max-w-2xl mx-auto" style={{ color: '#0B0F19', opacity: 0.65 }}>
              Common questions about our approach and services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="item-1" className="border border-[#E2E8F0] rounded-xl px-4 sm:px-6 bg-[#F8FAFC]/40">
              <AccordionTrigger className="text-left font-sans font-normal text-sm sm:text-base hover:no-underline py-4" style={{ color: '#0B0F19' }}>
                Who can benefit from coaching?
              </AccordionTrigger>
              <AccordionContent className="font-light pb-4 leading-relaxed text-xs sm:text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>
                Anyone seeking greater self-awareness, emotional balance, career clarity, or personal growth. Our clients range from students and young professionals to mid-career leaders and researchers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-[#E2E8F0] rounded-xl px-4 sm:px-6 bg-[#F8FAFC]/40">
              <AccordionTrigger className="text-left font-sans font-normal text-sm sm:text-base hover:no-underline py-4" style={{ color: '#0B0F19' }}>
                Are sessions available online?
              </AccordionTrigger>
              <AccordionContent className="font-light pb-4 leading-relaxed text-xs sm:text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>
                Yes, all coaching and mentorship sessions are available both online and in-person (in select cities in India), giving you flexibility and convenience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border border-[#E2E8F0] rounded-xl px-4 sm:px-6 bg-[#F8FAFC]/40">
              <AccordionTrigger className="text-left font-sans font-normal text-sm sm:text-base hover:no-underline py-4" style={{ color: '#0B0F19' }}>
                Is coaching different from therapy or counseling?
              </AccordionTrigger>
              <AccordionContent className="font-light pb-4 leading-relaxed text-xs sm:text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>
                Yes. Coaching focuses on personal growth, goal achievement, and self-development. Therapy and counseling address mental health concerns and emotional difficulties through clinical approaches.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-[#E2E8F0] rounded-xl px-4 sm:px-6 bg-[#F8FAFC]/40">
              <AccordionTrigger className="text-left font-sans font-normal text-sm sm:text-base hover:no-underline py-4" style={{ color: '#0B0F19' }}>
                What topics are covered?
              </AccordionTrigger>
              <AccordionContent className="font-light pb-4 leading-relaxed text-xs sm:text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>
                Topics include emotional wellness, stress &amp; anxiety management, career transitions, leadership skills, relationship dynamics, research productivity, and personal goal achievement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-[#E2E8F0] rounded-xl px-4 sm:px-6 bg-[#F8FAFC]/40">
              <AccordionTrigger className="text-left font-sans font-normal text-sm sm:text-base hover:no-underline py-4" style={{ color: '#0B0F19' }}>
                How do I schedule a consultation?
              </AccordionTrigger>
              <AccordionContent className="font-light pb-4 leading-relaxed text-xs sm:text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>
                You can book a discovery call directly through our website or by emailing us. We typically respond within 24 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-[#E2E8F0] rounded-xl px-4 sm:px-6 bg-[#F8FAFC]/40">
              <AccordionTrigger className="text-left font-sans font-normal text-sm sm:text-base hover:no-underline py-4" style={{ color: '#0B0F19' }}>
                Do you provide mentorship for students and researchers?
              </AccordionTrigger>
              <AccordionContent className="font-light pb-4 leading-relaxed text-xs sm:text-sm" style={{ color: '#0B0F19', opacity: 0.75 }}>
                Yes. We offer specialized academic and professional development programs targeted directly at navigating the psychological hurdles of intense academic structures.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}