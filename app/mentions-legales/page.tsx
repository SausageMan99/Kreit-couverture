import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales de Kreit Couverture Mouen — artisan couvreur dans le Calvados (14).",
  robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#1C2333" }} className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#c70815] mb-4">Légal</p>
          <h1 className="text-[clamp(32px,4vw,56px)] font-black tracking-tighter text-white leading-tight">
            Mentions légales
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24 prose prose-gray max-w-none">
        <section className="mb-10">
          <h2 className="text-xl font-black tracking-tight text-[#0D0D0D] mb-4">Éditeur du site</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Kreit Couverture Mouen</strong><br />
            Artisan couvreur — Calvados (Normandie)<br />
            Siège social : Mouen, 14790, Calvados, France<br />
            Téléphone : <a href="tel:0650729561" className="text-[#c70815] hover:underline">06 50 72 95 61</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black tracking-tight text-[#0D0D0D] mb-4">Responsable de publication</h2>
          <p className="text-gray-600 leading-relaxed">
            Le responsable de la publication est le gérant de Kreit Couverture Mouen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black tracking-tight text-[#0D0D0D] mb-4">Hébergeur</h2>
          <p className="text-gray-600 leading-relaxed">
            Ce site est hébergé par <strong>Vercel Inc.</strong><br />
            340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#c70815] hover:underline">vercel.com</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black tracking-tight text-[#0D0D0D] mb-4">Propriété intellectuelle</h2>
          <p className="text-gray-600 leading-relaxed">
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive de
            Kreit Couverture Mouen. Toute reproduction, représentation ou diffusion, même partielle, est interdite
            sans l&apos;accord préalable écrit de l&apos;éditeur.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black tracking-tight text-[#0D0D0D] mb-4">Données personnelles</h2>
          <p className="text-gray-600 leading-relaxed">
            Les informations collectées via le formulaire de contact (nom, téléphone, email) sont utilisées
            exclusivement pour répondre à vos demandes de devis. Elles ne sont ni cédées ni vendues à des tiers.
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données
            en nous contactant au <a href="tel:0650729561" className="text-[#c70815] hover:underline">06 50 72 95 61</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black tracking-tight text-[#0D0D0D] mb-4">Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Ce site n&apos;utilise pas de cookies de traçage ou de publicité. Des cookies techniques essentiels
            au fonctionnement du site peuvent être déposés.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-sm font-semibold text-[#c70815] hover:underline">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
