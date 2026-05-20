import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Plug,
  BarChart3,
  Activity,
  Users,
  CreditCard,
} from "lucide-react";

const docsSections = [
  {
    icon: <Plug className="w-5 h-5" />,
    title: "Installation",
    items: [
      "Install PulseBoard from Atlassian Marketplace.",
      "Open PulseBoard from Jira Apps.",
      "PulseBoard reads Jira data using Atlassian Forge app permissions.",
      "No separate Jira API token is required inside the app.",
    ],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Dashboard",
    items: [
      "View Jira project metrics and recent activity.",
      "Open Jira projects and issues directly from PulseBoard.",
      "Use the dashboard as the starting point for workspace visibility.",
    ],
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Analytics",
    items: [
      "Review sprint delivery confidence.",
      "Track blocked issue risk.",
      "Analyze workload balance and developer activity.",
      "Use filters to narrow analytics by project, developer, and date range.",
    ],
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Workload Planner",
    items: [
      "Review developer capacity across a weekly workload table.",
      "Identify overloaded, available, optimized, and watch-status days.",
      "Use filters for project, sprint, priority, role, and workload status.",
      "Pro access unlocks full team visibility and reassignment insights.",
    ],
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "My Pulse",
    items: [
      "Track your assigned Jira tasks in weekly and monthly views.",
      "Open Jira issues safely from the task drawer.",
      "Use My Pulse as a personal work visibility page.",
    ],
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Plans and limits",
    items: [
      "Free includes Dashboard, My Pulse, basic analytics, 1 project visibility, and up to 3 visible team members.",
      "Pro unlocks unlimited project visibility, full analytics, workload planning, and team-level insights.",
      "PulseBoard includes a 14-day Pro trial for new subscriptions.",
      "Billing and subscriptions are managed through Atlassian Marketplace.",
    ],
  },
];

export default function PulseBoardDocsPage() {
  return (
    <main className="min-h-screen bg-background pt-28">
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <Link
          href="/pulseboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#00F5D4] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to PulseBoard
        </Link>

        <div className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 lg:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-4 py-2 text-sm font-medium text-[#00F5D4] mb-6">
            <BookOpen className="w-4 h-4" />
            Documentation
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            PulseBoard Documentation
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Learn how PulseBoard works inside Jira, what each feature does, and
            how Free and Pro plan limits affect analytics and workload
            visibility.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {docsSections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
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
            Visit the support page or contact CodeNRS for setup questions,
            Marketplace licensing help, or issue reports.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/pulseboard/support"
              className="inline-flex items-center rounded-full bg-[#00F5D4] px-6 py-3 text-sm font-semibold text-[#0D0D0D] hover:shadow-[0_0_30px_rgba(0,245,212,0.35)] transition-all"
            >
              Contact Support
            </Link>

            <Link
              href="/pulseboard/privacy"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-[#00F5D4] hover:text-[#00F5D4] transition-colors"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
