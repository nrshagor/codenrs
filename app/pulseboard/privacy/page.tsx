import Link from "next/link";
import { Shield, Database, KeyRound, Mail, ArrowLeft } from "lucide-react";

const dataItems = [
  "Jira project names, keys, and issue metadata needed to show dashboards and analytics.",
  "Issue summaries, statuses, assignees, priorities, timestamps, and workload-related fields.",
  "Marketplace license status when available through Atlassian Marketplace.",
];

const securityItems = [
  "PulseBoard runs inside Jira using Atlassian Forge.",
  "PulseBoard does not ask users for Jira API tokens from the app UI.",
  "PulseBoard uses Jira permissions granted during app installation.",
  "PulseBoard does not sell customer data.",
];

export default function PulseBoardPrivacyPage() {
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
            <Shield className="w-4 h-4" />
            Privacy Policy
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            PulseBoard Privacy Policy
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            PulseBoard is a Jira Marketplace app by CodeNRS that helps teams
            understand project health, workload balance, sprint risk, and
            personal task activity. This policy explains what data PulseBoard
            uses and how it is handled.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: May 2026
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <PolicySection
            icon={<Database className="w-5 h-5" />}
            title="Information PulseBoard uses"
          >
            <p>
              PulseBoard reads Jira workspace information required to provide
              dashboards, analytics, workload planning, and My Pulse task views.
              This may include:
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
            title="How PulseBoard accesses Jira data"
          >
            <p>
              PulseBoard runs inside Jira using Atlassian Forge and reads Jira
              data through Atlassian-provided app permissions. PulseBoard does
              not require users to paste personal Jira API tokens into the app.
            </p>
          </PolicySection>

          <PolicySection title="How the data is used">
            <p>
              Data is used only to display PulseBoard features such as project
              dashboards, analytics summaries, workload planner views, blocker
              insights, and personal task tracking. PulseBoard does not sell
              customer data or use Jira data for advertising.
            </p>
          </PolicySection>

          <PolicySection title="Data storage">
            <p>
              PulseBoard is designed to use Jira data inside the app experience.
              The current Marketplace MVP focuses on reading Jira data and
              presenting insights inside Jira. If future versions add storage,
              exports, reports, or integrations, this policy will be updated
              before those capabilities are released.
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

          <PolicySection title="Third-party services">
            <p>
              PulseBoard is built for Atlassian Jira and uses Atlassian Forge
              and Atlassian Marketplace services. Billing, trials, renewals, and
              subscription management are handled through Atlassian Marketplace.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              For privacy questions or support requests, contact CodeNRS at{" "}
              <a
                href="mailto:support@codenrs.com"
                className="font-medium text-[#00F5D4] hover:underline"
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
