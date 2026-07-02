"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

function send(iframe: HTMLIFrameElement, method: string, value?: unknown) {
  const msg = value !== undefined
    ? JSON.stringify({ method, value })
    : JSON.stringify({ method });
  iframe.contentWindow?.postMessage(msg, "https://player.vimeo.com");
}

function VideoCard({ t }: { t: Testimonio }) {
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!playing) return;
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://player.vimeo.com") return;
      if (e.source !== iframeRef.current?.contentWindow) return;
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (data.event === "pause") setPaused(true);
        if (data.event === "play") setPaused(false);
      } catch { /* noop */ }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [playing]);

  function onLoad() {
    const f = iframeRef.current;
    if (!f) return;
    send(f, "addEventListener", "pause");
    send(f, "addEventListener", "play");
  }

  function togglePlay() {
    const f = iframeRef.current;
    if (!f) return;
    send(f, paused ? "play" : "pause");
    setPaused(p => !p);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "9/16" }}>
        {playing ? (
          <>
            <iframe
              ref={iframeRef}
              onLoad={onLoad}
              className="w-full h-full"
              src={`https://player.vimeo.com/video/${t.id}?autoplay=1&title=0&byline=0&portrait=0&controls=0&api=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <button
              onClick={togglePlay}
              className="absolute bottom-3 left-3 text-white hover:text-gold transition-colors z-10"
              aria-label={paused ? "Reproducir" : "Pausar"}
            >
              {paused ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              ) : (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6zm8-14v14h4V5z" /></svg>
              )}
            </button>
          </>
        ) : (
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setPlaying(true)}
          >
            {/* Poster: iframe en pausa muestra el thumbnail real del video */}
            <iframe
              className="w-full h-full pointer-events-none"
              src={`https://player.vimeo.com/video/${t.id}?autoplay=0&title=0&byline=0&portrait=0&controls=0&dnt=1`}
              allow="autoplay"
            />
            {/* Overlay con play button encima */}
            <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-4 text-white text-xs font-medium">Ver testimonio</p>
            </div>
          </div>
        )}
      </div>

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
    <section id="testimonios" className="py-24 bg-navy">
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
          <a href="https://catalinavisaselite.com/formulario-de-aplicacion" className="cta-btn px-10 py-4 rounded-xl text-base">
            QUIERO AGENDAR UNA LLAMADA
          </a>
        </div>
      </div>
    </section>
  );
}
