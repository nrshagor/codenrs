import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";

const screenshots = [
  {
    title: "Dashboard Overview",
    image: "/images/pulseboard/dashboard.png",
    description:
      "Monitor Jira project health, recent activity, and issue visibility in one place.",
  },
  {
    title: "Analytics Overview",
    image: "/images/pulseboard/analytics.png",
    description:
      "Track sprint delivery confidence, blockers, workload balance, and developer activity.",
  },
  {
    title: "Workload Planner",
    image: "/images/pulseboard/workload-planner.png",
    description:
      "Detect overloaded developers, available team capacity, and planning risks.",
  },
  {
    title: "My Pulse",
    image: "/images/pulseboard/my-pulse.png",
    description:
      "Personal Jira task tracking with weekly and monthly visibility.",
  },
  {
    title: "Billing & Plans",
    image: "/images/pulseboard/billing.png",
    description:
      "Manage Free and Pro access with Marketplace-ready subscription support.",
  },
  {
    title: "Help Center",
    image: "/images/pulseboard/help-center.png",
    description:
      "Built-in onboarding, troubleshooting, and user guidance for Jira teams.",
  },
];

const featureHighlights = [
  "Live Jira dashboard visibility",
  "Sprint risk and blocker detection",
  "Team workload planning",
  "Personal My Pulse task tracking",
  "Free and Pro plan access control",
  "Atlassian Forge powered architecture",
];

const marketplaceDetails = [
  {
    label: "App name",
    value: "PulseBoard",
  },
  {
    label: "Vendor",
    value: "CodeNRS",
  },
  {
    label: "Trial",
    value: "14-day Pro trial",
  },
  {
    label: "Pricing",
    value: "Free + Pro",
  },
  {
    label: "Support",
    value: "noorerabbishagor@gmail.com",
  },
];

export default function PulseBoardMarketplacePage() {
  return (
    <main className="min-h-screen bg-background pt-28">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <Link
          href="/pulseboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#00F5D4] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to PulseBoard
        </Link>

        <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-4 py-2 text-sm font-medium text-[#00F5D4] mb-6">
            <Sparkles className="w-4 h-4" />
            Marketplace Package
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
                PulseBoard Marketplace Listing
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Final listing copy, feature highlights, screenshots, and
                Marketplace-ready positioning for PulseBoard — a Jira analytics
                and workload planning app by CodeNRS.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-background/60 p-6">
              <div className="space-y-4">
                {marketplaceDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">
                      {item.label}
                    </span>

                    <span className="text-sm font-medium text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                <FileText className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-bold">Short description</h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Jira analytics, workload visibility, sprint risk tracking, and
              personal productivity insights for growing teams.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                <BadgeCheck className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-bold">Positioning</h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              PulseBoard helps Jira teams understand workload balance, sprint
              health, blockers, and developer activity without leaving Jira.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00F5D4]">
            Long Description
          </p>

          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              PulseBoard helps Jira teams understand workload balance, sprint
              health, blockers, and developer activity without leaving Jira.
            </p>

            <p>
              Built on Atlassian Forge, PulseBoard provides Jira-native
              analytics and workload visibility designed for engineering teams,
              project managers, and growing organizations.
            </p>

            <p>
              Teams can review dashboard metrics, identify blocked work, monitor
              sprint risk, track developer workload balance, and use My Pulse
              for personal task visibility.
            </p>

            <p>
              PulseBoard is designed to stay lightweight, fast, and
              Marketplace-friendly while helping teams make smarter planning
              decisions directly inside Jira.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00F5D4]">
            Feature Highlights
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureHighlights.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F5D4]" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-4 py-2 text-sm font-medium text-[#00F5D4]">
              <Camera className="w-4 h-4" />
              Screenshot Captions
            </div>

            <h2 className="mt-5 text-3xl lg:text-5xl font-bold tracking-tight">
              Marketplace screenshots
            </h2>

            <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
              Use these screenshots and captions in the Atlassian Marketplace
              listing to explain PulseBoard&apos;s core product flow.
            </p>
          </div>

          <div className="grid gap-8">
            {screenshots.map((screenshot, index) => (
              <article
                key={screenshot.title}
                className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-5 lg:p-6"
              >
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#00F5D4]">
                      Screenshot {index + 1}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      {screenshot.title}
                    </h3>
                  </div>

                  <p className="max-w-xl text-sm text-muted-foreground sm:text-right">
                    {screenshot.description}
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border bg-background">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    width={1600}
                    height={900}
                    className="h-auto w-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Ready for Marketplace submission
          </h2>

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Use this page as the final internal package for listing copy,
            screenshots, captions, pricing notes, support links, and
            Marketplace-ready messaging.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/pulseboard/privacy"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-[#00F5D4] hover:text-[#00F5D4] transition-colors"
            >
              Privacy Policy
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pulseboard/terms"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-[#00F5D4] hover:text-[#00F5D4] transition-colors"
            >
              Terms of Service
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pulseboard/support"
              className="inline-flex items-center gap-2 rounded-full bg-[#00F5D4] px-6 py-3 text-sm font-semibold text-[#0D0D0D]"
            >
              Support Page
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
