"use client";

import { motion } from "framer-motion";

const brands = [
  "Sushipop",
  "La Causa Nikkei",
  "Fabric Sushi",
  "Tigre Morado",
  "Amano",
  "Grupo Lahusen",
  "Ku Pinamar",
  "Radio Set",
  "Ambient House",
  "Portezuelo",
  "Pizza Glup",
];

const brandsDouble = [...brands, ...brands];

export default function BrandMarquee() {
  return (
    <section className="relative py-8 sm:py-10 overflow-hidden border-y border-white/[0.04]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Row */}
      <div className="flex items-center">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap">
          {brandsDouble.map((brand, i) => (
            <div
              key={`a-${i}`}
              className="flex items-center gap-8 sm:gap-12 flex-shrink-0"
            >
              <span className="text-white/30 hover:text-lime/60 text-sm sm:text-base font-semibold tracking-wider uppercase transition-colors duration-300 cursor-default select-none">
                {brand}
              </span>
              <span className="text-lime/20 text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
