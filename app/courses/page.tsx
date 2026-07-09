"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  GraduationCap, 
  Search, 
  Heart, 
  Briefcase, 
  Compass,
  FileText,
  MessageSquare,
  BarChart3,
  Download
} from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function CoursesPage() {
  return (
    <div className="min-h-screen antialiased selection:bg-[#0D9488] selection:text-white" style={{ backgroundColor: '#F8FAFC' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">Empower Your Growth</span>
              <h1 className="font-sans tracking-tight text-4xl md:text-6xl leading-tight text-[#0B0F19]">
                Transformative{" "}
                <span className="font-serif italic font-light text-[#0D9488]">
                  Programs
                </span>
                {" "}for Seekers & Achievers
              </h1>
              <p
                className="mt-6 text-lg font-light leading-relaxed max-w-xl"
                style={{ color: "#0B0F19", opacity: .75 }}
              >
                Deepen your understanding, master research methodologies, and learn to apply advanced psychological 
                principles to counseling, personal growth, and business development.
              </p>

              {/* Core Action Button Group */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="/brochure.pdf" 
                  download="TMCS_Programs_Brochure.pdf"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full bg-[#0B0F19] hover:bg-[#111827] text-white rounded-xl text-sm font-medium px-6 py-5 border-none transition-all shadow-sm flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Brochure
                  </Button>
                </a>
                <Link href="/internship/#apply-now-form" className="w-full sm:w-auto">
                  <Button className="w-full bg-[#0D9488] hover:bg-[#0f766e] text-white rounded-xl text-sm font-medium px-6 py-5 border-none transition-all shadow-sm flex items-center justify-center gap-1">
                    Apply Now
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-8 mt-12 pt-6 border-t border-[#E2E8F0]">
                <div>
                  <div className="text-3xl font-normal text-[#0D9488]">3+</div>
                  <div className="text-sm mt-1" style={{ color: "#0B0F19", opacity: 0.65 }}>
                    Core Programs
                  </div>
                </div>
                <div> 
                  <div className="text-3xl font-normal text-[#0D9488]">100%</div> 
                  <div className="text-sm mt-1" style={{ color: "#0B0F19", opacity: .65 }} > 
                    Interactive Live Mentorship 
                  </div> 
                </div>
                <div>
                  <div className="text-3xl font-normal text-[#0D9488]">1:1</div>
                  <div className="text-sm mt-1" style={{ color: "#0B0F19", opacity: 0.65 }}>
                    Practical Feedback
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic/Intro Card */}
            <div>
              <div className="p-8 rounded-3xl border border-[#E2E8F0] shadow-sm bg-[#F8FAFC] space-y-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0D9488] border border-[#E2E8F0]">
                  <Compass className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-sans font-normal text-[#0B0F19]">Why Study With Us?</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.7 }}>
                    Our meticulously structured syllabus bridges theoretical wisdom with practical workspace application. 
                    Designed to give you industry-ready confidence, emotional clarity, and elite execution skills.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-medium text-[#0D9488]">
                  <span>Syllabus updated for 2026</span>
                  <span className="flex items-center gap-1"><Sparkles className="h-3 w-3" /> Cohort-based Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered Section */}
      <section id="curriculum" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">Curriculum Roadmap</span>
            <h2 className="font-sans font-normal tracking-tight text-3xl md:text-5xl text-[#0B0F19]">
              Our Academic & Professional{" "}
              <span className="font-serif italic font-light text-[#0D9488]">Programs</span>
            </h2>
          </div>

          <div className="space-y-12">
            {/* Program 1: Research Methodology Made Easy */}
            <Card className="border border-[#E2E8F0] bg-white rounded-2xl shadow-sm p-6 md:p-10 group transition-all hover:shadow-md">
              <CardContent className="p-0 grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#0D9488] border border-[#E2E8F0]">
                    <Search className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-sans font-normal tracking-tight text-[#0B0F19]">
                    Research Methodology Made Easy
                  </h3>
                  <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                    Demystifying academic investigation. Learn to architect credible papers, find high-impact questions, and smoothly navigate the peer-reviewed publishing landscape.
                  </p>
                </div>

                <div className="lg:col-span-7 lg:pl-8 border-t lg:border-t-0 lg:border-l border-[#E2E8F0] pt-6 lg:pt-0">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-4">Learning Roadmap & Milestones</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { step: "01", title: "Topic Selection", desc: "Formulating clear, high-impact research questions." },
                      { step: "02", title: "Literature Review", desc: "Synthesizing existing theories and discovering gaps." },
                      { step: "03", title: "Research Design", desc: "Structuring robust empirical or theoretical frameworks." },
                      { step: "04", title: "Data Analysis", desc: "Unlocking metrics, variables, and profound patterns." },
                      { step: "05", title: "Research Paper Publication", desc: "Polishing drafts and submitting to peer-reviewed journals." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <div className="text-xs font-mono font-bold text-[#0D9488] mb-1">{item.step}</div>
                        <div className="text-sm font-medium text-[#0B0F19]">{item.title}</div>
                        <div className="text-xs font-light mt-1 opacity-70">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Program 2: Foundation of Counseling (Non-Clinical) */}
            <Card className="border border-[#E2E8F0] bg-white rounded-2xl shadow-sm p-6 md:p-10 group transition-all hover:shadow-md">
              <CardContent className="p-0 grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#0D9488] border border-[#E2E8F0]">
                    <Heart className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-sans font-normal tracking-tight text-[#0B0F19]">
                    Foundation of Counseling (Non-Clinical)
                  </h3>
                  <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                    Master interpersonal communication, empathy frameworks, and ethical mentoring loops. Ideal for prospective guides, coaches, team leaders, and peer support facilitators.
                  </p>
                </div>

                <div className="lg:col-span-7 lg:pl-8 border-t lg:border-t-0 lg:border-l border-[#E2E8F0] pt-6 lg:pt-0">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-4">Core Domains Coverage</h4>
                  <div className="space-y-3">
                    {[
                      { title: "Active Listening", text: "Attending deeply to verbal and non-verbal nuances without judgment." },
                      { title: "Communication Skills", text: "Articulating restorative, constructive prompts to unlock internal barriers." },
                      { title: "Emotional Understanding", text: "Decoding underlying psychological needs and driving authentic empathy." },
                      { title: "Helping Skills", text: "Facilitating structured frameworks to encourage self-directed solution paths." },
                      { title: "Ethical Foundations", text: "Preserving healthy boundaries, client privacy, and safe environment loops." }
                    ].map((pill, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E2E8F0]">
                        <CheckCircle2 className="h-4 w-4 text-[#0D9488] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-[#0B0F19]">{pill.title} — </span>
                          <span className="text-xs font-light opacity-80">{pill.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Program 3: Business Development from a Psychological Lens */}
            <Card className="border border-[#E2E8F0] bg-white rounded-2xl shadow-sm p-6 md:p-10 group transition-all hover:shadow-md">
              <CardContent className="p-0 grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#0D9488] border border-[#E2E8F0]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-sans font-normal tracking-tight text-[#0B0F19]">
                    Business Development from a Psychological Lens
                  </h3>
                  <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
                    Unlock market dynamics by fully understanding human motivations. Learn the science behind purchasing decisions, relationship building, and high-stakes negotiation.
                  </p>
                </div>

                <div className="lg:col-span-7 lg:pl-8 border-t lg:border-t-0 lg:border-l border-[#E2E8F0] pt-6 lg:pt-0">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-4">Strategic Masterclasses</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { label: "Sales Psychology", desc: "Analyzing behavioral drivers to spark natural resonance and conversions." },
                      { label: "Negotiation", desc: "Crafting win-win agreements with emotional intelligence and posture." },
                      { label: "Consumer Behaviour", desc: "Mapping client discovery paths and subconscious decision matrixes." },
                      { label: "Conflict Resolution", desc: "De-escalating friction into productive corporate alignments." },
                      { label: "Client Relationship Management", desc: "Nurturing long-term loyalty and sustainable premium value loops." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <div className="text-sm font-medium text-[#0B0F19]">{item.label}</div>
                        <div className="text-xs font-light mt-1 opacity-70">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-20 border-b border-[#E2E8F0]" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-4xl font-sans font-normal tracking-tight text-[#0B0F19]">
              Key Features
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
              Engineered for absolute student immersion, mastery, and professional execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Hybrid Learning", desc: "Flexible digital formats blended seamlessly with scheduled real-time cohorts." },
              { title: "Live Mentorship", desc: "Interactive problem-solving blocks alongside real industry guides." },
              { title: "Practical Assignments", desc: "Hands-on projects focused on genuine case studies and workspace tasks." },
              { title: "Certificate", desc: "Verifiable professional credentials to upgrade your portfolio value." },
              { title: "Industry-Relevant Skills", desc: "Modern paradigms mapped cleanly to today's corporate and research landscapes." }
            ].map((feat, idx) => (
              <Card key={idx} className="border border-[#E2E8F0] shadow-sm bg-white rounded-2xl p-5 text-center group">
                <CardContent className="p-0 space-y-3 pt-2">
                  <div className="w-10 h-10 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto text-[#0D9488] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-sans font-medium text-[#0B0F19]">{feat.title}</h3>
                  </div>
                  <p className="text-xs font-light leading-relaxed opacity-70">
                    {feat.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-4xl font-sans font-normal tracking-tight text-[#0B0F19]">
              Your Professional Returns
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.75 }}>
              The durable real-world competencies you carry forward into your lifelong path.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Resume Building", icon: FileText, desc: "Craft a stand-out clinical or professional CV profile." },
              { title: "Hands-on Learning", icon: GraduationCap, desc: "Apply deep concepts via case models and portfolio exercises." },
              { title: "Communication Skills", icon: MessageSquare, desc: "Speak with high emotional tone, precision, and alignment." },
              { title: "Research Skills", icon: Search, desc: "Formulate credible questions and robust publication paths." },
              { title: "Analytical Thinking", icon: BarChart3, desc: "Unpack complex behavior patterns with scientific clarity." }
            ].map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-3 hover:bg-white transition-colors group">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E2E8F0] text-[#0D9488] flex items-center justify-center group-hover:bg-[#0D9488] group-hover:text-white transition-all">
                    <IconComp className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-sans font-medium text-[#0B0F19]">{benefit.title}</h4>
                  <p className="text-xs font-light opacity-70 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 bg-[#0B0F19] text-center text-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-sans font-normal tracking-tight text-balance">
            Ready to Accelerate Your{" "}
            <span className="font-serif italic font-light text-[#0D9488]">Career Breakthrough?</span>
          </h2>
          <p className="text-sm md:text-base font-light max-w-xl mx-auto opacity-80 leading-relaxed text-balance">
            Secure your seat in our upcoming cohort. Gain the mentorship, skills, and verification required to lead.
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/internship/#apply-now-form" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-[#0D9488] hover:bg-[#0f766e] text-white rounded-xl text-sm font-medium px-6 py-5 border-none transition-all shadow-sm flex items-center justify-center gap-1">
                Apply Now
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
            <a 
              href="/brochure.pdf" 
              download="TMCS_Programs_Brochure.pdf"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-sm font-medium px-6 py-5 transition-all shadow-sm flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Download Brochure
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}