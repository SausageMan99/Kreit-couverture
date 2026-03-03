# Kreit Couverture Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a modern Next.js 15 website for Kreit Couverture Mouen (artisan couvreur, Calvados 14) with 6 pages, a tubelight navbar, and a dark professional design.

**Architecture:** Next.js 15 App Router with shadcn/ui components, Tailwind CSS dark theme (slate background, orange accent), and framer-motion for the tubelight navbar animation. All pages share a common layout with Navbar + Footer.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, framer-motion, lucide-react

---

### Task 1: Bootstrap Next.js project with shadcn/ui

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`

**Step 1: Scaffold the Next.js project**

```bash
cd /Users/dubosqclement/Kreit-couverture
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*" --yes
```

**Step 2: Initialize shadcn/ui**

```bash
npx shadcn@latest init -d
```
When prompted: choose "Default" style, "Zinc" base color (we'll override to dark), CSS variables yes.

**Step 3: Install extra dependencies**

```bash
npm install framer-motion lucide-react
```

**Step 4: Verify dev server starts**

```bash
npm run dev
```
Expected: Server running at http://localhost:3000 with default Next.js page.

**Step 5: Commit**

```bash
git init
git add .
git commit -m "chore: bootstrap Next.js 15 with shadcn/ui and framer-motion"
```

---

### Task 2: Configure dark theme & design tokens

**Files:**
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`

**Step 1: Replace globals.css with dark theme**

Replace the content of `app/globals.css` with:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: 220 20% 10%;
  --foreground: 0 0% 95%;
  --card: 220 18% 14%;
  --card-foreground: 0 0% 95%;
  --popover: 220 18% 14%;
  --popover-foreground: 0 0% 95%;
  --primary: 25 95% 53%;
  --primary-foreground: 0 0% 100%;
  --secondary: 220 15% 20%;
  --secondary-foreground: 0 0% 85%;
  --muted: 220 15% 18%;
  --muted-foreground: 220 10% 55%;
  --accent: 25 95% 53%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --border: 220 15% 22%;
  --input: 220 15% 20%;
  --ring: 25 95% 53%;
  --radius: 0.5rem;
}

* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: var(--font-geist-sans), system-ui, sans-serif;
}
```

**Step 2: Update app/layout.tsx to force dark class on html**

```tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kreit Couverture Mouen | Couvreur Calvados 14",
  description: "Artisan couvreur dans le Calvados. Nettoyage toiture, rénovation couverture, ravalement façade. Devis gratuit. 06 50 72 95 61",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

**Step 3: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "style: configure dark theme with orange accent"
```

---

### Task 3: Create tubelight navbar component

**Files:**
- Create: `components/ui/tubelight-navbar.tsx`
- Create: `components/navbar.tsx`

**Step 1: Create components/ui/tubelight-navbar.tsx**

```tsx
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const active = items.find((item) => item.url === pathname)
    if (active) setActiveTab(active.name)
  }, [pathname, items])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={cn("fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6", className)}>
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
```

**Step 2: Create components/navbar.tsx**

```tsx
import { Home, HardHat, Wrench, PaintRoller, Droplets, Mail } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

const navItems = [
  { name: "Accueil", url: "/", icon: Home },
  { name: "Toiture", url: "/services/entretien-toiture", icon: HardHat },
  { name: "Couverture", url: "/services/travaux-couverture", icon: Wrench },
  { name: "Façade", url: "/services/facade", icon: PaintRoller },
  { name: "Extérieurs", url: "/services/nettoyage-exterieurs", icon: Droplets },
  { name: "Contact", url: "/contact", icon: Mail },
]

export function Navbar() {
  return <NavBar items={navItems} />
}
```

**Step 3: Commit**

```bash
git add components/
git commit -m "feat: add tubelight navbar component"
```

---

### Task 4: Create shared layout components (Footer, CTABanner, ZoneIntervention)

**Files:**
- Create: `components/footer.tsx`
- Create: `components/cta-banner.tsx`
- Create: `components/zone-intervention.tsx`
- Create: `components/hero-section.tsx`
- Modify: `app/layout.tsx`

**Step 1: Create components/footer.tsx**

```tsx
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
```

**Step 2: Create components/cta-banner.tsx**

```tsx
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
```

**Step 3: Create components/zone-intervention.tsx**

```tsx
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
        <h2 className="text-2xl font-bold">Notre zone d'intervention — Calvados (14)</h2>
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
```

**Step 4: Create components/hero-section.tsx**

```tsx
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
        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <span>✓ Devis & déplacement gratuit</span>
          <span>✓ Garantie décennale</span>
          <span>✓ Intervention urgence</span>
        </div>
      </div>
    </section>
  )
}
```

**Step 5: Add Navbar and Footer to app/layout.tsx**

```tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kreit Couverture Mouen | Couvreur Calvados 14",
  description: "Artisan couvreur dans le Calvados. Nettoyage toiture, rénovation couverture, ravalement façade. Devis gratuit. 06 50 72 95 61",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

