import { MapPin } from "lucide-react"

const VILLES = [
  "Caen", "Bretteville sur Odon", "Fontaine Étoupefour", "Évrecy", "Ifs",
  "Audrieu", "Rots", "Mondeville", "Ouistreham", "Cheux", "Cabourg",
  "Houlgate", "Sainte Honorine du Fay", "Bretteville l'Orgueilleuse",
  "Carpiquet", "Courseulles-sur-Mer", "Villers Bocage",
]

export function ZoneIntervention() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="text-primary" size={24} />
        <h2 className="text-2xl font-bold">Notre zone d&apos;intervention — Calvados (14)</h2>
      </div>
      <p className="text-muted-foreground mb-6 max-w-2xl">
        Afin de vous garantir un service de proximité, nous intervenons dans les meilleurs délais dans le Calvados,
        notamment sur :
      </p>
      <div className="flex flex-wrap gap-2">
        {VILLES.map((ville) => (
          <span
            key={ville}
            className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full border border-border"
          >
            {ville}
          </span>
        ))}
      </div>
      <p className="text-muted-foreground text-sm mt-6">
        Déplacement et devis gratuit · Prix compétitifs · Intervention urgence
      </p>
    </section>
  )
}
