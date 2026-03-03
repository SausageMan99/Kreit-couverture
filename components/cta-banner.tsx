"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { staggerContainer, fadeInUp } from "@/lib/animations"

export function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} style={{ backgroundColor: "#1C2333" }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
        >
          <div className="flex-1">
            <motion.p variants={fadeInUp} className="text-xs font-semibold tracking-widest uppercase text-[#c70815] mb-3">
              Prêt à démarrer ?
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-[clamp(32px,5vw,64px)] font-black tracking-tighter text-white leading-tight max-w-lg"
            >
              Votre toiture mérite le meilleur.
            </motion.h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 pointer-events-auto relative z-10">
            <Link
              href="/contact#devis"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#0D0D0D] font-semibold px-8 py-4 rounded-full text-sm transition-colors cursor-pointer"
            >
              Demander un devis gratuit →
            </Link>
            <a
              href="tel:0650729561"
              aria-label="Appeler le 06 50 72 95 61"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-white font-semibold px-8 py-4 rounded-full text-sm transition-colors cursor-pointer"
            >
              <Phone size={15} />
              06 50 72 95 61
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
