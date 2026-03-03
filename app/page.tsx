import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesGrid } from "@/components/services-grid"
import { WhyUsSection } from "@/components/why-us-section"
import { ZoneIntervention } from "@/components/zone-intervention"
import { PartnersCarousel } from "@/components/partners-carousel"
import { CTABanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection
        isHomepage
        title="Votre toiture, notre expertise."
        subtitle="Artisan couvreur dans le Calvados depuis plus de 20 ans. Entretien, rénovation et nettoyage pour particuliers et professionnels."
        imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      />
      <StatsSection />
      <ServicesGrid />
      <WhyUsSection />
      <ZoneIntervention />
      <PartnersCarousel />
      <CTABanner />
    </>
  )
}
