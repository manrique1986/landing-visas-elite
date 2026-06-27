"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="agendar" className="py-24 bg-navy-gradient relative overflow-hidden">

      {/* Subtle blob */}
      <div className="animate-blob absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-gold font-semibold uppercase tracking-widest text-sm mb-5"
        >
          Cupos limitados · Selección de casos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
        >
          ¿Cuánto más tiempo pueden esperar tus padres para verte?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-300 mb-10 max-w-xl mx-auto"
        >
          La sesión de diagnóstico es gratuita y sin compromiso. En 30 minutos sabes si el caso de tus padres es viable y qué necesitan para lograrlo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a
            href="https://wa.me/573000000000?text=Hola%20Catalina%2C%20quiero%20agendar%20mi%20diagnóstico%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn glow-ring inline-block px-12 py-5 rounded-xl text-lg mb-4"
          >
            QUIERO AGENDAR UNA LLAMADA
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="text-slate-400 text-sm mb-12"
        >
          Sin costo · Sin tarjeta · Te contactamos en menos de 24 h
        </motion.p>

        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="inline-flex items-center gap-4 card-dark rounded-2xl px-8 py-5 text-left"
        >
          <div className="w-12 h-12 rounded-full badge-gold flex items-center justify-center shrink-0 text-xl">
            🛡️
          </div>
          <div>
            <p className="text-white font-bold text-sm">Garantía de 8 semanas</p>
            <p className="text-slate-400 text-xs mt-0.5">
              Asistencia premium con resultado garantizado
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
