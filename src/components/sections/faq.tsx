"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "¿Cuánto tiempo tarda una auditoría operativa?", answer: "Una auditoría completa suele tomar entre 3 y 5 días de trabajo en el local. Después, en un plazo de 7 días entrego un informe detallado con todos los hallazgos y un plan de acción priorizado. No es un proceso invasivo: trabajo observando sin interrumpir la operación normal de tu negocio." },
  { question: "¿Trabajás con restaurantes de cualquier tamaño?", answer: "Sí, mi sistema está diseñado justamente para adaptarse a negocios de distintas escalas. Lo importante no es el tamaño del negocio, sino la voluntad de mejorar. Trabajé con emprendimientos que recién arrancan y con marcas consolidadas que buscan optimizar." },
  { question: "¿Qué incluye la consultoría gastronómica?", answer: "Incluye un diagnóstico completo, un plan estratégico a medida, implementación gradual de mejoras y seguimiento continuo. Trabajo sobre estructura de costos, menú, operación, personal, delivery y todo lo que impacte en la rentabilidad. Cada consultoría la diseño según las necesidades reales de tu negocio." },
  { question: "¿Cómo medís los resultados?", answer: "Trabajo con métricas concretas: reducción de costos operativos, mejora en tiempos de servicio, incremento en ticket promedio, mejor calificación en plataformas de delivery, disminución de mermas. Al inicio establecemos KPIs claros y los monitoreo durante todo el proceso." },
  { question: "¿Ofrecés seguimiento después de la consultoría?", answer: "Sí, el seguimiento es parte fundamental de mi método. No me voy después de entregar un informe. Acompaño la implementación, hago revisiones periódicas y ajustamos lo que sea necesario. También ofrezco planes de mantenimiento mensual para consultoría continua." },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-lime/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/10 border border-lime/15 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime/60" />
            <span className="text-lime/80 font-semibold text-xs tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Preguntas <span className="text-shimmer">frecuentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl px-6 bg-white/[0.02] border border-white/[0.04] data-[state=open]:border-lime/15 data-[state=open]:bg-white/[0.04] transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-white font-semibold text-base sm:text-lg hover:text-lime hover:no-underline py-5 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/45 text-sm sm:text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
