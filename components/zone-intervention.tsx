"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const VILLES = [
  "Caen", "Bretteville sur Odon", "Fontaine Étoupefour", "Évrecy", "Ifs",
  "Audrieu", "Rots", "Mondeville", "Ouistreham", "Cheux", "Cabourg",
  "Houlgate", "Sainte Honorine du Fay", "Bretteville l'Orgueilleuse",
  "Carpiquet", "Courseulles-sur-Mer", "Villers Bocage",
]

export function ZoneIntervention() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} style={{ backgroundColor: "#F8F6F3" }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p variants={fadeInUp} className="text-xs font-semibold tracking-widest uppercase text-[#c70815] mb-3">
            Zone d&apos;intervention
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(32px,4vw,56px)] font-black tracking-tighter text-[#0D0D0D] mb-4 max-w-2xl leading-tight"
          >
            Nous intervenons dans tout le Calvados
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 mb-10 max-w-xl leading-relaxed">
            Service de proximité, déplacement rapide dans le Calvados (14) et ses environs.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2.5">
            {VILLES.map((ville) => (
              <span
                key={ville}
                className="text-sm font-medium px-4 py-2 rounded-full border border-gray-200 bg-white text-[#374151] hover:border-[#c70815] hover:text-[#c70815] transition-colors cursor-default"
              >
                {ville}
              </span>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="text-gray-400 text-sm mt-8">
            Déplacement et devis gratuit · Prix compétitifs · Intervention urgence · Garantie décennale
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
