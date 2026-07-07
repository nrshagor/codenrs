import Link from "next/link";
import { Shield, Database, KeyRound, Mail, ArrowLeft } from "lucide-react";

const dataItems = [
  "Transaction records, values, categories (such as Food, Transport, Bills), and timestamp metadata.",
  "Receipt images captured by the user or uploaded locally for Gemini AI vision processing.",
  "Bangla and Banglish voice note recordings processed temporarily via Gemini 2.5 Flash for smart data parsing.",
  "Authentication profile details (Google Sign-In tokens) and real-time cloud gem balance verification metrics.",
];

const securityItems = [
  "Pocket Lens securely encrypts local device financial logs using an embedded Isar database database system.",
  "All receipt images are saved in private application documents storage directories with a scheduled 60-day cleanup policy.",
  "Cloud sync architecture utilizes secure Firebase backend frameworks and precise user-scoped Firestore rules.",
  "Pocket Lens does not sell, trade, or distribute your private expense tracking data to third-party ad brokers.",
];

export default function PocketLensPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white pt-28">
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pb-20">
        <Link
          href="/pocket-lens"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#1A56DB] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Pocket Lens
        </Link>

        <div className="rounded-3xl border border-slate-800 bg-[#141B2D]/70 backdrop-blur-xl p-8 lg:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1A56DB]/30 bg-[#1A56DB]/10 px-4 py-2 text-sm font-medium text-[#1A56DB] mb-6">
            <Shield className="w-4 h-4" />
            Privacy Policy
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Pocket Lens Privacy Policy
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            Pocket Lens is an AI-powered personal finance tracker developed by
            Codenrs. We are dedicated to helping you scan receipts, parse voice
            commands, and track daily budgets securely. This policy details how
            we treat your information.
          </p>

          <p className="mt-4 text-sm text-slate-500">Last updated: July 2026</p>
        </div>

        <div className="mt-10 grid gap-6">
          <PolicySection
            icon={<Database className="w-5 h-5" />}
            title="Information Pocket Lens uses"
          >
            <p>
              Pocket Lens utilizes local database frameworks, Google Gemini
              models, and Firebase cloud integrations to enable automated
              financial ledger entries. This process manages the following data
              scopes:
            </p>

            <ul className="mt-4 space-y-3">
              {dataItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-[#0A0F1E] p-4 text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection
            icon={<KeyRound className="w-5 h-5" />}
            title="How data processing handles AI automation"
          >
            <p>
              Automated workflows (Receipt Imaging and Bangla Audio Parsing)
              route input assets directly to Google Gemini APIs. The text
              generation returns strictly formatted transactional payloads,
              ensuring raw images or transient audio arrays are not collected by
              Codenrs servers for external analysis.
            </p>
          </PolicySection>

          <PolicySection title="How data is used">
            <p>
              Extracted fields are uniquely stored to populate user dashboards,
              adjust live monthly budget alert configurations, generate donut
              analytics charts, and balance server-validated gem allocation
              layers. No financial telemetry data is processed for general
              advertisement injection engines.
            </p>
          </PolicySection>

          <PolicySection title="Data storage & cloud synchronization">
            <p>
              By default, records stay locally inside an offline Isar collection
              instance. For users authenticated via Google Sign-In, sync states
              are maintained safely using Firestore database rules, mapping data
              isolation specifically to individual owner account profiles.
            </p>
          </PolicySection>

          <PolicySection title="Security practices">
            <ul className="space-y-3">
              {securityItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-[#0A0F1E] p-4 text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection title="Third-party services & monetization">
            <p>
              Pocket Lens integrates Google Mobile Ads (AdMob) SDK mechanisms
              for rewarded gem increments and banner elements, operating under
              Google Play Core policies. Subscription billing processing and
              receipt evaluations are managed via Google Play Billing protection
              frameworks.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              For privacy questions, data modification queries, or system
              support requests, contact Codenrs at{" "}
              <a
                href="mailto:support@codenrs.com"
                className="font-medium text-[#1A56DB] hover:underline"
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
    <section className="rounded-3xl border border-slate-800 bg-[#141B2D]/70 backdrop-blur-xl p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-4">
        {icon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1A56DB]/10 text-[#1A56DB]">
            {icon}
          </div>
        ) : null}

        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="text-slate-400 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}
