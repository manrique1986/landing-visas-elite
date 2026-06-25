"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TESTIMONIOS = [
  {
    id: "1204031822",
    nombre: "Jessica Muriel",
    ciudad: "",
    resultado: "Visa aprobada en primera cita",
    descripcion: "En 20 días lista para la entrevista.",
  },
  {
    id: "1204031811",
    nombre: "Margarita Orozco",
    ciudad: "",
    resultado: "45 días de proceso",
    descripcion: "Después de dos negaciones. Con Catalina, aprobados.",
  },
  {
    id: "1204031791",
    nombre: "Alejandra Arboleada.",
    ciudad: "",
    resultado: "45 días de proceso",
    descripcion: "Primera vez que aplicaban. Proceso impecable desde el día 1.",
  },
  {
    id: "1204031794",
    nombre: "Steven Restrepo",
    ciudad: "",
    resultado: "Aprobados en 45 días",
    descripcion: "Vivía con el miedo de que los rechazaran. Catalina nos dio seguridad.",
  },
  {
    id: "1204031793",
    nombre: "Ana Narvaez",
    ciudad: "",
    resultado: "30 días de proceso",
    descripcion: "Logré lo que más quería",
  },
  {
    id: "1204031792",
    nombre: "Angela Angola",
    ciudad: "",
    resultado: "Proceso sin estrés ni sorpresas",
    descripcion: "Todo documentado, todo claro. Exactamente lo que necesitaba.",
  },
];

type Testimonio = typeof TESTIMONIOS[0];

function VideoCard({ t }: { t: Testimonio }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "9/16" }}>
        {playing ? (
          <iframe
            className="w-full h-full"
            src={`https://player.vimeo.com/video/${t.id}?autoplay=1&title=0&byline=0&portrait=0&controls=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-navy-gradient"
            onClick={() => setPlaying(true)}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gold/10 blur-3xl" />
            </div>
            <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
              <svg className="w-6 h-6 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="mt-4 text-slate-400 text-xs z-10">Ver testimonio</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-gold font-bold text-sm">{t.resultado}</p>
        <p className="text-slate-300 text-sm mt-1 leading-relaxed">{t.descripcion}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
          <span className="text-white font-semibold text-sm">{t.nombre}</span>
          <span className="text-slate-500 text-xs">{t.ciudad}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoTestimonios() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Resultados reales
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Familias que ya reunificaron
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Más de 1.000 historias como las tuyas. Escuchalas directamente de ellos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIOS.map((t, i) => (
            <VideoCard key={i} t={t} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#agendar" className="cta-btn px-10 py-4 rounded-xl text-base">
            Quiero el diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
