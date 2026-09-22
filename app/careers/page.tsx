import type { Metadata } from "next"
import CareersPage from "./careers-content"

export const metadata: Metadata = {
  title: "Careers | Join the CODENRS Team",
  description:
    "Explore career opportunities at CODENRS. We're always interested in connecting with talented developers and designers.",
  alternates: { canonical: "/careers" },
}

export default function Page() {
  return <CareersPage />
}
