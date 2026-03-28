"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Quantum Finance Platform",
    category: "Web Development",
    description:
      "A comprehensive fintech platform that revolutionized how users manage investments with real-time analytics and AI-powered insights.",
    results: "+340% user engagement",
    image: "linear-gradient(135deg, #0D0D0D 0%, #1a1a2e 50%, #16213e 100%)",
    href: "/portfolio/quantum-finance",
  },
  {
    id: 2,
    title: "Nova Brand Identity",
    category: "Creative Design",
    description:
      "Complete brand overhaul for a tech startup, including visual identity, motion design language, and comprehensive design system.",
    results: "2x brand recognition",
    image: "linear-gradient(135deg, #0D0D0D 0%, #1a2a1a 50%, #0f3d0f 100%)",
    href: "/portfolio/nova-brand",
  },
  {
    id: 3,
    title: "CloudScale SEO Campaign",
    category: "SEO Optimization",
    description:
      "Strategic SEO transformation that propelled a B2B SaaS company from page 5 to position 1 for 50+ high-value keywords.",
    results: "+892% organic traffic",
    image: "linear-gradient(135deg, #0D0D0D 0%, #2a1a2a 50%, #3d0f3d 100%)",
    href: "/portfolio/cloudscale-seo",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-sm font-medium text-[#00F5D4] uppercase tracking-widest mb-4 block">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Work That Speaks for Itself
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#00F5D4] font-medium hover:gap-3 transition-all shrink-0"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={study.href} className="group block h-full">
                <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-[#00F5D4]/30 transition-all duration-500">
                  {/* Image Area */}
                  <div
                    className="h-48 lg:h-56"
                    style={{ background: study.image }}
                  >
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/10">
                        0{study.id}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <span className="inline-block text-xs font-medium text-[#00F5D4] uppercase tracking-wider mb-3">
                      {study.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#00F5D4] transition-colors">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Results */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm font-semibold text-[#00F5D4]">
                        {study.results}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
