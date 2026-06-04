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

const marketplaceUrl = "https://apps.odoo.com/apps/modules/18.0/revivaiq_base";

const screenshots = [
  {
    title: "Executive Dashboard",
    image: "/images/revivaiq/basic/dashboard-overview.png",
    description:
      "Monitor dead stock risk, inactive customer recovery opportunities, and latest revenue risk snapshots from one Odoo dashboard.",
  },
  {
    title: "Dead Stock List",
    image: "/images/revivaiq/basic/dead-stock-list.png",
    description:
      "Review slow moving inventory, risk level, risk score, days without sale, and inventory value.",
  },
  {
    title: "Dead Stock Form",
    image: "/images/revivaiq/basic/dead-stock-form.png",
    description:
      "Open detailed dead stock records with product information, risk summary, inventory movement, and operational tracking.",
  },
  {
    title: "Customer Insights List",
    image: "/images/revivaiq/basic/customer-insights-list.png",
    description:
      "Identify inactive customers, recovery scores, customer status, and revenue recovery opportunities.",
  },
  {
    title: "Analytics Snapshot List",
    image: "/images/revivaiq/basic/analytics-snapshot-list.png",
    description:
      "Track historical revenue risk snapshots for dead stock and customer recovery monitoring.",
  },
  {
    title: "Dead Stock Analysis Wizard",
    image: "/images/revivaiq/basic/dead-stock-wizard.png",
    description:
      "Run dead stock analysis with configurable thresholds and safe batch limits for large databases.",
  },
];

const featureHighlights = [
  "Dead stock management",
  "Slow moving inventory analytics",
  "Inactive customer recovery",
  "Revenue risk snapshots",
  "Executive sales dashboard",
  "Advanced search and filters",
  "Wizard-based analysis workflow",
  "Odoo.sh and On-Premise support",
];

const marketplaceDetails = [
  {
    label: "App name",
    value: "RevivaIQ Base",
  },
  {
    label: "Vendor",
    value: "CodeNRS",
  },
  {
    label: "Odoo version",
    value: "18.0",
  },
  {
    label: "Pricing",
    value: "$149 one-time",
  },
  {
    label: "Support",
    value: "support@codenrs.com",
  },
];

export default function RevivaIQMarketplacePage() {
  return (
    <main className="min-h-screen bg-background pt-28">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <Link
          href="/revivaiq"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to RevivaIQ
        </Link>

        <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-400 mb-6">
            <Sparkles className="w-4 h-4" />
            Odoo Marketplace Package
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
                RevivaIQ Base Marketplace Listing
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Listing copy, feature highlights, screenshots, pricing details,
                and Odoo Marketplace positioning for RevivaIQ Base — a sales
                recovery and inventory intelligence app by CodeNRS.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={marketplaceUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-[#0D0D0D]"
                >
                  View on Odoo Apps
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
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
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">
                <FileText className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-bold">Short description</h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Dead stock management, slow moving inventory analytics, inactive
              customer recovery, and executive sales intelligence dashboard for
              Odoo.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">
                <BadgeCheck className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-bold">Positioning</h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              RevivaIQ Base helps Odoo businesses identify hidden revenue loss
              from dead stock and inactive customers through practical
              operational intelligence.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Long Description
          </p>

          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              RevivaIQ Base is an Odoo operational intelligence module designed
              for dead stock management, slow moving inventory tracking,
              inactive customer recovery, sales recovery analytics, and revenue
              risk monitoring.
            </p>

            <p>
              It helps sales, inventory, warehouse, and operations teams
              identify hidden revenue loss, reduce slow-moving stock, and
              recover inactive customers from a clean Odoo-native dashboard.
            </p>

            <p>
              Users can review dead stock records, customer recovery insights,
              revenue risk summaries, and point-in-time analytics snapshots
              without leaving Odoo.
            </p>

            <p>
              RevivaIQ Base is designed to stay lightweight, practical, and
              business-focused for Odoo.sh and On-Premise deployments.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Feature Highlights
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureHighlights.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-400" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-400">
              <Camera className="w-4 h-4" />
              Screenshot Captions
            </div>

            <h2 className="mt-5 text-3xl lg:text-5xl font-bold tracking-tight">
              Marketplace screenshots
            </h2>

            <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
              Use these screenshots and captions to explain RevivaIQ Base&apos;s
              core operational recovery workflow.
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
                    <p className="text-sm font-semibold text-blue-400">
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
            Available on Odoo Apps
          </h2>

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            RevivaIQ Base is available for Odoo 18 with Odoo.sh and On-Premise
            support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={marketplaceUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-[#0D0D0D]"
            >
              Open Odoo Apps Listing
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/revivaiq/privacy"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/revivaiq/terms"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/revivaiq/support"
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 px-6 py-3 text-sm font-semibold text-blue-400 hover:bg-blue-400/10 transition-colors"
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
