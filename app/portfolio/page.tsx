import type { Metadata } from "next"
import PortfolioPage from "./portfolio-content"

export const metadata: Metadata = {
  title: "Portfolio | Client Work & Case Studies",
  description:
    "Explore CODENRS case studies across web development, creative design, e-commerce, and PropTech — real projects delivered for real clients.",
  alternates: { canonical: "/portfolio" },
}

export default function Page() {
  return <PortfolioPage />
}
