# Kreit Couverture — Website Design

Date: 2026-03-03
Source: kreit-couverture-mouen.fr (archive ZIP)

## Context

Rebuild of the existing WordPress site for Kreit Couverture Mouen, an artisan roofing company (couvreur) based in Mouen, Calvados (14), Normandie. The goal is to keep the content essence but simplify and modernize, with a full multi-page structure and a tubelight navigation bar.

## Stack

- Next.js 15 (App Router)
- TypeScript
- shadcn/ui
- Tailwind CSS
- framer-motion (navbar animation)
- lucide-react (icons)

## Design System

- Background: `#111827`
- Surface: `#1f2937`
- Accent: `#f97316` (orange/amber)
- Text primary: `#ffffff`
- Text secondary: `#9ca3af`
- Font: Geist (Next.js default)

## Navigation

Tubelight navbar (fixed top, frosted glass effect):
- Accueil → `/`
- Toiture → `/services/entretien-toiture`
- Couverture → `/services/travaux-couverture`
- Façade → `/services/facade`
- Extérieurs → `/services/nettoyage-exterieurs`
- Contact → `/contact`

Mobile: bottom bar with icons.

## Pages

### 1. Accueil (`/`)
- Hero: plein écran, titre "Travaux de Rénovation et d'Entretien de Couverture et de Façade", CTA "Obtenir un devis"
- Badges: "Devis & déplacement gratuit" + "Garantie décennale"
- Section 4 services en cards (aperçu)
- Zone d'intervention Calvados (liste des villes)
- CTA final

### 2. Entretien Toiture (`/services/entretien-toiture`)
- Hero: "Nettoyage, Démoussage et Peinture Hydrofuge Toiture"
- Section nettoyage toiture: pourquoi entretenir, risques infiltrations
- Section démoussage: traitement anti-mousse DALEP, écologique
- Section peinture hydrofuge: résine acrylique siliconée, durée 5-7 ans, garantie 10 ans
- Zone d'intervention + CTA devis

### 3. Travaux de Couverture (`/services/travaux-couverture`)
- Hero: "Travaux de Couverture, Faîtage et Zinguerie"
- Section rénovation couverture: ardoise, tuile, zinc; diagnostic; urgences
- Section intervention urgence: fuites, sinistres, intempéries
- Section zinguerie: gouttières, noues, chéneaux, cheminées
- Section traitement bois charpente: insectes xylophages, champignons lignivores
- Zone d'intervention + CTA devis

### 4. Travaux de Façade (`/services/facade`)
- Hero: "Nettoyage, Démoussage et Ravalement Peinture Façade"
- Section nettoyage/démoussage façade: lichens, mousses, produits DALEP biodégradables
- Section imperméabilisation hydrofuge: protection, durabilité
- Section ravalement peinture: boiserie, ferronnerie, tous supports
- Zone d'intervention + CTA devis

### 5. Nettoyage Extérieurs (`/services/nettoyage-exterieurs`)
- Hero: "Nettoyage Allée, Dallage, Muret, Terrasse"
- Section nettoyage sol: pavé, dallage, haute pression, manuel
- Section terrasse: méthode douce, produits éco-responsables
- Zone d'intervention + CTA devis

### 6. Contact (`/contact`)
- Formulaire devis: nom, téléphone, email, type de prestation, message
- Téléphone mis en avant: 06 50 72 95 61
- "Devis et déplacement gratuit"

## Shared Components

- `Navbar` — tubelight (top fixed, bottom on mobile)
- `Footer` — tel, copyright, mentions légales
- `HeroSection` — title, subtitle, CTA button
- `ServiceCard` — icon, title, description, link
- `ZoneIntervention` — section Calvados + list of 17 cities
- `CTABanner` — orange strip with phone + devis button

## Key Info

- Tel: 06 50 72 95 61
- Zone: Calvados (14) — Caen, Bretteville sur Odon, Fontaine Étoupefour, Évrecy, Ifs, Audrieu, Rots, Mondeville, Ouistreham, Cheux, Cabourg, Houlgate, Sainte Honorine du Fay, Bretteville l'Orgueilleuse, Carpiquet, Courseulles-sur-Mer, Villers Bocage
- Garanties: Décennale, devis gratuit, déplacement gratuit
- Produits: DALEP (professionnels, homologués, biodégradables)
