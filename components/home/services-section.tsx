"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code2, Palette, Search, BarChart3, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom-built web applications and platforms designed for performance, scalability, and exceptional user experience.",
    features: [
      "Next.js & React Applications",
      "Full-Stack Development",
      "API Design & Integration",
      "E-commerce Solutions",
    ],
    href: "/services#development",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Stunning visual experiences that capture attention and communicate your brand story with precision and artistry.",
    features: [
      "UI/UX Design Systems",
      "Motion Graphics & Video",
      "Brand Identity Design",
      "Interactive Prototypes",
    ],
    href: "/services#creative",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven search strategies that elevate your visibility and drive qualified organic traffic to your digital properties.",
    features: [
      "Technical SEO Audits",
      "Content Strategy",
      "Link Building Campaigns",
      "Performance Analytics",
    ],
    href: "/services#seo",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Transform raw data into actionable insights with custom dashboards, reporting systems, and predictive analytics.",
    features: [
      "Custom Dashboard Development",
      "Data Visualization",
      "Business Intelligence",
      "Predictive Modeling",
    ],
    href: "/services#data",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#00F5D4] uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to launch, we deliver end-to-end digital services that drive growth and establish market leadership.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={service.href}>
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-[#00F5D4]/30 transition-all duration-500 overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00F5D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="dark:block hidden absolute inset-0 group-hover:shadow-[inset_0_0_30px_rgba(0,245,212,0.05)] transition-shadow duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#00F5D4]/10 mb-6 group-hover:bg-[#00F5D4]/20 transition-colors">
                      <service.icon className="w-7 h-7 text-[#00F5D4]" />
                    </div>

                    {/* Title & Arrow */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#00F5D4] font-medium hover:gap-3 transition-all"
          >
            Explore All Services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
