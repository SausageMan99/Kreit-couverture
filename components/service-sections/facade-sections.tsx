"use client"

import { Droplets, Shield, PaintRoller } from "lucide-react"
import { ServiceBlock } from "@/components/ui/service-block"
import type { ServiceSection } from "@/components/ui/service-block"

const sections: ServiceSection[] = [
  {
    icon: Droplets,
    title: "Nettoyage et Démoussage Façade",
    content: "Avec le temps, les façades se recouvrent de lichens, mousses, champignons et algues. Ces organismes gardent l'humidité et, au fil des hivers et gelées, finissent par abîmer vos murs. Nos produits DALEP — professionnels, homologués, biodégradables, sans chlore ni acide — éliminent efficacement ces salissures et traitent le support en profondeur.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    points: ["Produits DALEP professionnels", "Sans chlore ni acide", "Particuliers & professionnels"],
  },
  {
    icon: Shield,
    title: "Imperméabilisation Hydrofuge Façade",
    content: "L'humidité et l'eau de pluie agressent continuellement vos façades. Pour les protéger durablement, nous appliquons un imperméabilisant hydrofuge qui constitue une véritable seconde peau : il empêche la porosité de se prolonger, retarde le développement de végétations et laisse respirer le support.",
    image: "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=800&q=80",
    points: ["Façade respirante", "Protection longue durée", "Retarde les végétations"],
  },
  {
    icon: PaintRoller,
    title: "Ravalement Peinture Façade",
    content: "Le ravalement maintient vos murs en bon état et préserve le bâtiment de toute infiltration. Après nettoyage des murs, nous peignons votre façade avec notre gamme spéciale façade. Tous supports : enduit, crépis, tôle, briques, moellons, pierre, bois. Nous traitons également vos menuiseries extérieures, volets et cadres de fenêtres en bois.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    points: ["Tous supports traités", "Menuiseries et volets inclus", "Devis gratuit avant intervention"],
  },
]

export function FacadeSections() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24 md:space-y-32">
        {sections.map((section, i) => (
          <ServiceBlock key={section.title} section={section} index={i} />
        ))}
      </div>
    </section>
  )
}
