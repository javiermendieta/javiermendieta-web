"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/javier-1.jpeg", alt: "Javier Mendieta en operación gastronómica" },
  { src: "/javier-2.jpeg", alt: "Javier Mendieta consultoría restaurante" },
  { src: "/javier-3.jpeg", alt: "Javier Mendieta en evento gastronómico" },
  { src: "/javier-4.png", alt: "Javier Mendieta asesorando restaurante" },
  { src: "/javier-5.png", alt: "Javier Mendieta en consultoría" },
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.97,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    next();
  };

  const handlePrev = () => {
    setDirection(-1);
    prev();
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main carousel */}
      <div className="relative rounded-2xl overflow-hidden border border-lime/15 aspect-[4/3]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover"
              priority={current === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-lime hover:border-lime/30 transition-all duration-300"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-lime hover:border-lime/30 transition-all duration-300"
          aria-label="Foto siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide counter */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/60 text-xs font-medium">
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? "w-8 h-2.5 bg-lime"
                : "w-2.5 h-2.5 bg-white/15 hover:bg-white/30"
            }`}
            aria-label={`Ir a foto ${i + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-3">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`relative flex-1 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              i === current
                ? "border-lime opacity-100 scale-[1.02]"
                : "border-transparent opacity-40 hover:opacity-70"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="100px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
