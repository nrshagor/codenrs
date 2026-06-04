import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Activity,
  Users,
  ShieldCheck,
  LayoutDashboard,
  CheckCircle2,
  Store,
  PackageSearch,
  Camera,
  DatabaseZap,
} from "lucide-react";

const marketplaceUrl = "https://apps.odoo.com/apps/modules/18.0/revivaiq_base";

const features = [
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Executive Dashboard",
    description:
      "Monitor dead stock risk, inactive customer opportunities, and revenue risk summaries from one clean Odoo dashboard.",
  },
  {
    icon: <PackageSearch className="w-6 h-6" />,
    title: "Dead Stock Intelligence",
    description:
      "Identify slow-moving inventory, non-moving products, stock value risk, and items that need operational review.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Recovery Insights",
    description:
      "Track inactive customers, recovery scores, sales history, and customer retention opportunities inside Odoo.",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Analytics Snapshots",
    description:
      "Save point-in-time revenue risk summaries and compare dead stock and customer recovery progress over time.",
  },
];

const planFeatures = [
  "Executive dashboard",
  "Dead stock management",
  "Slow moving inventory analytics",
  "Inactive customer recovery",
  "Revenue risk snapshots",
  "Advanced search and filters",
  "Wizard-based analysis workflow",
  "Odoo.sh and On-Premise support",
];

export default function RevivaIQLandingPage() {
  return (
    <main className="min-h-screen bg-background pt-28">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-400 mb-8">
                <ShieldCheck className="w-4 h-4" />
                Odoo 18 Marketplace App
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
                Sales recovery insights
                <span className="block text-blue-400">inside Odoo</span>
              </h1>

              <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                RevivaIQ Base helps Odoo businesses detect dead stock, monitor
                slow-moving inventory, find inactive customers, and track
                revenue risk through a clean operational intelligence dashboard.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={marketplaceUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-8 py-4 text-sm font-semibold text-[#0D0D0D] hover:shadow-[0_0_30px_rgba(96,165,250,0.35)] transition-all"
                >
                  View on Odoo Apps
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/revivaiq/docs"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 px-8 py-4 text-sm font-semibold text-blue-400 hover:bg-blue-400/10 transition-colors"
                >
                  View Documentation
                  <DatabaseZap className="w-4 h-4" />
                </Link>

                <Link
                  href="/revivaiq/support"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>

            <div className="relative rounded-[32px] border border-border bg-card/70 p-4 backdrop-blur-xl">
              <Image
                src="/images/revivaiq/basic/dashboard-overview.png"
                alt="RevivaIQ Base Odoo dashboard overview"
                width={1500}
                height={1000}
                className="rounded-3xl border border-border"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Core Features
          </p>

          <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight">
            Practical recovery intelligence for Odoo
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 transition-all hover:border-blue-400/40 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">
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
        <div className="grid gap-6 lg:grid-cols-3">
          <Image
            src="/images/revivaiq/basic/dead-stock-list.png"
            alt="RevivaIQ dead stock list view"
            width={1500}
            height={1000}
            className="rounded-3xl border border-border bg-card/70"
          />
          <Image
            src="/images/revivaiq/basic/customer-insights-list.png"
            alt="RevivaIQ customer insights list view"
            width={1500}
            height={1000}
            className="rounded-3xl border border-border bg-card/70"
          />
          <Image
            src="/images/revivaiq/basic/analytics-snapshot-list.png"
            alt="RevivaIQ analytics snapshot list view"
            width={1500}
            height={1000}
            className="rounded-3xl border border-border bg-card/70"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
        <div className="rounded-[32px] border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Pricing
            </p>

            <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight">
              Simple one-time Odoo pricing
            </h2>

            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              RevivaIQ Base is available as a commercial Odoo 18 module for
              Odoo.sh and On-Premise deployments.
            </p>
          </div>

          <div className="mt-12 max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl border border-blue-400/30 bg-blue-400/5 p-8">
              <div className="absolute top-4 right-4 rounded-full bg-blue-400 px-3 py-1 text-xs font-semibold text-[#0D0D0D]">
                Base Edition
              </div>

              <div>
                <h3 className="text-2xl font-bold">RevivaIQ Base</h3>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-bold">$149</span>
                  <span className="pb-1 text-muted-foreground">one-time</span>
                </div>

                <p className="mt-4 text-muted-foreground">
                  Sales recovery, dead stock intelligence, customer recovery
                  insights, and analytics snapshots for Odoo 18.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {planFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={marketplaceUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-[#0D0D0D]"
                >
                  Buy on Odoo Apps
                  <Store className="w-4 h-4" />
                </Link>

                <Link
                  href="/revivaiq/support"
                  className="inline-flex items-center rounded-full border border-blue-400/40 px-6 py-3 text-sm font-semibold text-blue-400 hover:bg-blue-400/10 transition-colors"
                >
                  Need Help?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-20">
        <div className="rounded-[32px] border border-border bg-card/70 backdrop-blur-xl p-10 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance">
            Ready to reduce hidden revenue loss in Odoo?
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore RevivaIQ documentation, support resources, marketplace
            details, privacy policy, security information, and terms.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={marketplaceUrl}
              target="_blank"
              className="inline-flex items-center rounded-full bg-blue-400 px-8 py-4 text-sm font-semibold text-[#0D0D0D]"
            >
              View Marketplace App
            </Link>

            <Link
              href="/revivaiq/docs"
              className="inline-flex items-center rounded-full border border-blue-400/40 px-8 py-4 text-sm font-semibold text-blue-400 hover:bg-blue-400/10 transition-colors"
            >
              Read Documentation
            </Link>

            <Link
              href="/revivaiq/privacy"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-sm font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/revivaiq/security"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-sm font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              Security Policy
            </Link>

            <Link
              href="/revivaiq/terms"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-sm font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
