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
  { icon: <UserPlus className="w-5 h-5" />, text: "Saben cómo conseguir nuevos clientes" },
  { icon: <Target className="w-5 h-5" />, text: "Definen objetivos claros" },
  { icon: <BarChart3 className="w-5 h-5" />, text: "Miden todos los días" },
  { icon: <AlertCircle className="w-5 h-5" />, text: "Detectan desvíos rápido" },
  { icon: <Wrench className="w-5 h-5" />, text: "Corrigen con método" },
  { icon: <Users className="w-5 h-5" />, text: "Estructuran cómo tiene que trabajar el equipo" },
  { icon: <ShoppingBag className="w-5 h-5" />, text: "Ajustan cómo se vende dentro del local" },
];

export default function Solution() {
  return (
    <section id="solucion" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-lime/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: points */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="space-y-3 order-2 lg:order-1"
          >
            {solutions.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-lime/15 hover:bg-lime/[0.02] transition-all duration-400 group"
              >
                <div className="w-10 h-10 rounded-lg bg-lime/[0.08] flex items-center justify-center text-lime group-hover:bg-lime/15 transition-colors flex-shrink-0">
                  {point.icon}
                </div>
                <p className="text-white/60 text-base group-hover:text-white/80 transition-colors">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: headline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/10 border border-lime/15 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-lime/60" />
              <span className="text-lime/80 font-semibold text-xs tracking-widest uppercase">
                La Solución
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Esto no se soluciona trabajando más. Se soluciona{" "}
              <span className="text-shimmer">operando distinto</span>
            </h2>

            <p className="mt-6 text-white/40 text-lg leading-relaxed">
              Los negocios que funcionan de verdad hacen las cosas de otra
              manera. No es magia. Es hacer bien lo que los grandes ya hacen.
            </p>

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
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-lime text-[#050505] font-bold rounded-xl hover:shadow-xl hover:shadow-lime/20 transition-all duration-500 hover:scale-[1.04] overflow-hidden"
              >
                <span className="relative z-10">QUIERO MEJORAR MI NEGOCIO</span>
                <div className="absolute inset-0 bg-lime-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
