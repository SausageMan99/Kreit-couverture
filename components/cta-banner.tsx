import Link from "next/link"
import { Phone, FileText } from "lucide-react"

export function CTABanner() {
  return (
    <section className="bg-primary/10 border border-primary/20 rounded-2xl mx-4 my-12 p-8 text-center">
      <h2 className="text-2xl font-bold text-foreground mb-2">Devis & déplacement gratuit</h2>
      <p className="text-muted-foreground mb-6">Intervention rapide dans le Calvados (14) — Garantie décennale</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="tel:0650729561"
          className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          <Phone size={18} />
          06 50 72 95 61
        </a>
        <Link
          href="/contact"
          className="flex items-center gap-2 border border-primary text-primary font-semibold px-6 py-3 rounded-full hover:bg-primary/10 transition-colors"
        >
          <FileText size={18} />
          Obtenir un devis
        </Link>
      </div>
    </section>
  )
}
