import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Activity,
  Users,
  ShieldCheck,
  LayoutDashboard,
  CheckCircle2,
  Store,
} from "lucide-react";

const features = [
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Live Jira Dashboard",
    description:
      "Track Jira project health, recent activity, and issue visibility directly inside Jira.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Advanced Analytics",
    description:
      "Understand sprint risk, blocked issues, workload balance, and delivery confidence.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Workload Planner",
    description:
      "Detect overloaded developers, available capacity, and planning conflicts across teams.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "My Pulse",
    description:
      "Personal Jira task visibility with weekly and monthly work tracking.",
  },
];

const planFeatures = [
  "Dashboard overview",
  "Analytics insights",
  "Workload planning",
  "Sprint risk visibility",
  "Team workload balance",
  "Jira issue quick access",
];

export default function PulseBoardLandingPage() {
  return (
    <main className="min-h-screen bg-background pt-28">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,245,212,0.12),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-4 py-2 text-sm font-medium text-[#00F5D4] mb-8">
              <ShieldCheck className="w-4 h-4" />
              Atlassian Forge Powered
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
              Jira team analytics
              <span className="block text-[#00F5D4]">built for visibility</span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              PulseBoard helps Jira teams monitor workload balance, sprint
              health, blocked issues, and developer activity directly inside
              Atlassian Jira.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/pulseboard/docs"
                className="inline-flex items-center gap-2 rounded-full bg-[#00F5D4] px-8 py-4 text-sm font-semibold text-[#0D0D0D] hover:shadow-[0_0_30px_rgba(0,245,212,0.35)] transition-all"
              >
                View Documentation
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/pulseboard/marketplace"
                className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/40 px-8 py-4 text-sm font-semibold text-[#00F5D4] hover:bg-[#00F5D4]/10 transition-colors"
              >
                Marketplace Package
                <Store className="w-4 h-4" />
              </Link>

              <Link
                href="/pulseboard/support"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold hover:border-[#00F5D4] hover:text-[#00F5D4] transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00F5D4]">
            Core Features
          </p>

          <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight">
            Everything Jira teams need
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 transition-all hover:border-[#00F5D4]/40 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">{feature.title}</h3>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
        <div className="rounded-[32px] border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00F5D4]">
              Pricing
            </p>

            <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight">
              Simple Jira team pricing
            </h2>

            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              PulseBoard offers a free plan for smaller Jira teams and a Pro
              plan for advanced analytics and workload planning.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background/60 p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Free</h3>

                  <p className="mt-2 text-muted-foreground">
                    Best for individuals and small Jira teams.
                  </p>
                </div>

                <span className="rounded-full border border-border px-4 py-2 text-sm font-medium">
                  $0
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {planFeatures.slice(0, 3).map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00F5D4] mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#00F5D4]/30 bg-[#00F5D4]/5 p-8">
              <div className="absolute top-4 right-4 rounded-full bg-[#00F5D4] px-3 py-1 text-xs font-semibold text-[#0D0D0D]">
                Recommended
              </div>

              <div>
                <h3 className="text-2xl font-bold">Pro</h3>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-bold">$9</span>
                  <span className="pb-1 text-muted-foreground">/ month</span>
                </div>

                <p className="mt-4 text-muted-foreground">
                  Advanced Jira analytics and full team workload visibility.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {planFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00F5D4] mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#00F5D4]/20 bg-background/70 p-4 text-sm text-muted-foreground">
                Includes 14-day Pro trial for new Jira workspaces.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-20">
        <div className="rounded-[32px] border border-border bg-card/70 backdrop-blur-xl p-10 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance">
            Ready to improve Jira visibility?
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore PulseBoard documentation, support resources, and Marketplace
            preparation pages before public release.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/pulseboard/docs"
              className="inline-flex items-center rounded-full bg-[#00F5D4] px-8 py-4 text-sm font-semibold text-[#0D0D0D]"
            >
              Read Documentation
            </Link>

            <Link
              href="/pulseboard/marketplace"
              className="inline-flex items-center rounded-full border border-[#00F5D4]/40 px-8 py-4 text-sm font-semibold text-[#00F5D4] hover:bg-[#00F5D4]/10 transition-colors"
            >
              Marketplace Package
            </Link>

            <Link
              href="/pulseboard/privacy"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-sm font-semibold hover:border-[#00F5D4] hover:text-[#00F5D4] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/pulseboard/security"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-sm font-semibold hover:border-[#00F5D4] hover:text-[#00F5D4] transition-colors"
            >
              Security Policy
            </Link>

            <Link
              href="/pulseboard/terms"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-sm font-semibold hover:border-[#00F5D4] hover:text-[#00F5D4] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
