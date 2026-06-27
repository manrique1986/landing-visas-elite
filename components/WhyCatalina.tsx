"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const credentials = [
  {
    icon: "🏆",
    title: "+10 años y +1.000 casos exitosos",
    text: "No aprende con tus padres. Ya lo ha hecho más de mil veces con familias como la tuya.",
  },
  {
    icon: "🎓",
    title: "Especialista en adulto mayor",
    text: "Sabe exactamente cómo preparar y acompañar a una persona mayor en cada etapa del proceso consular.",
  },
  {
    icon: "⭐",
    title: "Certificada por la Embajada Americana",
    text: "Conoce desde adentro lo que el cónsul evalúa y cómo presentar el mejor perfil posible.",
  },
  {
    icon: "🛡️",
    title: "Asistencia premium garantizada",
    text: "Brindamos un servicio de élite con acompañamiento presencial en cada momento del proceso. Tus padres nunca van solos.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const item = {
  hidden: { opacity: 0, x: -24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function WhyCatalina() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="por-que-catalina" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
            Por qué Visas Elite
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            No es una agencia más. Es el servicio premium que tus padres merecen.
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-5"
        >
          {credentials.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 hover:border-gold/40 hover:shadow-md transition-shadow cursor-default"
            >
              <div className="w-12 h-12 rounded-xl badge-gold flex items-center justify-center shrink-0 text-xl">
                {c.icon}
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a href="#agendar" className="cta-btn glow-ring inline-block px-10 py-4 rounded-xl text-base">
            QUIERO AGENDAR UNA LLAMADA
          </a>
        </div>
      </div>
    </section>
  );
}
