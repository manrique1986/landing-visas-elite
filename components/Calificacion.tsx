"use client";

import { motion } from "framer-motion";

const SI = [
  "Eres hijo/a colombiano/a con estatus migratorio legal en EE.UU.",
  "Tus padres nunca han tenido deportaciones ni órdenes de remoción",
  "Quieres un acompañamiento completo desde el primer documento hasta la entrevista",
  "Entiendes que un proceso bien hecho vale más que uno rápido",
  "Estás dispuesto/a a prepararte con tiempo y comprometerte con el proceso",
  "Buscas tranquilidad y claridad, no solo un trámite",
  "Quieres que alguien con experiencia real esté contigo en cada paso",
];

const NO = [
  "A tus padres los han deportado de EE.UU.",
  "Han intentado la visa más de 3 veces y se la han negado",
  "Tienen antecedentes penales en Colombia o en EE.UU.",
  "Buscan solo el papeleo sin preparación ni orientación",
  "No están dispuestos a dedicar tiempo a preparar la entrevista",
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Calificacion() {
  return (
    <section className="py-24 bg-[#07101f]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Antes de continuar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Este servicio{" "}
            <span className="text-gold">no es para todos</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Trabajamos con familias donde podemos garantizar un proceso serio y con
            alta probabilidad de éxito.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* SÍ */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="bg-white/5 border border-emerald-500/20 rounded-2xl p-8"
          >
            <h3 className="text-emerald-400 font-bold text-lg mb-6 flex items-center gap-2">
              <span className="text-2xl">✅</span> SÍ es para ti si…
            </h3>
            <ul className="space-y-4">
              {SI.map((item, i) => (
                <motion.li key={i} variants={fade} className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* NO */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="bg-white/5 border border-red-500/20 rounded-2xl p-8"
          >
            <h3 className="text-red-400 font-bold text-lg mb-6 flex items-center gap-2">
              <span className="text-2xl">❌</span> NO es para ti si…
            </h3>
            <ul className="space-y-4">
              {NO.map((item, i) => (
                <motion.li key={i} variants={fade} className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="text-center mt-12"
        >
          <a href="#agendar" className="cta-btn px-10 py-4 rounded-xl text-base">
            Quiero el diagnóstico gratuito
          </a>
        </motion.div>
      </div>
    </section>
  );
}
