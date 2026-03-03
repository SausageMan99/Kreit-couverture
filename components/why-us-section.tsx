"use client"

import Image from "next/image"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Shield, Award, Zap, Users } from "lucide-react"
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations"

const guarantees = [
  { icon: Award, text: "Garantie décennale sur tous nos travaux" },
  { icon: Shield, text: "Produits professionnels DALEP homologués" },
  { icon: Zap, text: "Intervention urgence disponible 24h/24" },
  { icon: Users, text: "Artisans locaux, connaissance du terrain normand" },
]

export function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div variants={fadeInLeft} className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
              alt="Artisan couvreur Kreit Couverture"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Accent block */}
            <div
              className="absolute bottom-0 right-0 bg-[#c70815] text-white p-6 md:p-8 z-10"
              style={{ borderTopLeftRadius: "1rem" }}
            >
              <p className="text-4xl font-black leading-none">20+</p>
              <p className="text-sm opacity-80 mt-1">ans d'expérience</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={staggerContainer} className="order-1 lg:order-2">
            <motion.p variants={fadeInUp} className="text-xs font-semibold tracking-widest uppercase text-[#c70815] mb-3">
              Pourquoi nous choisir
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-[clamp(32px,4vw,52px)] font-black tracking-tighter text-[#0D0D0D] leading-tight mb-6"
            >
              Artisans normands,<br />
              <span className="text-[#c70815]">expertise locale.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 leading-relaxed mb-10 max-w-md">
              Depuis plus de 20 ans, nous intervenons sur les toitures du Calvados. Nous connaissons le
              bâti normand, ses matériaux, ses spécificités climatiques. Chaque chantier est traité avec
              le soin d&apos;un artisan passionné par son métier.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4">
              {guarantees.map(({ icon: Icon, text }) => (
                <motion.li key={text} variants={fadeInRight} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c70815]/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#c70815]" />
                  </div>
                  <span className="text-sm text-[#374151] font-medium">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
