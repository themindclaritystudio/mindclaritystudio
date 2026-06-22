import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getAllBlogPosts } from "@/lib/blog-data"


export default function BlogPage() {
  const blogPosts = getAllBlogPosts()
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Investment <span className="text-cyan-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Expert analysis, market insights, and investment strategies from our team of experienced portfolio
              managers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-black text-gray-900 mb-8">Featured Article</h2>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.thumbnail || "/placeholder.svg"} // i want add images from public
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">{featuredPost.category}</Badge>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl font-serif font-bold text-gray-900 mb-3">
                        {featuredPost.title}
                      </CardTitle>
                      <p className="text-gray-600 font-sans leading-relaxed">{featuredPost.excerpt}</p>
                    </CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 font-sans mb-6">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-black text-gray-900 mb-12">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.slug} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">{post.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-serif font-bold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-600 font-sans text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </CardHeader>
                  <div className="flex items-center justify-between text-xs text-gray-500 font-sans mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">Stay Informed</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Subscribe to our newsletter for the latest investment insights and market analysis delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white font-sans"
            />
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 font-sans">Subscribe</Button>
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
          <div className="flex gap-5">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Facebook</a>
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
