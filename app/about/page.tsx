"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Quote, Linkedin, Twitter } from "lucide-react"

const values = [
  {
    title: "Excellence Without Compromise",
    description:
      "We believe in doing things right, not just doing them fast. Every line of code, every pixel, every strategy is crafted with meticulous attention to quality.",
  },
  {
    title: "Innovation as Standard",
    description:
      "We continuously push boundaries, exploring new technologies and methodologies to deliver solutions that don't just meet expectations—they redefine them.",
  },
  {
    title: "Partnership, Not Service",
    description:
      "We invest in understanding your business as deeply as you do. Your success is our success, and we operate as an extension of your team.",
  },
  {
    title: "Transparency Always",
    description:
      "Clear communication, honest feedback, and open collaboration form the foundation of every relationship we build.",
  },
]

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & CEO",
    bio: "Former engineering lead at major tech companies, Alexandra founded CODENRS with a vision to bridge the gap between technical excellence and creative innovation.",
    image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  },
  {
    name: "Marcus Williams",
    role: "Chief Technology Officer",
    bio: "With 15+ years building scalable systems, Marcus ensures every technical solution we deliver meets the highest standards of performance and reliability.",
    image: "linear-gradient(135deg, #1a2a1a 0%, #0f3d0f 100%)",
  },
  {
    name: "Sofia Rodriguez",
    role: "Creative Director",
    bio: "Award-winning designer who has shaped brand identities for Fortune 500 companies. Sofia leads our creative vision with an unwavering eye for detail.",
    image: "linear-gradient(135deg, #2a1a2a 0%, #3d0f3d 100%)",
  },
  {
    name: "James Park",
    role: "Head of Strategy",
    bio: "Former management consultant turned digital strategist. James helps clients navigate complex digital transformations with data-driven approaches.",
    image: "linear-gradient(135deg, #2a2a1a 0%, #3d3d0f 100%)",
  },
]

const milestones = [
  { year: "2017", event: "Founded in San Francisco" },
  { year: "2018", event: "First major enterprise client" },
  { year: "2019", event: "Expanded to 25 team members" },
  { year: "2020", event: "Launched remote-first operations" },
  { year: "2021", event: "100+ projects delivered" },
  { year: "2022", event: "Opened European office" },
  { year: "2023", event: "Named Top Digital Agency" },
  { year: "2024", event: "150+ satisfied clients" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export default function AboutPage() {
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
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-[#00F5D4] uppercase tracking-widest mb-4 block">
              About CODENRS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Crafting Digital Excellence Since 2017
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a collective of strategists, designers, and engineers united by a singular obsession: building digital experiences that matter. What began as a small studio has evolved into a full-service digital agency trusted by ambitious brands worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CODENRS was born from a simple observation: too many agencies prioritize speed over substance, delivering work that looks good but fails to perform. We set out to build something different—a studio where technical excellence and creative vision would be equally valued.
                </p>
                <p>
                  Our founding team came together with complementary expertise spanning engineering, design, and strategy. We shared a belief that the best digital experiences emerge when these disciplines collaborate closely from day one, not in siloed phases.
                </p>
                <p>
                  Today, we work with startups disrupting industries and established enterprises reinventing themselves. Our approach remains the same: listen deeply, think strategically, execute flawlessly. Every project is an opportunity to demonstrate what's possible when craft meets ambition.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border">
                <Quote className="w-12 h-12 text-[#00F5D4]/20 mb-4" />
                <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                  &quot;We don&apos;t just build websites—we craft digital ecosystems that drive measurable business outcomes. That distinction is what sets CODENRS apart.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00F5D4]/20 to-[#00F5D4]/5" />
                  <div>
                    <div className="font-semibold">Alexandra Chen</div>
                    <div className="text-sm text-muted-foreground">
                      Founder & CEO
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-[#00F5D4] uppercase tracking-widest mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Principles That Guide Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These aren&apos;t just words on a wall—they&apos;re the standards we hold ourselves to on every project.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-card border border-border hover:border-[#00F5D4]/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-[#00F5D4]/20">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-[#00F5D4] uppercase tracking-widest mb-4 block">
              The Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet the Minds Behind CODENRS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A diverse team of experts united by a shared commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-[#00F5D4]/30 transition-colors">
                  {/* Image Placeholder */}
                  <div
                    className="h-64 relative"
                    style={{ background: member.image }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/10">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-[#00F5D4] text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        className="p-2 rounded-full bg-secondary hover:bg-[#00F5D4]/10 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-muted-foreground hover:text-[#00F5D4]" />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-secondary hover:bg-[#00F5D4]/10 transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-muted-foreground hover:text-[#00F5D4]" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-[#00F5D4] uppercase tracking-widest mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Milestones Along the Way
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border hidden md:block" />

            <div className="flex flex-col gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="inline-block p-4 rounded-xl bg-card border border-border">
                      <span className="text-2xl font-bold text-[#00F5D4]">
                        {milestone.year}
                      </span>
                      <p className="text-muted-foreground mt-1">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-[#00F5D4] shadow-[0_0_10px_rgba(0,245,212,0.5)]" />
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
              Join Us on the Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Whether you&apos;re looking to transform your digital presence or join our team, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#00F5D4] text-[#0D0D0D] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] transition-all duration-300"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/careers">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-[#00F5D4]/50 rounded-full transition-all duration-300"
                >
                  View Careers
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
