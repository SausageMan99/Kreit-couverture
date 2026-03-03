"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const logos = [
  { id: "bigmat",       name: "Bigmat",        src: "/partenaires/Bigmat.jpg" },
  { id: "bosh",         name: "Bosch Pro",     src: "/partenaires/Bosh Pro.jpg" },
  { id: "bostik",       name: "Bostik",        src: "/partenaires/Bostik.jpg" },
  { id: "dalep-agree",  name: "Dalep Agréé",   src: "/partenaires/Dalep agree.jpg" },
  { id: "dalep",        name: "Dalep",         src: "/partenaires/Dalep.jpg" },
  { id: "gedimat",      name: "Gedimat",       src: "/partenaires/Gedimat.jpg" },
  { id: "karcher",      name: "Kärcher",       src: "/partenaires/Karcher.jpg" },
  { id: "lariviere",    name: "Larivière",     src: "/partenaires/Lariviere .jpg" },
  { id: "raboni",       name: "Raboni",        src: "/partenaires/Raboni.jpg" },
  { id: "reseau-pro",   name: "Réseau Pro",    src: "/partenaires/Reseau pro.jpg" },
  { id: "sika",         name: "Sika",          src: "/partenaires/Sika.jpg" },
  { id: "terreal",      name: "Terreal",       src: "/partenaires/Terreal.jpg" },
  { id: "tubesca",      name: "Tubesca",       src: "/partenaires/Tubesca.jpg" },
  { id: "weber",        name: "Weber",         src: "/partenaires/Weber.jpg" },
  { id: "graco",        name: "Graco",         src: "/partenaires/graco.jpg" },
]

export function PartnersCarousel() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#c70815] mb-3">
          Ils nous font confiance
        </p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tighter text-[#0D0D0D] leading-tight">
          Nos partenaires
        </h2>
      </div>

      <div className="relative">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="pl-0 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-[14.28%]"
              >
                <div className="mx-6 flex items-center justify-center h-16">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  )
}
