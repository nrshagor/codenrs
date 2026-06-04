import Link from "next/link";
import type { ReactNode } from "react";
import {
  ShieldCheck,
  Bug,
  LockKeyhole,
  Eye,
  Mail,
  ArrowLeft,
  Server,
} from "lucide-react";

const securityControls = [
  "RevivaIQ runs inside the customer's Odoo environment.",
  "RevivaIQ uses Odoo access rights, ORM models, and company-scoped records.",
  "RevivaIQ does not require external API keys for its core analytics workflow.",
  "RevivaIQ does not sell or externally process customer business data.",
  "Security-related changes are reviewed before release where applicable.",
];

const vulnerabilitySteps = [
  "Security reports are reviewed and triaged based on severity and potential customer impact.",
  "Confirmed vulnerabilities are prioritized according to risk level.",
  "Critical issues may result in patch releases or temporary mitigation guidance.",
  "Reporters may be contacted for additional information when needed.",
];

export default function RevivaIQSecurityPage() {
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
            <ShieldCheck className="w-4 h-4" />
            Security Policy
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            RevivaIQ Security Policy
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            RevivaIQ Base is an Odoo Marketplace module by CodeNRS. This
            Security Policy explains how we handle security reports,
            vulnerabilities, and product security practices.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: June 2026
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <PolicySection
            icon={<Server className="w-5 h-5" />}
            title="Security overview"
          >
            <p>
              RevivaIQ is designed to run inside Odoo and use Odoo-native
              models, access control, and company-scoped analytics. The module
              focuses on dead stock management, customer recovery insights, and
              revenue risk snapshots without sending business data to external
              analytics servers.
            </p>
          </PolicySection>

          <PolicySection
            icon={<LockKeyhole className="w-5 h-5" />}
            title="Key security controls"
          >
            <ul className="space-y-3">
              {securityControls.map((item) => (
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
            icon={<Bug className="w-5 h-5" />}
            title="Vulnerability management"
          >
            <p>
              We take security reports seriously and review them based on
              severity, exploitability, and customer impact.
            </p>
            <ul className="mt-4 space-y-3">
              {vulnerabilitySteps.map((item) => (
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
            icon={<Eye className="w-5 h-5" />}
            title="Data protection"
          >
            <p>
              RevivaIQ uses Odoo business data only to provide module features.
              CodeNRS does not sell customer data and does not use customer Odoo
              data for advertising.
            </p>
          </PolicySection>

          <PolicySection
            icon={<Mail className="w-5 h-5" />}
            title="Reporting a security issue"
          >
            <p>
              To report a security concern related to RevivaIQ, contact CodeNRS
              at{" "}
              <a
                href="mailto:security@codenrs.com"
                className="font-medium text-blue-400 hover:underline"
              >
                security@codenrs.com
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
  icon?: ReactNode;
  children: ReactNode;
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
