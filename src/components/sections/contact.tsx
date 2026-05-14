"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface FormErrors { nombre?: string; email?: string; telefono?: string; mensaje?: string; }

function validateForm(data: { nombre: string; email: string; mensaje: string }): FormErrors {
  const errors: FormErrors = {};
  if (!data.nombre.trim()) errors.nombre = "Ingresá tu nombre";
  if (!data.email.trim()) errors.email = "Ingresá tu email";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "El email no es válido";
  if (!data.mensaje.trim()) errors.mensaje = "Ingresá tu mensaje";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm({ nombre: form.nombre, email: form.email, mensaje: form.mensaje });
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al enviar");
      setSent(true);
      setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
      toast.success("¡Mensaje enviado! Te respondo a la brevedad.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al enviar el mensaje");
    } finally { setLoading(false); }
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/10 border border-lime/15 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime/60" />
            <span className="text-lime/80 font-semibold text-xs tracking-widest uppercase">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Agendá tu <span className="text-shimmer">consulta</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
            Completá el formulario y te contacto en menos de 24 horas. Sin compromiso, sin letra chica.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl p-10 text-center bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle className="w-16 h-16 text-lime mx-auto mb-4" />
                <h3 className="text-white text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-white/50 text-lg mb-6">Te respondo a la brevedad. Gracias por tu confianza.</p>
                <button onClick={() => setSent(false)} className="text-lime hover:text-lime-light transition-colors font-medium">Enviar otro mensaje</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl p-6 sm:p-8 space-y-5 bg-white/[0.03] border border-white/[0.06]" noValidate>
                {[
                  { id: "nombre", label: "Nombre *", type: "text", placeholder: "Tu nombre completo", required: true },
                  { id: "email", label: "Email *", type: "email", placeholder: "tu@email.com", required: true },
                  { id: "telefono", label: "Teléfono", type: "tel", placeholder: "+54 11 1234-5678", required: false },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-white/70 font-medium text-sm mb-2">{field.label}</label>
                    <input
                      type={field.type} id={field.id} name={field.id} value={form[field.id as keyof typeof form]}
                      onChange={handleChange} placeholder={field.placeholder}
                      className={`w-full px-4 py-3.5 bg-white/[0.04] border rounded-xl text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-lime/40 focus:border-lime/30 transition-all duration-300 ${
                        errors[field.id as keyof FormErrors] ? "border-red-500/40" : "border-white/[0.06]"
                      }`}
                    />
                    {errors[field.id as keyof FormErrors] && (
                      <p className="mt-1 text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors[field.id as keyof FormErrors]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label htmlFor="mensaje" className="block text-white/70 font-medium text-sm mb-2">Mensaje *</label>
                  <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} rows={4} placeholder="Contame sobre tu negocio y qué necesitás..."
                    className={`w-full px-4 py-3.5 bg-white/[0.04] border rounded-xl text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-lime/40 focus:border-lime/30 transition-all duration-300 resize-none ${
                      errors.mensaje ? "border-red-500/40" : "border-white/[0.06]"
                    }`}
                  />
                  {errors.mensaje && <p className="mt-1 text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.mensaje}</p>}
                </div>
                <button type="submit" disabled={loading}
                  className="group relative w-full py-4 bg-lime text-[#050505] font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-lime/20 transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 min-h-[52px] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? <><Loader2 className="w-5 h-5 animate-spin" />Enviando...</> : <><Send className="w-5 h-5" />Enviar mensaje</>}
                  </span>
                  <div className="absolute inset-0 bg-lime-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.06]">
              <h3 className="text-white font-bold text-xl mb-6">Otras formas de contactarme</h3>
              <div className="space-y-4">
                <a href="https://wa.me/5491112345678?text=Hola%20Javier%2C%20me%20interesa%20una%20consulta" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald/[0.06] border border-emerald/15 hover:bg-emerald/[0.1] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald/15 flex items-center justify-center group-hover:bg-emerald/25 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-emerald"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div><p className="text-white font-semibold text-sm">WhatsApp</p><p className="text-emerald text-sm">Escribime directamente</p></div>
                </a>
                <a href="https://instagram.com/javiermendieta" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-lime/[0.06] flex items-center justify-center group-hover:bg-lime/10 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-lime"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </div>
                  <div><p className="text-white font-semibold text-sm">Instagram</p><p className="text-white/40 text-sm">@javiermendieta</p></div>
                </a>
                <a href="https://linkedin.com/in/javiermendieta" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-lime/[0.06] flex items-center justify-center group-hover:bg-lime/10 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-lime"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </div>
                  <div><p className="text-white font-semibold text-sm">LinkedIn</p><p className="text-white/40 text-sm">/in/javiermendieta</p></div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.06]">
              <h3 className="text-white font-bold text-lg mb-4">¿Qué pasa después?</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Te contacto", desc: "En menos de 24 horas te escribo para coordinar una charla inicial." },
                  { step: "2", title: "Charla de diagnóstico", desc: "Conozco tu negocio y evalúo si mi sistema es para vos." },
                  { step: "3", title: "Plan de acción", desc: "Si tiene sentido, armo un plan a medida con objetivos claros." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-lime/[0.06] flex items-center justify-center flex-shrink-0">
                      <span className="text-lime font-bold text-sm">{item.step}</span>
                    </div>
                    <div><p className="text-white font-medium text-sm">{item.title}</p><p className="text-white/40 text-xs">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
