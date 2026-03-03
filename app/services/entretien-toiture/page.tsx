import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { Shield, Droplets, Sun } from "lucide-react"

const sections = [
  {
    icon: Droplets,
    title: "Nettoyage de Toiture",
    content: "Votre toiture est exposée toute l'année aux intempéries, à la pollution et aux variations climatiques. Un entretien régulier est indispensable pour préserver son étanchéité et son isolation. Nous réalisons un nettoyage approfondi qui élimine les végétaux nuisibles — manuellement ou à haute pression — prolongeant ainsi la durée de vie de votre toiture et évitant des réparations coûteuses.",
  },
  {
    icon: Shield,
    title: "Démoussage de Toiture",
    content: "Le démoussage est la deuxième étape essentielle de l'entretien. Il permet de préserver l'étanchéité en évitant que vos ardoises ne deviennent poreuses. Nous appliquons un traitement anti-mousse écologique de la marque DALEP — réservé aux professionnels, homologué, biodégradable — pour éliminer algues, mousses et lichens, et empêcher toute nouvelle prolifération. Garantie 10 ans sur nos traitements hydrofuges.",
  },
  {
    icon: Sun,
    title: "Peinture Hydrofuge Toiture",
    content: "La peinture hydrofuge protège votre toiture de l'humidité et des infiltrations d'eau. Composée de résine acrylique siliconée, elle rend votre toit auto-nettoyant : l'eau de pluie glisse et emporte les saletés. Efficacité garantie entre 5 et 7 ans. Disponible en version incolore ou colorée pour retrouver l'aspect d'origine de votre toiture. Application en deux couches pour une protection maximale.",
  },
]

export default function EntretienToiturePage() {
  return (
    <>
      <HeroSection
        title="Nettoyage, Démoussage et Peinture Hydrofuge Toiture"
        subtitle="Entretenez et protégez votre toiture durablement dans le Calvados (14)"
        badge="Entretien Toiture"
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
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
