"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const services = [
  {
    title: "Entretien Toiture",
    description: "Nettoyage, démoussage et peinture hydrofuge. Prolongez la durée de vie de votre toiture.",
    href: "/services/entretien-toiture",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    tag: "Nettoyage · Démoussage · Hydrofuge",
  },
  {
    title: "Travaux de Couverture",
    description: "Rénovation complète ou partielle, zinguerie, ardoise, tuile et zinc.",
    href: "/services/travaux-couverture",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    tag: "Rénovation · Zinguerie · Ardoise",
  },
  {
    title: "Travaux de Façade",
    description: "Nettoyage, démoussage, imperméabilisation et ravalement façade.",
    href: "/services/facade",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    tag: "Ravalement · Imperméabilisation",
  },
  {
    title: "Nettoyage Extérieurs",
    description: "Allées, dallage, terrasses, murets — nous redonnons vie à vos espaces.",
    href: "/services/nettoyage-exterieurs",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    tag: "Terrasses · Allées · Dallage",
  },
]

export function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-14"
        >
          <motion.p variants={fadeInUp} className="text-xs font-semibold tracking-widest uppercase text-[#c70815] mb-3">
            Ce que nous faisons
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(36px,5vw,64px)] font-black tracking-tighter text-[#0D0D0D] max-w-2xl leading-tight"
          >
            Nos prestations
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            // GlowingEffect doit être dans un conteneur SANS transform CSS
            // (background-attachment:fixed casse à l'intérieur d'éléments transformés)
            <div key={service.href} className="relative rounded-2xl border border-gray-200 p-2">
              <GlowingEffect
                spread={50}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
              {/* Animation opacity uniquement — pas de transform pour ne pas casser le fixed */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Link href={service.href} className="group block relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-[#c70815] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#c70815] mb-2 opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300">
                      {service.tag}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/70 mb-4 max-w-sm leading-relaxed opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white text-sm font-semibold">
                      En savoir plus
                      <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
