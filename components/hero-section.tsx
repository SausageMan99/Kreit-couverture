import Link from "next/link"
import { Phone } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  badge?: string
  imageSrc?: string
}

export function HeroSection({ title, subtitle, badge, imageSrc }: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
      {imageSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {badge && (
          <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4 border border-primary/30">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">{title}</h1>
        {subtitle && <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Obtenir un devis gratuit
          </Link>
          <a
            href="tel:0650729561"
            className="flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-full hover:border-primary hover:text-primary transition-colors"
          >
            <Phone size={16} />
            06 50 72 95 61
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-muted-foreground">
          <span>✓ Devis & déplacement gratuit</span>
          <span>✓ Garantie décennale</span>
          <span>✓ Intervention urgence</span>
        </div>
      </div>
    </section>
  )
}
