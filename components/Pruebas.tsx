"use client";

import { useRef } from "react";

const SCREENSHOTS = [
  "/screenshots/ws1.png",
  "/screenshots/ws2.png",
  "/screenshots/ws3.png",
  "/screenshots/ws4.png",
];

const ITEMS = [...SCREENSHOTS, ...SCREENSHOTS];

export default function Pruebas() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const amount = 440;
    trackRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-navy overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-14 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Lo que dicen nuestras familias
        </h2>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Mensajes reales de clientes reales.
        </p>
      </div>

      <div className="relative">
        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0d1b4b, transparent)" }} />
        {/* Fade derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0d1b4b, transparent)" }} />

        {/* Botón anterior */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center border border-gold/50 bg-navy/80 text-gold hover:bg-gold hover:text-navy transition-all shadow-lg"
          aria-label="Anterior"
        >
          ‹
        </button>

        {/* Botón siguiente */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center border border-gold/50 bg-navy/80 text-gold hover:bg-gold hover:text-navy transition-all shadow-lg"
          aria-label="Siguiente"
        >
          ›
        </button>

        {/* Track con scroll nativo */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ITEMS.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-105 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <img
                src={src}
                alt={`Testimonio ${i + 1}`}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.style.background = "rgba(255,255,255,0.05)";
                  (e.target as HTMLImageElement).parentElement!.style.height = "400px";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
