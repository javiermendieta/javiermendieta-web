"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: 5,
    suffix: "",
    label: "Marcas gestionadas en Grupo Sushipop",
    prefix: "",
    sublabel: "+500 pedidos diarios",
  },
  {
    value: 10,
    suffix: "",
    label: "Eventos en simultáneo en Grupo Lahusen",
    prefix: "+",
    sublabel: "Operación constante",
  },
  {
    value: 5,
    suffix: "",
    label: "Bares en simultáneo en Ambient House",
    prefix: "",
    sublabel: "Gestión coordinada",
  },
  {
    value: 50,
    suffix: "+",
    label: "Restaurantes asesorados",
    prefix: "",
    sublabel: "En toda Argentina",
  },
];

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section
      id="resultados"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-glow/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-accent-glow font-semibold text-sm tracking-wider uppercase">
            Resultados
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Números que{" "}
            <span className="text-accent-glow">hablan por sí solos</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Cada dato respalda mi compromiso con la excelencia operativa y el
            crecimiento real de los negocios con los que trabajo.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 sm:p-8 text-center hover:border-accent-glow/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-glow/5">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-accent-glow transition-colors duration-300">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-white/70 text-sm sm:text-base font-medium mb-1">
                  {stat.label}
                </p>
                <p className="text-accent-glow/60 text-xs sm:text-sm">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
