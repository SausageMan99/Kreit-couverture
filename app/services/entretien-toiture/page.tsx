import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { EntretienToitureSections } from "@/components/service-sections/entretien-toiture-sections"

export const metadata: Metadata = {
  title: "Entretien Toiture — Nettoyage, Démoussage & Hydrofuge",
  description: "Artisan couvreur dans le Calvados (14) : nettoyage toiture, démoussage, peinture hydrofuge. Produits DALEP homologués. Devis gratuit, intervention rapide.",
  openGraph: {
    title: "Entretien Toiture — Nettoyage, Démoussage & Hydrofuge",
    description: "Nettoyage toiture, démoussage et peinture hydrofuge dans le Calvados. Devis gratuit.",
  },
}

export default function EntretienToiturePage() {
  return (
    <>
      <HeroSection
        title="Nettoyage, Démoussage & Peinture Hydrofuge"
        subtitle="Entretenez et protégez votre toiture durablement dans le Calvados (14)"
        breadcrumb="Entretien Toiture"
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
      />
      <EntretienToitureSections />
      <CTABanner />
      <ZoneIntervention />
    </>
  )
}
