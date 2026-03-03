import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { NettoyageExterieurssSections } from "@/components/service-sections/nettoyage-exterieurs-sections"

export const metadata: Metadata = {
  title: "Nettoyage Extérieurs — Allées, Terrasses & Dallage",
  description: "Nettoyage haute pression allées, dallage, murets et terrasses dans le Calvados (14). Matériel professionnel, produits éco-responsables. Devis gratuit.",
  openGraph: {
    title: "Nettoyage Extérieurs — Allées, Terrasses & Dallage",
    description: "Nettoyage allées, dallage, murets et terrasses dans le Calvados. Matériel professionnel. Devis gratuit.",
  },
}

export default function NettoyageExterieursPage() {
  return (
    <>
      <HeroSection
        title="Nettoyage Allées, Dallage, Murets & Terrasses"
        subtitle="Redonnez de l'éclat à vos espaces extérieurs dans le Calvados (14)"
        breadcrumb="Nettoyage Extérieurs"
        imageSrc="https://images.unsplash.com/photo-1558618047-f4e90e9e3cd2?w=1600&q=80"
      />
      <NettoyageExterieurssSections />
      <CTABanner />
      <ZoneIntervention />
    </>
  )
}
