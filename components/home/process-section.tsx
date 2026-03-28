"use client"

import { motion } from "framer-motion"
import { Lightbulb, PenTool, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery",
    description:
      "We begin with deep research into your business, industry, and goals. Through collaborative workshops and analysis, we uncover insights that inform every decision.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "Our design team crafts pixel-perfect interfaces and user experiences. We iterate rapidly with prototypes, ensuring the vision aligns with your objectives.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description:
      "Engineers bring designs to life with clean, efficient code. We follow best practices for performance, security, and scalability at every step.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Scale",
    description:
      "We deploy with precision, monitor performance, and optimize continuously. Our partnership extends beyond launch with ongoing support and evolution.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-sm font-medium text-[#00F5D4] uppercase tracking-widest mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            From Vision to Reality
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology refined over hundreds of successful projects, ensuring consistent excellence and measurable results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          {/* Steps */}
          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                  }`}
                >
                  <div className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-[#00F5D4]/30 transition-colors group">
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00F5D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      {/* Icon & Number - Mobile */}
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00F5D4]/10">
                          <step.icon className="w-6 h-6 text-[#00F5D4]" />
                        </div>
                        <span className="text-4xl font-bold text-[#00F5D4]/20">
                          {step.number}
                        </span>
                      </div>

                      {/* Number - Desktop */}
                      <span className="hidden lg:block text-5xl font-bold text-[#00F5D4]/20 mb-4">
                        {step.number}
                      </span>

                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Icon - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-[#00F5D4] shadow-[0_0_20px_rgba(0,245,212,0.3)]">
                  <step.icon className="w-7 h-7 text-[#00F5D4]" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
