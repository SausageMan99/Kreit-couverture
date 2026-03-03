"use client"

import { Droplets, Shield, Sun } from "lucide-react"
import { ServiceBlock } from "@/components/ui/service-block"
import type { ServiceSection } from "@/components/ui/service-block"

const sections: ServiceSection[] = [
  {
    icon: Droplets,
    title: "Nettoyage de Toiture",
    content: "Votre toiture est exposée toute l'année aux intempéries, à la pollution et aux variations climatiques. Un entretien régulier est indispensable pour préserver son étanchéité et son isolation. Nous réalisons un nettoyage approfondi qui élimine les végétaux nuisibles — manuellement ou à haute pression — prolongeant ainsi la durée de vie de votre toiture et évitant des réparations coûteuses.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    points: ["Nettoyage manuel ou haute pression", "Élimination mousses et lichens", "Préservation de l'étanchéité"],
  },
  {
    icon: Shield,
    title: "Démoussage de Toiture",
    content: "Le démoussage est la deuxième étape essentielle de l'entretien. Il permet de préserver l'étanchéité en évitant que vos ardoises ne deviennent poreuses. Nous appliquons un traitement anti-mousse écologique de la marque DALEP — réservé aux professionnels, homologué, biodégradable — pour éliminer algues, mousses et lichens, et empêcher toute nouvelle prolifération.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    points: ["Traitement DALEP homologué", "Produit biodégradable", "Garantie 10 ans traitement hydrofuge"],
  },
  {
    icon: Sun,
    title: "Peinture Hydrofuge Toiture",
    content: "La peinture hydrofuge protège votre toiture de l'humidité et des infiltrations d'eau. Composée de résine acrylique siliconée, elle rend votre toit auto-nettoyant : l'eau de pluie glisse et emporte les saletés. Efficacité garantie entre 5 et 7 ans. Disponible en version incolore ou colorée pour retrouver l'aspect d'origine de votre toiture.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    points: ["Résine acrylique siliconée", "Toit auto-nettoyant", "Efficacité 5-7 ans, incolore ou coloré"],
  },
]

export function EntretienToitureSections() {
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
