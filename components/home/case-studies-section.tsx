"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Qbits Technology",
    category: "Web Development & Hardware",
    description:
      "A high-performance tech & computing solutions platform featuring next-gen laptops, mini PCs, and smart hardware with custom e-commerce architecture.",
    results: "Global Hardware & Tech Brand",
    image: "linear-gradient(135deg, #021a28 0%, #032A46 50%, #0a3d62 100%)",
    href: "https://qbits.com/",
  },
  {
    id: 2,
    title: "Holistic Business Solutions",
    category: "Digital Agency & Strategy",
    description:
      "Comprehensive digital agency platform offering full-cycle brand design, digital transformation strategy, and scalable enterprise web experiences.",
    results: "500+ Delivered & 98% CSAT",
    image: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #2563eb 100%)",
    href: "https://www.holisticbusinessservice.com/",
  },
  {
    id: 3,
    title: "MatchMyTees",
    category: "E-Commerce & Fashion",
    description:
      "High-traffic streetwear and sneaker-matching apparel e-commerce platform offering custom apparel coordination for iconic footwear brands.",
    results: "+240% Sales Conversion",
    image: "linear-gradient(135deg, #18181b 0%, #27272a 50%, #ea580c 100%)",
    href: "https://www.matchmytees.com/",
  },
  {
    id: 4,
    title: "XeTRoo PropTech",
    category: "PropTech & Real Estate",
    description:
      "Innovative PropTech platform transforming real estate with smart property solutions, digital asset workflows, and next-generation perspective.",
    results: "Leading PropTech Innovation",
    image: "linear-gradient(135deg, #140609 0%, #2a0b12 50%, #DD183B 100%)",
    href: "https://www.xetrooproptech.ltd/",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={study.href}
                target={study.href.startsWith("http") ? "_blank" : undefined}
                rel={study.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block h-full"
              >
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
