"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Target,
  BarChart3,
  AlertCircle,
  Wrench,
  Users,
  ShoppingBag,
} from "lucide-react";
import { ReactNode } from "react";

const solutions: { icon: ReactNode; text: string }[] = [
  {
    icon: <UserPlus className="w-5 h-5" />,
    text: "Saben cómo conseguir nuevos clientes",
  },
  {
    icon: <Target className="w-5 h-5" />,
    text: "Definen objetivos claros",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    text: "Miden todos los días",
  },
  {
    icon: <AlertCircle className="w-5 h-5" />,
    text: "Detectan desvíos rápido",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    text: "Corrigen con método",
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: "Estructuran cómo tiene que trabajar el equipo",
  },
  {
    icon: <ShoppingBag className="w-5 h-5" />,
    text: "Ajustan cómo se vende dentro del local",
  },
];

export default function Solution() {
  return (
    <section id="solucion" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent-glow/5 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: solution points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4 order-2 lg:order-1"
          >
            {solutions.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent-glow/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-glow/10 flex items-center justify-center text-accent-glow group-hover:bg-accent-glow/20 transition-colors flex-shrink-0">
                  {point.icon}
                </div>
                <p className="text-white/70 text-base sm:text-lg group-hover:text-white/90 transition-colors">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: headline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent-glow font-semibold text-sm tracking-wider uppercase">
              La Solución
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Esto no se soluciona trabajando más. Se soluciona{" "}
              <span className="text-accent-glow">operando distinto</span>
            </h2>
            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              Los negocios que funcionan de verdad hacen las cosas de otra
              manera. No es magia. Es hacer bien lo que los grandes ya hacen.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent-glow to-accent-glow-dark text-[#0a0a0a] font-bold rounded-xl hover:shadow-lg hover:shadow-accent-glow/25 transition-all duration-300 hover:scale-105 text-base"
              >
                QUIERO MEJORAR MI NEGOCIO
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
