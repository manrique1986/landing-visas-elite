"use client";

// Agregá tus screenshots en public/screenshots/ con estos nombres
const SCREENSHOTS = [
  "/screenshots/ws1.png",
  "/screenshots/ws2.png",
  "/screenshots/ws3.png",
  "/screenshots/ws4.png",
];

// Duplicamos para el loop infinito
const ITEMS = [...SCREENSHOTS, ...SCREENSHOTS];

export default function Pruebas() {
  return (
    <section className="py-24 bg-navy overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-14 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Lo que dicen nuestras familias
        </h2>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Mensajes reales de clientes reales. Sin filtros.
        </p>
      </div>

      {/* Carrusel auto-scroll */}
      <div className="relative">
        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0d1b4b, transparent)" }} />
        {/* Fade derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0d1b4b, transparent)" }} />

        <div className="flex gap-4 carousel-track">
          {ITEMS.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-72 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <img
                src={src}
                alt={`Testimonio ${i + 1}`}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  // Placeholder si no existe la imagen aún
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
