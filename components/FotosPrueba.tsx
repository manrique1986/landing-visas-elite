"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function FotosPrueba() {
  return (
    <section className="bg-navy py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-gold text-sm font-semibold uppercase tracking-widest mb-10"
        >
          Resultados que se ven y se sienten
        </motion.p>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4"
        >

          {/* 3 fotos retrato en columnas iguales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Embajada */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/embajada.jpeg"
                alt="Familia en la Embajada de EE.UU."
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-1.5">
                  <svg className="w-3 h-3 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Visa aprobada
                </span>
                <p className="text-white text-sm font-medium">En la Embajada de EE.UU., Bogotá</p>
              </div>
            </motion.div>

            {/* Oficina */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/oficina.png"
                alt="Catalina con cliente en oficina Visas Elite"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-gold/90 text-navy text-xs font-bold px-2.5 py-1.5 rounded-full mb-1.5">
                  Consulta personalizada
                </span>
                <p className="text-white text-sm font-medium">Atención directa con Catalina</p>
              </div>
            </motion.div>

            {/* Consulado */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/consulado.jpeg"
                alt="Simulacro de entrevista consular"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1.5 rounded-full mb-1.5">
                  Metodología Visas Elite
                </span>
                <p className="text-white text-sm font-medium">Simulacro de entrevista consular</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
