import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Mic,
  Camera,
  ShieldCheck,
  LayoutDashboard,
  CheckCircle2,
  Download,
  Coins,
} from "lucide-react";

const features = [
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Glassmorphic Dashboard",
    description:
      "Real-time visibility of your Income, Balance, and Expenses with beautiful premium navy dark theme interfaces.",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Vision Receipt Scan",
    description:
      "Snap a picture of any receipt. Our integrated Gemini 2.5 Flash AI instantly extracts amount, category, and notes.",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Bangla Voice Input",
    description:
      "Speak naturally in Bangla or Banglish like 'বাজার করলাম ৫০০ টাকা'. The AI smart-parses it into an expense instantly.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Advanced Analytics & Budgets",
    description:
      "Glow donut charts for category breakdown with real-time budget tracking and smart push alert system notifications.",
  },
];

const planFeatures = [
  "Local Isar Database",
  "Manual Transaction Entry",
  "Real-time Dashboard Summary",
  "Gemini AI Receipt Scanning",
  "Bangla Voice Note Parsing",
  "Excel & PDF Data Export",
];

export default function PocketLeansLandingPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white pt-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(26,86,219,0.2),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
              Personal finance tracking
              <span className="block text-[#1A56DB]">
                driven by AI intelligence
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-slate-400 max-w-3xl leading-relaxed">
              Pocket Lens helps Bangladeshi users log daily transactions, scan
              receipts, and parse Bangla voice inputs effortlessly using smart
              on-device tracking and cloud sync.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/pocket-leans/docs"
                className="inline-flex items-center gap-2 rounded-full bg-[#1A56DB] px-8 py-4 text-sm font-semibold text-white hover:shadow-[0_0_30px_rgba(26,86,219,0.35)] transition-all"
              >
                View Documentation
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/pocket-leans/download"
                className="inline-flex items-center gap-2 rounded-full border border-[#1A56DB]/40 px-8 py-4 text-sm font-semibold text-[#1A56DB] hover:bg-[#1A56DB]/10 transition-colors"
              >
                Download APK / Bundle
                <Download className="w-4 h-4" />
              </Link>

              <Link
                href="/pocket-leans/support"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-8 py-4 text-sm font-semibold hover:border-[#1A56DB] hover:text-[#1A56DB] transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1A56DB]">
            Core Features
          </p>

          <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight">
            Smart Expense Management
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-800 bg-[#141B2D]/70 backdrop-blur-xl p-8 transition-all hover:border-[#1A56DB]/40 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A56DB]/10 text-[#1A56DB]">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">{feature.title}</h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
        <div className="rounded-[32px] border border-slate-800 bg-[#141B2D]/70 backdrop-blur-xl p-8 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1A56DB]">
              Pricing & Gems
            </p>

            <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight">
              Flexible Premium Plans
            </h2>

            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              Start logging manually for free with ad-supported reward gems, or
              upgrade to Pro for massive gem drops, completely ad-free
              analytics, and custom themes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Free Plan */}
            <div className="rounded-3xl border border-slate-800 bg-[#0A0F1E]/60 p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Free Tier</h3>
                  <p className="mt-2 text-slate-400">
                    Best for individuals tracking daily local expenses.
                  </p>
                </div>
                <span className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium">
                  ৳0
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {planFeatures.slice(0, 3).map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-slate-400"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1A56DB] mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-400 flex items-center gap-2">
                <Coins className="w-4 h-4" /> Includes ad-rewarded cloud gem
                validation checks.
              </div>
            </div>

            {/* Pro Plan */}
            <div className="relative overflow-hidden rounded-3xl border border-[#1A56DB]/30 bg-[#1A56DB]/5 p-8">
              <div className="absolute top-4 right-4 rounded-full bg-[#1A56DB] px-3 py-1 text-xs font-semibold text-white">
                Recommended
              </div>

              <div>
                <h3 className="text-2xl font-bold">Pro Monthly</h3>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-bold">$2.99</span>
                  <span className="pb-1 text-slate-400">/ month</span>
                </div>

                <p className="mt-4 text-slate-400">
                  Full AI features unlocked with immediate 100 free monthly gem
                  grants and zero ads.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {planFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-slate-400"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1A56DB] mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#1A56DB]/20 bg-[#0A0F1E]/70 p-4 text-sm text-slate-400">
                Support for multi-currency selectors including BDT ৳, USD $, and
                EUR €.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Final CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-20">
        <div className="rounded-[32px] border border-slate-800 bg-[#141B2D]/70 backdrop-blur-xl p-10 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance">
            Ready to control your smart budget?
          </h2>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Review our detailed API documentation, clear security
            configurations, and privacy protection criteria setup before public
            rollout.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/pocket-leans/docs"
              className="inline-flex items-center rounded-full bg-[#1A56DB] px-8 py-4 text-sm font-semibold text-white"
            >
              Read Documentation
            </Link>

            <Link
              href="/pocket-leans/privacy"
              className="inline-flex items-center rounded-full border border-slate-700 px-8 py-4 text-sm font-semibold hover:border-[#1A56DB] hover:text-[#1A56DB] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/pocket-leans/security"
              className="inline-flex items-center rounded-full border border-slate-700 px-8 py-4 text-sm font-semibold hover:border-[#1A56DB] hover:text-[#1A56DB] transition-colors"
            >
              Security Policy
            </Link>

            <Link
              href="/pocket-leans/terms"
              className="inline-flex items-center rounded-full border border-slate-700 px-8 py-4 text-sm font-semibold hover:border-[#1A56DB] hover:text-[#1A56DB] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
