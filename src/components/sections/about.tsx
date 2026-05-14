"use client";

import { motion } from "framer-motion";
import PhotoCarousel from "./photo-carousel";

const aboutBrands = [
  "Sushipop",
  "La Causa Nikkei",
  "Fabric Sushi",
  "Tigre Morado",
  "Amano",
  "Grupo Lahusen",
  "Ku Pinamar",
  "Radio Set",
  "Ambient House",
  "Portezuelo",
  "Pizza Glup",
  "Olivia",
  "Ku Las Leñas",
  "Deep Blue",
  "Pizza Banana",
  "Club Leloir",
  "Caix",
  "Speed Unlimited",
  "Peters",
  "La Rural",
  "Palacio de San Miguel",
  "Madero Walk",
];

const aboutBrandsDouble = [...aboutBrands, ...aboutBrands];

const timeline = [
  { year: "2001", title: "Inicio en la industria", desc: "Mis primeros pasos en la gastronomía profesional, aprendiendo desde la cocina y barra hasta la gestión operativa." },
  { year: "2005", title: "Gestión y liderazgo", desc: "Asumiendo roles de dirección en restaurantes, coordinando equipos y optimizando operaciones día a día." },
  { year: "2012", title: "Expansión y sistemas", desc: "Consultoría con Grupo Lahusen, Ku Pinamar, Amano, implementando sistemas operativos a escala." },
  { year: "2018", title: "Método propio", desc: "Creación de mi sistema de trabajo propio, basado en las mejores prácticas adaptadas a PyMEs." },
  { year: "2020", title: "Grandes marcas", desc: "Trabajo directo con líderes del sector: Sushipop, La Causa Nikkei, Fabric Sushi, Tigre Morado." },
  { year: "2024", title: "Consultoría integral", desc: "Aplicación directa de mi sistema en restaurantes, con resultados medibles y comprobables." },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald/[0.02] rounded-full blur-[100px]" />

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
            <span className="text-lime/80 font-semibold text-xs tracking-widest uppercase">Sobre Mí</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Javier <span className="text-shimmer">Mendieta</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-lime/10 to-emerald/10 rounded-3xl blur-3xl" />

              <div className="relative">
                <PhotoCarousel />
              </div>

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-3 -right-3 sm:bottom-6 sm:right-6 glass-strong rounded-xl px-5 py-4 z-20"
              >
                <p className="text-lime font-bold text-3xl">+25</p>
                <p className="text-white/60 text-sm">Años de experiencia</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-5 text-white/55 text-base sm:text-lg leading-relaxed">
              <p>
                Con más de 25 años de experiencia, trabajé desde adentro con los
                líderes de la industria gastronómica:{" "}
                <span className="text-lime font-medium">
                  Sushipop, La Causa Nikkei, Fabric Sushi, Tigre Morado, Amano,
                  Grupo Lahusen, Ku Pinamar, Radio Set, Ambient House,
                  Portezuelo, Pizza Glup
                </span>
                , entre otros.
              </p>
              <p>
                Con esa experiencia creé una forma de trabajo propia, basada en
                lo que hacen bien las marcas grandes, pero adaptada a negocios
                pequeños y medianos como el tuyo.
              </p>
              <p>
                Hoy aplico ese sistema directamente en los restaurantes con los
                que trabajo, para que puedan tener más control, mejorar
                resultados y ganar más dinero.
              </p>
              <p className="text-white/80 font-medium text-lg">
                Si sentís que tu negocio podría estar rindiendo mejor, podés ver
                cómo trabajo y si tiene sentido aplicarlo en tu caso.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 relative">
              <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-lime/30 via-lime/10 to-transparent" />
              <div className="space-y-5">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-1.5 w-[31px] h-[31px] rounded-full bg-[#050505] border border-lime/25 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-lime/70" />
                    </div>
                    <span className="text-lime font-bold text-sm">{item.year}</span>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand marquee reinforcement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <p className="text-center text-white/20 text-xs tracking-[0.3em] uppercase mb-6">Algunas marcas con las que trabajé</p>
          <div className="relative overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.01] py-5">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
            {/* Reverse direction row */}
            <div className="flex items-center">
              <div className="animate-marquee-reverse flex items-center gap-6 sm:gap-10 whitespace-nowrap">
                {aboutBrandsDouble.map((brand, i) => (
                  <div key={`b-${i}`} className="flex items-center gap-6 sm:gap-10 flex-shrink-0">
                    <span className="text-lime/25 hover:text-lime/50 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors duration-300 cursor-default select-none">
                      {brand}
                    </span>
                    <span className="text-lime/10 text-[8px]">◆</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
