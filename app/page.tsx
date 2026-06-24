'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle, Star, Heart } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#FCFCFA' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-20 md:pb-24 relative" style={{ backgroundColor: '#FCFCFA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 py-2 bg-white rounded-full px-5 shadow-sm mb-8 border border-[#EAF3F0]"
            >
              <Heart className="h-5 w-5" style={{ color: '#6E8F88' }} />
              <span className="text-sm font-medium" style={{ color: '#2F3437' }}>For Stronger Minds, Think Lavina</span>
            </motion.div>

            <h1 className="font-serif font-black text-[#2F3437] text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tighter mb-8">
              Build Clarity.<br />
              Strengthen Resilience.<br />
              <span style={{ color: '#6E8F88' }}>Create Meaningful Growth.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#2F3437]/70 max-w-3xl mx-auto leading-relaxed mb-12">
             The Mind Clarity Studio supports individuals through psychology, emotional wellness, education, mentorship, and personal development programs designed to foster resilience, self-awareness, and meaningful growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 rounded-2xl group hover:scale-[1.02] transition-all"
                  style={{ backgroundColor: '#6E8F88', color: 'white' }}
                >
                  Book a Consultation
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition" />
                </Button>
              </Link>

              <Link href="#services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 text-lg px-10 py-7 rounded-2xl hover:bg-[#EAF3F0] transition-all"
                  style={{ borderColor: '#6E8F88', color: '#6E8F88' }}
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: '#2F3437' }}>Who We Are</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#2F3437' }}>
                Founded by <span className="font-semibold" style={{ color: '#6E8F88' }}>Lavina Pratap Bhambhani</span>, 
               At The Mind Clarity Studio, we believe that mental clarity is the foundation of personal and professional well-being. Founded by Lavina Pratap Bhambhani, the studio brings together psychology, education, research, mentorship, and personal development to help individuals navigate challenges, build resilience, and achieve meaningful growth. Our mission is to empower people with evidence-based guidance, practical tools, and deeper self-awareness to support lasting mental wellness and personal development.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: "4+", label: "Years of Experience" },
                  { number: "100+", label: "Individuals Guided" },
                  { number: "10+", label: "Research & Publications" },
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold mb-1" style={{ color: '#6E8F88' }}>{stat.number}</div>
                    <p className="text-sm" style={{ color: '#2F3437' }}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/hero-lavina.jpg"
                alt="Lavina Pratap Bhambhani"
                width={600}
                height={700}
                className="rounded-3xl shadow-2xl object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
     {/* Services Section */}
<section id="services" className="py-20" style={{ backgroundColor: '#EAF3F0' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 
        className="text-4xl font-serif font-bold mb-3" 
        style={{ color: '#2F3437' }}
      >
        Our Services
      </h2>
      <p 
        className="text-xl max-w-2xl mx-auto" 
        style={{ color: '#2F3437' }}
      >
        Three pillars of support for your mental clarity and growth
      </p>
    </div>

    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-8"
    >
      {/* Mind Coaching */}
      <motion.div variants={fadeInUp}>
        <Card className="border-2 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full relative" 
              style={{ borderColor: '#6E8F88' }}>
          <CardHeader className="text-center pt-8 pb-4">   {/* Reduced padding */}
            <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110" 
                 style={{ backgroundColor: '#EAF3F0' }}>
              <Shield className="h-10 w-10" style={{ color: '#6E8F88' }} />
            </div>
            <CardTitle className="text-2xl font-serif" style={{ color: '#2F3437' }}>
              Mind Coaching
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-[#2F3437]/80 pt-1 pb-8">   {/* Reduced top padding */}
            Helping individuals strengthen emotional resilience, develop healthy thought patterns, and navigate life&apos;s challenges with confidence.
          </CardContent>
        </Card>
      </motion.div>

      {/* Education & Mentorship */}
      <motion.div variants={fadeInUp}>
        <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full relative" 
              style={{ borderColor: '#6E8F88' }}>
          <CardHeader className="text-center pt-8 pb-4">
            <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110" 
                 style={{ backgroundColor: '#EADFD4' }}>
              <Users className="h-10 w-10" style={{ color: '#C7A56A' }} />
            </div>
            <CardTitle className="text-2xl font-serif" style={{ color: '#2F3437' }}>
              Education & Mentorship
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-[#2F3437]/80 pt-1 pb-8">
            Guidance, mentorship, and learning experiences designed to foster lifelong growth, academic excellence, and professional development.
          </CardContent>
        </Card>
      </motion.div>

      {/* Professional Consultation */}
      <motion.div variants={fadeInUp}>
        <Card className="border-2 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full relative" 
              style={{ borderColor: '#6E8F88' }}>
          <CardHeader className="text-center pt-8 pb-4">
            <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110" 
                 style={{ backgroundColor: '#EAF3F0' }}>
              <TrendingUp className="h-10 w-10" style={{ color: '#6E8F88' }} />
            </div>
            <CardTitle className="text-2xl font-serif" style={{ color: '#2F3437' }}>
              Professional Consultation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-[#2F3437]/80 pt-1 pb-8">
            One-on-one coaching and consultation specifically designed for individual personal, academic, and professional growth.
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Final CTA */}
      <section className="py-24 text-white" style={{ backgroundColor: '#6E8F88' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <p className="text-xl mb-10 opacity-90">
            Take the first step toward greater clarity, confidence, and fulfillment.
          </p>
          <Link href="/consultation">
            <Button 
              size="lg" 
              className="text-lg px-12 py-7 rounded-2xl hover:scale-105 transition-all"
              style={{ backgroundColor: 'white', color: '#6E8F88' }}
            >
              Book Your Discovery Session
              <ArrowRight className="ml-3" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}