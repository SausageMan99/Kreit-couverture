import Link from "next/link"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-lg text-foreground">Kreit Couverture Mouen</p>
          <p className="text-muted-foreground text-sm">Artisan couvreur — Calvados (14)</p>
        </div>
        <a href="tel:0650729561" className="flex items-center gap-2 text-primary font-semibold hover:underline">
          <Phone size={16} />
          06 50 72 95 61
        </a>
        <div className="text-sm text-muted-foreground text-center">
          <p>© 2024 Kreit Couverture Mouen. Tous droits réservés.</p>
          <Link href="/mentions-legales" className="hover:text-primary underline">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  )
}
