"use client";

import { motion } from "framer-motion";

export default function MidCTA() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-lime/[0.02] via-transparent to-lime/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lime/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 sm:p-12 bg-white/[0.03] border border-white/[0.06]"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            ¿Sentís que tu negocio podría estar{" "}
            <span className="text-shimmer">rindiendo mejor</span>?
          </h3>
          <p className="text-white/40 text-lg mb-8 max-w-2xl mx-auto">
            Si la rentabilidad se mueve, el problema se detecta a tiempo,{" "}
            <span className="text-white/70 font-semibold">SIEMPRE</span>.
          </p>
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-lime text-[#050505] font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-lime/20 transition-all duration-500 hover:scale-[1.04] overflow-hidden"
          >
            <span className="relative z-10">QUIERO MI AUDITORÍA ONLINE</span>
            <div className="absolute inset-0 bg-lime-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
