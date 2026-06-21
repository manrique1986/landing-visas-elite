"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TESTIMONIOS = [
  {
    id: "dQw4w9WgXcQ",
    nombre: "María Fernanda R.",
    ciudad: "Chicago, IL",
    resultado: "Visa aprobada en primera cita",
    descripcion: "Mamá de 68 años, sin inglés. En 6 semanas lista para la entrevista.",
  },
  {
    id: "dQw4w9WgXcQ",
    nombre: "Carlos A.",
    ciudad: "Miami, FL",
    resultado: "Padres llegaron en 90 días",
    descripcion: "Papás rechazados antes por cuenta propia. Con Catalina, aprobados.",
  },
  {
    id: "dQw4w9WgXcQ",
    nombre: "Juliana P.",
    ciudad: "New York, NY",
    resultado: "Visa 10 años para ambos padres",
    descripcion: "Primera vez que aplicaban. Proceso impecable desde el día 1.",
  },
  {
    id: "dQw4w9WgXcQ",
    nombre: "Andrés M.",
    ciudad: "Houston, TX",
    resultado: "Aprobados en 45 días",
    descripcion: "Vivía con el miedo de que los rechazaran. Catalina nos dio seguridad.",
  },
  {
    id: "dQw4w9WgXcQ",
    nombre: "Valentina C.",
    ciudad: "Los Angeles, CA",
    resultado: "Mamá vino al nacimiento de mi hijo",
    descripcion: "Logré lo que más quería: que mi mamá conociera a mi bebé.",
  },
  {
    id: "dQw4w9WgXcQ",
    nombre: "Diego H.",
    ciudad: "Atlanta, GA",
    resultado: "Proceso sin estrés ni sorpresas",
    descripcion: "Todo documentado, todo claro. Exactamente lo que necesitaba.",
  },
];

function VideoCard({ t }: { t: typeof TESTIMONIOS[0] }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${t.id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
    >
      {/* Video area */}
      <div className="relative aspect-video bg-navy-900 cursor-pointer" onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${t.id}?autoplay=1&controls=1&rel=0`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <>
            <img src={thumb} alt={t.nombre} className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
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
