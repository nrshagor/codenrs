"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowRight, Briefcase } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00D2FF]/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D2FF]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-[#00D2FF]" />
            </div>

            <span className="text-sm font-medium text-[#00D2FF] uppercase tracking-widest mb-4 block">
              Careers at CODENRS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Join Our Journey
            </h1>
            
            {/* Vacancy Notice */}
            <div className="p-8 rounded-3xl bg-card border border-border/80 max-w-2xl mx-auto my-8">
              <h2 className="text-2xl font-bold mb-3 text-foreground">
                Currently No Open Vacancies
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                আপাতত আমাদের কোনো ওপেন পজিশন বা ভ্যাকেন্সি নেই। তবে আমরা সবসময় প্রতিভাবান ডেভেলপার ও ডিজাইনারদের সাথে পরিচিত হতে আগ্রহী। আপনার সিভি বা পোর্টফোলিও পাঠিয়ে রাখতে পারেন আমাদের ইমেইলে।
              </p>
              
              <a
                href="mailto:support@codenrs.com?subject=Job Inquiry / Portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00D2FF] text-[#0D0D0D] font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all"
              >
                <Mail className="w-4 h-4" />
                Send Your Resume (support@codenrs.com)
              </a>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <Link href="/">
                <button className="px-6 py-3 border border-border rounded-full hover:border-[#00D2FF]/50 transition-colors text-sm font-medium">
                  Return to Home
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-6 py-3 border border-border rounded-full hover:border-[#00D2FF]/50 transition-colors text-sm font-medium">
                  Explore Projects
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
