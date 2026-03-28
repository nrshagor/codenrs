"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Check, ArrowRight } from "lucide-react"

const projectTypes = [
  "Web Development",
  "Creative Design",
  "SEO Optimization",
  "Data & Analytics",
  "Full Digital Transformation",
  "Other",
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@codenrs.com",
    href: "mailto:hello@codenrs.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Let&apos;s Start Something Great
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Prefer to reach out directly? Here&apos;s how you can get in touch with us. Our team is available Monday through Friday, 9 AM to 6 PM PST.
              </p>

              <div className="flex flex-col gap-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#00F5D4]/10 shrink-0">
                      <info.icon className="w-5 h-5 text-[#00F5D4]" />
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground mb-1">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-[#00F5D4] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-card border border-[#00F5D4]/30"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00F5D4]/10 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-[#00F5D4]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Thank you for reaching out. We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "",
                        message: "",
                      })
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#00F5D4] text-[#0D0D0D] font-semibold rounded-full"
                  >
                    Send Another Message
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name <span className="text-[#00F5D4]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#00F5D4] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address <span className="text-[#00F5D4]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#00F5D4] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="mb-6">
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Type <span className="text-[#00F5D4]">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#00F5D4] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all appearance-none"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Message <span className="text-[#00F5D4]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#00F5D4] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00F5D4] text-[#0D0D0D] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#0D0D0D]/30 border-t-[#0D0D0D] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-[#00F5D4] hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to questions you might have.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. Most website projects take 6-12 weeks from kickoff to launch. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                q: "Do you work with clients internationally?",
                a: "Absolutely! We work with clients across the globe. Our remote-first approach and flexible scheduling make international collaboration seamless.",
              },
              {
                q: "What is your pricing structure?",
                a: "We offer both project-based and retainer pricing depending on your needs. After understanding your project requirements, we'll provide a detailed proposal with transparent pricing.",
              },
              {
                q: "Do you offer ongoing maintenance and support?",
                a: "Yes! We offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
