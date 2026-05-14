"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck, BarChart3, Truck, Star, Users, ClipboardList, UserPlus,
} from "lucide-react";
import { ReactNode } from "react";

const services: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Auditoría 360°",
    desc: "Evalúo punto por punto cada sector del restaurante. Detecto dónde se pierde dinero y armo un plan de acción concreto.",
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Adquisición de Clientes",
    desc: "Instalo un sistema para captar y fidelizar clientes. Marketing digital enfocado en gastronomía.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Consultoría Gastronómica",
    desc: "Diseño estrategia y optimización integral. Definimos qué corregir y armo un plan a medida con métricas claras.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Gestión de Delivery",
    desc: "Optimizo resultados en Rappi, Pedidos Ya y otras plataformas para que tu canal digital sea rentable.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Monitoreo de Reseñas",
    desc: "Sigo de cerca tus reseñas en Google. Te ayudo a construir presencia digital y convertir comentarios en mejoras.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Capacitación de Personal",
    desc: "Entreno equipos para que trabajen con estándares profesionales. Sistema claro, no a ojo.",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Seguimiento Diario",
    desc: "Planifico la eficiencia de mercadería, checklist, puntos de control y mantenimiento para asegurar la eficiencia.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/[0.02] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/10 border border-lime/15 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime/60" />
            <span className="text-lime/80 font-semibold text-xs tracking-widest uppercase">Qué Hago</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Esto es lo que hago{" "}
            <span className="text-shimmer">con mis clientes</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
            Instalo un sistema de control operativo y comercial. Si la rentabilidad se mueve, el problema se detecta a tiempo,{" "}
            <span className="text-white/70 font-semibold">SIEMPRE</span>.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl p-6 bg-white/[0.02] border border-white/[0.05] cursor-pointer transition-all duration-500 hover:border-lime/20 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-lime/[0.03]"
            >
              <div className="w-12 h-12 rounded-xl bg-lime/[0.07] flex items-center justify-center text-lime mb-4 group-hover:bg-lime/15 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-lime transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-lime text-[#050505] font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-lime/20 transition-all duration-500 hover:scale-[1.04] overflow-hidden"
          >
            <span className="relative z-10">QUIERO MEJORAR MI NEGOCIO</span>
            <div className="absolute inset-0 bg-lime-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
