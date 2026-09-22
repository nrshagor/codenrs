import type { Metadata } from "next"
import BlogPage from "./blog-content"

export const metadata: Metadata = {
  title: "Blog | Web Development & Digital Strategy Insights",
  description:
    "Insights on web development trends, SaaS product design, and digital strategy from the CODENRS team.",
  alternates: { canonical: "/blog" },
}

export default function Page() {
  return <BlogPage />
}
