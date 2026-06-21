"use client";

import { motion } from "framer-motion";

const PASOS = [
  {
    num: 1,
    pct: 20,
    titulo: "Diagnóstico gratuito",
    desc: "Analizamos el perfil migratorio de tus padres, identificamos riesgos y definimos si el caso es viable. Sin costo, sin compromiso.",
  },
  {
    num: 2,
    pct: 40,
    titulo: "Preparación documental",
    desc: "Armamos el expediente completo: carta de invitación, solvencia económica, vínculos familiares y todo lo que la Embajada necesita ver.",
  },
  {
    num: 3,
    pct: 60,
    titulo: "Simulacro de entrevista",
    desc: "Preparamos a tus padres para el día D. Practicamos las preguntas más frecuentes del cónsul en su idioma, sin estrés.",
  },
  {
    num: 4,
    pct: 80,
    titulo: "Acompañamiento el día de la cita",
    desc: "Estamos disponibles antes, durante y después de la entrevista para resolver cualquier imprevisto en tiempo real.",
  },
  {
    num: 5,
    pct: 100,
    titulo: "Visa aprobada y reunificación",
    desc: "Tus padres viajan. Tú descansas. Nosotros celebramos contigo. Eso es lo que hacemos hace más de 10 años.",
  },
];

export default function Metodologia() {
  return (
    <section className="py-24 bg-[#07101f]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Nuestro método
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Así llevamos tu caso al{" "}
            <span className="text-gold">100%</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Un proceso estructurado, probado con más de 1.000 familias. Sin improvisaciones.
          </p>
        </div>

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 md:left-1/2" />

          <div className="space-y-12">
            {PASOS.map((paso, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" as const } }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot en la línea */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-2 border-[#07101f] z-10 mt-1" />

                {/* Contenido */}
                <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors">
                    {/* Progress bar */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gold font-bold text-xs uppercase tracking-widest">
                        Paso {paso.num}
                      </span>
                      <span className="text-gold font-extrabold text-lg">{paso.pct}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${paso.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
                        className="bg-gold h-1.5 rounded-full"
                      />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{paso.titulo}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{paso.desc}</p>
                  </div>
                </div>

                {/* Spacer lado opuesto */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#agendar" className="cta-btn px-10 py-4 rounded-xl text-base">
            Quiero empezar el proceso
          </a>
        </motion.div>
      </div>
    </section>
  );
}
