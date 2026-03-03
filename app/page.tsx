import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import Link from "next/link"
import { Droplets, HardHat, PaintRoller, Wrench } from "lucide-react"

const services = [
  {
    icon: HardHat,
    title: "Entretien Toiture",
    description: "Nettoyage, démoussage et peinture hydrofuge. Prolongez la durée de vie de votre toiture avec nos traitements professionnels.",
    href: "/services/entretien-toiture",
  },
  {
    icon: Wrench,
    title: "Travaux de Couverture",
    description: "Rénovation complète ou partielle, zinguerie, traitement des bois de charpente. Ardoise, tuile, zinc.",
    href: "/services/travaux-couverture",
  },
  {
    icon: PaintRoller,
    title: "Travaux de Façade",
    description: "Nettoyage, démoussage, imperméabilisation et ravalement peinture façade pour particuliers et professionnels.",
    href: "/services/facade",
  },
  {
    icon: Droplets,
    title: "Nettoyage Extérieurs",
    description: "Allées, dallage, terrasses, murets — nous redonnons vie à vos espaces extérieurs avec un matériel professionnel.",
    href: "/services/nettoyage-exterieurs",
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Travaux de Rénovation et d'Entretien de Couverture et de Façade"
        subtitle="Artisan couvreur dans le Calvados (14) — Particuliers & professionnels"
        badge="Kreit Couverture Mouen"
        imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      />

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Nos Prestations</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Que vous soyez particulier ou professionnel, nous intervenons pour tous vos travaux de rénovation de couverture et de façade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:bg-card/80 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    <span className="text-primary text-sm font-medium mt-3 inline-block group-hover:underline">
                      En savoir plus →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <CTABanner />
      <ZoneIntervention />
    </>
  )
}
