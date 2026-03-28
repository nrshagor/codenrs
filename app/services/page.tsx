"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Code2,
  Palette,
  Search,
  BarChart3,
  ArrowRight,
  Check,
  Zap,
  Shield,
  Layers,
  Video,
  PenTool,
  TrendingUp,
  FileSearch,
  Link2,
  LineChart,
  Database,
  Brain,
} from "lucide-react"

const services = [
  {
    id: "development",
    icon: Code2,
    title: "Web Development",
    tagline: "Engineering Excellence for the Digital Age",
    description:
      "We architect and build web applications that set new standards for performance, scalability, and user experience. Our development team combines deep technical expertise with a passion for innovation, delivering solutions that not only meet today's requirements but anticipate tomorrow's challenges.",
    benefits: [
      {
        icon: Zap,
        title: "Lightning Performance",
        text: "Optimized applications that load in milliseconds, ensuring users stay engaged and conversion rates soar.",
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        text: "Bank-grade security protocols protect your data and your users, with regular audits and compliance standards.",
      },
      {
        icon: Layers,
        title: "Scalable Architecture",
        text: "Built to grow with your business, our solutions handle traffic spikes and expanding requirements with ease.",
      },
    ],
    capabilities: [
      "Next.js & React Applications",
      "Full-Stack Development",
      "API Design & Integration",
      "E-commerce Platforms",
      "Custom CMS Solutions",
      "Progressive Web Apps",
      "Cloud Infrastructure",
      "DevOps & CI/CD",
    ],
    stats: [
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "<1s", label: "Page Load Time" },
      { value: "50+", label: "Apps Deployed" },
    ],
  },
  {
    id: "creative",
    icon: Palette,
    title: "Creative Design",
    tagline: "Where Art Meets Strategy",
    description:
      "Our creative studio transforms ideas into visual experiences that captivate and convert. We believe design is more than aesthetics—it's a strategic tool that shapes perception, drives action, and builds lasting brand equity. Every pixel serves a purpose.",
    benefits: [
      {
        icon: Video,
        title: "Motion & Video",
        text: "Dynamic content that tells your story with impact, from micro-interactions to full production campaigns.",
      },
      {
        icon: PenTool,
        title: "Brand Systems",
        text: "Comprehensive identity frameworks that ensure consistency and recognition across every touchpoint.",
      },
      {
        icon: Layers,
        title: "Design Systems",
        text: "Scalable component libraries that accelerate development while maintaining design integrity.",
      },
    ],
    capabilities: [
      "UI/UX Design",
      "Brand Identity",
      "Motion Graphics",
      "Video Production",
      "3D Visualization",
      "Interactive Prototypes",
      "Icon & Illustration",
      "Print & Packaging",
    ],
    stats: [
      { value: "200+", label: "Brands Created" },
      { value: "98%", label: "Client Approval" },
      { value: "15+", label: "Design Awards" },
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    tagline: "Visibility That Drives Growth",
    description:
      "In the digital landscape, visibility is everything. Our SEO strategies combine technical excellence with content mastery to elevate your presence in search results. We don't chase algorithms—we understand user intent and build sustainable organic growth.",
    benefits: [
      {
        icon: TrendingUp,
        title: "Ranking Growth",
        text: "Systematic improvement in search positions for keywords that matter most to your business objectives.",
      },
      {
        icon: FileSearch,
        title: "Technical Excellence",
        text: "Deep audits and optimizations ensure your site meets and exceeds search engine requirements.",
      },
      {
        icon: Link2,
        title: "Authority Building",
        text: "Strategic link acquisition and content placement that establishes your domain as an industry leader.",
      },
    ],
    capabilities: [
      "Technical SEO Audits",
      "Keyword Research",
      "Content Strategy",
      "On-Page Optimization",
      "Link Building",
      "Local SEO",
      "E-commerce SEO",
      "Performance Tracking",
    ],
    stats: [
      { value: "500%", label: "Avg Traffic Increase" },
      { value: "#1", label: "Rankings Achieved" },
      { value: "10M+", label: "Monthly Impressions" },
    ],
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Data & Analytics",
    tagline: "Insights That Power Decisions",
    description:
      "Data without insight is just noise. Our analytics practice transforms raw information into strategic advantage. We build custom dashboards, implement tracking systems, and develop predictive models that help you understand what's happening—and what's coming next.",
    benefits: [
      {
        icon: LineChart,
        title: "Real-Time Dashboards",
        text: "Custom visualization platforms that put critical metrics at your fingertips, updated in real-time.",
      },
      {
        icon: Database,
        title: "Data Infrastructure",
        text: "Robust pipelines and warehouses that consolidate your data for comprehensive analysis.",
      },
      {
        icon: Brain,
        title: "Predictive Analytics",
        text: "Machine learning models that forecast trends, identify opportunities, and mitigate risks.",
      },
    ],
    capabilities: [
      "Custom Dashboards",
      "Data Visualization",
      "ETL Pipelines",
      "Business Intelligence",
      "A/B Testing",
      "Attribution Modeling",
      "Predictive Modeling",
      "Data Strategy",
    ],
    stats: [
      { value: "50TB+", label: "Data Processed" },
      { value: "35%", label: "Efficiency Gains" },
      { value: "100+", label: "Dashboards Built" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Full-Spectrum Digital Excellence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From initial concept to ongoing optimization, we provide comprehensive digital services that transform businesses. Each solution is crafted with precision, powered by innovation, and designed for measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 lg:py-32 ${
            index % 2 === 0 ? "bg-card/50" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Service Header */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#00F5D4]/10">
                    <service.icon className="w-8 h-8 text-[#00F5D4]" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {service.title}
                    </h2>
                    <p className="text-[#00F5D4] font-medium">
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                  {service.description}
                </p>
              </motion.div>

              {/* Benefits Grid */}
              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-3 gap-6 mb-16"
              >
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-[#00F5D4]/30 transition-colors group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00F5D4]/10 mb-4 group-hover:bg-[#00F5D4]/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-[#00F5D4]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Capabilities & Stats */}
              <motion.div
                variants={itemVariants}
                className="grid lg:grid-cols-2 gap-12"
              >
                {/* Capabilities */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">
                    Core Capabilities
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {service.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className="w-4 h-4 text-[#00F5D4] shrink-0" />
                        <span className="text-muted-foreground">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="grid grid-cols-3 gap-8">
                    {service.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-[#00F5D4] mb-2">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-[#00F5D4]/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can be tailored to your unique needs and objectives. Every great partnership starts with a conversation.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#00F5D4] text-[#0D0D0D] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
