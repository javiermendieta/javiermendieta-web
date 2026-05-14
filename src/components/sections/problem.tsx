"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Eye, Users, Lightbulb } from "lucide-react";
import { ReactNode } from "react";

const painPoints: { icon: ReactNode; text: string }[] = [
  {
    icon: <Users className="w-5 h-5" />,
    text: "No hay un sistema de adquisición de clientes",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    text: "No saben cuánto deberían rendir sus insumos",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    text: "No detectan desvíos a tiempo",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    text: "El local vende, pero no rinde lo que debería",
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: "El equipo trabaja, pero sin un sistema claro",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Se toman decisiones medio a ojo",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0808] to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-red-400/80 font-semibold text-sm tracking-wider uppercase">
              El Problema
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Los restaurantes y deliveries{" "}
              <span className="text-red-400">pierden dinero</span> porque no
              tienen control
            </h2>
            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              Falta de métodos profesionales. Y así, el negocio nunca escala. Y
              siempre termina dependiendo del dueño.
            </p>
          </motion.div>

          {/* Right: pain points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-red-400/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-400/10 flex items-center justify-center text-red-400/70 group-hover:bg-red-400/20 transition-colors flex-shrink-0">
                  {point.icon}
                </div>
                <p className="text-white/70 text-base sm:text-lg group-hover:text-white/90 transition-colors">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
