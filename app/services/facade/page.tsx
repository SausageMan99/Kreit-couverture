import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { FacadeSections } from "@/components/service-sections/facade-sections"

export const metadata: Metadata = {
  title: "Travaux de Façade — Nettoyage, Démoussage & Ravalement",
  description: "Couvreur Calvados (14) : nettoyage façade, démoussage, imperméabilisation hydrofuge et ravalement peinture. Produits DALEP professionnels. Devis gratuit.",
  openGraph: {
    title: "Travaux de Façade — Nettoyage, Démoussage & Ravalement",
    description: "Nettoyage, démoussage et ravalement façade dans le Calvados. Produits DALEP professionnels. Devis gratuit.",
  },
}

export default function FacadePage() {
  return (
    <>
      <HeroSection
        title="Nettoyage, Démoussage & Ravalement Façade"
        subtitle="Redonnez vie à vos façades avec nos traitements professionnels dans le Calvados (14)"
        breadcrumb="Travaux de Façade"
        imageSrc="https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=1600&q=80"
      />
      <FacadeSections />
      <CTABanner />
      <ZoneIntervention />
    </>
  )
}
