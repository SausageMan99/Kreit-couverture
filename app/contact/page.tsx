import { Phone, MapPin, Clock } from "lucide-react"

const serviceOptions = [
  "Entretien toiture (nettoyage, démoussage, hydrofuge)",
  "Travaux de couverture (rénovation, zinguerie)",
  "Travaux de façade (nettoyage, imperméabilisation, ravalement)",
  "Nettoyage extérieurs (allées, terrasses, dallage)",
  "Autre",
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4 border border-primary/30">
            Contact
          </span>
          <h1 className="text-4xl font-bold text-foreground mb-4">Demandez votre devis gratuit</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Déplacement et devis gratuit dans le Calvados (14). Nous vous répondons rapidement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Nos coordonnées</h2>
              <div className="space-y-5">
                <a href="tel:0650729561" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Téléphone</p>
                    <p className="font-semibold text-lg">06 50 72 95 61</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Zone d&apos;intervention</p>
                    <p className="font-semibold">Calvados (14) — Normandie</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Disponibilité</p>
                    <p className="font-semibold">Intervention urgence disponible</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-3">Nos garanties</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Devis et déplacement gratuit</li>
                <li>✓ Garantie décennale</li>
                <li>✓ Produits professionnels DALEP homologués</li>
                <li>✓ Intervention rapide en cas d&apos;urgence</li>
                <li>✓ Prix compétitifs</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Formulaire de devis</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nom *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Prénom</label>
                  <input
                    type="text"
                    className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone *</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="06 XX XX XX XX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="votre@email.fr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Type de prestation *</label>
                <select
                  required
                  className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                >
                  <option value="">Sélectionnez une prestation</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                  placeholder="Décrivez votre projet ou demande..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Envoyer ma demande de devis
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Devis gratuit · Réponse rapide · Aucun engagement
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
