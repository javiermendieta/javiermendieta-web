"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  TrendingDown,
  Eye,
  Users,
  Lightbulb,
  DollarSign,
} from "lucide-react";
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
    icon: <DollarSign className="w-5 h-5" />,
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
    <section id="problema" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080505] to-[#050505]" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-red-900/[0.04] rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/15 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
              <span className="text-red-400/80 font-semibold text-xs tracking-widest uppercase">
                El Problema
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Los restaurantes y deliveries{" "}
              <span className="text-red-400/90">pierden dinero</span> porque no
              tienen control
            </h2>

            <p className="mt-6 text-white/40 text-lg leading-relaxed">
              Falta de métodos profesionales. Y así, el negocio nunca escala. Y
              siempre termina dependiendo del dueño.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-red-400/15 hover:bg-red-400/[0.02] transition-all duration-400 group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-400/[0.08] flex items-center justify-center text-red-400/60 group-hover:bg-red-400/15 transition-colors flex-shrink-0">
                  {point.icon}
                </div>
                <p className="text-white/60 text-base group-hover:text-white/80 transition-colors">
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
