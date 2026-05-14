"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const phrases = [
  "Transformá tu negocio gastronómico",
  "Optimizá cada aspecto de tu restaurante",
  "Llevá tu operación al siguiente nivel",
];

function useTypingEffect(phrases: string[], typingSpeed = 60, deletingSpeed = 30, pauseTime = 2000) {
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
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent-glow/30"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 20}%`],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            delay: Math.random() * 5,
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
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-glow/5 rounded-full blur-[120px] animate-gradient" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[100px]" />

      {/* Hero background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,212,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,212,55,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold text-accent-glow border border-accent-glow/30 rounded-full bg-accent-glow/5 tracking-wider uppercase">
            Consultor Gastronómico · +25 años de experiencia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8"
        >
          <span className="text-white">{displayText}</span>
          <span className="typing-cursor" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed"
        >
          Audito, optimizo y transformo restaurantes para que operen con la
          eficiencia de las grandes marcas. Resultados reales, medibles y
          rentables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-gradient-to-r from-accent-glow to-accent-glow-dark text-[#0a0a0a] font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-accent-glow/30 transition-all duration-300 hover:scale-105 min-w-[220px]"
          >
            Agendá una consulta
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("servicios")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-xl hover:border-accent-glow/50 hover:text-accent-glow transition-all duration-300 min-w-[220px]"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-accent-glow/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
