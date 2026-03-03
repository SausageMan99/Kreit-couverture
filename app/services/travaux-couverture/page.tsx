import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { TravauxCouvertureSections } from "@/components/service-sections/travaux-couverture-sections"

export const metadata: Metadata = {
  title: "Travaux de Couverture — Rénovation, Zinguerie & Urgence",
  description: "Couvreur Calvados (14) : rénovation de couverture ardoise, tuile, zinc, intervention urgence fuite, zinguerie. Garantie décennale. Devis gratuit.",
  openGraph: {
    title: "Travaux de Couverture — Rénovation, Zinguerie & Urgence",
    description: "Rénovation couverture, zinguerie et urgences toiture dans le Calvados. Garantie décennale. Devis gratuit.",
  },
}

export default function TravauxCouverturePage() {
  return (
    <>
      <HeroSection
        title="Travaux de Couverture, Faîtage et Zinguerie"
        subtitle="Rénovation, réparation d'urgence et zinguerie dans le Calvados (14)"
        breadcrumb="Travaux de Couverture"
        imageSrc="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1600&q=80"
      />
      <TravauxCouvertureSections />
      <CTABanner />
      <ZoneIntervention />
    </>
  )
}
