import type { Metadata } from "next"
import AboutPage from "./about-content"

export const metadata: Metadata = {
  title: "About Us | Our Story, Values & Team",
  description:
    "CODENRS is a founder-led digital studio built on excellence, innovation, and partnership. Meet the founder building high-performance web platforms and SaaS products.",
  alternates: { canonical: "/about" },
}

export default function Page() {
  return <AboutPage />
}
