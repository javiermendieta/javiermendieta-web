"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timeline = [
  {
    year: "1998",
    title: "Inicio en la industria",
    desc: "Primeros pasos en la gastronomía profesional, aprendiendo desde la cocina hasta la gestión operativa.",
  },
  {
    year: "2005",
    title: "Grandes marcas",
    desc: "Trabajo directo con líderes del sector: Sushipop, La Causa Nikkei, Fabric Sushi, Tigre Morado.",
  },
  {
    year: "2012",
    title: "Expansión y sistemas",
    desc: "Consultoría con Grupo Lahusen, Ku Pinamar, Amano, implementando sistemas operativos a escala.",
  },
  {
    year: "2018",
    title: "Método propio",
    desc: "Creación de un sistema de trabajo propio, basado en las mejores prácticas adaptadas a PyMEs.",
  },
  {
    year: "2024",
    title: "Consultoría integral",
    desc: "Aplicación directa del sistema en restaurantes, con resultados medibles y comprobables.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-accent/3 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">
            Sobre Mí
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Javier <span className="text-gold">Mendieta</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-emerald-accent/20 rounded-2xl blur-2xl" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-gold/20">
                <Image
                  src="/javier-portrait.png"
                  alt="Javier Mendieta - Consultor Gastronómico"
                  width={600}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Stats floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 glass-strong rounded-xl px-4 py-3 sm:px-6 sm:py-4"
              >
                <p className="text-gold font-bold text-2xl sm:text-3xl">+25</p>
                <p className="text-white/70 text-xs sm:text-sm">Años de experiencia</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6 text-white/70 text-base sm:text-lg leading-relaxed">
              <p>
                Con más de 25 años de experiencia, trabajé desde adentro con los
                líderes de la industria gastronómica:{" "}
                <span className="text-gold font-medium">
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
              <p className="text-white/90 font-medium">
                Si sentís que tu negocio podría estar rindiendo mejor, podés ver
                cómo trabajo y si tiene sentido aplicarlo en tu caso.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-[#0a0a0a] font-bold rounded-xl hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
              >
                Conocé cómo trabajo
              </a>
            </motion.div>

            {/* Timeline */}
            <div className="mt-12 relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-gold/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <div>
                      <span className="text-gold font-bold text-sm">
                        {item.year}
                      </span>
                      <h4 className="text-white font-semibold text-base">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
