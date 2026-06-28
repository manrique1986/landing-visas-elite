"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    quote:
      "Mis papás llevaban 30 años intentándolo y siempre les negaban. Con Catalina lo lograron en el primer intento. El nivel de acompañamiento y atención fue impresionante.",
    name: "Margarita R.",
    location: "Miami, FL",
  },
  {
    stars: 5,
    quote:
      "Mi mamá tiene 72 años y estaba aterrada. El equipo de Visas Elite la preparó, la acompañó en todo momento y salió con la visa en mano. No tengo palabras.",
    name: "Carlos A.",
    location: "Houston, TX",
  },
  {
    stars: 5,
    quote:
      "Les habían negado antes. Catalina armó el perfil desde cero y los preparó psicológicamente. Los aprobaron. En tres semanas los abrazo por primera vez en años.",
    name: "Lorena M.",
    location: "New York, NY",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-navy-gradient">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
            Familias reales
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Más de 1.000 familias reunidas
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-14"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-dark rounded-2xl p-7 flex flex-col"
            >
              <div className="flex gap-0.5 text-gold text-lg mb-4">
                {"★".repeat(t.stars)}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full badge-gold flex items-center justify-center font-bold text-navy text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.location} · Visa aprobada ✅</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Intermediate CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a href="https://catalinavisaselite.com/formulario-de-aplicacion" className="cta-btn inline-block px-10 py-4 rounded-xl text-base">
            QUIERO AGENDAR UNA LLAMADA
          </a>
          <p className="text-slate-400 text-sm mt-3">Diagnóstico gratuito · Sin compromiso</p>
        </motion.div>
      </div>
    </section>
  );
}
