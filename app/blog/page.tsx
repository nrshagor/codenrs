"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Clock, Calendar } from "lucide-react"

const featuredPost = {
  id: 1,
  title: "The Future of Web Development: Trends Shaping 2026 and Beyond",
  excerpt:
    "From AI-powered development tools to the rise of edge computing, we explore the technologies and methodologies that will define the next era of web development. Understanding these trends isn't just about staying current—it's about positioning your business for competitive advantage.",
  category: "Technology",
  author: "Alexandra Chen",
  date: "March 15, 2026",
  readTime: "8 min read",
  image: "linear-gradient(135deg, #0D0D0D 0%, #1a1a2e 50%, #16213e 100%)",
  href: "/blog/future-web-development-2026",
}

const posts = [
  {
    id: 2,
    title: "Design Systems That Scale: Lessons from Enterprise Projects",
    excerpt:
      "Building design systems that work across teams, products, and years of evolution requires thoughtful architecture. Here's what we've learned from implementing systems at scale.",
    category: "Design",
    author: "Sofia Rodriguez",
    date: "March 10, 2026",
    readTime: "6 min read",
    image: "linear-gradient(135deg, #0D0D0D 0%, #1a2a1a 50%, #0f3d0f 100%)",
    href: "/blog/design-systems-scale",
  },
  {
    id: 3,
    title: "SEO in the Age of AI: Adapting Your Strategy",
    excerpt:
      "As search engines become increasingly AI-driven, traditional SEO tactics need evolution. Discover how to optimize for both algorithms and authentic user value.",
    category: "SEO",
    author: "James Park",
    date: "March 5, 2026",
    readTime: "7 min read",
    image: "linear-gradient(135deg, #0D0D0D 0%, #2a1a2a 50%, #3d0f3d 100%)",
    href: "/blog/seo-ai-age",
  },
  {
    id: 4,
    title: "Performance Optimization: The Hidden Revenue Driver",
    excerpt:
      "Every 100ms of load time improvement can increase conversion rates by up to 8%. We break down the technical strategies that deliver measurable business impact.",
    category: "Development",
    author: "Marcus Williams",
    date: "February 28, 2026",
    readTime: "10 min read",
    image: "linear-gradient(135deg, #0D0D0D 0%, #2a2a1a 50%, #3d3d0f 100%)",
    href: "/blog/performance-optimization",
  },
  {
    id: 5,
    title: "Building Brand Trust Through Digital Experience",
    excerpt:
      "In an era of skepticism, how do digital experiences build genuine trust? We explore the intersection of design psychology and brand strategy.",
    category: "Branding",
    author: "Sofia Rodriguez",
    date: "February 20, 2026",
    readTime: "5 min read",
    image: "linear-gradient(135deg, #0D0D0D 0%, #1a1a3a 50%, #0f0f4d 100%)",
    href: "/blog/brand-trust-digital",
  },
  {
    id: 6,
    title: "Data-Driven Decision Making: Beyond Dashboards",
    excerpt:
      "Having data isn't enough—you need the right frameworks for turning insights into action. Here's how leading organizations operationalize analytics.",
    category: "Analytics",
    author: "James Park",
    date: "February 15, 2026",
    readTime: "8 min read",
    image: "linear-gradient(135deg, #0D0D0D 0%, #3a1a1a 50%, #4d0f0f 100%)",
    href: "/blog/data-driven-decisions",
  },
  {
    id: 7,
    title: "The Business Case for Accessibility",
    excerpt:
      "Accessibility isn't just ethical—it's profitable. We examine how inclusive design expands market reach and improves experiences for all users.",
    category: "Design",
    author: "Alexandra Chen",
    date: "February 8, 2026",
    readTime: "6 min read",
    image: "linear-gradient(135deg, #0D0D0D 0%, #1a3a2a 50%, #0f4d2d 100%)",
    href: "/blog/business-case-accessibility",
  },
]

const categories = [
  "All",
  "Technology",
  "Design",
  "SEO",
  "Development",
  "Analytics",
  "Branding",
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00F5D4]/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F5D4]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-medium text-[#00F5D4] uppercase tracking-widest mb-4 block">
              Insights & Ideas
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              The CODENRS Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thoughts on technology, design, strategy, and building digital products that make a difference. Written by practitioners, for practitioners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-[#00F5D4] text-[#0D0D0D]"
                    : "bg-card border border-border hover:border-[#00F5D4]/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href={featuredPost.href} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-card border border-border hover:border-[#00F5D4]/30 transition-all duration-500 overflow-hidden">
                {/* Image */}
                <div
                  className="h-64 lg:h-96 relative"
                  style={{ background: featuredPost.image }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl font-bold text-white/5">01</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#00F5D4] text-[#0D0D0D] text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:pr-12">
                  <span className="inline-block text-xs font-medium text-[#00F5D4] uppercase tracking-wider mb-4">
                    {featuredPost.category}
                  </span>

                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-[#00F5D4] transition-colors text-balance">
                    {featuredPost.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F5D4]/20 to-[#00F5D4]/5" />
                    <span className="font-medium">{featuredPost.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <span className="text-sm text-muted-foreground">
              {posts.length} articles
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={post.href} className="group block h-full">
                  <div className="h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-[#00F5D4]/30 transition-all duration-500">
                    {/* Image */}
                    <div
                      className="h-48 relative"
                      style={{ background: post.image }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-white/5">
                          {post.id.toString().padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="inline-block text-xs font-medium text-[#00F5D4] uppercase tracking-wider mb-3">
                        {post.category}
                      </span>

                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-bold group-hover:text-[#00F5D4] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all shrink-0 mt-1" />
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border text-sm text-muted-foreground">
                        <span>{post.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-border hover:border-[#00F5D4]/50 rounded-full font-medium transition-all duration-300"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Stay Ahead of the Curve
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly insights on technology, design, and digital strategy. No spam, just valuable content.
            </p>

            <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full bg-card border border-border focus:border-[#00F5D4] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#00F5D4] text-[#0D0D0D] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
