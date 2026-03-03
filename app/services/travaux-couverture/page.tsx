import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { AlertTriangle, HardHat, Pipette, TreePine } from "lucide-react"

const sections = [
  {
    icon: HardHat,
    title: "Rénovation de Couverture et Faîtage",
    content: "Nous intervenons pour tous vos travaux de couverture : rénovation complète ou partielle, réparation des matériaux endommagés, vérification de l'étanchéité, modification de toiture. Nous travaillons sur ardoise, tuile et zinc, avec des matériaux de qualité professionnelle. Avant toute intervention, nous réalisons un diagnostic complet et vous proposons la meilleure solution au meilleur prix. Nous assurons étanchéité, durabilité et imperméabilité de votre couverture.",
  },
  {
    icon: AlertTriangle,
    title: "Intervention Rapide en Cas de Fuite",
    content: "Nous intervenons en urgence sur votre toiture suite à des événements météorologiques, sinistres, chutes d'arbres ou d'objets. Notre réactivité réduit au maximum les dommages consécutifs. Pour les fuites et infiltrations, nous réalisons d'abord une inspection visuelle pour localiser précisément la source, vérifions l'absence d'affaissement, puis réparons ou remplaçons la zone endommagée.",
  },
  {
    icon: Pipette,
    title: "Travaux de Zinguerie",
    content: "La zinguerie assure l'étanchéité complémentaire de votre habitat en évacuant les eaux de ruissellement pour protéger les parties maçonnées. Nous posons gouttières, chéneaux, rives, noues, descentes, pieds de cheminées et tous éléments d'évacuation des eaux pluviales. Nous vous conseillons sur les meilleures solutions pour la rénovation de votre maison.",
  },
  {
    icon: TreePine,
    title: "Traitement des Bois de Charpente",
    content: "Nous intervenons préventivement et curativement contre les champignons lignivores (mérules) et les insectes xylophages (capricornes, vrillettes). Nous proposons une expertise gratuite et complète de votre charpente et structures bois. Il est essentiel de traiter l'ensemble des bois (plancher, charpente, solive, poutre) pour éviter une dégradation irrécupérable et un remplacement coûteux.",
  },
]

export default function TravauxCouverturePage() {
  return (
    <>
      <HeroSection
        title="Travaux de Couverture, Faîtage et Zinguerie"
        subtitle="Rénovation, réparation d'urgence et zinguerie dans le Calvados (14)"
        badge="Travaux de Couverture"
        imageSrc="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1600&q=80"
      />

      <section className="max-w-4xl mx-auto px-4 py-20 space-y-16">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="flex flex-col md:flex-row gap-6">
              <div className="bg-primary/10 text-primary p-4 rounded-2xl h-fit">
                <Icon size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            </div>
          )
        })}
      </section>

      <CTABanner />
      <ZoneIntervention />
    </>
  )
}
