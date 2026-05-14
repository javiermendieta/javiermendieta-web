"use client";

import { motion } from "framer-motion";

const videos = [
  {
    youtubeId: "2SbQpV9kNfI",
    title: "Así Hago Rentables Restaurantes y Deliverys",
    description:
      "Esto no es contenido educativo. Es cómo se operan restaurantes y deliveries en la vida real. Si no estás midiendo, controlando y decidiendo así, estás perdiendo DINERO sin verlo.",
  },
  {
    youtubeId: "2SbQpV9kNfI",
    title: "Cómo opero un delivery de 500 pedidos diarios",
    description:
      "Lo que realmente importa cuando manejas volumen alto y múltiples marcas al mismo tiempo. Dónde se gana y dónde se pierde dinero.",
  },
  {
    youtubeId: "2SbQpV9kNfI",
    title: "Así manejo cinco restaurantes",
    description:
      "Te muestro cómo controlo cinco restaurantes al mismo tiempo y qué analizo cada mañana para asegurar rentabilidad, operación y control real.",
  },
  {
    youtubeId: "2SbQpV9kNfI",
    title: "Cómo Manejar 10 Eventos al Mismo Tiempo",
    description:
      "Así se controla una operación real de alto volumen: Logística, líderes, timing y ejecución sin margen de error.",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-glow/3 rounded-full blur-[120px]" />

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
            Mirá cómo trabajo
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Cómo funciona un negocio gastronómico que{" "}
            <span className="text-accent-glow">GANA dinero en serio</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Esto no es contenido educativo. Es cómo se operan restaurantes y
            deliveries en la vida real.
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden hover:border-accent-glow/30 transition-all duration-300">
                {/* Video embed */}
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Video info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-accent-glow transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after videos */}
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
