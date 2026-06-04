import Link from "next/link";
import { Shield, Database, KeyRound, ArrowLeft } from "lucide-react";

const dataItems = [
  "Odoo product, inventory, stock quantity, and sales-related records required for dead stock analysis.",
  "Customer and sales history fields required to identify inactive customer recovery opportunities.",
  "Analytics snapshot records created inside your own Odoo database.",
];

const securityItems = [
  "RevivaIQ runs inside your Odoo environment.",
  "RevivaIQ does not send your Odoo business data to CodeNRS servers.",
  "RevivaIQ uses Odoo user permissions and company-scoped records.",
  "RevivaIQ does not sell customer or business data.",
];

export default function RevivaIQPrivacyPage() {
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
            <Shield className="w-4 h-4" />
            Privacy Policy
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            RevivaIQ Privacy Policy
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            RevivaIQ Base is an Odoo Marketplace module by CodeNRS. This policy
            explains what business data the module uses and how it is handled.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: June 2026
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <PolicySection
            icon={<Database className="w-5 h-5" />}
            title="Information RevivaIQ uses"
          >
            <p>
              RevivaIQ reads Odoo records required to provide sales recovery,
              inventory intelligence, and analytics snapshot features. This may
              include:
            </p>
            <ul className="mt-4 space-y-3">
              {dataItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border bg-card p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection
            icon={<KeyRound className="w-5 h-5" />}
            title="How RevivaIQ accesses Odoo data"
          >
            <p>
              RevivaIQ runs inside your Odoo database and uses Odoo ORM models,
              access rules, and user permissions. The module does not require
              external API tokens or third-party analytics accounts.
            </p>
          </PolicySection>

          <PolicySection title="How the data is used">
            <p>
              Data is used only to display RevivaIQ features such as the
              executive dashboard, dead stock records, customer recovery
              insights, analytics snapshots, search filters, and wizard-based
              analysis workflows.
            </p>
          </PolicySection>

          <PolicySection title="Data storage">
            <p>
              RevivaIQ stores generated analytics records inside your own Odoo
              database. CodeNRS does not receive, host, sell, or process your
              Odoo business data through external servers.
            </p>
          </PolicySection>

          <PolicySection title="Security practices">
            <ul className="space-y-3">
              {securityItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border bg-card p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              For privacy questions, contact CodeNRS at{" "}
              <a
                href="mailto:support@codenrs.com"
                className="font-medium text-blue-400 hover:underline"
              >
                support@codenrs.com
              </a>
              .
            </p>
          </PolicySection>
        </div>
      </section>
    </main>
  );
}

function PolicySection({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-4">
        {icon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">
            {icon}
          </div>
        ) : null}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}
