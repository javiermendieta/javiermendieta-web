"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Trabajar con Javier fue un antes y un después. En tres meses mejoramos un 35% la eficiencia operativa y redujimos costos sin sacrificar calidad. Su sistema es claro, práctico y sobre todo, funciona.",
    name: "Martín Rodríguez",
    restaurant: "Restaurante Siete Fuegos",
    rating: 5,
  },
  {
    text: "Las auditorías operativas nos abrieron los ojos. Descubrimos filtraciones que no veíamos y con el plan de acción de Javier las corregimos rápido. Hoy tenemos mucho más control del negocio.",
    name: "Carolina Vega",
    restaurant: "La Terraza Cocina & Vinos",
    rating: 5,
  },
  {
    text: "El delivery era un dolor de cabeza hasta que Javier lo ordenó. Mejoramos tiempos, visibilidad en las apps y lo que es más importante: la rentabilidad del canal. Totalmente recomendable.",
    name: "Esteban López",
    restaurant: "Patio Norte Parrilla",
    rating: 5,
  },
  {
    text: "La capacitación de personal que implementó Javier transformó el equipo. Ahora trabajan con estándares claros y el cliente lo nota. Nivel de servicio premium sin duplicar costos.",
    name: "Valentina Martínez",
    restaurant: "Alma Cocina Regional",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonios"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Lo que dicen{" "}
            <span className="text-gold">mis clientes</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative overflow-hidden min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass-strong rounded-2xl p-8 sm:p-10"
              >
                <Quote className="w-10 h-10 text-gold/30 mb-4" />

                <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({
                        length: testimonials[current].rating,
                      }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <p className="text-white font-semibold">
                      {testimonials[current].name}
                    </p>
                    <p className="text-gold/70 text-sm">
                      {testimonials[current].restaurant}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/30 transition-all duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-gold w-8"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/30 transition-all duration-300"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
