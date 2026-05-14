"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

const phrases = [
  "Transformá tu negocio gastronómico",
  "Hacé que tu restaurante gane más dinero",
  "Operá con la eficiencia de las grandes marcas",
];

function useTypingEffect(
  phrases: string[],
  typingSpeed = 55,
  deletingSpeed = 25,
  pauseTime = 2200
) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];
    if (!isDeleting) {
      setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      if (displayText.length === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [displayText, isDeleting, phraseIndex, phrases, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
}

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-lime/20"
          style={{
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
          }}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 10}%`],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const displayText = useTypingEffect(phrases);

  const scrollToContact = () => {
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep background layers */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Radial glow - center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-lime/[0.04] blur-[150px] animate-gradient" />

      {/* Radial glow - bottom right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald/[0.03] rounded-full blur-[100px]" />

      {/* Hero image - very subtle */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-luminosity"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,212,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(184,212,55,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold text-lime border border-lime/20 rounded-full bg-lime/[0.04] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            Consultor Gastronómico · +25 años · 🍋
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-7xl font-bold leading-[1.1] mb-6 sm:mb-8 tracking-tight"
        >
          <span className="text-white">{displayText}</span>
          <span className="typing-cursor" />
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-white/55 max-w-3xl mx-auto mb-3 leading-relaxed"
        >
          Hago que tu restaurante o delivery{" "}
          <span className="text-shimmer font-bold">gane más DINERO</span>{" "}
          usando los métodos de las grandes marcas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          En <span className="text-white/80 font-semibold">30 días</span>{" "}
          ordeno los números de tu negocio. En{" "}
          <span className="text-white/80 font-semibold">90 días</span> tu
          restaurante funciona con la máxima eficiencia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-lime text-[#050505] font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-lime/20 transition-all duration-500 hover:scale-[1.04] min-w-[280px] overflow-hidden"
          >
            <span className="relative z-10">QUIERO MEJORAR MI NEGOCIO 🍋</span>
            <div className="absolute inset-0 bg-lime-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          <a
            href="#videos"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("videos")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 font-semibold text-lg rounded-xl hover:border-lime/30 hover:text-lime transition-all duration-300 min-w-[220px] justify-center"
          >
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Ver cómo trabajo
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-lime/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
