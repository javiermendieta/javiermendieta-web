"use client";

import { motion } from "framer-motion";

const videos = [
  {
    youtubeId: "2SbQpV9kNfI",
    title: "Así Hago Rentables Restaurantes y Deliverys",
    description: "Esto no es contenido educativo. Es cómo se operan restaurantes y deliveries en la vida real.",
  },
  {
    youtubeId: "2SbQpV9kNfI",
    title: "Cómo opero un delivery de 500 pedidos diarios",
    description: "Lo que realmente importa cuando manejas volumen alto. Dónde se gana y dónde se pierde dinero.",
  },
  {
    youtubeId: "2SbQpV9kNfI",
    title: "Así manejo cinco restaurantes",
    description: "Cómo controlo cinco restaurantes al mismo tiempo y qué analizo cada mañana para asegurar rentabilidad.",
  },
  {
    youtubeId: "2SbQpV9kNfI",
    title: "Cómo Manejar 10 Eventos al Mismo Tiempo",
    description: "Logística, líderes, timing y ejecución sin margen de error en una operación real de alto volumen.",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/[0.02] rounded-full blur-[120px]" />

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
            <span className="text-lime/80 font-semibold text-xs tracking-widest uppercase">Mirá cómo trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Cómo funciona un negocio que{" "}
            <span className="text-shimmer">GANA dinero en serio</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
            Esto no es contenido educativo. Es cómo se operan restaurantes y deliveries en la vida real.
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-lime/15 transition-all duration-500"
            >
              <div className="relative w-full aspect-video bg-black/50">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-lime transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{video.description}</p>
              </div>
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
