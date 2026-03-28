"use client"

import { motion } from "framer-motion"

const clients = [
  "TechVentures",
  "Quantum Labs",
  "Nova Digital",
  "Apex Systems",
  "Frontier AI",
  "CloudScale",
  "DataFlow",
  "CyberNex",
  "MetaForge",
  "NexGen Corp",
]

export function ClientMarquee() {
  return (
    <section className="py-16 border-y border-border/50 overflow-hidden bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground uppercase tracking-widest"
        >
          Trusted by innovative companies worldwide
        </motion.p>
      </div>

      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex items-center justify-center min-w-[200px] px-8"
            >
              <span className="text-xl md:text-2xl font-semibold text-muted-foreground/50 hover:text-[#00F5D4] transition-colors duration-300 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
