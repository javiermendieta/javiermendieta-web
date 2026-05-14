"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  BarChart3,
  Truck,
  Star,
  Users,
  Wrench,
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
    title: "Auditorías Operativas",
    desc: "Evaluación punto por punto de cada sector del restaurante: cocina, salón, barra, administración y delivery. Detectamos filtraciones, ineficiencias y oportunidades de mejora con un informe detallado y un plan de acción concreto.",
    accent: "from-gold/20 to-gold/5",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Consultoría Gastronómica",
    desc: "Estrategia y optimización integral de operaciones. Diseñamos un plan a medida para tu negocio, desde la estructura de costos hasta la experiencia del cliente, con seguimiento continuo y métricas claras.",
    accent: "from-emerald-accent/20 to-emerald-accent/5",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Gestión de Delivery",
    desc: "Monitoreo y mejora de métricas en Pedidos Ya, Rappi y otras plataformas. Optimizamos tiempos, visibilidad, reseñas y rentabilidad de tu canal digital para que deje de ser un dolor de cabeza.",
    accent: "from-gold/20 to-gold/5",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Monitoreo de Reseñas",
    desc: "Seguimiento de reseñas en Google y reputation management. Te ayudamos a construir una sólida presencia digital, responder adecuadamente y convertir comentarios en oportunidades de mejora.",
    accent: "from-emerald-accent/20 to-emerald-accent/5",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Capacitación de Personal",
    desc: "Entrenamiento y formación de equipos para que trabajen con estándares profesionales. Desde la inducción hasta la capacitación continua, generamos equipos comprometidos y eficientes.",
    accent: "from-gold/20 to-gold/5",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Mantenimiento Preventivo",
    desc: "Planificación y control de mantenimiento para evitar paradas innecesarias. Creamos schedules, controlamos proveedores y aseguramos que tu equipamiento siempre esté en óptimas condiciones.",
    accent: "from-emerald-accent/20 to-emerald-accent/5",
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-[150px]" />

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
            Servicios
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Lo que puedo hacer{" "}
            <span className="text-gold">por tu negocio</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Cada servicio está diseñado para resolver problemas reales de la
            operación gastronómica, con metodología propia y resultados
            comprobados.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative glass rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-500 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
            >
              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-emerald-accent/10 flex items-center justify-center text-gold mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
