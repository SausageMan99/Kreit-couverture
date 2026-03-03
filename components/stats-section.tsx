"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const stats = [
  { id: "experience", value: 20, suffix: "+", label: "Années\nd'expérience" },
  { id: "chantiers", value: 500, suffix: "+", label: "Chantiers\nréalisés" },
  { id: "communes", value: 17, suffix: "", label: "Communes\ndu Calvados" },
  { id: "devis", value: 100, suffix: "%", label: "Devis &\ndéplacement gratuit" },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} style={{ backgroundColor: "#F8F6F3" }} className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-gray-200"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              className="flex flex-col items-center text-center px-6 py-4"
            >
              <span className="text-5xl md:text-6xl font-black text-[#c70815] tracking-tighter leading-none mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-gray-500 leading-snug whitespace-pre-line">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
