import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  PackageSearch,
  BarChart3,
  Activity,
  Users,
  DatabaseZap,
  ShieldCheck,
} from "lucide-react";

const docsSections = [
  {
    icon: <PackageSearch className="w-5 h-5" />,
    title: "Installation",
    items: [
      "Install RevivaIQ Base from the Odoo Apps Marketplace.",
      "Ensure Inventory (stock) and Sales (sale_management) modules are installed.",
      "Open RevivaIQ from the Odoo Apps menu after installation.",
      "RevivaIQ works on Odoo.sh and On-Premise deployments.",
    ],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Executive Dashboard",
    items: [
      "View dead stock risk and inactive customer recovery summaries.",
      "Track operational revenue risk from one clean dashboard.",
      "Access dead stock, customer insights, and analytics snapshots quickly.",
      "Use the dashboard as the operational intelligence center for your Odoo business.",
    ],
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Dead Stock Intelligence",
    items: [
      "Detect slow moving inventory and non-moving products.",
      "Review risk level, risk score, and inventory value impact.",
      "Track products with long inactivity periods.",
      "Use operational workflow states for review and resolution tracking.",
    ],
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Customer Recovery Insights",
    items: [
      "Identify inactive customers and lost customer opportunities.",
      "Track customer recovery scores and sales history.",
      "Use recovery workflow stages for operational follow-up.",
      "Review inactive customer revenue opportunities from one place.",
    ],
  },
  {
    icon: <DatabaseZap className="w-5 h-5" />,
    title: "Analytics Snapshots",
    items: [
      "Generate point-in-time revenue risk summaries.",
      "Track operational recovery progress over time.",
      "Review dead stock value and inactive customer recovery totals.",
      "Use snapshots for management reporting and operational visibility.",
    ],
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Performance & Operational Safety",
    items: [
      "Company-scoped analytics for safer multi-company environments.",
      "Performance-safe batch limits for large Odoo databases.",
      "Advanced search filters, grouping, and productivity workflows.",
      "Designed as a lightweight operational intelligence foundation for Odoo 18.",
    ],
  },
];

export default function RevivaIQDocsPage() {
  return (
    <main className="min-h-screen bg-background pt-28">
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <Link
          href="/revivaiq"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to RevivaIQ
        </Link>

        <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-400 mb-6">
            <BookOpen className="w-4 h-4" />
            Documentation
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            RevivaIQ Documentation
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Learn how RevivaIQ Base works inside Odoo, how dead stock and
            customer recovery analytics operate, and how operational snapshots
            help monitor business revenue risk over time.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {docsSections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">
                  {section.icon}
                </div>

                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>

              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border bg-card p-4 text-muted-foreground leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8">
          <h2 className="text-2xl font-bold">Need more help?</h2>

          <p className="mt-3 text-muted-foreground leading-relaxed">
            Visit the support page or contact CodeNRS for installation help,
            customization requests, operational guidance, or Odoo Marketplace
            licensing questions.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/revivaiq/support"
              className="inline-flex items-center rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-[#0D0D0D] hover:shadow-[0_0_30px_rgba(96,165,250,0.35)] transition-all"
            >
              Contact Support
            </Link>

            <Link
              href="/revivaiq/privacy"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
