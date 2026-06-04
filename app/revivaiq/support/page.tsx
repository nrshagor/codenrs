import Link from "next/link";
import {
  ArrowLeft,
  LifeBuoy,
  Mail,
  Clock3,
  Bug,
  ShieldAlert,
  ExternalLink,
} from "lucide-react";

const faqItems = [
  {
    question: "Why are no dead stock records showing?",
    answer:
      "Run Dead Stock Analysis from the RevivaIQ dashboard or Dead Stock list. Also check your threshold days, minimum stock quantity, and product sales history.",
  },
  {
    question: "Why are no customer insights showing?",
    answer:
      "Run Customer Recovery Analysis and ensure your Odoo database has customers with confirmed sales history.",
  },
  {
    question: "Why is Odoo Online not supported?",
    answer:
      "RevivaIQ uses custom Python models, services, and wizards. It is designed for Odoo.sh and On-Premise deployments.",
  },
];

const supportItems = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Support Email",
    description: "For technical help, installation support, or bug reports.",
    value: "support@codenrs.com",
  },
  {
    icon: <Clock3 className="w-5 h-5" />,
    title: "Response Time",
    description: "Most support requests receive a response within 24–72 hours.",
    value: "24–72 hours",
  },
  {
    icon: <Bug className="w-5 h-5" />,
    title: "Bug Reports",
    description:
      "Include screenshots, Odoo version, module version, logs, and reproduction steps when possible.",
    value: "Detailed reports help faster fixes",
  },
];

export default function RevivaIQSupportPage() {
  return (
    <main className="min-h-screen bg-background pt-28">
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pb-20">
        <Link
          href="/revivaiq"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to RevivaIQ
        </Link>

        <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-400 mb-6">
            <LifeBuoy className="w-4 h-4" />
            RevivaIQ Support
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Need help with RevivaIQ?
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            RevivaIQ support helps Odoo users with installation, configuration,
            marketplace licensing, analytics workflows, and bug reports.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {supportItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">
                {item.icon}
              </div>
              <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold">Common troubleshooting</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-lg">{item.question}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8">
          <h2 className="text-2xl font-bold">Marketplace & documentation</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            RevivaIQ documentation, marketplace updates, pricing details, and
            onboarding guides will continue expanding as the product grows.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/revivaiq/docs"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              View Documentation
              <ExternalLink className="w-4 h-4" />
            </Link>

            <Link
              href="/revivaiq/privacy"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
