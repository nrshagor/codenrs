import { HeroSection } from "@/components/home/hero-section"
import { ClientMarquee } from "@/components/home/client-marquee"
import { ServicesSection } from "@/components/home/services-section"
import { CaseStudiesSection } from "@/components/home/case-studies-section"
import { ProcessSection } from "@/components/home/process-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientMarquee />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <CTASection />
    </>
  )
}
