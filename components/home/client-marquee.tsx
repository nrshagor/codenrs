"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "Qbits Technology", url: "https://qbits.com/" },
  { name: "Holistic Business Solutions", url: "https://www.holisticbusinessservice.com/" },
  { name: "MatchMyTees", url: "https://www.matchmytees.com/" },
  { name: "XeTRoo PropTech", url: "https://www.xetrooproptech.ltd/" },
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

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        {/* Marquee Track with seamless infinite movement */}
        <div className="flex w-max animate-marquee">
          {/* 1st Half (2 sets) */}
          <div className="flex shrink-0 items-center justify-around gap-12 md:gap-20 px-6">
            {clients.map((client) => (
              <a
                key={`set1-${client.name}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-semibold text-muted-foreground/60 hover:text-[#00D2FF] transition-colors duration-300 whitespace-nowrap"
              >
                {client.name}
              </a>
            ))}
            {clients.map((client) => (
              <a
                key={`set2-${client.name}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-semibold text-muted-foreground/60 hover:text-[#00D2FF] transition-colors duration-300 whitespace-nowrap"
              >
                {client.name}
              </a>
            ))}
          </div>

          {/* 2nd Half (2 duplicate sets for seamless -50% translateX loop) */}
          <div className="flex shrink-0 items-center justify-around gap-12 md:gap-20 px-6" aria-hidden="true">
            {clients.map((client) => (
              <a
                key={`set3-${client.name}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-semibold text-muted-foreground/60 hover:text-[#00D2FF] transition-colors duration-300 whitespace-nowrap"
              >
                {client.name}
              </a>
            ))}
            {clients.map((client) => (
              <a
                key={`set4-${client.name}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-semibold text-muted-foreground/60 hover:text-[#00D2FF] transition-colors duration-300 whitespace-nowrap"
              >
                {client.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
