import type { Metadata } from "next"
import { Geist, DM_Serif_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const dmSerif = DM_Serif_Display({ variable: "--font-dm-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"] })

export const metadata: Metadata = {
  title: {
    default: "Kreit Couverture Mouen | Couvreur Calvados 14",
    template: "%s | Kreit Couverture Mouen",
  },
  description: "Artisan couvreur depuis plus de 20 ans dans le Calvados. Nettoyage toiture, rénovation couverture, ravalement façade, nettoyage extérieurs. Devis gratuit. 06 50 72 95 61",
  keywords: ["couvreur calvados", "nettoyage toiture calvados", "rénovation toiture caen", "artisan couvreur 14", "démoussage toiture normandie", "ravalement façade calvados"],
  authors: [{ name: "Kreit Couverture Mouen" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Kreit Couverture Mouen",
    title: "Kreit Couverture Mouen | Couvreur Calvados 14",
    description: "Artisan couvreur depuis plus de 20 ans dans le Calvados. Nettoyage toiture, rénovation couverture, ravalement façade. Devis gratuit.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${dmSerif.variable} antialiased`}>
        <Navbar />
        <main className="pb-24 sm:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
