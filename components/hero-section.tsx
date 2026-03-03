"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowDown } from "lucide-react"
import { motion } from "motion/react"
import { staggerContainer, textReveal, fadeInRight } from "@/lib/animations"

interface HeroSectionProps {
  title: string
  subtitle?: string
  imageSrc?: string
  isHomepage?: boolean
  breadcrumb?: string
}

export function HeroSection({ title, subtitle, imageSrc, isHomepage = false, breadcrumb }: HeroSectionProps) {
  if (isHomepage) {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
        {/* Grid layout: left text / right image */}
        <div className="absolute inset-0 flex">
          {/* Left white side */}
          <div className="w-full md:w-1/2 bg-white" />
          {/* Right image side */}
          <div className="hidden md:block w-1/2 relative">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt="Toiture Kreit Couverture"
                fill
                priority
                className="object-cover"
                sizes="50vw"
              />
            )}
            {/* Diagonal overlay */}
            <div
              className="absolute inset-0 bg-white z-10"
              style={{ clipPath: "polygon(0 0, 12% 0, 0 100%)" }}
            />
          </div>
        </div>

        {/* Mobile background */}
        {imageSrc && (
          <div className="absolute inset-0 md:hidden">
            <Image
              src={imageSrc}
              alt="Toiture Kreit Couverture"
              fill
              priority
              className="object-cover opacity-15"
              sizes="100vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20 md:py-28">
          <div className="md:max-w-[55%]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              {/* Eyebrow */}
              <motion.p
                variants={textReveal}
                className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#c70815] mb-6"
              >
                Artisan Couvreur — Calvados (14)
              </motion.p>

              {/* Main title — single h1 with two visual lines */}
              <div className="overflow-hidden mb-2">
                <motion.h1
                  variants={textReveal}
                  className="text-[clamp(44px,7vw,100px)] font-black leading-[0.95] tracking-tighter text-[#0D0D0D]"
                >
                  Votre toiture,{" "}
                  <span
                    className="block text-[#c70815] italic"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    notre expertise.
                  </span>
                </motion.h1>
              </div>

              {/* Subtitle */}
              {subtitle && (
                <motion.p variants={fadeInRight} className="text-base md:text-lg text-gray-500 mb-10 max-w-md leading-relaxed mt-8 md:mt-10">
                  {subtitle}
                </motion.p>
              )}

              {/* CTAs */}
              <motion.div variants={fadeInRight} className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact#devis"
                  className="inline-flex items-center justify-center bg-[#c70815] hover:bg-[#a00610] text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors"
                >
                  Devis gratuit →
                </Link>
                <a
                  href="tel:0650729561"
                  aria-label="Appeler le 06 50 72 95 61"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 text-[#0D0D0D] hover:border-[#c70815] hover:text-[#c70815] font-semibold px-8 py-4 rounded-full text-sm transition-colors bg-white"
                >
                  <Phone size={15} />
                  06 50 72 95 61
                </a>
              </motion.div>

              {/* Trust signals */}
              <motion.div variants={fadeInRight} className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-400 font-medium">
                <span>✓ Devis & déplacement gratuit</span>
                <span>✓ Garantie décennale</span>
                <span>✓ Intervention urgence</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs tracking-widest uppercase">Découvrir</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>
    )
  }

  // Service page hero (simpler)
  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-20">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-16 pt-32">
        {breadcrumb && (
          <p className="text-xs font-semibold tracking-widest uppercase text-[#c70815] mb-4">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-[clamp(32px,5vw,72px)] font-black leading-tight tracking-tighter text-white max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl">{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/contact#devis"
            className="inline-flex items-center justify-center bg-[#c70815] hover:bg-[#a00610] text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors"
          >
            Devis gratuit →
          </Link>
          <a
            href="tel:0650729561"
            aria-label="Appeler le 06 50 72 95 61"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:border-white font-semibold px-8 py-4 rounded-full text-sm transition-colors backdrop-blur-sm"
          >
            <Phone size={15} />
            06 50 72 95 61
          </a>
        </div>
      </div>
    </section>
  )
}