**Step 6: Commit**

```bash
git add components/ app/layout.tsx
git commit -m "feat: add shared layout components (footer, cta-banner, hero, zone-intervention)"
```

---

### Task 5: Home page (`/`)

**Files:**
- Modify: `app/page.tsx`

**Step 1: Write app/page.tsx**

```tsx
import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import Link from "next/link"
import { Droplets, HardHat, PaintRoller, Wrench } from "lucide-react"

const services = [
  {
    icon: HardHat,
    title: "Entretien Toiture",
    description: "Nettoyage, démoussage et peinture hydrofuge. Prolongez la durée de vie de votre toiture avec nos traitements professionnels.",
    href: "/services/entretien-toiture",
  },
  {
    icon: Wrench,
    title: "Travaux de Couverture",
    description: "Rénovation complète ou partielle, zinguerie, traitement des bois de charpente. Ardoise, tuile, zinc.",
    href: "/services/travaux-couverture",
  },
  {
    icon: PaintRoller,
    title: "Travaux de Façade",
    description: "Nettoyage, démoussage, imperméabilisation et ravalement peinture façade pour particuliers et professionnels.",
    href: "/services/facade",
  },
  {
    icon: Droplets,
    title: "Nettoyage Extérieurs",
    description: "Allées, dallage, terrasses, murets — nous redonnons vie à vos espaces extérieurs avec un matériel professionnel.",
    href: "/services/nettoyage-exterieurs",
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Travaux de Rénovation et d'Entretien de Couverture et de Façade"
        subtitle="Artisan couvreur dans le Calvados (14) — Particuliers & professionnels"
        badge="Kreit Couverture Mouen"
        imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      />

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Nos Prestations</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Que vous soyez particulier ou professionnel, nous intervenons pour tous vos travaux de rénovation de couverture et de façade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:bg-card/80 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    <span className="text-primary text-sm font-medium mt-3 inline-block group-hover:underline">
                      En savoir plus →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <CTABanner />
      <ZoneIntervention />
    </>
  )
}
```

**Step 2: Verify the page renders correctly**

```bash
npm run dev
```
Open http://localhost:3000 — should show dark hero, 4 service cards, CTA banner, zone intervention.

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add home page with hero, services, cta, zone intervention"
```

---

### Task 6: Entretien Toiture page (`/services/entretien-toiture`)

**Files:**
- Create: `app/services/entretien-toiture/page.tsx`

**Step 1: Create the page**

```tsx
import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { Shield, Droplets, Sun } from "lucide-react"

const sections = [
  {
    icon: Droplets,
    title: "Nettoyage de Toiture",
    content: `Votre toiture est exposée toute l'année aux intempéries, à la pollution et aux variations climatiques.
    Un entretien régulier est indispensable pour préserver son étanchéité et son isolation.
    Nous réalisons un nettoyage approfondi qui élimine les végétaux nuisibles — manuellement ou à haute pression —
    prolongeant ainsi la durée de vie de votre toiture et évitant des réparations coûteuses.`,
  },
  {
    icon: Shield,
    title: "Démoussage de Toiture",
    content: `Le démoussage est la deuxième étape essentielle de l'entretien. Il permet de préserver l'étanchéité en
    évitant que vos ardoises ne deviennent poreuses. Nous appliquons un traitement anti-mousse écologique
    de la marque DALEP — réservé aux professionnels, homologué, biodégradable — pour éliminer algues, mousses
    et lichens, et empêcher toute nouvelle prolifération. Garantie 10 ans sur nos traitements hydrofuges.`,
  },
  {
    icon: Sun,
    title: "Peinture Hydrofuge Toiture",
    content: `La peinture hydrofuge protège votre toiture de l'humidité et des infiltrations d'eau. Composée de résine
    acrylique siliconée, elle rend votre toit auto-nettoyant : l'eau de pluie glisse et emporte les saletés.
    Efficacité garantie entre 5 et 7 ans. Disponible en version incolore ou colorée pour retrouver
    l'aspect d'origine de votre toiture. Application en deux couches pour une protection maximale.`,
  },
]

