"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { text: "Trabajar con Javier fue un antes y un después. En tres meses mejoramos un 35% la eficiencia operativa y redujimos costos sin sacrificar calidad. Su sistema es claro, práctico y sobre todo, funciona.", name: "Martín Rodríguez", restaurant: "Restaurante Siete Fuegos", rating: 5 },
  { text: "Las auditorías operativas nos abrieron los ojos. Descubrimos filtraciones que no veíamos y con el plan de acción de Javier las corregimos rápido. Hoy tenemos mucho más control del negocio.", name: "Carolina Vega", restaurant: "La Terraza Cocina & Vinos", rating: 5 },
  { text: "El delivery era un dolor de cabeza hasta que Javier lo ordenó. Mejoramos tiempos, visibilidad en las apps y lo que es más importante: la rentabilidad del canal. Totalmente recomendable.", name: "Esteban López", restaurant: "Patio Norte Parrilla", rating: 5 },
  { text: "La capacitación de personal que implementó Javier transformó el equipo. Ahora trabajan con estándares claros y el cliente lo nota. Nivel de servicio premium sin duplicar costos.", name: "Valentina Martínez", restaurant: "Alma Cocina Regional", rating: 5 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const next = useCallback(() => { setDirection(1); setCurrent((p) => (p + 1) % testimonials.length); }, []);
  const prev = useCallback(() => { setDirection(-1); setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length); }, []);

  useEffect(() => { const t = setInterval(next, 6000); return () => clearInterval(t); }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 150 : -150, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -150 : 150, opacity: 0 }),
  };

  return (
    <section id="testimonios" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/10 border border-lime/15 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime/60" />
            <span className="text-lime/80 font-semibold text-xs tracking-widest uppercase">Testimonios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Lo que dicen <span className="text-shimmer">mis clientes</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative overflow-hidden min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="rounded-2xl p-8 sm:p-10 bg-white/[0.03] border border-white/[0.06]"
              >
                <Quote className="w-8 h-8 text-lime/20 mb-4" />
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-lime text-lime" />
                    ))}
                  </div>
                  <p className="text-white font-semibold">{testimonials[current].name}</p>
                  <p className="text-lime/50 text-sm">{testimonials[current].restaurant}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-lime hover:border-lime/20 transition-all duration-300" aria-label="Anterior">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${i === current ? "bg-lime w-7 h-2" : "bg-white/15 w-2 h-2 hover:bg-white/30"}`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-lime hover:border-lime/20 transition-all duration-300" aria-label="Siguiente">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
