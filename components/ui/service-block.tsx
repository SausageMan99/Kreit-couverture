"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "motion/react"
import { CheckCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations"

export interface ServiceSection {
  icon: LucideIcon
  title: string
  content: string
  image: string
  points: string[]
}

export function ServiceBlock({ section, index }: { section: ServiceSection; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const isEven = index % 2 === 0
  const Icon = section.icon

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      <motion.div
        variants={isEven ? fadeInLeft : fadeInRight}
        className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        <Image
          src={section.image}
          alt={section.title}
          fill
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      <motion.div variants={isEven ? fadeInRight : fadeInLeft} className={isEven ? "lg:order-2" : "lg:order-1"}>
        <div className="w-12 h-12 rounded-2xl bg-[#c70815]/10 flex items-center justify-center mb-6">
          <Icon size={24} className="text-[#c70815]" />
        </div>
        <h2 className="text-[clamp(26px,3vw,40px)] font-black tracking-tighter text-[#0D0D0D] mb-4 leading-tight">
          {section.title}
        </h2>
        <p className="text-gray-500 leading-relaxed mb-8">{section.content}</p>
        <ul className="space-y-3">
          {section.points.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm font-medium text-[#374151]">
              <CheckCircle size={16} className="text-[#c70815] shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
