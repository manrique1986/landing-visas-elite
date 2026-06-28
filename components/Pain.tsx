"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pains = [
  {
    emoji: "😰",
    title: "Que los rechacen por ir solos",
    text: "Tu papá o mamá en la ventanilla de la Embajada, nerviosos, sin saber qué responder. Ese momento define todo y tú estás a miles de kilómetros.",
  },
  {
    emoji: "📄",
    title: "Un perfil mal construido = negación",
    text: "La mayoría de rechazos en adultos mayores son por documentación incorrecta o un perfil que no convence al cónsul. No se improvisa.",
  },
  {
    emoji: "✈️",
    title: "Estar lejos y no poder ayudarlos",
    text: "Vives en EE.UU. y tus padres tienen que enfrentar la burocracia consular solos. Esa impotencia de no poder estar ahí es demasiado real.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Pain() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            ¿Cuál de estos miedos te quita el sueño?
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {pains.map((p) => (
            <motion.div
              key={p.title}
              variants={card}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm cursor-default"
            >
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="font-bold text-navy mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a href="https://catalinavisaselite.com/formulario-de-aplicacion" className="cta-btn glow-ring inline-block px-10 py-4 rounded-xl text-base">
            QUIERO AGENDAR UNA LLAMADA
          </a>
        </div>
      </div>
    </section>
  );
}
