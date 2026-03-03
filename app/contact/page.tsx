import type { Metadata } from "next"
import { Phone, MapPin, Clock, Shield, CheckCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Demandez un Devis Gratuit — Contact",
  description: "Contactez Kreit Couverture Mouen pour un devis gratuit dans le Calvados (14). Nettoyage toiture, rénovation couverture, ravalement façade. Réponse rapide. 06 50 72 95 61",
  openGraph: {
    title: "Demandez un Devis Gratuit — Kreit Couverture Mouen",
    description: "Devis gratuit, déplacement offert. Artisan couvreur Calvados. Réponse rapide.",
  },
}

const guarantees = [
  "Devis et déplacement gratuit",
  "Garantie décennale",
  "Produits professionnels DALEP homologués",
  "Intervention rapide en cas d'urgence",
  "Prix compétitifs",
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header section */}
      <div style={{ backgroundColor: "#1C2333" }} className="pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#c70815] mb-4">
            Contact
          </p>
          <h1 className="text-[clamp(36px,5vw,72px)] font-black tracking-tighter text-white leading-tight max-w-2xl">
            Demandez votre devis gratuit
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl">
            Déplacement et devis gratuit dans le Calvados (14). Nous vous répondons rapidement.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Sidebar info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-black tracking-tight text-[#0D0D0D] mb-6">Nos coordonnées</h2>
              <div className="space-y-5">
                <a
                  href="tel:0650729561"
                  aria-label="Appeler le 06 50 72 95 61"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#c70815]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c70815]/20 transition-colors">
                    <Phone size={20} className="text-[#c70815]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Téléphone</p>
                    <p className="font-bold text-lg text-[#0D0D0D] group-hover:text-[#c70815] transition-colors">06 50 72 95 61</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#c70815]/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[#c70815]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Zone d&apos;intervention</p>
                    <p className="font-semibold text-[#0D0D0D]">Calvados (14) — Normandie</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#c70815]/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-[#c70815]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Disponibilité</p>
                    <p className="font-semibold text-[#0D0D0D]">Intervention urgence disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="p-6 rounded-2xl border border-gray-100 bg-[#F8F6F3]">
              <div className="flex items-center gap-3 mb-5">
                <Shield size={18} className="text-[#c70815]" />
                <h3 className="font-bold text-[#0D0D0D]">Nos garanties</h3>
              </div>
              <ul className="space-y-3">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-[#c70815] shrink-0 mt-0.5" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div id="devis" className="lg:col-span-3">
            <h2 className="text-xl font-black tracking-tight text-[#0D0D0D] mb-8">Formulaire de devis</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
