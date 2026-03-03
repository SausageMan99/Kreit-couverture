"use client"

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
