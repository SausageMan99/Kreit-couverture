import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { Droplets, Leaf } from "lucide-react"

const sections = [
  {
    icon: Droplets,
    title: "Nettoyage Allées, Dallage et Murets",
    content: "Vos pavés, dallage et murets sont noircis, attaqués par la mousse ou envahis par les mauvaises herbes ? Équipés de matériel professionnel haute pression, nous lavons et décrassons tout type de sol : pavé, dallage, terrasse, carrelage, chemins et contours de piscine. Nous adaptons le mode de nettoyage au degré de saleté et au type de matériau — le nettoyeur haute pression est proscrit sur pavés posés sur lit de sable, où nous effectuons un nettoyage manuel soigneux.",
  },
  {
    icon: Leaf,
    title: "Nettoyage Terrasses",
    content: "Chaque terrasse a ses propres besoins selon le matériau : bois exotique, carrelage, composite. Nous utilisons une méthode douce et respectueuse du support, avec des nettoyants et traitements de finition professionnels haut de gamme à formulation éco-responsable. Nous redonnons vie à vos extérieurs et leur restituons un aspect esthétique de qualité. Intervention chez les particuliers comme les entreprises — ponctuellement ou régulièrement selon vos besoins.",
  },
]

export default function NettoyageExterieursPage() {
  return (
    <>
      <HeroSection
        title="Nettoyage Allées, Dallage, Murets et Terrasses"
        subtitle="Redonnez de l'éclat à vos espaces extérieurs dans le Calvados (14)"
        badge="Nettoyage Extérieurs"
        imageSrc="https://images.unsplash.com/photo-1558618047-f4e90e9e3cd2?w=1600&q=80"
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
