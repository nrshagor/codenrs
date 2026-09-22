import type { Metadata } from "next"
import ServicesPage from "./services-content"

export const metadata: Metadata = {
  title: "Services | Web Development, Design, SEO & Data Analytics",
  description:
    "Full-spectrum digital services from CODENRS: Next.js web development, creative design & branding, technical SEO optimization, and data & analytics dashboards.",
  alternates: { canonical: "/services" },
}

export default function Page() {
  return <ServicesPage />
}
