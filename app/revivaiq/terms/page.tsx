import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  CreditCard,
  Scale,
  Database,
  ExternalLink,
} from "lucide-react";

const usageRules = [
  "Users must comply with Odoo Apps Marketplace policies and applicable laws.",
  "RevivaIQ may only be used within authorized Odoo environments.",
  "Users are responsible for Odoo access rights, hosting, backups, and permission management.",
];

const limitationItems = [
  "RevivaIQ provides operational analytics and business visibility based on Odoo data.",
  "Analytics outputs should not be treated as legal, financial, tax, or compliance advice.",
  "CodeNRS is not responsible for business decisions made solely from analytics output.",
];

export default function RevivaIQTermsPage() {
  return (
    <main className="min-h-screen bg-background pt-28">
      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <Link
          href="/revivaiq"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to RevivaIQ
        </Link>

        <div className="rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur-xl lg:p-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-400">
            <FileText className="h-4 w-4" />
            Terms of Service
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight lg:text-6xl">
            RevivaIQ Terms of Service
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            These Terms of Service govern the use of RevivaIQ Base, an Odoo
            Marketplace module developed by CodeNRS.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: June 2026
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <TermsSection
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Acceptance of terms"
          >
            <p>
              By installing, accessing, or using RevivaIQ, you agree to these
              Terms of Service and any applicable Odoo Apps Marketplace
              policies. If you do not agree, do not install or use RevivaIQ.
            </p>
          </TermsSection>

          <TermsSection title="About RevivaIQ">
            <p>
              RevivaIQ Base is an Odoo module that provides dead stock
              management, slow moving inventory analytics, inactive customer
              recovery insights, revenue risk snapshots, and executive dashboard
              visibility.
            </p>
          </TermsSection>

          <TermsSection title="Permitted use">
            <ul className="space-y-3">
              {usageRules.map((rule) => (
                <li
                  key={rule}
                  className="rounded-2xl border border-border bg-card p-4"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </TermsSection>

          <TermsSection
            icon={<Database className="h-5 w-5" />}
            title="Data usage and privacy"
          >
            <p>
              RevivaIQ uses Odoo business data only to provide module features
              inside your Odoo environment. CodeNRS does not sell customer Odoo
              data.
            </p>

            <p>
              Data handling practices are described in the{" "}
              <Link
                href="/revivaiq/privacy"
                className="inline-flex items-center gap-1 font-medium text-blue-400 hover:underline"
              >
                RevivaIQ Privacy Policy
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
              .
            </p>
          </TermsSection>

          <TermsSection
            icon={<CreditCard className="h-5 w-5" />}
            title="Purchases and licensing"
          >
            <p>
              RevivaIQ purchases, licensing, refunds, and downloads are handled
              through Odoo Apps Marketplace where applicable. Use of the module
              is subject to its commercial license and Odoo Marketplace terms.
            </p>
          </TermsSection>

          <TermsSection title="Availability">
            <p>
              CodeNRS will make reasonable efforts to maintain compatibility
              with supported Odoo versions. However, uninterrupted or error-free
              operation cannot be guaranteed because RevivaIQ depends on Odoo,
              hosting configuration, installed modules, user permissions, and
              database structure.
            </p>
          </TermsSection>

          <TermsSection title="Feature changes">
            <p>
              RevivaIQ features, pricing, and supported workflows may evolve
              over time as the product improves. Major changes will be reflected
              through updated marketplace information where applicable.
            </p>
          </TermsSection>

          <TermsSection
            icon={<Scale className="h-5 w-5" />}
            title="Limitation of liability"
          >
            <ul className="space-y-3">
              {limitationItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border bg-card p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </TermsSection>

          <TermsSection title="Contact">
            <p>
              For legal or support inquiries, contact CodeNRS at{" "}
              <a
                href="mailto:support@codenrs.com"
                className="font-medium text-blue-400 hover:underline"
              >
                support@codenrs.com
              </a>{" "}
              or visit the{" "}
              <Link
                href="/revivaiq/support"
                className="font-medium text-blue-400 hover:underline"
              >
                RevivaIQ support page
              </Link>
              .
            </p>
          </TermsSection>
        </div>
      </section>
    </main>
  );
}

function TermsSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-xl lg:p-8">
      <div className="mb-4 flex items-center gap-3">
        {icon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">
            {icon}
          </div>
        ) : null}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
