"use client";

import { motion } from "framer-motion";

export default function MidCTA() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-glow/5 via-transparent to-accent-glow/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-glow/5 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Sentís que tu negocio podría estar{" "}
            <span className="text-accent-glow">rindiendo mejor</span>?
          </h3>
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            Si la rentabilidad se mueve, el problema se detecta a tiempo,{" "}
            <span className="text-white font-semibold">SIEMPRE</span>. Podés ver
            cómo trabajo y si tiene sentido aplicarlo en tu caso.
          </p>
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
            QUIERO MI AUDITORÍA ONLINE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
