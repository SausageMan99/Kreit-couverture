"use client"

import { Droplets, Leaf } from "lucide-react"
import { ServiceBlock } from "@/components/ui/service-block"
import type { ServiceSection } from "@/components/ui/service-block"

const sections: ServiceSection[] = [
  {
    icon: Droplets,
    title: "Nettoyage Allées, Dallage et Murets",
    content: "Vos pavés, dallage et murets sont noircis, attaqués par la mousse ou envahis par les mauvaises herbes ? Équipés de matériel professionnel haute pression, nous lavons et décrassons tout type de sol : pavé, dallage, terrasse, carrelage, chemins et contours de piscine. Nous adaptons le mode de nettoyage au degré de saleté et au type de matériau.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    points: ["Haute pression professionnelle", "Tous types de revêtements", "Nettoyage manuel si nécessaire"],
  },
  {
    icon: Leaf,
    title: "Nettoyage Terrasses",
    content: "Chaque terrasse a ses propres besoins selon le matériau : bois exotique, carrelage, composite. Nous utilisons une méthode douce et respectueuse du support, avec des nettoyants et traitements de finition professionnels haut de gamme à formulation éco-responsable. Nous redonnons vie à vos extérieurs et leur restituons un aspect esthétique de qualité.",
    image: "https://images.unsplash.com/photo-1558618047-f4e90e9e3cd2?w=800&q=80",
    points: ["Méthode douce adaptée au support", "Produits éco-responsables", "Particuliers & entreprises"],
  },
]

export function NettoyageExterieurssSections() {
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
