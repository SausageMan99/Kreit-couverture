"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
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
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    let rafId: number
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setOpacity(Math.max(0, 1 - window.scrollY / 120))
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* Logo fixe en haut à gauche — s'efface au scroll */}
      <div
        className="fixed top-4 left-4 z-50 transition-opacity duration-100 pointer-events-none"
        style={{ opacity }}
      >
        <Link href="/" className={opacity > 0 ? "pointer-events-auto" : "pointer-events-none"}>
          <div className="rounded-xl px-3 py-1.5 bg-white/60 backdrop-blur-sm shadow-sm">
            <Image
              src="/logo.svg"
              alt="Kreit Couverture Mouen"
              width={140}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </div>
        </Link>
      </div>

      {/* Tubelight navbar centrée */}
      <NavBar items={navItems} />
    </>
  )
}
