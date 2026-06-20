"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Para qué sirve el diagnóstico gratuito?",
    a: "En 30 minutos evaluamos el caso de tus padres, qué arraigos tienen y qué tan viable es obtener la visa. Al terminar sabes exactamente a qué te enfrentas, sin compromiso.",
  },
  {
    q: "¿Y si ya les negaron la visa antes?",
    a: "Es uno de los casos que más manejamos. Un rechazo previo no cierra la puerta: con el perfil correcto y la preparación adecuada, muchas familias lo logran en el siguiente intento.",
  },
  {
    q: "¿Qué pasa si después del proceso no aprueban?",
    a: "Tenemos una garantía de 8 semanas. Solo tomamos casos donde creemos que podemos lograr un resultado positivo. Si acordamos trabajar juntos, el compromiso es total.",
  },
  {
    q: "¿Mis padres tienen que ir a Bogotá?",
    a: "Sí, la entrevista es en la Embajada en Bogotá. Pero no van solos: el equipo de Visas Elite los recibe, los acompaña en todo momento y brinda asistencia premium presencial durante todo el proceso.",
  },
  {
    q: "¿Este servicio es solo para colombianos?",
    a: "Este programa es exclusivo para hijos colombianos que viven en EE.UU. y quieren tramitar la visa de sus padres. Es el perfil en que Catalina se especializó y donde tiene los mejores resultados.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-navy">
            Antes de agendar, probablemente te preguntas…
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-navy hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-gold ml-4 shrink-0 text-lg"
                >
                  ↓
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" as const }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
