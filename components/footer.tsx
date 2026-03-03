import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"

const services = [
  { label: "Entretien Toiture", href: "/services/entretien-toiture" },
  { label: "Travaux de Couverture", href: "/services/travaux-couverture" },
  { label: "Travaux de Façade", href: "/services/facade" },
  { label: "Nettoyage Extérieurs", href: "/services/nettoyage-exterieurs" },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1C2333" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-bold text-xl tracking-tight mb-2">KREIT COUVERTURE</p>
            <p className="text-sm text-gray-400 mb-6">
              Artisan couvreur depuis plus de 20 ans en Normandie.
              Particuliers & professionnels dans le Calvados (14).
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={15} className="text-[#c70815] shrink-0" />
                Mouen, Calvados — Normandie
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Clock size={15} className="text-[#c70815] shrink-0" />
                Intervention urgence disponible
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-sm tracking-widest uppercase text-gray-400 mb-5">
              Nos Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-300 hover:text-[#c70815] transition-colors cursor-pointer"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-sm tracking-widest uppercase text-gray-400 mb-5">
              Contact
            </p>
            <a
              href="tel:0650729561"
              className="flex items-center gap-3 text-xl font-bold text-white hover:text-[#c70815] transition-colors mb-6"
            >
              <Phone size={20} className="text-[#c70815]" />
              06 50 72 95 61
            </a>
            <Link
              href="/contact#devis"
              className="inline-block text-sm font-semibold bg-[#c70815] hover:bg-[#a00610] text-white px-6 py-3 rounded-full transition-colors cursor-pointer"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Kreit Couverture Mouen. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
