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
  "Users must comply with Atlassian Jira and Atlassian Marketplace policies.",
  "PulseBoard may only be used within authorized Jira workspaces.",
  "Users are responsible for Jira permission management inside their organization.",
];

const limitationItems = [
  "PulseBoard provides operational insights and analytics based on Jira data.",
  "Analytics and workload recommendations should not be treated as legal, financial, or compliance advice.",
  "CodeNRS is not responsible for business decisions made solely from analytics output.",
];

export default function PulseBoardTermsPage() {
  return (
    <main className="min-h-screen bg-background pt-28">
      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <Link
          href="/pulseboard"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#00F5D4]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to PulseBoard
        </Link>

        <div className="rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur-xl lg:p-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-4 py-2 text-sm font-medium text-[#00F5D4]">
            <FileText className="h-4 w-4" />
            Terms of Service
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight lg:text-6xl">
            PulseBoard Terms of Service
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            These Terms of Service govern the use of PulseBoard, a Jira
            Marketplace application developed by CodeNRS.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: May 2026
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <TermsSection
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Acceptance of terms"
          >
            <p>
              By installing, accessing, or using PulseBoard, you agree to these
              Terms of Service and any applicable Atlassian Marketplace
              policies. If you do not agree to these terms, do not install or
              use PulseBoard.
            </p>
          </TermsSection>

          <TermsSection title="About PulseBoard">
            <p>
              PulseBoard is a Jira Marketplace app that provides dashboard
              insights, Jira analytics, workload visibility, sprint health
              tracking, and developer-focused activity views using data
              available from your Jira workspace.
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
              PulseBoard uses Jira workspace data only to provide dashboard,
              analytics, workload planning, and productivity features inside
              Jira. CodeNRS does not sell customer Jira data.
            </p>

            <p>
              Data handling, storage, and privacy practices are described in the{" "}
              <Link
                href="/pulseboard/privacy"
                className="inline-flex items-center gap-1 font-medium text-[#00F5D4] hover:underline"
              >
                PulseBoard Privacy Policy
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
              .
            </p>
          </TermsSection>

          <TermsSection
            icon={<CreditCard className="h-5 w-5" />}
            title="Subscriptions and billing"
          >
            <p>
              PulseBoard subscriptions, renewals, trials, cancellations, and
              billing are managed through Atlassian Marketplace where
              applicable. Access to premium features may change depending on
              Marketplace license status.
            </p>
          </TermsSection>

          <TermsSection title="Availability">
            <p>
              CodeNRS will make reasonable efforts to maintain PulseBoard
              availability and compatibility with supported Jira Cloud
              environments. However, uninterrupted or error-free service cannot
              be guaranteed because PulseBoard depends on Atlassian services,
              Jira APIs, browser environments, and workspace configuration.
            </p>
          </TermsSection>

          <TermsSection title="Feature changes">
            <p>
              PulseBoard features, pricing, and plan limitations may evolve over
              time as the product improves. Major changes affecting customers
              will be reflected through updated Marketplace information.
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

          <TermsSection title="Termination">
            <p>
              Access to PulseBoard may end if the Jira app is uninstalled, if
              Marketplace licensing becomes inactive, or if usage violates these
              terms, Atlassian policies, or applicable laws.
            </p>
          </TermsSection>

          <TermsSection title="Changes to these terms">
            <p>
              CodeNRS may update these Terms of Service from time to time.
              Continued use of PulseBoard after updates means you accept the
              updated terms.
            </p>
          </TermsSection>

          <TermsSection title="Contact">
            <p>
              For legal or support inquiries, contact CodeNRS at{" "}
              <a
                href="mailto:noorerabbishagor@gmail.com"
                className="font-medium text-[#00F5D4] hover:underline"
              >
                noorerabbishagor@gmail.com
              </a>{" "}
              or visit the{" "}
              <Link
                href="/pulseboard/support"
                className="font-medium text-[#00F5D4] hover:underline"
              >
                PulseBoard support page
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
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
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
