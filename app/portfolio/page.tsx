"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const categories = [
  "All",
  "Web Development",
  "Creative Design",
  "SEO",
  "Data & Analytics",
]

const projects = [
  {
    id: 1,
    title: "Quantum Finance Platform",
    category: "Web Development",
    description:
      "A comprehensive fintech platform revolutionizing investment management with real-time analytics and AI-powered insights.",
    results: "+340% user engagement",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    image: "linear-gradient(135deg, #0D0D0D 0%, #1a1a2e 50%, #16213e 100%)",
    href: "/portfolio/quantum-finance",
    featured: true,
  },
  {
    id: 2,
    title: "Nova Brand Identity",
    category: "Creative Design",
    description:
      "Complete brand overhaul including visual identity, motion design language, and comprehensive design system.",
    results: "2x brand recognition",
    technologies: ["Figma", "After Effects", "Cinema 4D"],
    image: "linear-gradient(135deg, #0D0D0D 0%, #1a2a1a 50%, #0f3d0f 100%)",
    href: "/portfolio/nova-brand",
    featured: true,
  },
  {
    id: 3,
    title: "CloudScale SEO Campaign",
    category: "SEO",
    description:
      "Strategic SEO transformation that propelled a B2B SaaS company from page 5 to position 1 for 50+ keywords.",
    results: "+892% organic traffic",
    technologies: ["SEMrush", "Ahrefs", "Google Analytics"],
    image: "linear-gradient(135deg, #0D0D0D 0%, #2a1a2a 50%, #3d0f3d 100%)",
    href: "/portfolio/cloudscale-seo",
    featured: true,
  },
  {
    id: 4,
    title: "DataViz Dashboard Suite",
    category: "Data & Analytics",
    description:
      "Custom analytics platform providing real-time insights across multiple data sources with predictive modeling.",
    results: "35% efficiency gains",
    technologies: ["React", "D3.js", "Python", "BigQuery"],
    image: "linear-gradient(135deg, #0D0D0D 0%, #2a2a1a 50%, #3d3d0f 100%)",
    href: "/portfolio/dataviz-dashboard",
    featured: false,
  },
  {
    id: 5,
    title: "Nexus E-commerce Platform",
    category: "Web Development",
    description:
      "High-performance e-commerce solution handling 100K+ daily transactions with seamless checkout experience.",
    results: "+156% conversion rate",
    technologies: ["Next.js", "Stripe", "Shopify API", "Redis"],
    image: "linear-gradient(135deg, #0D0D0D 0%, #1a1a3a 50%, #0f0f4d 100%)",
    href: "/portfolio/nexus-ecommerce",
    featured: false,
  },
  {
    id: 6,
    title: "Pulse Health App",
    category: "Creative Design",
    description:
      "Mobile health application design with focus on accessibility and user engagement for wellness tracking.",
    results: "4.9 App Store rating",
    technologies: ["Figma", "Principle", "Lottie"],
    image: "linear-gradient(135deg, #0D0D0D 0%, #3a1a1a 50%, #4d0f0f 100%)",
    href: "/portfolio/pulse-health",
    featured: false,
  },
  {
    id: 7,
    title: "TechStartup SEO Overhaul",
    category: "SEO",
    description:
      "Complete technical and content SEO restructuring for a SaaS startup entering competitive market.",
    results: "First page for 100+ keywords",
    technologies: ["Screaming Frog", "Clearscope", "Google Search Console"],
    image: "linear-gradient(135deg, #0D0D0D 0%, #1a3a2a 50%, #0f4d2d 100%)",
    href: "/portfolio/techstartup-seo",
    featured: false,
  },
  {
    id: 8,
    title: "Enterprise BI Platform",
    category: "Data & Analytics",
    description:
      "Business intelligence solution consolidating data from 15+ sources for Fortune 500 retail company.",
    results: "$2M annual savings",
    technologies: ["Tableau", "Snowflake", "dbt", "Airflow"],
    image: "linear-gradient(135deg, #0D0D0D 0%, #3a3a1a 50%, #4d4d0f 100%)",
    href: "/portfolio/enterprise-bi",
    featured: false,
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

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
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Projects That Define Excellence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A curated selection of our most impactful work. Each project represents a unique challenge met with innovative solutions and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/80 backdrop-blur-xl z-30">
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
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
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

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group ${
                    project.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <Link href={project.href}>
                    <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-[#00F5D4]/30 transition-all duration-500">
                      {/* Image Area */}
                      <div
                        className="h-64 lg:h-72 relative overflow-hidden"
                        style={{ background: project.image }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-8xl font-bold text-white/5">
                            {project.id.toString().padStart(2, "0")}
                          </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#00F5D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* View Project Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#00F5D4] text-[#0D0D0D] font-medium rounded-full">
                            View Project
                            <ExternalLink className="w-4 h-4" />
                          </span>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#00F5D4] text-[#0D0D0D] text-xs font-semibold rounded-full">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Category */}
                        <span className="inline-block text-xs font-medium text-[#00F5D4] uppercase tracking-wider mb-3">
                          {project.category}
                        </span>

                        {/* Title */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-xl font-bold group-hover:text-[#00F5D4] transition-colors">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all shrink-0" />
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Results */}
                        <div className="pt-4 border-t border-border">
                          <span className="text-sm font-semibold text-[#00F5D4]">
                            {project.results}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Your Project Could Be Next
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Ready to create something extraordinary? Let&apos;s discuss how we can bring your vision to life with the same level of excellence.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#00F5D4] text-[#0D0D0D] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] transition-all duration-300"
              >
                Start Your Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
