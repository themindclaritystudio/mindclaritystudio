"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  ArrowDown,
  BookOpen, 
  Heart, 
  TrendingUp, 
  Award,
  GraduationCap,
  Layers,
  Quote,
  Star,
  Globe
} from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function InternshipPage() {
  const scrollToApply = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const target = document.getElementById("apply-now-form")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen antialiased selection:bg-[#0D9488] selection:text-white" style={{ backgroundColor: '#F8FAFC' }}>
      <Navigation />

      {/* Centered Hero Section */}
      <section className="pt-12 pb-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2.5 mb-6 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488]">Applications Open</span>
          </div>
          
          <h1 className="font-sans tracking-tight text-4xl md:text-6xl leading-tight text-[#0B0F19] text-balance">
            The Mind Clarity Studio{" "}
            <span className="font-serif italic font-light text-[#0D9488]">
              By Lavina
            </span>
          </h1>
          
          <p
            className="mt-6 text-lg font-light leading-relaxed max-w-2xl mx-auto text-balance"
            style={{ color: "#0B0F19", opacity: .75 }}
          >
            Bridging the gap between theoretical learning and real-world application. Access structured, skill-oriented Course cum Internship Programs designed to elevate professional readiness, research execution, and applied psychology.
          </p>

          {/* Primary Action Array */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToApply}
              className="w-full sm:w-auto bg-[#0D9488] hover:bg-[#0f766e] text-white rounded-xl text-sm font-medium px-8 py-3.5 inline-flex items-center justify-center transition-all shadow-sm group"
            >
              Apply Now
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <Link href="/courses/#curriculum" className="w-full sm:w-auto">
              <span className="text-sm font-medium text-[#0B0F19] opacity-70 hover:opacity-100 transition-opacity py-3 inline-block">
                Explore Core Curriculums →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mt-16 pt-8 border-t border-[#E2E8F0]">
            <div>
              <div className="text-2xl md:text-3xl font-normal text-[#0D9488]">Hybrid</div>
              <div className="text-xs mt-1 font-light" style={{ color: "#0B0F19", opacity: 0.65 }}>
                Online + Offline Delivery
              </div>
            </div>
            <div> 
              <div className="text-2xl md:text-3xl font-normal text-[#0D9488]">Live</div> 
              <div className="text-xs mt-1 font-light" style={{ color: "#0B0F19", opacity: .65 }} > 
                Mentorship & Guidance
              </div> 
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-normal text-[#0D9488]">100%</div>
              <div className="text-xs mt-1 font-light" style={{ color: "#0B0F19", opacity: 0.65 }}>
                Practical & Beginner Friendly
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Apply Now Section */}
<section id="apply-now-form" className="py-20 bg-[#0B0F19] text-[#F8FAFC]">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 mb-8">
    <div className="space-y-3">
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D9488]">Program Registration</span>
      <h2 className="text-3xl md:text-5xl font-sans font-normal tracking-tight text-balance">
        Submit Your{" "}
        <span className="font-serif italic font-light text-[#0D9488]">Candidacy Application</span>
      </h2>
      <p className="text-sm md:text-base font-light max-w-lg mx-auto opacity-70 leading-relaxed text-balance">
        Select your preferred training domain to coordinate registration parameters through your university placement cell.
      </p>
    </div>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-xl max-w-xl mx-auto">
    <form 
      action="https://formsubmit.co/contact@themindclaritystudio.com" 
      method="POST"
      className="space-y-5"
    >
      {/* FormSubmit Configuration Settings */}
      <input type="hidden" name="_subject" value="New Cohort Enrollment & Internship Request" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      {/* First & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-xs font-medium text-white/70">
            First Name <span className="text-[#0D9488]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Alex"
            className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-white/30 focus:border-[#0D9488] focus:outline-none transition"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="text-xs font-medium text-white/70">
            Last Name <span className="text-[#0D9488]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Carter"
            className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-white/30 focus:border-[#0D9488] focus:outline-none transition"
          />
        </div>
      </div>

      {/* Email & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-medium text-white/70">
            Email Address <span className="text-[#0D9488]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="alex@domain.com"
            className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-white/30 focus:border-[#0D9488] focus:outline-none transition"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="mobile" className="text-xs font-medium text-white/70">
            Mobile Number <span className="text-[#0D9488]">*</span>
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-white/30 focus:border-[#0D9488] focus:outline-none transition"
          />
        </div>
      </div>

      {/* University */}
      <div className="space-y-2">
        <label htmlFor="university" className="text-xs font-medium text-white/70">
          University / Academic Institution <span className="text-[#0D9488]">*</span>
        </label>
        <input
          id="university"
          name="university"
          type="text"
          required
          placeholder="Gujarat University"
          className="w-full h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/30 transition-all focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20"
        />
      </div>

      {/* Program */}
      <div className="space-y-2">
        <label htmlFor="track" className="text-xs font-medium text-white/70">
          Select Program Track <span className="text-[#0D9488]">*</span>
        </label>
        <select
          id="track"
          name="track"
          required
          defaultValue=""
          className="w-full h-12 rounded-xl bg-[#111827] border border-white/10 px-4 text-sm text-white focus:border-[#0D9488] focus:outline-none transition"
        >
          <option value="" disabled hidden>
            Choose your program
          </option>
          <option value="research-methodology" className="bg-[#111827] text-white">
            Research Methodology Made Easy (Publication Focused)
          </option>
          <option value="counseling-foundation" className="bg-[#111827] text-white">
            Foundation of Counseling (Non-Clinical)
          </option>
          <option value="business-development" className="bg-[#111827] text-white">
            Business Development from a Psychological Lens
          </option>
        </select>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full h-12 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white font-medium transition-all shadow-md cursor-pointer border-none flex items-center justify-center"
        >
          Submit Application
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  </div>
</section>

      <Footer />
    </div>
  )
}