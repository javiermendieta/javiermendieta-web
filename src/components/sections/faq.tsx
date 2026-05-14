"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda una auditoría operativa?",
    answer:
      "Una auditoría completa suele tomar entre 3 y 5 días de trabajo en el local, dependiendo del tamaño del restaurante. Después, en un plazo de 7 días entrego un informe detallado con todos los hallazgos y un plan de acción priorizado. No es un proceso invasivo: trabajo observando sin interrumpir la operación normal de tu negocio.",
  },
  {
    question: "¿Trabajás con restaurantes de cualquier tamaño?",
    answer:
      "Sí, mi sistema está diseñado justamente para adaptarse a negocios de distintas escalas. Desde un restaurante de familia hasta una cadena con varios locales, la metodología se ajusta. Lo importante no es el tamaño del negocio, sino la voluntad de mejorar. Trabajé con emprendimientos que recién arrancan y con marcas consolidadas que buscan optimizar.",
  },
  {
    question: "¿Qué incluye la consultoría gastronómica?",
    answer:
      "Incluye un diagnóstico completo de tu operación, un plan estratégico a medida, implementación gradual de mejoras y seguimiento continuo. Trabajo sobre estructura de costos, menú, operación, personal, delivery y todo lo que impacte en la rentabilidad. No es un paquete cerrado: cada consultoría la diseño según las necesidades reales de tu negocio.",
  },
  {
    question: "¿Cómo medís los resultados?",
    answer:
      "Trabajo con métricas concretas: reducción de costos operativos, mejora en tiempos de servicio, incremento en ticket promedio, mejor calificación en plataformas de delivery, disminución de mermas, entre otros. Al inicio establecemos KPIs claros y los monitoreo durante todo el proceso para que puedas ver el impacto real de cada acción.",
  },
  {
    question: "¿Ofrecés seguimiento después de la consultoría?",
    answer:
      "Sí, el seguimiento es parte fundamental de mi método. No me voy después de entregar un informe. Acompaño la implementación de las mejoras, hago revisiones periódicas y ajustamos lo que sea necesario. El objetivo es que los cambios se sostengan en el tiempo y tu equipo los haga propios. También ofrezco planes de mantenimiento mensual para consultoría continua.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-glow/3 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-accent-glow font-semibold text-sm tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Preguntas{" "}
            <span className="text-accent-glow">frecuentes</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Las dudas más comunes sobre consultoría gastronómica, respondidas
            con claridad.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass rounded-xl border-none px-6 data-[state=open]:border-accent-glow/20 data-[state=open]:shadow-lg data-[state=open]:shadow-accent-glow/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-white font-semibold text-base sm:text-lg hover:text-accent-glow hover:no-underline py-5 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-sm sm:text-base leading-relaxed pb-5">
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
