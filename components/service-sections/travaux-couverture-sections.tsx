"use client"

import { AlertTriangle, HardHat, Pipette, TreePine } from "lucide-react"
import { ServiceBlock } from "@/components/ui/service-block"
import type { ServiceSection } from "@/components/ui/service-block"

const sections: ServiceSection[] = [
  {
    icon: HardHat,
    title: "Rénovation de Couverture et Faîtage",
    content: "Nous intervenons pour tous vos travaux de couverture : rénovation complète ou partielle, réparation des matériaux endommagés, vérification de l'étanchéité, modification de toiture. Nous travaillons sur ardoise, tuile et zinc, avec des matériaux de qualité professionnelle. Avant toute intervention, nous réalisons un diagnostic complet et vous proposons la meilleure solution au meilleur prix.",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&q=80",
    points: ["Ardoise, tuile, zinc", "Diagnostic complet inclus", "Garantie décennale"],
  },
  {
    icon: AlertTriangle,
    title: "Intervention Rapide en Cas de Fuite",
    content: "Nous intervenons en urgence sur votre toiture suite à des événements météorologiques, sinistres, chutes d'arbres ou d'objets. Notre réactivité réduit au maximum les dommages consécutifs. Pour les fuites et infiltrations, nous réalisons d'abord une inspection visuelle pour localiser précisément la source, puis réparons ou remplaçons la zone endommagée.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    points: ["Intervention urgence 24h/24", "Inspection et diagnostic rapide", "Réparation ciblée ou remplacement"],
  },
  {
    icon: Pipette,
    title: "Travaux de Zinguerie",
    content: "La zinguerie assure l'étanchéité complémentaire de votre habitat en évacuant les eaux de ruissellement pour protéger les parties maçonnées. Nous posons gouttières, chéneaux, rives, noues, descentes, pieds de cheminées et tous éléments d'évacuation des eaux pluviales.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    points: ["Gouttières et chéneaux", "Noues et rives", "Pieds de cheminées"],
  },
  {
    icon: TreePine,
    title: "Traitement des Bois de Charpente",
    content: "Nous intervenons préventivement et curativement contre les champignons lignivores (mérules) et les insectes xylophages (capricornes, vrillettes). Nous proposons une expertise gratuite et complète de votre charpente et structures bois.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    points: ["Traitement anti-mérules", "Expertise gratuite", "Traitement préventif et curatif"],
  },
]

export function TravauxCouvertureSections() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 md:space-y-32">
        {sections.map((section, i) => (
          <ServiceBlock key={section.title} section={section} index={i} />
        ))}
      </div>
    </section>
  )
}
