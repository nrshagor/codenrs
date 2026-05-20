import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  CreditCard,
  Scale,
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
            <FileText className="w-4 h-4" />
            Terms of Service
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            PulseBoard Terms of Service
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            These Terms of Service govern the use of PulseBoard, a Jira
            Marketplace application developed by CodeNRS.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: May 2026
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <TermsSection
            icon={<ShieldCheck className="w-5 h-5" />}
            title="Acceptance of terms"
          >
            <p>
              By installing or using PulseBoard, you agree to these Terms of
              Service and any applicable Atlassian Marketplace policies.
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
            icon={<CreditCard className="w-5 h-5" />}
            title="Subscriptions and billing"
          >
            <p>
              PulseBoard subscriptions, renewals, trials, cancellations, and
              billing are managed through Atlassian Marketplace. Access to
              premium features may change depending on Marketplace license
              status.
            </p>
          </TermsSection>

          <TermsSection title="Availability">
            <p>
              CodeNRS will make reasonable efforts to maintain service
              availability and compatibility with supported Jira environments.
              However, uninterrupted availability cannot be guaranteed.
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
            icon={<Scale className="w-5 h-5" />}
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
              terms or Atlassian policies.
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
              </a>
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