export default function EntretienToiturePage() {
  return (
    <>
      <HeroSection
        title="Nettoyage, Démoussage et Peinture Hydrofuge Toiture"
        subtitle="Entretenez et protégez votre toiture durablement dans le Calvados (14)"
        badge="Entretien Toiture"
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
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
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
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
```

**Step 2: Commit**

```bash
git add app/services/entretien-toiture/
git commit -m "feat: add entretien-toiture service page"
```

---

### Task 7: Travaux de Couverture page (`/services/travaux-couverture`)

**Files:**
- Create: `app/services/travaux-couverture/page.tsx`

**Step 1: Create the page**

```tsx
import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { AlertTriangle, HardHat, Pipette, TreePine } from "lucide-react"

const sections = [
  {
    icon: HardHat,
    title: "Rénovation de Couverture et Faîtage",
    content: `Nous intervenons pour tous vos travaux de couverture : rénovation complète ou partielle,
    réparation des matériaux endommagés, vérification de l'étanchéité, modification de toiture.
    Nous travaillons sur ardoise, tuile et zinc, avec des matériaux de qualité professionnelle.
    Avant toute intervention, nous réalisons un diagnostic complet et vous proposons la meilleure
    solution au meilleur prix. Nous assurons étanchéité, durabilité et imperméabilité de votre couverture.`,
  },
  {
    icon: AlertTriangle,
    title: "Intervention Rapide en Cas de Fuite",
    content: `Nous intervenons en urgence sur votre toiture suite à des événements météorologiques,
    sinistres, chutes d'arbres ou d'objets. Notre réactivité réduit au maximum les dommages consécutifs.
    Pour les fuites et infiltrations, nous réalisons d'abord une inspection visuelle pour localiser
    précisément la source, vérifions l'absence d'affaissement, puis réparons ou remplaçons la zone endommagée.`,
  },
  {
    icon: Pipette,
    title: "Travaux de Zinguerie",
    content: `La zinguerie assure l'étanchéité complémentaire de votre habitat en évacuant les eaux de
    ruissellement pour protéger les parties maçonnées. Nous posons gouttières, chéneaux, rives,
    noues, descentes, pieds de cheminées et tous éléments d'évacuation des eaux pluviales.
    Nous vous conseillons sur les meilleures solutions pour la rénovation de votre maison.`,
  },
  {
    icon: TreePine,
    title: "Traitement des Bois de Charpente",
    content: `Nous intervenons préventivement et curativement contre les champignons lignivores (mérules)
    et les insectes xylophages (capricornes, vrillettes). Nous proposons une expertise gratuite et
    complète de votre charpente et structures bois. Il est essentiel de traiter l'ensemble des bois
    (plancher, charpente, solive, poutre) pour éviter une dégradation irrécupérable et un remplacement coûteux.`,
  },
]

export default function TravauxCouverturePage() {
  return (
    <>
      <HeroSection
        title="Travaux de Couverture, Faîtage et Zinguerie"
        subtitle="Rénovation, réparation d'urgence et zinguerie dans le Calvados (14)"
        badge="Travaux de Couverture"
        imageSrc="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1600&q=80"
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
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
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
```

**Step 2: Commit**

```bash
git add app/services/travaux-couverture/
git commit -m "feat: add travaux-couverture service page"
```

---

### Task 8: Travaux de Façade page (`/services/facade`)

**Files:**
- Create: `app/services/facade/page.tsx`

**Step 1: Create the page**

```tsx
import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { Droplets, Shield, PaintRoller } from "lucide-react"

const sections = [
  {
    icon: Droplets,
    title: "Nettoyage et Démoussage Façade",
    content: `Avec le temps, les façades se recouvrent de lichens, mousses, champignons et algues.
    Ces organismes gardent l'humidité et, au fil des hivers et gelées, finissent par abîmer vos murs.
    Nous intervenons pour particuliers et professionnels : maisons, villas, immeubles, boutiques.
    Nos produits DALEP — professionnels, homologués, biodégradables, sans chlore ni acide —
    éliminent efficacement ces salissures et traitent le support en profondeur.`,
  },
  {
    icon: Shield,
    title: "Imperméabilisation Hydrofuge Façade",
    content: `L'humidité et l'eau de pluie agressent continuellement vos façades. Pour les protéger durablement,
    nous appliquons un imperméabilisant hydrofuge qui constitue une véritable seconde peau :
    il empêche la porosité de se prolonger, retarde le développement de végétations et laisse respirer
    le support. L'hydrofuge façade maintient votre habitation robuste contre les intempéries
    et étend significativement la durée de vie de vos murs.`,
  },
  {
    icon: PaintRoller,
    title: "Ravalement Peinture Façade",
    content: `Le ravalement maintient vos murs en bon état et préserve le bâtiment de toute infiltration.
    Nous réalisons un diagnostic puis un devis avant toute intervention. Après nettoyage des murs,
    nous peignons votre façade avec notre gamme spéciale façade — protégeant et conservant la matière
    d'origine. Tous supports : enduit, crépis, tôle, briques, moellons, pierre, bois.
    Nous traitons également vos menuiseries extérieures, volets et cadres de fenêtres en bois.`,
  },
]

export default function FacadePage() {
  return (
    <>
      <HeroSection
        title="Nettoyage, Démoussage et Ravalement Peinture Façade"
        subtitle="Redonnez vie à vos façades avec nos traitements professionnels dans le Calvados (14)"
        badge="Travaux de Façade"
        imageSrc="https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=1600&q=80"
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
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
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
```

**Step 2: Commit**

```bash
git add app/services/facade/
git commit -m "feat: add facade service page"
```

---

### Task 9: Nettoyage Extérieurs page (`/services/nettoyage-exterieurs`)

**Files:**
- Create: `app/services/nettoyage-exterieurs/page.tsx`

**Step 1: Create the page**

```tsx
import { HeroSection } from "@/components/hero-section"
import { CTABanner } from "@/components/cta-banner"
import { ZoneIntervention } from "@/components/zone-intervention"
import { Droplets, Leaf } from "lucide-react"

const sections = [
  {
    icon: Droplets,
    title: "Nettoyage Allées, Dallage et Murets",
    content: `Vos pavés, dallage et murets sont noircis, attaqués par la mousse ou envahis par les mauvaises herbes ?
    Équipés de matériel professionnel haute pression, nous lavons et décrassons tout type de sol :
    pavé, dallage, terrasse, carrelage, chemins et contours de piscine. Nous adaptons le mode de
    nettoyage au degré de saleté et au type de matériau — le nettoyeur haute pression est proscrit
    sur pavés posés sur lit de sable, où nous effectuons un nettoyage manuel soigneux.`,
  },
  {
    icon: Leaf,
    title: "Nettoyage Terrasses",
    content: `Chaque terrasse a ses propres besoins selon le matériau : bois exotique, carrelage, composite.
    Nous utilisons une méthode douce et respectueuse du support, avec des nettoyants et traitements
    de finition professionnels haut de gamme à formulation éco-responsable. Nous redonnons vie à
    vos extérieurs et leur restituons un aspect esthétique de qualité. Intervention chez les
    particuliers comme les entreprises — ponctuellement ou régulièrement selon vos besoins.`,
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
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
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
```

**Step 2: Commit**

```bash
git add app/services/nettoyage-exterieurs/
git commit -m "feat: add nettoyage-exterieurs service page"
```

---

### Task 10: Contact page (`/contact`)

**Files:**
- Create: `app/contact/page.tsx`

**Step 1: Create the page**

```tsx
import { Phone, Mail, MapPin, Clock } from "lucide-react"

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
        {/* Header */}
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
          {/* Contact info */}
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
                    <p className="text-sm text-muted-foreground">Zone d'intervention</p>
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
                <li>✓ Intervention rapide en cas d'urgence</li>
                <li>✓ Prix compétitifs</li>
              </ul>
            </div>
          </div>

          {/* Form */}
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
```

**Step 2: Commit**

```bash
git add app/contact/
git commit -m "feat: add contact page with devis form"
```

---

### Task 11: Final verification

**Step 1: Run build to catch TypeScript errors**

```bash
npm run build
```
Expected: Build succeeds with no errors.

**Step 2: Check all routes manually**

Visit in browser:
- http://localhost:3000
- http://localhost:3000/services/entretien-toiture
- http://localhost:3000/services/travaux-couverture
- http://localhost:3000/services/facade
- http://localhost:3000/services/nettoyage-exterieurs
- http://localhost:3000/contact

**Step 3: Verify navbar active state works**

Click each nav item — the tubelight "lamp" effect should follow the active page.

**Step 4: Final commit**

```bash
git add .
git commit -m "chore: final build verification — all 6 pages complete"
```
