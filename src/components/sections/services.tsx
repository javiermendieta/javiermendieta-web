"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  BarChart3,
  Truck,
  Star,
  Users,
  Wrench,
  UserPlus,
} from "lucide-react";
import { ReactNode } from "react";

const services: {
  icon: ReactNode;
  title: string;
  desc: string;
  accent: string;
}[] = [
  {
    icon: <ClipboardCheck className="w-7 h-7" />,
    title: "Auditoría 360° del negocio",
    desc: "Evalúo punto por punto cada sector del restaurante: cocina, salón, barra, administración y delivery. Detecto dónde se está perdiendo dinero y armo un plan de acción concreto para corregirlo.",
    accent: "from-accent-glow/20 to-accent-glow/5",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Consultoría Gastronómica",
    desc: "Diseño estrategia y optimización integral de operaciones. Definimos qué hay que corregir y armo un plan a medida para tu negocio, con seguimiento continuo y métricas claras.",
    accent: "from-accent-green/20 to-accent-green/5",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Gestión de Delivery",
    desc: "Monitoreo y mejoro métricas en Pedidos Ya, Rappi y otras plataformas. Optimizo tiempos, visibilidad, reseñas y rentabilidad de tu canal digital para que deje de ser un dolor de cabeza.",
    accent: "from-accent-glow/20 to-accent-glow/5",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Monitoreo de Reseñas",
    desc: "Sigo de cerca tus reseñas en Google y manejo tu reputation management. Te ayudo a construir una sólida presencia digital y convertir comentarios en oportunidades de mejora.",
    accent: "from-accent-green/20 to-accent-green/5",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Capacitación de Personal",
    desc: "Entreno y formo equipos para que trabajen con estándares profesionales. Estructuro cómo tiene que trabajar el equipo para que funcione con sistema, no a ojo.",
    accent: "from-accent-glow/20 to-accent-glow/5",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Mantenimiento Preventivo",
    desc: "Planifico y controlo el mantenimiento para evitar paradas innecesarias. Creo schedules, controlo proveedores y aseguro que tu equipamiento siempre esté en óptimas condiciones.",
    accent: "from-accent-green/20 to-accent-green/5",
  },
  {
    icon: <UserPlus className="w-7 h-7" />,
    title: "Sistema de Adquisición de Clientes",
    desc: "Instalo un sistema para captar nuevos clientes y fidelizar los existentes. Trabajo sobre posicionamiento, promociones, alianzas estratégicas y marketing digital enfocado en gastronomía para que tu restaurante siempre tenga demanda.",
    accent: "from-accent-glow/20 to-accent-glow/5",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-glow/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-accent-glow font-semibold text-sm tracking-wider uppercase">
            Qué hago
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Esto es lo que hago{" "}
            <span className="text-accent-glow">con mis clientes</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Instalo un sistema de control operativo y comercial. Acompaño para
            que funcione en el día a día. Si la rentabilidad se mueve, el
            problema se detecta a tiempo,{" "}
            <span className="text-white font-semibold">SIEMPRE</span>.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative glass rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-500 hover:border-accent-glow/30 hover:shadow-xl hover:shadow-accent-glow/5"
            >
              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-glow/20 to-accent-green/10 flex items-center justify-center text-accent-glow mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent-glow/20 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-accent-glow transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-glow/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA after services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-glow to-accent-glow-dark text-[#0a0a0a] font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-accent-glow/30 transition-all duration-300 hover:scale-105"
          >
            QUIERO MEJORAR MI NEGOCIO
          </a>
        </motion.div>
      </div>
    </section>
  );
}
