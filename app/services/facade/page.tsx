import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { Droplets, Shield, PaintRoller } from "lucide-react"

const sections = [
  {
    icon: Droplets,
    title: "Nettoyage et Démoussage Façade",
    content: "Avec le temps, les façades se recouvrent de lichens, mousses, champignons et algues. Ces organismes gardent l'humidité et, au fil des hivers et gelées, finissent par abîmer vos murs. Nous intervenons pour particuliers et professionnels : maisons, villas, immeubles, boutiques. Nos produits DALEP — professionnels, homologués, biodégradables, sans chlore ni acide — éliminent efficacement ces salissures et traitent le support en profondeur.",
  },
  {
    icon: Shield,
    title: "Imperméabilisation Hydrofuge Façade",
    content: "L'humidité et l'eau de pluie agressent continuellement vos façades. Pour les protéger durablement, nous appliquons un imperméabilisant hydrofuge qui constitue une véritable seconde peau : il empêche la porosité de se prolonger, retarde le développement de végétations et laisse respirer le support. L'hydrofuge façade maintient votre habitation robuste contre les intempéries et étend significativement la durée de vie de vos murs.",
  },
  {
    icon: PaintRoller,
    title: "Ravalement Peinture Façade",
    content: "Le ravalement maintient vos murs en bon état et préserve le bâtiment de toute infiltration. Nous réalisons un diagnostic puis un devis avant toute intervention. Après nettoyage des murs, nous peignons votre façade avec notre gamme spéciale façade — protégeant et conservant la matière d'origine. Tous supports : enduit, crépis, tôle, briques, moellons, pierre, bois. Nous traitons également vos menuiseries extérieures, volets et cadres de fenêtres en bois.",
  },
]

export default function FacadePage() {
  return (
    <>
      <HeroSection
        title="Nettoyage, Démoussage et Ravalement Peinture Façade"
        subtitle="Redonnez vie à vos façades avec nos traitements professionnels dans le Calvados (14)"
        badge="Travaux de Façade"
        imageSrc="https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=1600&q=80"
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
