import type { Metadata } from "next"
import ContactPage from "./contact-content"

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project",
  description:
    "Get in touch with CODENRS to discuss your web development, design, or SaaS product project. Let's build something exceptional together.",
  alternates: { canonical: "/contact" },
}

export default function Page() {
  return <ContactPage />
}
