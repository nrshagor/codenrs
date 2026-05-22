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
  "PulseBoard runs inside Jira using Atlassian Forge.",
  "PulseBoard uses Atlassian-provided app permissions and does not ask users for Jira API tokens.",
  "Access to Jira data is limited to the permissions granted during app installation.",
  "PulseBoard does not sell customer data or use Jira data for advertising.",
  "Security-related changes are reviewed before release where applicable.",
];

const vulnerabilitySteps = [
  "Security reports are reviewed and triaged based on severity and potential customer impact.",
  "Confirmed vulnerabilities are prioritized for remediation according to risk level.",
  "Critical issues are handled with urgency and may result in temporary mitigation, patch releases, or configuration changes.",
  "Reporters may be contacted for additional information when needed.",
];

const incidentSteps = [
  "We investigate reported or detected security issues as quickly as possible.",
  "We assess the scope, affected systems, and potential customer impact.",
  "We apply remediation steps such as fixing code, updating configuration, or rotating affected credentials where applicable.",
  "If customer impact is confirmed, we communicate relevant information and next steps through appropriate support channels.",
];

export default function PulseBoardSecurityPage() {
  return (
    <main className="min-h-screen bg-background pt-28">
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pb-20">
        <Link
          href="/pulseboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#00F5D4] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to PulseBoard
        </Link>

        <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-4 py-2 text-sm font-medium text-[#00F5D4] mb-6">
            <ShieldCheck className="w-4 h-4" />
            Security Policy
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            PulseBoard Security Policy
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            PulseBoard is a Jira Marketplace app by CodeNRS. This Security
            Policy explains how we protect the app, handle security reports,
            manage vulnerabilities, and apply security controls for PulseBoard
            and related systems.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: May 2026
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <PolicySection
            icon={<Server className="w-5 h-5" />}
            title="Security overview"
          >
            <p>
              PulseBoard is designed to operate within the Atlassian ecosystem
              and uses Atlassian Forge to access Jira data through
              installation-approved permissions. The app is built to minimize
              unnecessary data access and to use Jira data only for product
              features such as dashboards, analytics, workload planning, sprint
              risk insights, and personal task views.
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
              We take security reports seriously and review reported
              vulnerabilities based on severity, exploitability, and possible
              customer impact.
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
            title="Security issues and incident handling"
          >
            <p>
              If a security issue or incident is reported or detected, CodeNRS
              follows a review and remediation process focused on protecting
              customers and reducing risk.
            </p>

            <ul className="mt-4 space-y-3">
              {incidentSteps.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border bg-card p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection title="Data protection">
            <p>
              PulseBoard uses Jira data only to provide app functionality.
              PulseBoard does not sell customer data and does not use Jira data
              for advertising. The app does not require users to provide
              personal Jira API tokens through the app interface.
            </p>
          </PolicySection>

          <PolicySection title="Access control">
            <p>
              PulseBoard access is based on Jira permissions and the permissions
              granted during app installation. Users can only view information
              that is available through the Jira permissions and app access
              model configured in their Atlassian workspace.
            </p>
          </PolicySection>

          <PolicySection title="Monitoring and maintenance">
            <p>
              We review app behavior, customer reports, and security-related
              feedback to identify possible issues. Security improvements,
              dependency updates, and configuration changes may be applied as
              part of regular maintenance.
            </p>
          </PolicySection>

          <PolicySection
            icon={<Mail className="w-5 h-5" />}
            title="Reporting a security issue"
          >
            <p>
              To report a security concern related to PulseBoard, contact
              CodeNRS at{" "}
              <a
                href="mailto:security@codenrs.com"
                className="font-medium text-[#00F5D4] hover:underline"
              >
                security@codenrs.com
              </a>
              .
            </p>

            <p>
              Please include a clear description of the issue, steps to
              reproduce it if possible, affected pages or features, and any
              supporting screenshots or logs.
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
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
