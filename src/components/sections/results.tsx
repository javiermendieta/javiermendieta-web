"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 5, suffix: "", label: "Marcas en Grupo Sushipop", prefix: "", sublabel: "+500 pedidos diarios" },
  { value: 10, suffix: "", label: "Eventos simultáneos en Grupo Lahusen", prefix: "+", sublabel: "Operación constante" },
  { value: 5, suffix: "", label: "Bares en Ambient House", prefix: "", sublabel: "Gestión coordinada" },
  { value: 50, suffix: "+", label: "Restaurantes asesorados", prefix: "", sublabel: "En toda Argentina" },
];

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref} className="tabular-nums">{prefix}{count}{suffix}</span>;
}

export default function Results() {
  return (
    <section id="resultados" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#060606] to-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/[0.03] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-lime/80 font-semibold text-xs tracking-widest uppercase">Resultados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Números que <span className="text-shimmer">hablan por sí solos</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group rounded-2xl p-6 sm:p-8 text-center bg-white/[0.02] border border-white/[0.04] hover:border-lime/15 transition-all duration-500"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-lime transition-colors duration-500">
                <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-white/55 text-sm sm:text-base font-medium mb-1">{stat.label}</p>
              <p className="text-lime/40 text-xs sm:text-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
