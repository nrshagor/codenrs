"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Smartphone,
  LayoutDashboard,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"

const products = [
  {
    id: "pocket-lens",
    title: "PocketLens",
    badge: "AI Mobile App",
    badgeColor: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
    icon: <Smartphone className="w-6 h-6 text-[#00F5D4]" />,
    tagline: "Personal Finance & Smart AI Tracking",
    description:
      "Intelligent personal expense and budget management app with Gemini 2.5 Flash vision receipt scanning, natural Bangla/Banglish voice input, and real-time glassmorphic financial insights.",
    features: [
      "Gemini AI Vision Receipt Scan",
      "Bangla & Banglish Voice Parsing",
      "Real-time Balance & Donut Analytics",
      "Offline-First Isar Database",
    ],
    href: "/pocket-lens",
    accent: "#00F5D4",
    imageGradient: "linear-gradient(135deg, #0A0F1E 0%, #10243E 50%, #00F5D4 100%)",
  },
  {
    id: "pulseboard",
    title: "PulseBoard",
    badge: "Atlassian Jira App",
    badgeColor: "from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/30",
    icon: <LayoutDashboard className="w-6 h-6 text-cyan-400" />,
    tagline: "Live Jira Dashboard & Workload Planner",
    description:
      "Atlassian Forge verified Jira app engineered to give software leaders instant project health clarity, team capacity balancing, and automated sprint delivery risk detection.",
    features: [
      "Live Atlassian Jira Dashboard",
      "Developer Workload Balancing",
      "Sprint Delivery Risk Intelligence",
      "Personal 'My Pulse' Visibility",
    ],
    href: "/pulseboard",
    accent: "#00C2FF",
    imageGradient: "linear-gradient(135deg, #081226 0%, #0d274d 50%, #00C2FF 100%)",
  },
  {
    id: "revivaiq",
    title: "RevivaIQ",
    badge: "Odoo ERP Module",
    badgeColor: "from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30",
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    tagline: "Dead Stock & Customer Churn Recovery",
    description:
      "Enterprise Odoo module that monitors dead inventory risk, detects non-moving products, flags customer churn scores, and unlocks dormant revenue across your warehouse.",
    features: [
      "Dead Stock & Aging Intelligence",
      "Inactive Customer Recovery Engine",
      "Executive Revenue Risk Snapshots",
      "Odoo 18.0 & On-Premise Verified",
    ],
    href: "/revivaiq",
    accent: "#A855F7",
    imageGradient: "linear-gradient(135deg, #180928 0%, #2e104d 50%, #A855F7 100%)",
  },
]

export function ProductsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-card/30 border-t border-border/50">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F5D4]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#00F5D4] uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" />
              Our Proprietary Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Innovations Engineered by CODENRS
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
              Beyond client solutions, we design, build, and deploy proprietary SaaS platforms, mobile apps, and enterprise marketplace extensions.
            </p>
          </div>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={product.href} className="group block h-full">
                <div className="relative h-full flex flex-col justify-between rounded-3xl overflow-hidden bg-card border border-border/80 hover:border-[#00F5D4]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,245,212,0.12)]">
                  {/* Visual Banner */}
                  <div
                    className="h-44 relative p-6 flex flex-col justify-between overflow-hidden"
                    style={{ background: product.imageGradient }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                    
                    <div className="flex items-center justify-between relative z-10">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${product.badgeColor}`}
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {product.badge}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#00F5D4] group-hover:text-black transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {product.title}
                      </h3>
                      <p className="text-xs text-white/70 font-medium mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Key Features List */}
                      <div className="space-y-2.5 mb-8">
                        {product.features.map((feat) => (
                          <div
                            key={feat}
                            className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between text-sm font-semibold text-[#00F5D4] group-hover:text-white transition-colors">
                      <span>Explore {product.title} Details</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
